window.PORTFOLIO = {
  "name": "Sritan Pittala",
  "email": "sritan.pittala@duke.edu",
  "intro": "Mechanical engineering student at Duke University, pursuing a Materials & Aerospace Certificate. My work spans vehicle structures, manufacturing tooling, underwater robotics, and sensing systems.",
  "planets": [
    {
      "id": "fsae",
      "name": "Formula SAE",
      "subtitle": "Duke Motorsports",
      "color": "#b79c80",
      "description": "Vehicle structures, driver interfaces, and team-built hardware.",
      "projects": [
        {
          "id": "chassis",
          "name": "Steel Spaceframe",
          "category": "STRUCTURES · MANUFACTURING",
          "summary": "Designing and manufacturing the 2026 and 2027 steel spaceframes, with joint fixtures helping reduce welding time to two days.",
          "work": [
            "Designed and optimized the 2026 and 2027 frames.",
            "Developed the MATLAB model informing the 2026 torsional stiffness target of 1,800 N·m/degree.",
            "Achieved 1,863 N·m/degree in simulation; measured 2026 frame mass was 27.6 kg.",
            "Designed all 2026 frame fixtures and some 2027 fixtures. Physical torsional stiffness testing is pending."
          ],
          "tools": "SolidWorks / ANSYS Mechanical / MATLAB / Fixture design",
          "previewImage": "assets/frame-2027-full.jpg",
          "imageAlt": "2026 steel frame on its 3D-printed fixtures"
        },
        {
          "id": "steering",
          "name": "Steering Wheel · Gen 1 & 2",
          "category": "DRIVER INTERFACE",
          "summary": "From a machined aluminum housing to an integrated PA12 body with PCB access in seconds.",
          "previewImage": "assets/steering-gen2-built.png",
          "image": "assets/steering-gen2-built.png",
          "imageAlt": "Manufactured second-generation Duke Motorsports steering wheel",
          "work": [
            "Designed the team’s first SLS-printed steering wheel with a modular PCB housing and TPU gaskets.",
            "Reduced electronics service time from minutes to seconds."
          ],
          "tools": "SLS printing / TPU / Mechanical design"
        },
        {
          "id": "firewall",
          "name": "Firewall",
          "category": "ENGINEERING PROJECT",
          "summary": "A two-piece 5052 aluminum firewall designed for easier removal, powertrain clearance, and less tape at inspection.",
          "work": [
            "Designed the complete two-piece firewall around the frame and powertrain packaging.",
            "Worked with Quincy Adams to manufacture and bend the 0.04-inch 5052 aluminum panels.",
            "Improved installation and removal and reduced tape use during technical inspection."
          ],
          "tools": "CAD / Sheet-metal design / Packaging / Forming / Fit-up",
          "image": "assets/firewall-frame.png",
          "previewImage": "assets/firewall-frame.png",
          "imageAlt": "Two-piece firewall fitted to the Formula SAE frame"
        },
        {
          "id": "jacking-bar",
          "name": "Jacking Bar",
          "category": "VEHICLE HARDWARE",
          "summary": "A lightweight rear lifting assembly, designed using a vehicle free-body diagram and brace FEA.",
          "work": [
            "Designed the complete assembly and manufactured the parts; welding performed by others.",
            "Calculated lifting loads and optimized the braces using FEA."
          ],
          "tools": "SolidWorks · FEA · Waterjet cutting",
          "previewImage": "assets/jacking-cad.png",
          "image": "assets/jacking-cad.png",
          "imageAlt": "Jacking bar CAD assembly with two braces and an orange lifting tube."
        },
        {
          "id": "timing-gates",
          "name": "Custom Timing Gates",
          "category": "TEST EQUIPMENT",
          "summary": "Mechanical design and fabrication of laser timing gates used during Duke Motorsports testing.",
          "work": [
            "Designed and built the electronics housings, mounts, and supporting mechanical assemblies.",
            "Helped set up laser-and-receiver gates for team testing."
          ],
          "tools": "",
          "previewImage": "assets/timing-assembled.jpg",
          "image": "assets/timing-assembled.jpg",
          "imageAlt": "Four assembled timing gates before electronics installation."
        }
      ],
      "previewImage": "assets/frame-2027-full.jpg",
      "imageAlt": "2026 steel frame on its 3D-printed fixtures"
    },
    {
      "id": "rinehart",
      "name": "Rinehart Racing",
      "subtitle": "Engineering internship",
      "color": "#477f8a",
      "description": "Structural engineering and manufacturing fixtures.",
      "projects": [
        {
          "id": "gwu",
          "name": "GWU Project",
          "category": "STRUCTURES · PRODUCTION",
          "summary": "From structural design to production and delivery: a 200+ ft perimeter fence and gates for George Washington University.",
          "work": [
            "Used hand calculations and FEA to size structural tubing for intrusion and static loading.",
            "Designed and analyzed a 3,000-lb center gate with a 1,500-lb architectural arch reaching 15 ft.",
            "Released more than 80 manufacturing drawings for over 1,500 components and designed two universal welding fixtures.",
            "Designed shipping pallets and created installation drawings, BOMs, and assembly sequences."
          ],
          "tools": "Structural analysis / FEA / Manufacturing drawings / Welding fixtures",
          "image": "assets/gwu-center-gate.jpg",
          "previewImage": "assets/gwu-center-gate.jpg",
          "imageAlt": "Completed center gate at George Washington University in Washington, DC"
        },
        {
          "id": "exhaust-fixtures",
          "name": "Motorcycle Exhaust Fixtures",
          "category": "ENGINEERING PROJECT",
          "summary": "Details coming soon.",
          "work": [],
          "tools": "",
          "detailsComingSoon": true
        }
      ],
      "previewImage": "assets/gwu-center-gate.jpg",
      "imageAlt": "Completed center gate at George Washington University in Washington, DC"
    },
    {
      "id": "uuv",
      "name": "UUVs",
      "subtitle": "Bioinspired underwater vehicles",
      "color": "#b17c5c",
      "description": "Frog, turtle, mosasaur, and squid-inspired underwater vehicles.",
      "projects": [
        {
          "id": "frogbot",
          "name": "Frogbot",
          "category": "ENGINEERING PROJECT",
          "summary": "Buoyancy control and mechanical design for a bio-inspired aquatic robot.",
          "work": [
            "Handled the motor-driven syringe buoyancy-control system.",
            "Contributed to the overall mechanical design."
          ],
          "tools": "",
          "previewImage": "assets/frogbot-hero.jpeg",
          "image": "assets/frogbot-hero.jpeg",
          "imageAlt": "Frogbot assembly CAD"
        },
        {
          "id": "turtle",
          "name": "Turtle & Mosasaurus",
          "category": "UNDERWATER ROBOTICS",
          "summary": "A modular aquatic robot with interchangeable animal-inspired fins and accessories.",
          "work": [
            "Designed the rear flippers, body, tail system, and accessories.",
            "Contributed to an assembled prototype with printed parts, custom gaskets, and silicone-molded fins."
          ],
          "tools": "3D printing / Servo actuation / Waterproof packaging",
          "previewImage": "assets/turtle-built.jpg",
          "image": "assets/turtle-built.jpg",
          "imageAlt": "Assembled turtle robot without its head"
        },
        {
          "id": "squid",
          "name": "Squid · Repass Rodgers",
          "category": "ENGINEERING PROJECT",
          "summary": "Details coming soon.",
          "work": [],
          "tools": "",
          "detailsComingSoon": true
        }
      ],
      "previewImage": "assets/frogbot-hero.jpeg",
      "imageAlt": "Frogbot assembly CAD"
    },
    {
      "id": "class",
      "name": "Class Projects",
      "subtitle": "Design, build, and experiment",
      "color": "#9693a8",
      "description": "Sensing systems, vehicle projects, and machined hardware.",
      "projects": [
        {
          "id": "sampling",
          "name": "Low-Cost Soot Sensor",
          "category": "SENSING · MECHANICAL DESIGN",
          "summary": "A servo-driven split-tube mechanism that collects soot on filter tape and advances samples beneath a digital microscope.",
          "work": [
            "Designed and integrated the complete mechanical assembly.",
            "Developed a servo-driven rack-and-pinion clamp and filter-tape transport.",
            "Resolved sampling-joint leakage with custom gaskets.",
            "Successfully collected and imaged soot; a teammate’s Raspberry Pi code analyzed the images."
          ],
          "tools": "Mechanical design / 3D printing / Rack and pinion / Custom gaskets",
          "image": "assets/soot-cad.png",
          "previewImage": "assets/soot-complete.jpg",
          "imageAlt": "Low-cost soot sampling prototype"
        },
        {
          "id": "gravity-car",
          "name": "Gravity Car",
          "category": "ENGINEERING PROJECT",
          "summary": "Second overall in the mechanical engineering cohort: a printed gravity car developed with two dynamics models.",
          "work": [
            "Completed all CAD design for the body, wheels, and assembly.",
            "Developed Model 0 and Model 1 to predict track performance.",
            "Placed second overall with wheels mounted directly on bolts, without wheel bearings."
          ],
          "tools": "CAD / 3D printing / Dynamics / MATLAB / Python",
          "image": "assets/gravity-final.jpg",
          "previewImage": "assets/gravity-final.jpg",
          "imageAlt": "Bikini Bottom Bullet gravity car"
        },
        {
          "id": "sandtrap",
          "name": "Sandtrap Vehicle",
          "category": "ENGINEERING PROJECT",
          "summary": "A mousetrap-powered sand vehicle that won the competition and set a school record of 64.2.",
          "work": [
            "Designed and manufactured the complete vehicle for the team.",
            "Used different-sized gears for mechanical advantage on sandy terrain.",
            "Won the competition and set a school-record performance score of 64.2 in·lb."
          ],
          "tools": "CAD / Mechanical design / Manufacturing / Gears / Testing",
          "image": "assets/sand-built.jpg",
          "previewImage": "assets/sand-built.jpg",
          "imageAlt": "Mousetrap-powered sand machine with geared drive"
        },
        {
          "id": "twist-pen",
          "name": "Metal Twist Pen",
          "category": "ENGINEERING PROJECT",
          "summary": "Details coming soon.",
          "work": [],
          "tools": "",
          "detailsComingSoon": true
        }
      ],
      "previewImage": "assets/soot-complete.jpg",
      "imageAlt": "Low-cost soot sampling prototype"
    }
  ]
};
