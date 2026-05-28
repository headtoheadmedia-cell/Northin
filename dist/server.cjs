var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_vite = require("vite");
var app = (0, import_express.default)();
var PORT = process.env.PORT || 3e3;
var DATA_DIR = import_path.default.join(process.cwd(), "data");
var BOOKINGS_FILE = import_path.default.join(DATA_DIR, "bookings.json");
if (!import_fs.default.existsSync(DATA_DIR)) {
  import_fs.default.mkdirSync(DATA_DIR, { recursive: true });
}
if (!import_fs.default.existsSync(BOOKINGS_FILE)) {
  const initialBookings = [
    {
      id: "b-991",
      name: "Victoria Vance (Global Corporate)",
      email: "vvance@globalcorp.com",
      phone: "+91 99333 44412",
      eventType: "Corporate - Milestone Gala",
      preferredDate: "2026-09-18",
      guestCount: 120,
      message: "Exclusive luxury culinary pairing session requested with special high-intensity acoustic presentations.",
      spaceId: "nayra",
      spaceName: "NAYRA",
      status: "Confirmed",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      id: "b-992",
      name: "Priyesh Sen",
      email: "priyesh@gmail.com",
      phone: "+91 98311 22330",
      eventType: "Wedding Reception",
      preferredDate: "2026-11-20",
      guestCount: 400,
      message: "Grand legacy floral arch, high-capacity stage configurations, customized Bengali royal buffet.",
      spaceId: "nayra",
      spaceName: "NAYRA",
      status: "Contacted",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    {
      id: "b-993",
      name: "Dr. Sourav Sen",
      email: "sourav.sen@medassociation.org",
      phone: "+91 98300 11220",
      eventType: "Corporate - Seminar",
      preferredDate: "2026-07-14",
      guestCount: 50,
      message: "Technical seminar configuration with digital display systems and modular high clearance setup.",
      spaceId: "nexus",
      spaceName: "NEXUS",
      status: "Pending",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  ];
  import_fs.default.writeFileSync(BOOKINGS_FILE, JSON.stringify(initialBookings, null, 2), "utf-8");
}
app.use(import_express.default.json());
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: /* @__PURE__ */ new Date(), service: "Northin Hotel Banquets service" });
});
app.get("/api/bookings", (req, res) => {
  try {
    if (import_fs.default.existsSync(BOOKINGS_FILE)) {
      const data = import_fs.default.readFileSync(BOOKINGS_FILE, "utf-8");
      const bookings = JSON.parse(data);
      bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      res.json(bookings);
    } else {
      res.json([]);
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to access reservation logs.", details: err.message });
  }
});
app.post("/api/bookings", (req, res) => {
  try {
    const { name, email, phone, eventType, preferredDate, guestCount, message, spaceId, spaceName } = req.body;
    if (!name || !email || !preferredDate) {
      return res.status(400).json({ error: "Name, email, and preferred date are mandatory components." });
    }
    const newBooking = {
      id: "b-" + Math.floor(1e3 + Math.random() * 9e3),
      name,
      email,
      phone: phone || "",
      eventType: eventType || "General Enquiry",
      preferredDate,
      guestCount: guestCount ? parseInt(guestCount, 10) : 100,
      message: message || "",
      spaceId: spaceId || "general",
      spaceName: spaceName || "General Enquiry",
      status: "Pending",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    let currentBookings = [];
    if (import_fs.default.existsSync(BOOKINGS_FILE)) {
      const fileContent = import_fs.default.readFileSync(BOOKINGS_FILE, "utf-8");
      currentBookings = JSON.parse(fileContent);
    }
    currentBookings.push(newBooking);
    import_fs.default.writeFileSync(BOOKINGS_FILE, JSON.stringify(currentBookings, null, 2), "utf-8");
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: "Failed to store booking reservation.", details: err.message });
  }
});
async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
    console.log("Vite development server middleware loaded.");
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
    console.log("Static production build routing activated.");
  }
  app.listen(PORT, () => {
    console.log(`Northin Hotel Banquets service actively running on port ${PORT}`);
  });
}
initServer().catch((err) => {
  console.error("Fatal backend service boot crash:", err);
});
//# sourceMappingURL=server.cjs.map
