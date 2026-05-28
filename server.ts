import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

// Ensure data directory and default JSON file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(BOOKINGS_FILE)) {
  const initialBookings = [
    {
      id: 'b-991',
      name: 'Victoria Vance (Global Corporate)',
      email: 'vvance@globalcorp.com',
      phone: '+91 99333 44412',
      eventType: 'Corporate - Milestone Gala',
      preferredDate: '2026-09-18',
      guestCount: 120,
      message: 'Exclusive luxury culinary pairing session requested with special high-intensity acoustic presentations.',
      spaceId: 'nayra',
      spaceName: 'NAYRA',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    },
    {
      id: 'b-992',
      name: 'Priyesh Sen',
      email: 'priyesh@gmail.com',
      phone: '+91 98311 22330',
      eventType: 'Wedding Reception',
      preferredDate: '2026-11-20',
      guestCount: 400,
      message: 'Grand legacy floral arch, high-capacity stage configurations, customized Bengali royal buffet.',
      spaceId: 'nayra',
      spaceName: 'NAYRA',
      status: 'Contacted',
      createdAt: new Date().toISOString()
    },
    {
      id: 'b-993',
      name: 'Dr. Sourav Sen',
      email: 'sourav.sen@medassociation.org',
      phone: '+91 98300 11220',
      eventType: 'Corporate - Seminar',
      preferredDate: '2026-07-14',
      guestCount: 50,
      message: 'Technical seminar configuration with digital display systems and modular high clearance setup.',
      spaceId: 'nexus',
      spaceName: 'NEXUS',
      status: 'Pending',
      createdAt: new Date().toISOString()
    }
  ];
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(initialBookings, null, 2), 'utf-8');
}

// Request parser middlewares
app.use(express.json());

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date(), service: 'Northin Hotel Banquets service' });
});

// GET all bookings/inquiries
app.get('/api/bookings', (req, res) => {
  try {
    if (fs.existsSync(BOOKINGS_FILE)) {
      const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
      const bookings = JSON.parse(data);
      // Sort bookings by createdAt descending
      bookings.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      res.json(bookings);
    } else {
      res.json([]);
    }
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to access reservation logs.', details: err.message });
  }
});

// POST register booking inquiry
app.post('/api/bookings', (req, res) => {
  try {
    const { name, email, phone, eventType, preferredDate, guestCount, message, spaceId, spaceName } = req.body;
    
    if (!name || !email || !preferredDate) {
      return res.status(400).json({ error: 'Name, email, and preferred date are mandatory components.' });
    }

    const newBooking = {
      id: 'b-' + Math.floor(1000 + Math.random() * 9000),
      name,
      email,
      phone: phone || '',
      eventType: eventType || 'General Enquiry',
      preferredDate,
      guestCount: guestCount ? parseInt(guestCount, 10) : 100,
      message: message || '',
      spaceId: spaceId || 'general',
      spaceName: spaceName || 'General Enquiry',
      status: 'Pending',
      createdAt: new Date().toISOString()
    };

    let currentBookings = [];
    if (fs.existsSync(BOOKINGS_FILE)) {
      const fileContent = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
      currentBookings = JSON.parse(fileContent);
    }
    
    currentBookings.push(newBooking);
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(currentBookings, null, 2), 'utf-8');
    
    res.status(201).json(newBooking);
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to store booking reservation.', details: err.message });
  }
});

// Configure Vite integration or static file rendering
async function initServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    // Mount Vite Dev server middleware
    app.use(vite.middlewares);
    console.log('Vite development server middleware loaded.');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Serve static frontend assets
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Static production build routing activated.');
  }

  app.listen(PORT, () => {
    console.log(`Northin Hotel Banquets service actively running on port ${PORT}`);
  });
}

initServer().catch((err) => {
  console.error('Fatal backend service boot crash:', err);
});
