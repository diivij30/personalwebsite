/* =========================================================
   ALL YOUR WEBSITE CONTENT LIVES IN THIS ONE FILE.
   Just replace the text inside the quotes "like this".
   - Leave something as "" (empty) and it simply won't show.
   - Wrap words in **double stars** to make them bold.
   - Images: put the file in the images/ folder and write its path.
     Add  fit: "contain"  to show the whole image uncropped (posters, certificates).
   - Links: { label: "Paper", url: "https://..." }
   ========================================================= */

const SITE = {
  name: "Diivij Todi",
  fullName: "Diivij Todi",
  email: "diivij30@gmail.com",
  location: "Jaipur, India",
  photo: "images/headshot.jpg",
  badge: "ISEF 2026 Grand Award winner",

  socials: [
    { label: "LinkedIn", url: "" },
    { label: "Instagram", url: "" },
    { label: "GitHub", url: "" },
  ],

  /* ---------- 1. INTRO ANIMATION ---------- */
  intro: {
    left: {
      word: "Research",
      image: "images/research/ecofog-isef-medals.jpg",
      caption: "Regeneron ISEF, Phoenix 2026",
      rows: [
        { title: "Regeneron ISEF", meta: "3rd Grand Award" },
        { title: "IRIS National Fair", meta: "Gold Medal" },
        { title: "The Earth Prize", meta: "Runner-up, Asia" },
        { title: "Stockholm Jr. Water Prize", meta: "Top 28, India" },
        { title: "Snooze sleep mask", meta: "Health tech" },
      ],
    },
    right: {
      word: "Service",
      image: "",                        // TODO: a music / community service photo
      caption: "",
      rows: [
        { title: "Music", meta: "Interest" },
        { title: "Musica", meta: "Service" },
        { title: "Medical Cadets", meta: "Service" },
        { title: "Green House Captain", meta: "Leadership" },
        { title: "Neighbourhood Youth Council", meta: "Head" },
      ],
    },
    footLeft: "Low-cost materials and devices for water and health.",
    footRight: "Jaipur, India",
    end: "I'm Diivij, a student researcher and builder.",
    button: { label: "See my work", href: "#research" },
  },

  /* ---------- 2. HOME ---------- */
  home: {
    headline:
      "Student, researcher and builder from Jaipur, India. I engineer low-cost materials and devices for problems like water scarcity and sleep apnea.",
    bio:
      "I'm at Jayshree Periwal International School, Jaipur. I'm interested in materials science, engineering and health technology.",
    links: [
      { label: "Research", href: "#research", note: "EcoFog · ISEF 2026" },
      { label: "Projects", href: "#projects", note: "auto" },
      { label: "Interests", href: "#interests", note: "auto" },
      { label: "Education", href: "#education", note: "IBDP · IGCSE · SAT" },
      { label: "Say hello", href: "#contact", note: "Contact" },
    ],
  },

  /* ---------- 3. RESEARCH: ECOFOG ---------- */
  research: {
    field: "Materials Science",
    title: "EcoFog",
    subtitle:
      "A novel, biodegradable composite mesh for passive water collection from fog and high-humidity environments.",
    meta: [
      { k: "Team", v: "Diivij Todi & Mrityunjay Gupta" },
      { k: "When", v: "2025 – 2026" },
    ],
    photos: [
      { src: "images/research/ecofog-isef-medals.jpg", caption: "With our medals at the EcoFog booth, Regeneron ISEF 2026" },
      { src: "images/research/ecofog-flag.jpg", caption: "Representing Team India in Phoenix" },
      { src: "images/research/ecofog-iris-stage.jpg", caption: "Gold Medal at the IRIS National Fair" },
      { src: "images/research/ecofog-isef-wall.jpg", caption: "At the Regeneron ISEF finalist wall" },
    ],
    story: [
      "Over **2 billion people** live with water scarcity. Fog harvesting can pull drinking water straight out of the air with no power at all, but the standard design, **Raschel mesh**, captures very little water and is made of materials that don't biodegrade.",
      "**EcoFog** is our answer. A **3D-printed hydrophobic PLA backbone** drains water quickly, while an **electrospun hydrophilic PVA/PEO nanofiber matrix** catches droplets from the fog. **Titanium dioxide nanoparticles** add nucleation sites, and **colloidal silica** makes the matrix stronger. We checked the structure with **FESEM imaging** and **contact-angle measurements**.",
      "Under controlled fog, EcoFog collected **17.3 litres of water per m² per day**, **3.46× more than Raschel mesh**. It uses widely available materials and scalable fabrication, which makes it a path to cheap, durable water collection for the places that need it most.",
    ],
    highlight:
      "EcoFog won the **Gold Medal at the IRIS National Fair** (top 30 of 6,000+ students), which earned us a place on **Team India at Regeneron ISEF 2026** in Phoenix. There we won the **Third Place Grand Award in Materials Science**, one of only **3 grand awards** won by India this year.",
    stats: [
      { value: "17.3", unit: "L m⁻² day⁻¹", label: "water collected under controlled fog" },
      { value: "3.46×", unit: "", label: "more water than conventional Raschel mesh" },
      { value: "3.8×", unit: "", label: "higher droplet nucleation density" },
      { value: "~50%", unit: "", label: "less water left stuck on the mesh" },
    ],
    // simple awards list
    awards: [
      { award: "Third Place Grand Award, Materials Science", event: "Regeneron ISEF 2026, Phoenix", url: "docs/isef-2026-certificate.pdf" },
      { award: "Gold Medal", event: "IRIS National Fair" },
      { award: "Earth Prize Scholar & Runner-up for Asia", event: "The Earth Prize 2026", url: "docs/earth-prize-scholar-2026.pdf" },
      { award: "Top 28 teams", event: "Stockholm Junior Water Prize India 3.0" },
    ],
    press: [
      { src: "images/research/press/etimes.jpg", outlet: "ETimes, Times of India", title: "Rajasthan struggled with drought for years, then two teenagers made a device to harvest fog water without electricity" },
      { src: "images/research/press/dainik-bhaskar.jpg", outlet: "Dainik Bhaskar", title: "Jaipur student wins award in America: 1,700 students from over 60 countries participated" },
      { src: "images/research/press/cpg.jpg", outlet: "CPG", title: "Indian students from Jaipur win top prize at world's largest science fair with EcoFog" },
      { src: "images/research/press/turkey.jpg", outlet: "Sözcü, Türkiye", title: "No bills, no engine: two high school students turned the world upside down using only 'air'" },
      { src: "images/research/press/young-scientist.jpg", outlet: "Print feature", title: "Young Scientist Awarded" },
      { src: "images/research/press/rajasthan-ca.jpg", outlet: "Rajasthan Current Affairs", title: "Listed under 'Famous Personalities' for the ISEF Grand Award" },
    ],
    abstract:
      "EcoFog is a high-efficiency passive fog-harvesting mesh engineered through materials design and surface functionalisation to improve water capture, droplet nucleation and drainage. The system combines a 3D-printed hydrophobic polylactic acid (PLA) backbone with an electrospun hydrophilic nanofiber matrix composed of polyvinyl alcohol (PVA) and polyethylene oxide (PEO). Titanium dioxide nanoparticles are incorporated to provide additional nucleation sites, while colloidal silica nanoparticles reinforce the matrix's tensile strength for improved structural durability. Field-emission scanning electron microscopy (FESEM) was used to characterise nanofiber morphology and uniformity, while contact-angle measurements assessed surface wettability and confirmed the hydrophobic-hydrophilic contrast essential to the harvesting mechanism. Under controlled fog conditions, EcoFog achieved a water collection rate of 17.3 L m⁻² day⁻¹, 3.46 times that of conventional Raschel mesh. Its approximately 50% lower retained-water fraction and fourfold higher droplet formation rate indicate improved droplet nucleation, coalescence and drainage, helping sustain collection efficiency. By integrating nanoparticle functionalisation, electrospun polymer composites and additively manufactured structural components, EcoFog demonstrates how interfacial engineering and multiscale material design can enhance passive water harvesting. Its use of widely available materials and scalable fabrication techniques offers a pathway towards cost-effective, durable and environmentally conscious water collection systems.",
    buttons: [
      { label: "Abstract", action: "abstract" },
      { label: "Research paper", url: "docs/ecofog-research-paper.pdf" },     // S.T. Yau High School Science Award report
      { label: "ISEF project page", url: "https://isef.net/project/mats079t-high-efficiency-passive-fog-harvesting-mesh" },
      { label: "ISEF certificate", url: "docs/isef-2026-certificate.pdf" },
      { label: "Earth Prize certificate", url: "docs/earth-prize-scholar-2026.pdf" },
    ],
  },

  /* ---------- 4. PROJECTS ----------
     Each project opens like a drawer when clicked.
     - body: paragraphs (use **double stars** for bold)
     - facts: big numbers
     - video: a YouTube video id (the part after youtu.be/)
     - docs: shared links, shown as preview cards. For Google Drive / Docs
       links, make sure sharing is "Anyone with the link" or visitors can't open them. */
  projects: [
    {
      title: "Snooze",
      kicker: "Health tech · Sleep apnea",
      when: "2025 – 2026",
      team: "Team InnovateX: Amairah Sharma, Trishiv Ohlan, Yashleen Shergill, Aahavana Kapuria & Diivij Todi",
      summary: "A low-cost, AI-enabled sleep mask that screens for obstructive sleep apnea at home.",
      body: [
        "Sleep apnea screening usually means a night in a sleep lab or expensive equipment. **Snooze** is a sleep mask built around an **ESP32**, with an **IMU, microphone, temperature sensor and PPG sensors** that track movement, snoring, temperature, heart rate and **blood oxygen (SpO₂)**.",
        "It syncs every signal into one sleep timeline and classifies sleep stages in **30-second epochs**. A built-in **Wi-Fi hotspot and live dashboard** show the data in real time, and overnight recordings export as CSV for AI analysis.",
        "We tested it on **30 people**, including volunteers recruited through hospitals, and consulted **15 doctors** along the way. At an estimated **$79 at scale**, it targets a **30% cost reduction** compared with FDA-cleared apnea screeners.",
      ],
      facts: [
        { value: "92%", label: "accuracy across 30 testers" },
        { value: "15", label: "doctors consulted" },
        { value: "$79", label: "estimated cost at scale" },
        { value: "30%", label: "cheaper than FDA-cleared screeners" },
      ],
      awards: [
        { award: "Conrad Innovator", event: "Conrad Challenge 2025–26 · Health & Nutrition", url: "docs/conrad-innovator-2026.pdf" },
        { award: "Top 200 of 38,000+", event: "vivo Ignite 4.0" },
      ],
      images: [
        { src: "images/projects/snooze-mask.jpg", caption: "The Snooze prototype" },
        { src: "images/projects/snooze-electronics.jpg", caption: "Sensors and wiring inside the mask" },
      ],
      video: { youtube: "TVlIHguJbVE", title: "Snooze demo video" },
      docs: [],
    },
    {
      title: "Poseidon's Trident",
      kicker: "Marine biotech · Oil spills",
      when: "",
      team: "",
      summary: "A bio-inspired magnetic nanocomposite that soaks up oil spills, digests them with bacteria and is pulled back out with a magnet.",
      body: [
        "Poseidon's Trident tackles marine oil spills by combining **oil adsorption, bacterial bioremediation and magnetic recovery** in one system.",
        "We made the nanomaterials ourselves from marine biomass: **chitosan from crustacean shells**, **lignin from marine plants**, and **spirulina-assisted synthesis of magnetic iron nanoparticles**. The material captures oil and holds **Bacillus subtilis** bacteria that break down hydrocarbons, and then the whole thing is retrieved with a magnet, so the bacteria don't spread into the sea.",
        "The aim is a cheap, sustainable alternative to conventional oil-spill cleanup. Beyond the lab, we taught **over 3,000 children across 28 coastal schools** about protecting ocean ecosystems.",
      ],
      facts: [
        { value: "3", label: "steps in one material: adsorb, degrade, recover" },
        { value: "3,000+", label: "children taught about ocean protection" },
        { value: "28", label: "coastal schools visited" },
      ],
      awards: [],
      images: [],
      video: null,
      docs: [],
    },
    {
      title: "Macleods Pharmaceuticals",
      kicker: "Internship · Peptide research",
      when: "11 – 26 June 2026",
      place: "Macleods R&D Laboratory, Mumbai",
      team: "Supervised by Dr. Pratap Reddy Padi",
      summary: "Two weeks in a pharmaceutical peptide research lab, building peptides one amino acid at a time.",
      body: [
        "Peptides are short chains of amino acids. Our bodies use them as hormones and signals, and scientists now design them as medicines for conditions like **diabetes and cancer**. This internship was my first look at how a real pharmaceutical lab turns that science into medicine.",
        "I helped build peptides **one amino acid at a time on resin beads**: preparing the resin, adding amino acids, washing between steps, and running **colour-change tests** to check each step worked. I then assisted with **HPLC purification**, reading the results to find the right peak, and watched the purified fractions get concentrated and **freeze-dried into powder**. Along the way I calculated chemical quantities, prepared precise solutions and was trained in lab safety.",
        "I hadn't studied organic chemistry at school yet, so some of it was hard at first. The researchers explained the theory behind every step, which helped me understand the science instead of just following procedures. It made me want to pursue **biomedical and peptide-based research**.",
      ],
      facts: [
        { value: "2", label: "weeks in the Peptide Research Lab" },
      ],
      awards: [],
      images: [],
      video: null,
      docs: [
        { title: "Macleods Internship Report", kind: "Google Doc", url: "https://docs.google.com/document/d/1Z4diaBiWq-QqZoN6nzozYYYXakd1M6IqzCNH3f3uS1o/edit?usp=sharing", driveId: "1Z4diaBiWq-QqZoN6nzozYYYXakd1M6IqzCNH3f3uS1o" },
        { title: "MACLEODS.pdf", kind: "PDF", url: "https://drive.google.com/file/d/13N0gYuOLIVlYa1U2_c0ZSuihJ4O5CkAv/view?usp=sharing", driveId: "13N0gYuOLIVlYa1U2_c0ZSuihJ4O5CkAv" },
      ],
    },
    {
      title: "GreenAqura",
      kicker: "iGEM 2025 · Synthetic biology",
      when: "iGEM Grand Jamboree, Paris · 28 – 31 Oct 2025",
      team: "Team JPIS (High School Section)",
      summary: "Engineered E. coli that pull fertilizer back out of farm runoff and turn it into liquid fertilizer again.",
      body: [
        "Fertilizer that crops never absorb washes into rivers and feeds **algal blooms** that choke out fish. We engineered **E. coli** to pull the **nitrogen and phosphorus** back out.",
        "The bacteria sit in **alginate beads** inside a small cartridge that runoff flows through. They absorb nitrate and phosphate and store it internally. When the cartridge fills, a switch releases it as **concentrated liquid fertilizer** that goes back onto the field.",
        "A **kill switch** and a **filter at the outlet** keep the bacteria contained.",
      ],
      facts: [
        { value: "~65%", label: "nitrate removed" },
        { value: "~70%", label: "phosphate removed" },
      ],
      awards: [],
      images: [],
      video: null,
      docs: [
        { title: "JPIS team page", kind: "iGEM", url: "https://teams.igem.org/5931" },
        { title: "iGEM 2025 participation certificate", kind: "PDF", url: "docs/igem-2025-certificate.pdf", thumb: "images/projects/igem-certificate.jpg" },
      ],
    },
  ],

  /* ---------- 5. INTERESTS ----------
     Same fields as projects. Fill in summary/body and they open like drawers. */
  interests: [
    {
      group: "Music",
      items: [
        { title: "Music", kicker: "", when: "", summary: "", body: [], images: [], docs: [] },
      ],
    },
    {
      group: "Community Service",
      items: [
        { title: "Musica", kicker: "", when: "", summary: "", body: [], images: [], docs: [] },
        { title: "Medical Cadets", kicker: "", when: "", summary: "", body: [], images: [], docs: [] },
      ],
    },
    {
      group: "Leadership",
      items: [
        {
          title: "Green House Captain",
          kicker: "Jayshree Periwal International School",
          when: "",
          summary: "Led Green House, a community of 500+ students, to the Best House in Sports award.",
          body: [
            "As **Green House Captain** at JPIS, I led a house of **over 500 students**: coordinating activities, supporting students, and helping organise school events and **ISSO tournaments**. Under my leadership, Green House won **Best House in Sports**.",
            "I also ran **Science for Fun**, teaching students hands-on science over the summer: making **ice cream in a bag** to show freezing-point depression, growing crystals from saturated sugar solutions, and demonstrating the domino effect.",
            "Together, these built participation, teamwork and curiosity across the school.",
          ],
          facts: [
            { value: "500+", label: "students in Green House" },
          ],
          awards: [{ award: "Best House in Sports", event: "Green House · JPIS" }],
          images: [{ src: "images/interests/green-house-captain.jpg", caption: "Green House Captain" }],
          docs: [
            { title: "Dive right into a delicious experiment", kind: "Science for Fun · PDF", url: "docs/ice-cream-in-a-bag.pdf", thumb: "images/interests/ice-cream-cover.jpg" },
          ],
        },
        {
          title: "Neighbourhood Youth Council",
          kicker: "Head of the Youth Council",
          when: "4 years",
          summary: "Revived our neighbourhood youth council and turned Dussehra into a celebration for 500+ people.",
          body: [
            "Dussehra became my way of finding a place in the community. As **Head of the Neighbourhood Youth Council**, I revived the council, led **25 members** and helped turn a local celebration into an event welcoming **500+ attendees**.",
            "Over four years we raised **$3,000+** and brought in **10+ sponsors**, often spending evenings going door to door, collecting contributions and persuading local businesses to get involved. We reached **150 households**, bringing neighbours together through a festival built on shared traditions.",
            "The late nights were worth it every time I saw the children's faces light up. What began as organising a cultural event became a way to give young people a voice and feel truly part of my community.",
          ],
          facts: [
            { value: "500+", label: "attendees" },
            { value: "$3,000+", label: "raised over four years" },
            { value: "10+", label: "sponsors" },
            { value: "150", label: "households reached" },
            { value: "25", label: "council members led" },
          ],
          awards: [],
          images: [],
          docs: [],
        },
      ],
    },
  ],

  /* ---------- 6. EDUCATION ---------- */
  education: {
    school: "Jayshree Periwal International School",
    location: "Jaipur, India",
    years: "",                           // TODO: e.g. "2015 – 2027"
    curriculum: "IB Diploma Programme · Cambridge IGCSE",

    // IB Diploma: one column per exam session
    ibdp: {
      subjects: ["Biology HL", "Chemistry HL", "Mathematics AA HL", "Physics SL", "English", "Spanish B"],
      sessions: [
        { name: "Grade 12 Midterms", total: "42/42", scores: [7, 7, 7, 7, 7, 7] },
      ],
    },

    // Cambridge IGCSE (Grade 10)
    igcse: {
      label: "Grade 10",
      results: [
        { subject: "Extended Mathematics", percent: 100, grade: "A*", award: "Highest mark in the world", url: "images/education/cambridge-outstanding-learner.jpeg" },
        { subject: "Chemistry", percent: 99, grade: "A*" },
        { subject: "Biology", percent: 96, grade: "A*" },
        { subject: "Economics", percent: 96, grade: "A*" },
        { subject: "Spanish", percent: 96, grade: "A*" },
        { subject: "Physics", percent: 95, grade: "A*" },
        { subject: "Additional Mathematics", percent: 95, grade: "A*" },
        { subject: "Computer Science", percent: 93, grade: "A*" },
        { subject: "Global Perspectives", percent: 93, grade: "A*" },
        { subject: "English Language", percent: 92, grade: "A*" },
        { subject: "English Literature", percent: 87, grade: "A" },
      ],
    },

    // Standardised testing
    tests: [
      { name: "SAT", score: "1560", max: 1600, parts: [{ name: "Math", score: 800, max: 800 }, { name: "English", score: 760, max: 800 }] },
    ],

  },
};
