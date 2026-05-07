const Products = [
    {
        id: 1,
        name: "Nebula RGB Keyboard",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500&auto=format&fit=crop",
        description: "Mechanical switches with customizable per-key RGB lighting and a sleek aluminum frame.",
        category: "Peripherals",
        rating: 4.9,
        isNew: true
    },
    {
        id: 2,
        name: "Quantum Ultra Mouse",
        price: 85.00,
        image: "https://bloodygaming.pk/cdn/shop/files/a70-gaming-mouse-9481102.png?v=1761126343",
        description: "Ultra-lightweight 62g ergonomic design, 1000Hz polling rate, customizable RGB lighting.",
        category: "Accessories",
        rating: 4.7,
        isNew: false
    },
    {
        id: 3,
        name: "Titan 4K Monitor",
        price: 549.00,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop",
        description: "32-inch curved IPS panel with 144Hz refresh rate and HDR600 support.",
        category: "Display",
        rating: 4.8,
        isNew: true
    },
    {
        id: 4,
        name: "Apex Wireless Headset",
        price: 199.50,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
        description: "Spatial audio with 50mm neodymium drivers and noise-canceling microphone.",
        category: "Audio",
        rating: 4.6,
        isNew: false
    },
    {
        id: 5,
        name: "Stealth Gaming Chair",
        price: 320.00,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fce6c?q=80&w=500&auto=format&fit=crop",
        description: "Ergonomic design with 4D armrests and premium breathable leather.",
        category: "Furniture",
        rating: 4.5,
        isNew: false
    },
    {
        id: 6,
        name: "Nova RTX Case",
        price: 145.00,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=500&auto=format&fit=crop",
        description: "Tempered glass mid-tower case with optimized airflow and pre-installed fans.",
        category: "Hardware",
        rating: 4.7,
        isNew: true
    },
    {
        id: 7,
        name: "Vortex CPU Cooler",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=500&auto=format&fit=crop",
        description: "Liquid AIO cooler with infinite mirror RGB and low-noise pump technology.",
        category: "Hardware",
        rating: 4.4,
        isNew: false
    },
    {
        id: 8,
        name: "Shadow Stream Cam",
        price: 110.00,
        image: "https://images.unsplash.com/photo-1612448331650-ca6237a65b38?q=80&w=500&auto=format&fit=crop",
        description: "1080p 60fps streaming camera with built-in ring light and autofocus.",
        category: "Photography",
        rating: 4.5,
        isNew: true
    },
    {
        id: 9,
        name: "Neon Light Strips",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop",
        description: "App-controlled smart LED strips with music sync and voice control.",
        category: "Decor",
        rating: 4.3,
        isNew: false
    },
    {
        id: 10,
        name: "Onyx External SSD",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1531492746076-1a1bd9b29fc0?q=80&w=500&auto=format&fit=crop",
        description: "2TB NVMe portable drive with high-speed 2000MB/s transfer rates.",
        category: "Storage",
        rating: 4.9,
        isNew: false
    },
    {
        id: 11,
        name: "Zenith Pro Mic",
        price: 159.00,
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=500&auto=format&fit=crop",
        description: "Studio-grade XLR condenser microphone for professional recording.",
        category: "Audio",
        rating: 4.8,
        isNew: true
    },
    {
        id: 12,
        name: "Aero Gaming Mouse",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500&auto=format&fit=crop",
        description: "Symmetrical design with PTFE feet for smooth gliding performance.",
        category: "Peripherals",
        rating: 4.6,
        isNew: false
    },
    {
        id: 13,
        name: "Prism RGB Mat",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1616422108154-15f10b7849e7?q=80&w=500&auto=format&fit=crop",
        description: "Extended cloth surface with 360-degree light-strip edges.",
        category: "Accessories",
        rating: 4.4,
        isNew: false
    },
    {
        id: 14,
        name: "Hyperion RAM Kit",
        price: 115.00,
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=500&auto=format&fit=crop",
        description: "32GB (2x16GB) DDR5 6000MHz memory with brushed heat spreaders.",
        category: "Hardware",
        rating: 4.9,
        isNew: true
    },
    {
        id: 15,
        name: "Cortex VR Kit",
        price: 599.00,
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=500&auto=format&fit=crop",
        description: "Next-gen virtual reality headset with dual 4K OLED displays.",
        category: "Display",
        rating: 4.7,
        isNew: true
    },
    {
        id: 16,
        name: "Falcon GPU Support",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500&auto=format&fit=crop",
        description: "Universal graphics card sag bracket with adjustable height and ARGB.",
        category: "Hardware",
        rating: 4.2,
        isNew: false
    },
    {
        id: 17,
        name: "Z-Pillar Speakers",
        price: 89.00,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=500&auto=format&fit=crop",
        description: "Compact desktop speakers with high-fidelity sound and wooden finish.",
        category: "Audio",
        rating: 4.5,
        isNew: false
    },
    {
        id: 18,
        name: "Solaris Power Supply",
        price: 140.00,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=500&auto=format&fit=crop",
        description: "850W 80+ Gold fully modular PSU with zero-RPM fan mode.",
        category: "Hardware",
        rating: 4.8,
        isNew: true
    },
    {
        id: 19,
        name: "Lumina Desk Lamp",
        price: 49.00,
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=500&auto=format&fit=crop",
        description: "Smart desk lamp with adjustable color temperature and wireless charging base.",
        category: "Decor",
        rating: 4.6,
        isNew: true
    },
    {
        id: 20,
        name: "Ghost Keycap Set",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1618384800394-24c5bd7c2830?q=80&w=500&auto=format&fit=crop",
        description: "Double-shot PBT pudding keycaps for maximum RGB shine-through.",
        category: "Peripherals",
        rating: 4.7,
        isNew: false
    },
    {
        id: 21,
        name: "Arcane Console Stand",
        price: 40.00,
        image: "https://images.unsplash.com/photo-1605906302474-f60dfa05fb09?q=80&w=500&auto=format&fit=crop",
        description: "Vertical cooling stand with dual controller charging docks.",
        category: "Accessories",
        rating: 4.3,
        isNew: false
    },
    {
        id: 22,
        name: "Nexus Smart Hub",
        price: 120.00,
        image: "https://images.unsplash.com/photo-1558002038-103792e1972d?q=80&w=500&auto=format&fit=crop",
        description: "Central controller for all smart home devices with touch display.",
        category: "Decor",
        rating: 4.4,
        isNew: true
    },
    {
        id: 23,
        name: "Vector Flight Stick",
        price: 175.00,
        image: "https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?q=80&w=500&auto=format&fit=crop",
        description: "Precision joystick for flight simulators with integrated throttle.",
        category: "Peripherals",
        rating: 4.9,
        isNew: true
    },
    {
        id: 24,
        name: "Ether Laptop Stand",
        price: 35.00,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=500&auto=format&fit=crop",
        description: "Aluminum ergonomic stand for better cooling and viewing angles.",
        category: "Furniture",
        rating: 4.5,
        isNew: false
    },
    {
        id: 25,
        name: "Cipher Security Key",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=500&auto=format&fit=crop",
        description: "Hardware 2FA security key with NFC support for safe logins.",
        category: "Storage",
        rating: 4.8,
        isNew: false
    },
    {
        id: 26,
        name: "Rift Ultrawide Monitor",
        price: 899.00,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop",
        description: "49-inch super ultrawide with 240Hz refresh rate and G-Sync.",
        category: "Display",
        rating: 5.0,
        isNew: true
    },
    {
        id: 27,
        name: "Ozone Air Purifier",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1585771724684-252702b64428?q=80&w=500&auto=format&fit=crop",
        description: "HEPA filter purifier for a clean and dust-free gaming environment.",
        category: "Accessories",
        rating: 4.6,
        isNew: false
    },
    {
        id: 28,
        name: "Glitch Wall Panels",
        price: 210.00,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop",
        description: "Modular hexagonal light panels with millions of colors.",
        category: "Decor",
        rating: 4.7,
        isNew: true
    },
    {
        id: 29,
        name: "Tether Cable Sleeves",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500&auto=format&fit=crop",
        description: "Braided nylon cable management sleeves for a clean desk setup.",
        category: "Accessories",
        rating: 4.4,
        isNew: false
    },
    {
        id: 30,
        name: "Aura Bluetooth Earbuds",
        price: 125.00,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop",
        description: "Low-latency wireless earbuds with active noise cancellation.",
        category: "Audio",
        rating: 4.5,
        isNew: true
    },
    {
        id: 31,
        name: "Forge Motherboard",
        price: 299.00,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop",
        description: "ATX motherboard with Wi-Fi 7 and PCIe 5.0 support.",
        category: "Hardware",
        rating: 4.8,
        isNew: true
    },
    {
        id: 32,
        name: "Zen Footrest",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500&auto=format&fit=crop",
        description: "Memory foam ergonomic footrest for long gaming sessions.",
        category: "Furniture",
        rating: 4.3,
        isNew: false
    }
];

export default Products;