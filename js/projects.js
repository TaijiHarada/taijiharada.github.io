/*
 * PROJECT DATA
 * ------------
 * This is the file you'll edit most. Each project is one object in the array.
 * To add a project: copy an existing object, change the fields, done.
 *
 * Fields:
 *   id          unique short slug (used internally)
 *   title       project name
 *   tagline     one-line summary shown on the card
 *   tags        array of short labels (skills/tech), shown as chips
 *   problem     the technical problem / context
 *   built       what you actually designed/built/did
 *   images      array of { src, alt }  — paths under assets/img/
 *   video       optional. One of:
 *                 { type: "youtube", id: "VIDEO_ID" }
 *                 { type: "vimeo",   id: "VIDEO_ID" }
 *                 { type: "file",    src: "assets/video/clip.mp4" }
 *   role        optional short context (team size, your role, client)
 */

const PROJECTS = [
  {
    id: "pic32-motor-controller",
    title: "PIC32 Motor Trajectory Controller",
    tagline: "Bare-metal C firmware for closed-loop DC motor position control.",
    tags: ["Embedded C", "PID Control", "PIC32", "Circuit Design"],
    role: "Solo project",
    problem:
      "Drive a DC motor to follow a commanded position trajectory in real time, with accurate current sensing and stable closed-loop behavior. This all on a resource-constrained microcontroller with no operating system.",
    built:
      "Wrote bare-metal C firmware for a PIC32 implementing a PID position controller with an inner current-control loop. Designed and built the signal-conditioning circuitry for current measurement, configured timer-driven interrupt service routines for deterministic control timing, and hand-tuned the PID gains for fast, stable tracking with minimal overshoot.",
    images: [
      { src: "assets/img/pic32-placeholder.svg", alt: "PIC32 motor controller bench setup" }
    ],
    video: null
  },
  {
    id: "d10-platform",
    title: "D10 Bulldozer Adjustable Maintenance Platform",
    tagline: "Custom hydraulic scissor lift for safe servicing of a Cat D10 dozer.",
    tags: ["Hydraulics", "Mechanical Design", "SOLIDWORKS", "Team Lead"],
    role: "Team of 6 · Customer-facing (Rio Tinto)",
    problem:
      "Rio Tinto needed a safe, adjustable platform to service the engine bay of a Caterpillar D10 bulldozer. Technicians were working at height on equipment never designed for easy access, creating real safety and ergonomic risk.",
    built:
      "Worked in a team of six to design a custom hydraulic scissor-lift maintenance platform tailored to the D10's geometry. Contributed to mechanical design and structural sizing in SOLIDWORKS, hydraulic actuation, and direct customer communication to validate requirements and constraints throughout the project.",
    images: [
      { src: "assets/img/d10-placeholder.svg", alt: "D10 adjustable maintenance platform" }
    ],
    video: null
  },
  {
    id: "wearable-robotics",
    title: "Wearable Robotics Research",
    tagline: "Design, manufacture, and testing of rehabilitation devices.",
    tags: ["Robotics", "Composites", "Prototyping", "Testing"],
    role: "Utah Wearable Robotics Lab",
    problem:
      "Build wearable rehabilitation devices that are strong, light, and comfortable enough for real human use. This requires tight integration of mechanical design, advanced materials, and iterative human-centered testing.",
    built:
      "Designed, manufactured, and tested wearable rehabilitation devices in the Utah Wearable Robotics Lab. Produced forged carbon-fiber composite components for high strength-to-weight, and ran iterative design–build–test cycles to refine fit, actuation, and performance.",
    images: [
      { src: "assets/img/wearable-placeholder.svg", alt: "Wearable robotics rehabilitation device" }
    ],
    video: null
  },
  {
    id: "mudbots-3d-printer",
    title: "Concrete 3D Printer (MudBots)",
    tagline: "Control circuit fabrication, software bring-up, and troubleshooting.",
    tags: ["3D Printing", "Circuit Fabrication", "Troubleshooting"],
    role: "MudBots",
    problem:
      "Get large-format concrete 3D printers operational and reliable, bridging the electronics, software, and mechanical systems that have to work together for a print to succeed.",
    built:
      "Fabricated control circuitry, installed and configured the printer software, and diagnosed and resolved hardware/software issues across the machines. Worked hands-on at the intersection of electronics, firmware, and mechanical systems to bring printers to a working state.",
    images: [
      { src: "assets/img/mudbots-placeholder.svg", alt: "MudBots concrete 3D printer" }
    ],
    video: null
  },
  {
    id: "shakespeare-tooling",
    title: "Internal Engineering Tooling",
    tagline: "Revit add-ins, PDF data extraction, and automated calculation tools.",
    tags: ["C#", "Python", "Revit API", "Automation", "Excel"],
    role: "Shakespeare Engineering",
    problem:
      "Engineers were spending hours on repetitive, error-prone manual tasks: verifying model data, transcribing values out of engineering PDFs, and running calculations by hand in spreadsheets.",
    built:
      "Built custom internal tooling to automate the slow parts of the workflow: Revit add-ins (C#) that run verification checks against models, a Python tool that extracts structured data from engineering PDFs into Excel, and automated Excel calculation tools that replace manual computation. The result is faster turnaround and fewer transcription errors.",
    images: [
      { src: "assets/img/tooling-placeholder.svg", alt: "Internal engineering software tooling" }
    ],
    video: null
  }
];

/*
 * SKILLS DATA
 * Grouped so the section stays scannable. Edit freely.
 */
const SKILL_GROUPS = [
  {
    group: "CAD & Design",
    items: ["SOLIDWORKS (CSWA)", "Inventor", "Fusion 360", "Revit", "GD&T"]
  },
  {
    group: "Programming & Controls",
    items: ["C", "C++", "C#", "Python", "MATLAB", "Simulink", "Embedded Systems", "PID Control"]
  },
  {
    group: "Manufacturing & Fabrication",
    items: ["Machining", "Welding", "Circuit Fabrication", "3D Printing", "Composites"]
  }
];
