/**
 * index-logic-en.js
 * Comprehensive client-side English logic, datasets, and calculators for HelyiOkos.
 */

// 1. Device Catalog data (English)
const devicesData = {
    mozgas: {
        title: "Motion & Presence Sensor",
        badge: "Motion Sensor",
        price: "from 16,900 HUF",
        image: "https://images.unsplash.com/photo-1753039495488-434a2fe53e41?q=80&w=1471&auto=format&fit=crop",
        content: `
            <p class="font-bold text-sky-400 text-base md:text-lg mb-4">The Invisible Guardian of Comfort & Security</p>
            <p class="mb-4 text-slate-300">I will install high-accuracy room presence and motion sensors so your home responds smoothly to your actions, simplifying your daily routine.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Intelligent Nightlight:</strong> Softly illuminates corridors and bathrooms at low, relaxing brightness if you wake up during the night, preserving your sleep cycle.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Energy Efficiency:</strong> Automatically turns off individual room lights when no one is left in the room, cutting down on unnecessary power waste.</div>
                </li>
            </ul>
        `
    },
    lampa: {
        title: "Premium Smart Bulb",
        badge: "Premium Smart Bulb",
        price: "9,900 HUF",
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
        content: `
            <p class="font-bold text-sky-400 text-base md:text-lg mb-4">Personalized Lighting with Zero In-Wall Re-Wiring</p>
            <p class="mb-4 text-slate-300">Instead of messy wall relays, I install advanced, completely safe, and wireless <strong class="text-white">Premium Smart Bulbs</strong> to tailor your home mood.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Dynamic Color & Brightness:</strong> Cozy warm amber tones for evening relaxation, and crisp neutralized white for productive daytime work.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Custom Scenes & Routines:</strong> Save your favorite settings to launch "Movie Night," "Reading," or "Dinner" moods with a single touch or voice click.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Presence Simulation:</strong> Randomly toggles bulbs with realistic patterns while you are away traveling, deterring uninvited guests.</div>
                </li>
            </ul>
        `
    },
    sonoff_kapcsolo: {
        title: "Wireless Wall Switch",
        badge: "Wireless Switch",
        price: "9,900 HUF",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
        content: `
            <p class="font-bold text-sky-450 text-base md:text-lg mb-4">Wireless Utility with Zero In-Wall Demolition</p>
            <p class="mb-4 text-slate-300">The <strong class="text-white">Wireless Wall Switch</strong> is a tiny, stylish button. It completely prevents messy plaster-breaking and 230V wiring hazards, allowing you to control smart lights from anywhere.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>3 Actions on 1 Switch:</strong> Triggers single click (e.g., toggle ceiling lights), double click (e.g., active mood light), and long press (e.g., turn off all home lights upon leaving).</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Place Anywhere:</strong> Adhere to headboards, side-tables, or next to existing light switches with ultra-slim double-sided tape. Just stick it and use it!</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Exceptional Battery Life:</strong> Completely wireless; the internal cell runs up to 2-3 years, and the app prompts you when it is time to slide in a new standard battery.</div>
                </li>
            </ul>
        `
    },
    szivargas: {
        title: "Water Leak Detector & Auto Shut-off",
        badge: "Water Protection",
        price: "Leak Sensor: 10,900 HUF | Valve Motor: 24,900 HUF",
        image: "https://plus.unsplash.com/premium_photo-1661878761783-1675425509b9?q=80&w=1533&auto=format&fit=crop",
        content: `
            <p class="font-bold text-sky-400 text-base md:text-lg mb-4">Immediate Automatic Defense Against Costly Plaster Damage & Pipe Bursts</p>
            <p class="mb-4 text-slate-300">Tiny wireless moisture pucks nestled beneath washers, dishwashers, and main pipe headers detect moisture drops instantly, triggering a robust ball valve motor to shut down the main supply in seconds.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Instant Acoustic & App Alerts:</strong> A single drop of fluid triggers local warnings and sends emergency notifications directly to your phone.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Non-Intrusive Shut-off Motor:</strong> Clamps directly onto standard lever ball-valves without cutting water lines or calling plumbers. Fast and clean setup.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Remote Isolation:</strong> Shut down or restore your entire residential plumbing grid with a single tap on your smartphone app while traveling.</div>
                </li>
            </ul>
        `
    },
    kaputelefon: {
        title: "Smart Video Intercom & Camera",
        badge: "Video Intercom",
        price: "from 74,900 HUF",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop",
        content: `
            <p class="mb-4 text-slate-300">I will install and configure a modern high-resolution video bell so you can verify visits in absolute comfort and safety.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Real-time Video Calls:</strong> Rings directly on your phone with live audio/video. Speak with courier drivers or friends as if you were right at home.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Security Archive:</strong> Saves snippets of missed rings or suspicious activity in front of your doorway to secure local storage.</div>
                </li>
            </ul>
        `
    },
    futes: {
        title: "Smart Radiator Valve",
        badge: "Smart Heating (radiator)",
        price: "23,900 HUF",
        image: "https://images.unsplash.com/photo-1636569608385-58efc32690ea?q=80&w=1470&auto=format&fit=crop",
        content: `
            <p class="font-bold text-sky-400 text-base md:text-lg mb-4">Precision Climate Zones Where and When You Want It</p>
            <p class="mb-4 text-slate-300">For radiator-heated homes, these premium radiator heads isolate individual rooms into autonomous climate zones, dramatically boosting comfort while slashing heating fees.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Room-Specific Calendars:</strong> Keep children's bedrooms warmer, but lower study and lounge targets automatically when empty. No more wasting energy on unoccupied spaces.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Open-Window Detection:</strong> Instantly suspends heating valves if a sudden temperature drop or window contact indicates active airing, protecting your wallet from heating the outdoors.</div>
                </li>
            </ul>
        `
    },
    klima: {
        title: "Smart A/C Controller",
        badge: "A/C Integration",
        price: "from 14,900 HUF",
        image: "https://images.unsplash.com/photo-1762341123870-d706f257a12e?q=80&w=1470&auto=format&fit=crop",
        content: `
            <p class="font-bold text-sky-400 text-base md:text-lg mb-4">A Perfect Cooling Welcome on the Scorching Days of Summer</p>
            <p class="mb-4 text-slate-300">Combine your new or existing split air conditioner with the central offline smart hub to unlock comfortable, structured climate cycles.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Pre-Cool on the Go:</strong> Trigger cooling on your way home via your mobile app so a fresh climate greets you instantly upon arrival.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Eco Automations:</strong> Shuts off A/C automatically if anyone opens a patio door or window, avoiding massive electric strain.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Unified Coordination:</strong> Keeps heating and cooling systems from fighting one another, ensuring balanced climate control.</div>
                </li>
            </ul>
        `
    },
    konnektor: {
        title: "Smart Outlet (4-pack)",
        badge: "Smart Outlets (4-pack)",
        price: "35,000 HUF",
        image: "https://www.viztisztitomarket.hu/fotky1924/fotos/_vyr_2129_-delight-smart-wifi-okos-konnektor-fogyasztasmerovel.jpg",
        content: `
            <p class="font-bold text-sky-400 text-base md:text-lg mb-4">Precise Consumption Metrics & Total Local Privacy Control</p>
            <p class="mb-4 text-slate-300">This bundle brings 4 pre-configured smart plugs programmed with open-source local firmware. Because they communicate purely over your secure home network, they are entirely immune to remote internet failures.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>100% Local Guard:</strong> Zero telemetry data leaks to external cloud arrays. Continues to trigger timers flawlessly even if your internet service is cut off.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Accurate Wattage Tracking:</strong> Monitor exact real-time and monthly energy draw of refrigerators, media center systems, washing machines, or computer clusters.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Overcharge Guard & Timers:</strong> Safely cuts power when battery charging is complete, or automatically turns off power-vampire standby devices overnight.</div>
                </li>
            </ul>
        `
    },
    nyitas: {
        title: "Door & Window Contact Sensor",
        badge: "Contact Sensor",
        price: "from 10,900 HUF",
        image: "https://images.euronics.hu/product_images/800x600/resize/10081502429214_zm2cgnqf.jpg?v=3",
        content: `
            <p class="font-bold text-sky-400 text-base md:text-lg mb-4">The Alert Eyes of Your Home, Guarding Every Access Point</p>
            <p class="mb-4 text-slate-300">I will install discreet magnetic switches that continuously audit whether doors, patio doors, or windows are securely closed.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Intrusion Monitoring:</strong> Instantly sends critical push notifications and triggers audible sirens if an entry point is breeched while the security mode is armed.</div>
                </li>
            </ul>
        `
    }
};

// 2. Case studies / Problem Solution data (English)
const problemsData = {
    doorbell: {
        title: "See who is at the door directly on my phone",
        icon: "smartphone",
        content: `
            <p class="font-bold text-sky-450 text-base md:text-lg mb-4">Instant Remote Video Links & Total Entryway Safety</p>
            <p class="mb-4 text-slate-300 font-semibold leading-relaxed">How I implement this in your home:</p>
            <p class="mb-4 text-slate-300">I install a modern <strong class="text-white">smart video intercom</strong> with neatly fitted, dust-free mounts—no damaging plaster or drilling channels behind your walls. It can run off batteries or adapt to standard chime voltage wiring.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Video Calls to Your Mobile:</strong> When somebody presses the bell, your phone rings immediately with live video. Converse with courier drivers or guests from anywhere globally.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Lock & Gate Actuation:</strong> If integrated with smart locks, let delivery couriers slide packages inside the porch or unlock family access while chatting in the app.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Motion Trigger Cameras:</strong> Scans for any lingering presence near the doorway and quietly logs video feeds straight to your private local media drive.</div>
                </li>
            </ul>
        `
    },
    water: {
        title: "Get notified on my phone if there's a water leak",
        icon: "droplets",
        content: `
            <p class="font-bold text-sky-450 text-base md:text-lg mb-4">Automatic Valve Isolation & Immediate Peace of Mind</p>
            <p class="mb-4 text-slate-300 font-semibold leading-relaxed">How I implement this in your home:</p>
            <p class="mb-4 text-slate-300">Tiny, subtle, wireless <strong class="text-white">leak pucks</strong> are placed at high-hazard spots: behind washing devices, near boilers, or under kitchen sink lines. We align these with an automated shut-off valve on the main supply line.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Sub-Second Isolation:</strong> If water is detected, the hub immediately commands the valve motor (operating completely without internet matches) to isolate main lines in under 10 seconds.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Clean Over-Pipe Valve Motor:</strong> Simply clamps over standard lever valves with zero pipe cutting or plumbing service invoices.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>App Warnings:</strong> Sounds physical alerts and triggers emergency pushes to your mobile device, pinpointing the exact wet zone.</div>
                </li>
            </ul>
        `
    },
    lighting: {
        title: "Automatic soft pathway lighting at night in the hallway",
        icon: "lightbulb",
        content: `
            <p class="font-bold text-sky-450 text-base md:text-lg mb-4">Soft Nocturnal Pathways That Never Blare or Excite Your Eyes</p>
            <p class="mb-4 text-slate-300 font-semibold leading-relaxed">How I implement this in your home:</p>
            <p class="mb-4 text-slate-300">Ultra-slim, battery-powered <strong class="text-white">motion sensors</strong> are placed neatly in corridors or stairwells. I pair them with color-adjustable <strong class="text-white">Premium Smart Bulbs</strong> in those passageways.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Light-Sensor Lockouts:</strong> Only executes during dark night hours. During sunny mornings or under active lighting cascades, the automatic loop remains gracefully dormant.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Vakításmentes (Dazzle-Free) Dimming:</strong> Between 10:00 PM and 6:00 AM, corridor lights ignite at only 8-10% warm golden intensity, guiding steps without disturbing your sleep state.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Gradual Fade-out:</strong> A minute after you exit, the bulbs fade out elegantly, ensuring zero energy waste.</div>
                </li>
            </ul>
        `
    },
    heating: {
        title: "View and control target temperature from anywhere",
        icon: "thermometer",
        content: `
            <p class="font-bold text-sky-450 text-base md:text-lg mb-4">Granular Room-by-Room Heating Profiles & Dramatic Energy Reduction</p>
            <p class="mb-4 text-slate-300 font-semibold leading-relaxed">How I implement this in your home:</p>
            <p class="mb-4 text-slate-300">Traditional radiator heads are replaced with digital <strong class="text-white">Smart Radiator Valves</strong>. For central boiler or floor assemblies, we wire in sleek, local smart wall thermostats (often coordinating with an electrician).</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Independent Climates:</strong> Set custom profiles per room. Bedrooms can stay snug while guest wings or remote rooms lower to save energy.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Smart Weekly Timelines:</strong> Thermostats automatically lower to 18°C while you are out, and warm up to a cozy 21-22°C just before you return, reducing bills by 15-30%.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Airing Protection:</strong> Coupled with window contact switches, valves close down instantly during window-airing intervals to prevent wasting heat on empty streets.</div>
                </li>
            </ul>
        `
    },
    iron: {
        title: "Forgot to unplug the iron? Turn it off from anywhere",
        icon: "zap",
        content: `
            <p class="font-bold text-sky-450 text-base md:text-lg mb-4">Total Isolation Security, Energy Metrics & Fire Risk Avoidance</p>
            <p class="mb-4 text-slate-300 font-semibold leading-relaxed">How I implement this in your home:</p>
            <p class="mb-4 text-slate-300">I supply clean, plug-and-play <strong class="text-white">smart energy monitoring plugs</strong>. No walls require cutting. I calibrate them to link into your high-speed offline local network.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Remote Check & Shutoff:</strong> Open your home companion panel from your office or car, verify active outlet draws, and cut current to irons or curling irons instantly.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Automatic Safety Killswitches:</strong> If an iron-plug draws constant power for over 45 minutes, the system autonomously cuts it off to head off potential disasters.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Power Consumption Mapping:</strong> Track precise historic watt graphs of heavy appliances to weed out hidden high-vampire standby devices.</div>
                </li>
            </ul>
        `
    },
    kids: {
        title: "Be notified that my child arrived home safely",
        icon: "shield-check",
        content: `
            <p class="font-bold text-sky-450 text-base md:text-lg mb-4">Reassuring Family Alerts Without Straining Chats or Calls</p>
            <p class="mb-4 text-slate-300 font-semibold leading-relaxed">How I implement this in your home:</p>
            <p class="mb-4 text-slate-300">A tiny, peel-and-stick wireless <strong class="text-white">magnetic contact switch</strong> is placed on your entrance frame, pairing safely to presence devices or the deadbolt core.</p>
            <ul class="space-y-3 text-slate-300 text-sm md:text-base">
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Instant Parental Confirmations:</strong> As your child unlocks and opens the front door within a logical after-school window, the hub fires a custom toast: "Peter has made it home securely!"</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>Biometric Core Mapping:</strong> If integrated with our fingerprint deadbolt, the system logs which family member accessed the doorway, initiating specific arrival scripts.</div>
                </li>
                <li class="flex gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">✓</span> 
                    <div><strong>100% Wireless Fit:</strong> Clean elements fit frames beautifully with zero dust, wall carving, or visible cords.</div>
                </li>
            </ul>
        `
    }
};

// 3. UI and Modal Handling Functions
window.openDeviceModal = function(key) {
    const data = devicesData[key];
    if (!data) return;

    const img = document.getElementById('modal-image');
    const badge = document.getElementById('modal-badge');
    const title = document.getElementById('modal-title');
    const price = document.getElementById('modal-price');
    const content = document.getElementById('modal-content');
    const modal = document.getElementById('device-modal');

    if (img) img.src = data.image;
    if (badge) badge.innerText = data.badge;
    if (title) title.innerText = data.title;
    if (price) price.innerText = data.price;
    if (content) content.innerHTML = data.content;

    if (modal) {
        modal.classList.remove('pointer-events-none', 'opacity-0');
        modal.classList.add('opacity-100');
        const dialog = modal.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-95');
            dialog.classList.add('scale-100');
        }
        document.body.style.overflow = 'hidden';
    }
};

window.closeDeviceModal = function() {
    const modal = document.getElementById('device-modal');
    if (modal) {
        modal.classList.add('pointer-events-none', 'opacity-0');
        modal.classList.remove('opacity-100');
        const dialog = modal.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-100');
            dialog.classList.add('scale-95');
        }
        document.body.style.overflow = '';
    }
};

window.openProblemModal = function(key) {
    const data = problemsData[key];
    if (!data) return;

    const titleEl = document.getElementById('problem-title');
    const contentEl = document.getElementById('problem-content');
    const iconContainer = document.getElementById('problem-icon-container');
    const modal = document.getElementById('problem-modal');

    if (titleEl) titleEl.innerText = data.title;
    if (contentEl) contentEl.innerHTML = data.content;

    // Dynamically update the modal icon using Lucide
    if (iconContainer) {
        const iconName = data.icon || 'sparkles';
        iconContainer.innerHTML = `<i data-lucide="${iconName}" class="w-6 h-6"></i>`;
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    if (modal) {
        modal.classList.remove('pointer-events-none', 'opacity-0');
        modal.classList.add('opacity-100');
        const dialog = modal.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-95');
            dialog.classList.add('scale-100');
        }
        document.body.style.overflow = 'hidden';
    }
};

window.closeProblemModal = function() {
    const modal = document.getElementById('problem-modal');
    if (modal) {
        modal.classList.add('pointer-events-none', 'opacity-0');
        modal.classList.remove('opacity-100');
        const dialog = modal.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-100');
            dialog.classList.add('scale-95');
        }
        document.body.style.overflow = '';
    }
};

// 4. Wizard Configurator Selections State and Functions
window.wizardCurrentStep = 1;

window.wizardSelections = {
    propertyType: 'flat', // 'flat' or 'house'
    rooms: 2,
    counts: {
        lights: 3,
        radiators: 2,
        shutters: 0,
        sensors: 2,
        climates: 0
    }
};

window.goPrevStep = function() {
    if (wizardCurrentStep > 1) {
        wizardCurrentStep--;
        updateWizardStepView();
    }
};

window.goNextStep = function() {
    if (wizardCurrentStep < 4) {
        wizardCurrentStep++;
        updateWizardStepView();
    }
};

function updateWizardStepView() {
    // Hide all steps
    for (let i = 1; i <= 4; i++) {
        const stepDiv = document.getElementById(`step-${i}`);
        if (stepDiv) stepDiv.classList.add('hidden');
    }
    // Show current step
    const currentStepDiv = document.getElementById(`step-${wizardCurrentStep}`);
    if (currentStepDiv) currentStepDiv.classList.remove('hidden');

    updateWizardProgressBar();
    updateWizardButtons();
}

window.updateWizardProgressBar = function() {
    const progressFill = document.getElementById('step-progress-fill');
    const stepCountLabel = document.getElementById('wizard-step-count-label');
    if (progressFill) {
        const percentage = ((wizardCurrentStep - 1) / 3) * 100;
        progressFill.style.width = `${percentage}%`;
    }
    if (stepCountLabel) {
        stepCountLabel.innerText = `Step ${wizardCurrentStep} of 4`;
    }

    // Highlighting circular numbers
    for (let i = 1; i <= 4; i++) {
        const stepIndicator = document.getElementById(`indicator-step-${i}`);
        if (stepIndicator) {
            if (i <= wizardCurrentStep) {
                stepIndicator.classList.remove('bg-slate-900', 'border-slate-800', 'text-slate-500');
                stepIndicator.classList.add('bg-sky-500', 'border-sky-500', 'text-slate-950');
            } else {
                stepIndicator.classList.remove('bg-sky-500', 'border-sky-500', 'text-slate-950');
                stepIndicator.classList.add('bg-slate-900', 'border-slate-800', 'text-slate-500');
            }
        }
    }
};

window.updateWizardButtons = function() {
    const prevBtn = document.getElementById('prev-step-btn');
    const nextBtn = document.getElementById('next-step-btn');
    const submitBtn = document.getElementById('wizard-final-submit-btn');

    if (prevBtn) {
        if (wizardCurrentStep === 1) {
            prevBtn.classList.add('opacity-0', 'pointer-events-none');
        } else {
            prevBtn.classList.remove('opacity-0', 'pointer-events-none');
        }
    }

    if (nextBtn) {
        if (wizardCurrentStep === 4) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    }

    if (submitBtn) {
        if (wizardCurrentStep === 4) {
            submitBtn.classList.remove('hidden');
        } else {
            submitBtn.classList.add('hidden');
        }
    }
};

window.updatePropertySelection = function(val) {
    wizardSelections.propertyType = val;
    // Default appropriate quantities when changing property type
    if (val === 'house') {
        if (wizardSelections.rooms < 3) {
            wizardSelections.rooms = 4;
            const rRadio = document.querySelector(`input[name="rooms_count"][value="4"]`);
            if (rRadio) rRadio.checked = true;
        }
    }
    syncEstimatesBasedOnRooms();
    recalculateWizardBudget();
};

window.updateRoomsSelection = function(val) {
    wizardSelections.rooms = parseInt(val, 10);
    syncEstimatesBasedOnRooms();
    recalculateWizardBudget();
};

function syncEstimatesBasedOnRooms() {
    const rooms = wizardSelections.rooms;
    // Automatic heuristics to prefill real quantities
    if (rooms === 1) {
        wizardSelections.counts.lights = 3;
        wizardSelections.counts.radiators = 1;
        wizardSelections.counts.shutters = 0;
        wizardSelections.counts.sensors = 2;
        wizardSelections.counts.climates = 0;
    } else if (rooms === 2) {
        wizardSelections.counts.lights = 6;
        wizardSelections.counts.radiators = 2;
        wizardSelections.counts.shutters = 0;
        wizardSelections.counts.sensors = 3;
        wizardSelections.counts.climates = 0;
    } else if (rooms === 3) {
        wizardSelections.counts.lights = 9;
        wizardSelections.counts.radiators = 3;
        wizardSelections.counts.shutters = 0;
        wizardSelections.counts.sensors = 5;
        wizardSelections.counts.climates = 0;
    } else {
        wizardSelections.counts.lights = 12;
        wizardSelections.counts.radiators = 4;
        wizardSelections.counts.shutters = 0;
        wizardSelections.counts.sensors = 7;
        wizardSelections.counts.climates = 0;
    }

    // Refresh UI elements
    ['lights', 'radiators', 'shutters', 'sensors', 'climates'].forEach(type => {
        const el = document.getElementById(`count-${type}`);
        if (el) el.innerText = wizardSelections.counts[type];
    });
}

window.adjustCount = function(type, direction) {
    let current = wizardSelections.counts[type] || 0;
    if (direction === 'up') {
        current++;
    } else if (direction === 'down' && current > 0) {
        current--;
    }
    wizardSelections.counts[type] = current;

    const el = document.getElementById(`count-${type}`);
    if (el) el.innerText = current;

    recalculateWizardBudget();
};

window.recalculateWizardBudget = function() {
    let price = 100000; // Base: Fixed 100,000 HUF for central network + programming
    let itemsCount = 0;

    // Check additions from step 3 checkboxes or step 2 values
    // Step 2 quantities:
    const lights = wizardSelections.counts.lights;
    const radiators = wizardSelections.counts.radiators;
    const shutters = wizardSelections.counts.shutters;
    const sensors = wizardSelections.counts.sensors;
    const climates = wizardSelections.counts.climates;

    // Read toggles from step 3 feature choices
    const lighting_basic = document.querySelector('input[name="desired_functions"][value="lighting_basic"]')?.checked;
    const lighting_pro = document.querySelector('input[name="desired_functions"][value="lighting_pro"]')?.checked;
    const heating_basic = document.querySelector('input[name="desired_functions"][value="heating_basic"]')?.checked;
    const heating_pro = document.querySelector('input[name="desired_functions"][value="heating_pro"]')?.checked;
    const climate = document.querySelector('input[name="desired_functions"][value="climate"]')?.checked;
    const shuttersChecked = document.querySelector('input[name="desired_functions"][value="shutters"]')?.checked;
    const lock = document.querySelector('input[name="desired_functions"][value="lock"]')?.checked;
    const sensorsChecked = document.querySelector('input[name="desired_functions"][value="sensors"]')?.checked;
    const flood = document.querySelector('input[name="desired_functions"][value="leak"]')?.checked;
    const pet = document.querySelector('input[name="desired_functions"][value="feeder"]')?.checked;
    const gate = document.querySelector('input[name="desired_functions"][value="gate"]')?.checked;

    if (lighting_basic) {
        price += lights * 9900; // 9,900 HUF per smart bulb setup
        itemsCount += lights;
    }
    if (lighting_pro) {
        price += lights * 12500; // 12,500 HUF hidden smart relay + install support
        itemsCount += lights;
    }
    if (heating_basic) {
        price += radiators * 23900; // 23,900 HUF smart valves
        itemsCount += radiators;
    }
    if (heating_pro) {
        price += 39900; // central thermostat kit pricing indicator
        itemsCount += 1;
    }
    if (climate) {
        price += climates * 14900; // 14,900 HUF per indoor unit
        itemsCount += climates;
    }
    if (shuttersChecked) {
        price += shutters * 19900; // 19,900 HUF per blind relay
        itemsCount += shutters;
    }
    if (lock) {
        price += 139000; // Biometric Smart lock setup complete hardware + offline programming package
        itemsCount += 1;
    }
    if (sensorsChecked) {
        price += sensors * 14900; // Heuristic average representing motion sensors + door contacts
        itemsCount += sensors;
    }
    if (flood) {
        price += 49000; // Protection package indicator (wet-switches + main valve actuator auto-kill)
        itemsCount += 2;
    }
    if (pet) {
        price += 349000; // feeder kit
        itemsCount += 1;
    }
    if (gate) {
        price += 28900; // Smart dry-contact garage/gate automation module installed
        itemsCount += 1;
    }

    // House markup for structural mesh nodes
    if (wizardSelections.propertyType === 'house') {
        price += 30000; // Router repeater and range antenna upgrades
    }

    // Update estimated gross value on Wizard pages
    const totals = document.querySelectorAll('.wizard-total');
    totals.forEach(el => {
        el.innerText = `${formatPrice(price)} HUF`;
    });

    const itemsCountEl = document.getElementById('wizard-items-count');
    if (itemsCountEl) {
        itemsCountEl.innerText = `${itemsCount} smart modules`;
    }

    return { total: price, count: itemsCount };
};

// 5. Modals Controls
window.openConfiguratorModal = function() {
    const modal = document.getElementById('configurator-modal');
    if (modal) {
        modal.classList.remove('pointer-events-none', 'opacity-0');
        modal.classList.add('opacity-100');
        const dialog = modal.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-95');
            dialog.classList.add('scale-100');
        }
        document.body.style.overflow = 'hidden';
    }
};

window.closeConfiguratorModal = function() {
    const modal = document.getElementById('configurator-modal');
    if (modal) {
        modal.classList.add('pointer-events-none', 'opacity-0');
        modal.classList.remove('opacity-100');
        const dialog = modal.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-100');
            dialog.classList.add('scale-95');
        }
        document.body.style.overflow = '';
    }
};

window.formatPrice = function(val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

// 6. Submit Custom Config details to API Endpoint
window.sendCustomConfiguration = function() {
    const name = document.getElementById('form-name')?.value;
    const phone = document.getElementById('form-phone')?.value;
    const email = document.getElementById('form-email')?.value;
    const address = document.getElementById('form-address')?.value;

    if (!name || !phone || !email || !address) {
        alert("Please fill in all mandatory fields flagged with * asterisks!");
        return;
    }

    const { total, count } = recalculateWizardBudget();

    const lighting_basic = document.querySelector('input[name="desired_functions"][value="lighting_basic"]')?.checked;
    const lighting_pro = document.querySelector('input[name="desired_functions"][value="lighting_pro"]')?.checked;
    const heating_basic = document.querySelector('input[name="desired_functions"][value="heating_basic"]')?.checked;
    const heating_pro = document.querySelector('input[name="desired_functions"][value="heating_pro"]')?.checked;
    const climate = document.querySelector('input[name="desired_functions"][value="climate"]')?.checked;
    const shuttersChecked = document.querySelector('input[name="desired_functions"][value="shutters"]')?.checked;
    const lock = document.querySelector('input[name="desired_functions"][value="lock"]')?.checked;
    const sensorsChecked = document.querySelector('input[name="desired_functions"][value="sensors"]')?.checked;
    const flood = document.querySelector('input[name="desired_functions"][value="leak"]')?.checked;
    const pet = document.querySelector('input[name="desired_functions"][value="feeder"]')?.checked;
    const gate = document.querySelector('input[name="desired_functions"][value="gate"]')?.checked;

    // Compile active functions list
    let basicFunctions = [];
    let proFunctions = [];
    let funcs = [];
    
    if (lighting_basic) {
        basicFunctions.push("Smart Bulbs & Switches (Clean)");
        funcs.push("Smart Bulbs & Switches (Clean)");
    }
    if (lighting_pro) {
        proFunctions.push("In-Wall Smart Relays (230V)");
        funcs.push("In-Wall Smart Relays (230V)");
    }
    if (heating_basic) {
        basicFunctions.push("Zoned Radiator Valves (Clean)");
        funcs.push("Zoned Radiator Valves (Clean)");
    }
    if (heating_pro) {
        proFunctions.push("Central Boiler/Floor Thermostats (230V)");
        funcs.push("Central Boiler/Floor Thermostats");
    }
    if (climate) {
        basicFunctions.push("Smart A/C Controllers");
        funcs.push("Smart A/C Controllers");
    }
    if (shuttersChecked) {
        basicFunctions.push("Smart Roller Blinds");
        funcs.push("Smart Roller Blinds");
    }
    if (lock) {
        basicFunctions.push("Biometric Fingerprint Lock");
        funcs.push("Biometric Fingerprint Lock");
    }
    if (sensorsChecked) {
        basicFunctions.push("Motion & Window Contacts");
        funcs.push("Motion & Window Contacts");
    }
    if (flood) {
        basicFunctions.push("Flood Protection Lockout");
        funcs.push("Flood Protection Lockout");
    }
    if (pet) {
        basicFunctions.push("Intelligent Pet Feeder Bundle");
        funcs.push("Intelligent Pet Feeder Bundle");
    }
    if (gate) {
        proFunctions.push("Garage & Main Gate Controller (230V)");
        funcs.push("Garage & Main Gate Controller");
    }

    // Gather quantities
    const qtys = `- Smart Bulbs/Switches: ${wizardSelections.counts.lights} pcs\n- Heating Radiator Valves: ${wizardSelections.counts.radiators} pcs\n- Roller Blind Motors: ${wizardSelections.counts.shutters} pcs\n- Motion & Multi Sensors: ${wizardSelections.counts.sensors} pcs\n- Indoor Split A/C Modules: ${wizardSelections.counts.climates} pcs`;

    const offerId = `HO-${Math.floor(1000 + Math.random() * 9000)}`;
    window.lastCompiledTrackingId = offerId;

    const emailBody = `Name: ${name}
Phone: ${phone}
Email: ${email}
Installation Location: ${address}

Estimated Price: ${formatPrice(total)} HUF (${count} modules)
Property Category: ${wizardSelections.propertyType === 'house' ? 'Detached House' : 'Condo/Apartment'} (${wizardSelections.rooms} rooms)

Selected Features:
${funcs.map(f => `  * ${f}`).join('\n')}

Device Configurations:
${qtys}

Reference Offer Tracking Code: #${offerId}`;

    // Update text pre tags on Success modal
    const copyToPre = document.getElementById('success-copy-text');
    if (copyToPre) {
        copyToPre.innerText = emailBody;
    }

    const offerSpan = document.getElementById('success-offer-id');
    if (offerSpan) {
        offerSpan.innerText = `#${offerId}`;
    }

    const messengerIdSpan = document.getElementById('messenger-notice-id');
    if (messengerIdSpan) {
        messengerIdSpan.innerText = `#${offerId}`;
    }

    const nameSpan = document.getElementById('success-friendly-name');
    if (nameSpan) {
        nameSpan.innerText = name;
    }

    const submitBtn = document.getElementById('wizard-final-submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Submitting offer draft...";
    }

    const propTypeEn = wizardSelections.propertyType === 'house' ? 'Detached House (EN)' : 'Condo/Apartment (EN)';
    let goalEn = "Security & Protection";
    if (wizardSelections.goal === "comfort") goalEn = "Premium Comfort & Automation";
    else if (wizardSelections.goal === "savings") goalEn = "Utility Savings & Green Energy";
    else if (wizardSelections.goal === "control") goalEn = "Local Offline Hub & Server";

    // Submit to active Google Web App Endpoint via AJAX
    fetch("https://script.google.com/macros/s/AKfycbwIu3kcAPtTSZjQ9o8KztX9z8bXHQsOT85BaEyUhMQxGsYgjVDl1DscToXp8wF863EP/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
            trackingId: offerId,
            name: name,
            phone: phone,
            email: email,
            address: address,
            total: total,
            propertyType: propTypeEn,
            rooms: wizardSelections.rooms,
            goal: goalEn,
            basicFunctions: basicFunctions,
            proFunctions: proFunctions,
            systemName: "HelyiOkos Custom System (EN)",
            deviceCount: count,
            lang: "en"
        })
    })
    .then(() => {
        console.log("Offer submitted to cloud database successfully.");
        postSubmitActions(email, phone, name, address, offerId, emailBody);
    })
    .catch(err => {
        console.error("AJAX error during dispatch:", err);
        postSubmitActions(email, phone, name, address, offerId, emailBody);
    });
};

function postSubmitActions(email, phone, name, address, trackingId, body) {
    // Reveal Success modal, close wizard modal
    closeConfiguratorModal();
    const successModal = document.getElementById('success-modal');
    if (successModal) {
        successModal.classList.remove('pointer-events-none', 'opacity-0');
        successModal.classList.add('opacity-100');
        const dialog = successModal.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-95');
            dialog.classList.add('scale-100');
        }
    }

    window.lastCompiledBody = body;

    // Refresh Calendly widgets on success overlay with pre-filled inputs
    updateCalendlyInlineWidget(email, phone, name, address, trackingId);

    // Reactivate wizard submit button
    const submitBtn = document.getElementById('wizard-final-submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Free Survey & Quote Invitation";
    }
}

window.closeSuccessModal = function() {
    const successModal = document.getElementById('success-modal');
    if (successModal) {
        successModal.classList.add('pointer-events-none', 'opacity-0');
        successModal.classList.remove('opacity-100');
        const dialog = successModal.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-100');
            dialog.classList.add('scale-95');
        }
        document.body.style.overflow = '';
    }
};

window.getCalendlyUrl = function(email, phone, name, address, trackingId) {
    const baseUrl = "https://calendly.com/nagylevente-tech/felmeres";
    const params = new URLSearchParams();
    params.append('background_color', 'ffffff');
    params.append('text_color', '1a1a1a');
    params.append('primary_color', '0052cc');
    params.append('locale', 'en');
    
    if (name) params.append('name', name);
    if (email) params.append('email', email);
    if (phone) {
        let cleaned = phone.trim().replace(/[\s\-\(\)]/g, '');
        let formattedPhone = phone;
        if (cleaned.startsWith('+')) {
            formattedPhone = cleaned;
        } else if (cleaned.startsWith('0036')) {
            formattedPhone = '+' + cleaned.substring(2);
        } else if (cleaned.startsWith('06')) {
            formattedPhone = '+36' + cleaned.substring(2);
        } else if (cleaned.startsWith('36')) {
            formattedPhone = '+' + cleaned;
        } else if (/^[12357]0/.test(cleaned)) {
            formattedPhone = '+36' + cleaned;
        }
        params.append('a1', formattedPhone);
    }
    if (address) params.append('a2', address);
    if (trackingId) {
        const cleanTrackingId = trackingId.replace('#', '');
        params.append('a3', cleanTrackingId);
    }
    
    return `${baseUrl}?${params.toString()}`;
};

window.updateCalendlyInlineWidget = function(email, phone, name, address, trackingId) {
    const wrapper = document.getElementById('calendly-success-inline-container');
    if (wrapper) {
        const prefilledUrl = getCalendlyUrl(email, phone, name, address, trackingId);
        wrapper.innerHTML = `<iframe src="${prefilledUrl}" width="100%" height="100%" frameborder="0" style="min-height: 480px; border-radius: 12px;"></iframe>`;
    }
};

window.openCalendlyPopup = function() {
    const name = document.getElementById('form-name')?.value || '';
    const email = document.getElementById('form-email')?.value || '';
    const phone = document.getElementById('form-phone')?.value || '';
    const address = document.getElementById('form-address')?.value || '';
    const trackingId = window.lastCompiledTrackingId || '';
    const fullUrl = getCalendlyUrl(email, phone, name, address, trackingId);

    if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
        Calendly.initPopupWidget({ url: fullUrl });
    } else {
        window.open(fullUrl, '_blank');
    }
};

window.openCalendlyPopupFull = function() {
    const name = document.getElementById('form-name')?.value || '';
    const email = document.getElementById('form-email')?.value || '';
    const phone = document.getElementById('form-phone')?.value || '';
    const address = document.getElementById('form-address')?.value || '';
    const trackingId = window.lastCompiledTrackingId || '';
    const fullUrl = getCalendlyUrl(email, phone, name, address, trackingId);
    window.open(fullUrl, '_blank');
};

window.copyToClipboard = function() {
    const textToCopy = document.getElementById('success-copy-text')?.innerText || '';
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            const copyBtn = document.getElementById('copy-text-btn');
            if (copyBtn) {
                const origHtml = copyBtn.innerHTML;
                copyBtn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> Summary Copied!`;
                if (typeof lucide !== 'undefined') lucide.createIcons();
                setTimeout(() => {
                    copyBtn.innerHTML = origHtml;
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                }, 3000);
            }
        })
        .catch(err => {
            console.error("Clipboard copy failed:", err);
        });
};

window.openMessengerNotice = function() {
    const overlay = document.getElementById('messenger-notice-overlay');
    if (overlay) {
        overlay.classList.remove('pointer-events-none', 'opacity-0');
        overlay.classList.add('opacity-100');
        const dialog = overlay.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-95');
            dialog.classList.add('scale-100');
        }
    }
};

window.closeMessengerNotice = function() {
    const overlay = document.getElementById('messenger-notice-overlay');
    if (overlay) {
        overlay.classList.add('pointer-events-none', 'opacity-0');
        overlay.classList.remove('opacity-100');
        const dialog = overlay.querySelector('div');
        if (dialog) {
            dialog.classList.remove('scale-100');
            dialog.classList.add('scale-95');
        }
    }
};

window.triggerMailSender = function() {
    const recipient = "nagy.levente@helyiokos.com";
    const subject = encodeURIComponent("HelyiOkos Smart Home Configuration Proposal Survey");
    const bodyText = window.lastCompiledBody || '';
    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
};

// 7. Light/Comfort Small Estimator at page bottom
window.selectedMiniPropertyType = 'flat12'; // Heuristic defaults

window.selectMiniProperty = function(type, btnElement) {
    window.selectedMiniPropertyType = type;

    // Toggle styling classes
    const btns = document.querySelectorAll('.mini-prop-btn');
    btns.forEach(btn => {
        btn.classList.remove('bg-slate-900', 'border-sky-500', 'text-sky-400');
        btn.classList.add('bg-slate-950', 'border-slate-800', 'text-slate-400', 'hover:bg-slate-900');
    });

    if (btnElement) {
        btnElement.classList.add('bg-slate-900', 'border-sky-500', 'text-sky-400');
        btnElement.classList.remove('bg-slate-950', 'border-slate-800', 'text-slate-400', 'hover:bg-slate-900');
    }

    runMiniCalculator();
};

window.runMiniCalculator = function() {
    let total = 100000; // Base server cost
    const type = window.selectedMiniPropertyType;

    if (type === "house") {
        total += 30000; // House repeats and mesh antennas markup
    }

    const hasLighting = document.getElementById('minicalc-lighting').checked;
    const hasHeating = document.getElementById('minicalc-heating').checked;
    const hasShutters = document.getElementById('minicalc-shutters').checked;
    const hasSensors = document.getElementById('minicalc-sensors').checked;
    const hasLock = document.getElementById('minicalc-lock').checked;

    if (hasLighting) {
        if (type === 'flat12') total += 3 * 12000;
        else if (type === 'flat34') total += 5 * 12000;
        else if (type === 'house') total += 8 * 12000;
    }

    if (hasHeating) {
        if (type === 'flat12') total += (1 * 22000) + (1 * 25000);
        else if (type === 'flat34') total += (3 * 22000) + (2 * 25000);
        else if (type === 'house') total += (5 * 22000) + (3 * 25000);
    }

    if (hasShutters) {
        if (type === 'flat12') total += 2 * 20000;
        else if (type === 'flat34') total += 4 * 20000;
        else if (type === 'house') total += 6 * 20000;
    }

    if (hasSensors) {
        if (type === 'flat12') total += 2 * 12000;
        else if (type === 'flat34') total += 4 * 12000;
        else if (type === 'house') total += 6 * 12000;
    }

    if (hasLock) {
        total += 139000; // Smart lock hardware + software support integration package
    }

    const totalEl = document.getElementById('mini-calc-total');
    if (totalEl) {
        totalEl.innerText = `${formatPrice(total)} HUF`;
    }
};

window.launchDetailedBuilder = function() {
    const minicalcLighting = document.getElementById('minicalc-lighting').checked;
    const minicalcHeating = document.getElementById('minicalc-heating').checked;
    const minicalcShutters = document.getElementById('minicalc-shutters').checked;
    const minicalcSensors = document.getElementById('minicalc-sensors').checked;
    const minicalcLock = document.getElementById('minicalc-lock').checked;

    const syncCheckbox = (val, checked) => {
        const cb = document.querySelector(`input[name="desired_functions"][value="${val}"]`);
        if (cb) cb.checked = checked;
    };

    syncCheckbox('lighting_basic', minicalcLighting);
    syncCheckbox('lighting_pro', false);
    syncCheckbox('heating_basic', minicalcHeating);
    syncCheckbox('heating_pro', false);
    syncCheckbox('climate', minicalcHeating);
    syncCheckbox('shutters', minicalcShutters);
    syncCheckbox('sensors', minicalcSensors);
    syncCheckbox('lock', minicalcLock);

    // Sync property type
    const propVal = (window.selectedMiniPropertyType === 'house') ? 'house' : 'flat';
    const propRadio = document.querySelector(`input[name="property_type"][value="${propVal}"]`);
    if (propRadio) propRadio.checked = true;
    wizardSelections.propertyType = propVal;

    let roomsVal = '1';
    let lights = 3, radiators = 1, shutters = 2, sensors = 2, climates = 1;
    if (window.selectedMiniPropertyType === 'flat12') {
        roomsVal = '1';
        lights = 3; radiators = 1; shutters = 2; sensors = 2; climates = 1;
    } else if (window.selectedMiniPropertyType === 'flat34') {
        roomsVal = '3';
        lights = 9; radiators = 3; shutters = 6; sensors = 5; climates = 2;
    } else if (window.selectedMiniPropertyType === 'house') {
        roomsVal = '4';
        lights = 12; radiators = 4; shutters = 8; sensors = 7; climates = 3;
    }

    const roomsRadio = document.querySelector(`input[name="rooms_count"][value="${roomsVal}"]`);
    if (roomsRadio) roomsRadio.checked = true;
    wizardSelections.rooms = parseInt(roomsVal, 10);

    wizardSelections.counts = {
        lights: lights,
        radiators: radiators,
        shutters: shutters,
        sensors: sensors,
        climates: climates
    };

    ['lights', 'radiators', 'shutters', 'sensors', 'climates'].forEach(type => {
        const el = document.getElementById(`count-${type}`);
        if (el) el.innerText = wizardSelections.counts[type];
    });

    recalculateWizardBudget();
    openConfiguratorModal();
};

// 8. Trigger calculation and animations on initialization
setTimeout(() => {
    runMiniCalculator();
}, 300);

recalculateWizardBudget();
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}
