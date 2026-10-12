/* Ahmed Mohamed — portfolio content (EN / AR). Facts come from the CV only. */
const PROFILE = {
  name:     { en: "Ahmed Mohamed", ar: "أحمد محمد" },
  fullName: { en: "Ahmed Mohamed Gamal Abd El Shafy", ar: "أحمد محمد جمال عبد الشافي" },
  initials: "A·G",
  title:    { en: "Cloud & DevOps Engineer", ar: "مهندس Cloud و DevOps" },
  location: { en: "Monufia, Egypt", ar: "المنوفية، مصر" },
  greeting: { en: "Hello, I'm", ar: "أهلًا، أنا" },
  phone: "+20 101 960 4735",
  whatsapp: "201019604735",
  whatsappMsg: { en: "Hi Ahmed, I saw your portfolio.", ar: "أهلًا أحمد، شفت البورتفوليو بتاعك." },
  email: "PLACEHOLDER",            // TODO: put your real email here
  linkedin: "#", github: "#",      // TODO: add your LinkedIn / GitHub URLs (hidden while "#")
  cvFile: "assets/Ahmed_Mohamed_CV.pdf",
  usp: {
    en: "I automate server setup and deployment with Ansible, Docker and CI/CD workflows, so environments are consistent and repeatable.",
    ar: "بأتمت تجهيز السيرفرات والنشر بـ Ansible و Docker و CI/CD، عشان البيئات تطلع ثابتة وتتكرر بنفس الشكل."
  },
  uspShort: {
    en: "I automate infrastructure and deployment with Ansible, Docker and CI/CD, so environments are consistent from dev to production.",
    ar: "بأتمت البنية التحتية والنشر بـ Ansible و Docker و CI/CD، عشان البيئات تبقى ثابتة من التطوير للإنتاج."
  },
};

const UI = {
  connect:      { en: "Connect Me",        ar: "تواصل معايا" },
  viewWork:     { en: "View My Work",      ar: "شوف شغلي" },
  downloadCV:   { en: "Download CV",       ar: "حمّل الـ CV" },
  scroll:       { en: "Scroll",            ar: "انزل" },
  openTo:       { en: "Open to freelance work, internships & entry-level cloud roles",
                  ar: "متاح للعمل الحر والتدريب والوظائف المبتدئة في الـ Cloud" },
  certsTitle:   { en: "Certificates",      ar: "الشهادات" },
  eduTitle:     { en: "Education",         ar: "الدراسة" },
  certClick:    { en: "Click a certificate to view it full size.", ar: "اضغط على أي شهادة لعرضها بحجم كامل." },
  challenge:    { en: "Challenge",         ar: "التحدي" },
  action:       { en: "Action",            ar: "الإجراء" },
  result:       { en: "Result",            ar: "النتيجة" },
  problem:      { en: "Problem",           ar: "المشكلة" },
  role:         { en: "My Role",           ar: "دوري" },
  solution:     { en: "Solution",          ar: "الحل" },
  tools:        { en: "Tools",             ar: "الأدوات" },
  whatIDo:      { en: "What I do",         ar: "بأعمل إيه" },
  solves:       { en: "Problem it solves", ar: "بتحلّ إيه" },
  youGet:       { en: "What you get",      ar: "اللي هتاخده" },
  verify:       { en: "Verify credential", ar: "تحقّق من الشهادة" },
  explore:      { en: "Explore",           ar: "تصفّح" },
  getInTouch:   { en: "Get in touch",      ar: "تواصل" },
  formName:     { en: "Your Name",         ar: "اسمك" },
  formEmail:    { en: "Your Email",        ar: "إيميلك" },
  formSubject:  { en: "Subject",           ar: "الموضوع" },
  formMessage:  { en: "Tell me about your project…", ar: "احكيلي عن مشروعك…" },
  formSend:     { en: "Send Message",      ar: "ابعت الرسالة" },
  formNote:     { en: "Opens your email client with this message pre-filled.",
                  ar: "هيفتح برنامج الإيميل عندك والرسالة جاهزة." },
  built:        { en: "Built with HTML, CSS & JavaScript.", ar: "مبني بـ HTML و CSS و JavaScript." },
  rights:       { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  noImage:      { en: "No certificate image available — details below.",
                  ar: "لا توجد صورة للشهادة — التفاصيل بالأسفل." },
  concept:      { en: "Practice Lab",      ar: "معمل تدريبي" },
  popular:      { en: "Most Popular",      ar: "الأكثر طلبًا" },
  min:          { en: "MIN",               ar: "من" },
  max:          { en: "MAX",               ar: "إلى" },
  getStarted:   { en: "Get Started",       ar: "ابدأ" },
  hireMe:       { en: "Hire Me",           ar: "اشتغل معايا" },
  letsConnect:  { en: "Let's Connect",     ar: "يلا نتواصل" },
  whoAmI:       { en: "Who Am I?",         ar: "أنا مين؟" },
  platforms:    { en: "Find me on",        ar: "تلاقيني على" },
  viewPricing:  { en: "View Pricing Plans", ar: "شوف باقات الأسعار" },
};

const STATS = [
  { dt: { en: "Graduation", ar: "التخرج" }, dd: "2026", sm: "" },
  { dt: { en: "Freelance platforms", ar: "منصات العمل الحر" }, dd: "4", sm: "" },
  { dt: { en: "Focus", ar: "التخصص" }, dd: "DevOps", sm: { en: " & Cloud", ar: " و Cloud" } },
];

const PRICING = [];
const PRICING_NOTE = { en: "", ar: "" };

const FOOTER = {
  connect: {
    en: "I'm open to freelance projects, internships and entry-level cloud and DevOps roles. Let's build infrastructure that's easy to repeat.",
    ar: "متاح لمشاريع العمل الحر والتدريب والوظائف المبتدئة في الـ Cloud و DevOps. يلا نبني بنية تحتية سهلة التكرار."
  },
  whoAmI: {
    en: "I'm <strong>Ahmed Mohamed</strong>, a fourth-year Computer Science student specializing in Cloud Engineering and DevOps — infrastructure automation, containers and CI/CD.",
    ar: "أنا <strong>أحمد محمد</strong>، طالب في الفرقة الرابعة علوم حاسب متخصص في Cloud Engineering و DevOps — أتمتة البنية التحتية والحاويات و CI/CD."
  },
  tagline: { en: "Cloud &amp; DevOps · Monufia, Egypt", ar: "Cloud و DevOps · المنوفية، مصر" },
};

const FOOTER_DIRECT = [
  { key: "github",   label: "GitHub",   url: "#" },   // TODO
  { key: "linkedin", label: "LinkedIn", url: "#" },   // TODO
  { key: "whatsapp", label: "WhatsApp", url: "https://wa.me/201019604735" },
];

const PLATFORMS = [
  { key: "upwork",  label: { en: "Upwork",  ar: "Upwork" }, short: "Up", domain: "upwork.com",  logo: "", url: "https://www.upwork.com/freelancers/~01b42b30a11265f11d?mp_source=share" },
  { key: "mostaql", label: { en: "Mostaql", ar: "مستقل" },  short: "م",  domain: "mostaql.com", logo: "", url: "https://mostaql.com/u/AhmedMohamedGa" },
  { key: "khamsat", label: { en: "Khamsat", ar: "خمسات" },  short: "خ",  domain: "khamsat.com", logo: "", url: "https://khamsat.com/user/mmmahmedmmm" },
  { key: "kafiil",  label: { en: "Kafiil",  ar: "كفيل" },   short: "ك",  domain: "kafiil.com",  logo: "", url: "https://kafiil.com/u/AhmedMohamedGamal" },
];

const SECTIONS = {
  about: { kicker: { en: "01 — About", ar: "٠١ — نبذة" },
    hook: { en: "Automating infrastructure, one playbook at a time", ar: "بأتمت البنية التحتية، Playbook ورا التاني" } },
  education: { kicker: { en: "02 — Education", ar: "٠٢ — التعليم" },
    hook: { en: "Education & training", ar: "الدراسة والتدريب" } },
  skills: { kicker: { en: "03 — Skills", ar: "٠٣ — المهارات" },
    hook: { en: "The toolkit I work with", ar: "الأدوات اللي بشتغل بيها" },
    sub: { en: "Grouped by what I use them for.", ar: "مقسّمة حسب استخدامها." } },
  experience: { kicker: { en: "", ar: "" }, hook: { en: "", ar: "" } },
  services: { kicker: { en: "04 — Services", ar: "٠٤ — الخدمات" },
    hook: { en: "What I can take off your plate", ar: "إيه اللي أقدر أشيله عنك" } },
  projects: { kicker: { en: "05 — Projects", ar: "٠٥ — المشاريع" },
    hook: { en: "Selected work", ar: "شغل مختار" },
    sub: { en: "Hands-on projects in infrastructure automation and database design.", ar: "مشاريع عملية في أتمتة البنية التحتية وتصميم قواعد البيانات." } },
  pricing: { hook: { en: "", ar: "" }, sub: { en: "", ar: "" } },
  achievements: { kicker: { en: "", ar: "" }, hook: { en: "", ar: "" } },
  contact: { kicker: { en: "06 — Contact", ar: "٠٦ — تواصل" },
    hook: { en: "Let's talk", ar: "يلا نتكلم" },
    sub: { en: "Open to freelance work, internships and entry-level cloud/DevOps roles. Find me on the platforms below.", ar: "متاح للعمل الحر والتدريب والوظائف المبتدئة في Cloud و DevOps. تلاقيني على المنصات اللي تحت." } },
};

const TERMINAL_LINES = [
  { cmd: "whoami",            out: { en: "Ahmed Mohamed — Cloud & DevOps", ar: "أحمد محمد — Cloud و DevOps" } },
  { cmd: "cat status.txt",    out: { en: "4th-year Computer Science student · Monufia, Egypt", ar: "طالب فرقة رابعة علوم حاسب · المنوفية، مصر" } },
  { cmd: "skills --top",      out: { en: "Ansible | Docker | Linux | Python | Bash | SQL", ar: "Ansible | Docker | Linux | Python | Bash | SQL" } },
  { cmd: "echo $STATUS",      out: { en: "Open to freelance work & internships", ar: "متاح للعمل الحر والتدريب" } },
];

const ABOUT = {
  whoIAm: {
    en: "I'm <strong>Ahmed Mohamed</strong>, a fourth-year Computer Science student specializing in Cloud Engineering and DevOps.",
    ar: "أنا <strong>أحمد محمد</strong>، طالب في الفرقة الرابعة علوم حاسب متخصص في Cloud Engineering و DevOps."
  },
  specialize: {
    en: "I work with infrastructure automation, containerization and configuration management — Ansible playbooks, Docker containers and CI/CD workflows — plus relational database design with SQL Server.",
    ar: "بشتغل في أتمتة البنية التحتية والحاويات وإدارة الإعدادات — Playbooks بـ Ansible وحاويات Docker و Workflows للـ CI/CD — وكمان تصميم قواعد البيانات العلائقية بـ SQL Server."
  },
  different: {
    en: "I also bring a networking background (Cisco CCNA concepts, router and access point configuration), which helps me understand how systems talk to each other.",
    ar: "ومعايا خلفية في الشبكات (مفاهيم Cisco CCNA وضبط الراوتر والـ Access Points)، وده بيساعدني أفهم الأنظمة بتتواصل مع بعض إزاي."
  },
  facts: [
    { k: { en: "Degree", ar: "الدرجة" }, v: { en: "B.Sc. Computer Science & Software Engineering", ar: "بكالوريوس علوم الحاسب وهندسة البرمجيات" } },
    { k: { en: "Faculty", ar: "الكلية" }, v: { en: "Computers and Information", ar: "الحاسبات والمعلومات" } },
    { k: { en: "Graduation", ar: "التخرج" }, v: { en: "Expected 2026", ar: "المتوقع ٢٠٢٦" } },
    { k: { en: "Based in", ar: "المكان" }, v: { en: "Monufia, Egypt", ar: "المنوفية، مصر" } },
  ],
  tags: ["Ansible", "Docker", "CI/CD", "Linux", "Python", "Bash", "SQL"],
};

const EDUCATION = {
  degree: { en: "B.Sc. in Computer Science & Software Engineering", ar: "بكالوريوس علوم الحاسب وهندسة البرمجيات" },
  org:    { en: "Faculty of Computers and Information", ar: "كلية الحاسبات والمعلومات" },
  meta:   { en: "Expected graduation 2026 · Cloud Computing, Distributed Systems, Software Engineering, Database Systems, Machine Learning, Computer Networks",
            ar: "التخرج المتوقع ٢٠٢٦ · Cloud Computing وDistributed Systems وSoftware Engineering وDatabase Systems وMachine Learning وComputer Networks" },
  gpa: "", gpaLabel: { en: "", ar: "" },
};

const SKILLS = [
  { group: { en: "DevOps & Cloud", ar: "DevOps و Cloud" },
    desc: { en: "Automating server setup and deployment so environments are repeatable.", ar: "أتمتة تجهيز السيرفرات والنشر عشان البيئات تتكرر بنفس الشكل." },
    items: ["Ansible", "Docker", "YAML Playbooks", "Jinja2 Templates", "CI/CD Workflows", "Infrastructure as Code (IaC)"] },
  { group: { en: "Programming", ar: "البرمجة" },
    desc: { en: "Scripting and data work to support automation and backend systems.", ar: "سكريبتات وشغل على البيانات لدعم الأتمتة وأنظمة الـ Backend." },
    items: ["Python", "Bash", "SQL", "MATLAB"] },
  { group: { en: "Databases & Systems", ar: "قواعد البيانات والأنظمة" },
    desc: { en: "Relational design and Linux administration.", ar: "تصميم قواعد البيانات العلائقية وإدارة Linux." },
    items: ["SQL Server (SSMS)", "Relational Database Design", "ER Diagrams", "Linux Administration"] },
  { group: { en: "Networking", ar: "الشبكات" },
    desc: { en: "Network fundamentals and hands-on device configuration.", ar: "أساسيات الشبكات وضبط الأجهزة عمليًا." },
    items: ["Cisco CCNA Concepts", "Bandwidth Management", "Router & Access Point Config", "Aruba Instant On"] },
];

const EXPERIENCE = [];

const SERVICES = [
  { icon: "pipeline", title: { en: "Infrastructure automation with Ansible", ar: "أتمتة البنية التحتية بـ Ansible" },
    what: { en: "I write Ansible playbooks (YAML, Jinja2 templates) to configure servers and set up environments.", ar: "بكتب Playbooks بـ Ansible (YAML وقوالب Jinja2) لضبط السيرفرات وتجهيز البيئات." },
    problem: { en: "Setting up servers by hand is slow and comes out slightly different every time.", ar: "تجهيز السيرفرات يدويًا بطيء وبيطلع مختلف شوية كل مرة." },
    youGet: { en: "Playbooks you own that set up the environment the same way on every run.", ar: "Playbooks ملكك بتجهّز البيئة بنفس الشكل في كل مرة." },
    tech: ["Ansible", "YAML", "Jinja2"] },
  { icon: "container", title: { en: "Docker containerization", ar: "تحويل التطبيقات لحاويات Docker" },
    what: { en: "I configure Docker containers to give consistent, isolated environments for development and deployment.", ar: "بضبط حاويات Docker عشان بيئات التطوير والنشر تبقى ثابتة ومعزولة." },
    problem: { en: "\"It works on my machine\" — environments differ between developers and servers.", ar: "«شغّالة عندي» — البيئات بتختلف بين المطورين والسيرفرات." },
    youGet: { en: "Container setup and deployment scripts for consistent runs across stages.", ar: "إعداد الحاويات وسكريبتات نشر لتشغيل ثابت عبر المراحل." },
    tech: ["Docker", "Bash", "CI/CD"] },
  { icon: "cloud", title: { en: "Database schema design", ar: "تصميم قواعد البيانات" },
    what: { en: "I model relational schemas and ER diagrams in SQL Server for backend systems.", ar: "بصمم Schemas علائقية ورسومات ER على SQL Server لأنظمة الـ Backend." },
    problem: { en: "Poorly planned data models make backend systems hard to grow and maintain.", ar: "نماذج البيانات الضعيفة بتخلي الأنظمة صعبة في التوسع والصيانة." },
    youGet: { en: "A documented relational design with ER diagrams and SQL for data management.", ar: "تصميم علائقي موثّق مع رسومات ER وكود SQL لإدارة البيانات." },
    tech: ["SQL Server", "SQL", "ER Diagrams"] },
  { icon: "terminal", title: { en: "Linux & scripting", ar: "Linux والسكريبتات" },
    what: { en: "I automate routine Linux administration tasks with Bash and Python.", ar: "بأتمت مهام إدارة Linux الروتينية بـ Bash و Python." },
    problem: { en: "Routine server work eats time and is easy to get wrong by hand.", ar: "شغل السيرفرات الروتيني بيضيّع وقت وسهل يتعمل غلط يدويًا." },
    youGet: { en: "Scripts that run the routine work the same way every time.", ar: "سكريبتات بتنفّذ الشغل الروتيني بنفس الطريقة كل مرة." },
    tech: ["Linux", "Bash", "Python"] },
];

const PROJECTS = [
  { cover: "assets/projects/devops-cover.svg",
    title: { en: "Automated Cloud Infrastructure & Deployment", ar: "بنية سحابية ونشر مؤتمت" },
    category: { en: "DevOps · Ansible · Docker", ar: "DevOps · Ansible · Docker" },
    badge: false,
    problem: { en: "Setting up servers and development environments manually is slow and inconsistent across stages.", ar: "تجهيز السيرفرات وبيئات التطوير يدويًا بطيء وغير ثابت بين المراحل." },
    role: { en: "I designed and implemented the automation.", ar: "صمّمت ونفّذت الأتمتة." },
    solution: { en: [
        "Designed and implemented Ansible playbooks to automate server configuration and environment setup.",
        "Configured Docker containers to provide consistent and isolated development environments.",
        "Created deployment scripts to improve consistency across different development stages." ],
      ar: [
        "تصميم وتنفيذ Playbooks بـ Ansible لأتمتة ضبط السيرفرات وتجهيز البيئة.",
        "ضبط حاويات Docker لتوفير بيئات تطوير ثابتة ومعزولة.",
        "إنشاء سكريبتات نشر لتحسين الثبات بين مراحل التطوير." ] },
    tech: ["Ansible", "Docker", "YAML", "Jinja2", "Bash"],
    result: { en: "Reduced environment setup time by approximately 40% through infrastructure automation.", ar: "تقليل وقت تجهيز البيئة بنحو ٤٠٪ عن طريق أتمتة البنية التحتية." },
    links: { repo: "#", demo: null } },
  { cover: "assets/projects/devops-cover.svg",
    title: { en: "Database Schema & Application Architecture", ar: "تصميم قاعدة البيانات ومعمارية التطبيق" },
    category: { en: "Databases · SQL Server · Python", ar: "قواعد البيانات · SQL Server · Python" },
    badge: false,
    problem: { en: "Complex backend software systems need a well-structured relational data layer.", ar: "أنظمة الـ Backend المعقدة محتاجة طبقة بيانات علائقية منظمة." },
    role: { en: "I modeled the schemas and wrote the SQL and data-processing code.", ar: "نمذجت الـ Schemas وكتبت كود SQL ومعالجة البيانات." },
    solution: { en: [
        "Designed and modeled relational database schemas and ER diagrams using SQL Server.",
        "Developed database structures for complex backend software systems and applied SQL for data management.",
        "Integrated predictive algorithms and data-processing models using Python." ],
      ar: [
        "تصميم ونمذجة Schemas علائقية ورسومات ER باستخدام SQL Server.",
        "تطوير هياكل قواعد بيانات لأنظمة Backend معقدة وتطبيق SQL لإدارة البيانات.",
        "دمج خوارزميات تنبؤية ونماذج معالجة بيانات باستخدام Python." ] },
    tech: ["SQL Server", "SQL", "ER Diagrams", "Python"],
    result: { en: "Relational schemas and ER diagrams for complex backend systems, with SQL data management and Python data-processing models.", ar: "Schemas علائقية ورسومات ER لأنظمة Backend معقدة، مع إدارة بيانات بـ SQL ونماذج معالجة بيانات بـ Python." },
    links: { repo: "#", demo: null } },
];

const ACHIEVEMENTS = [];

const CERTIFICATIONS = [
  { title: { en: "DevOps & Cloud Infrastructure Training", ar: "تدريب DevOps والبنية التحتية السحابية" },
    issuer: { en: "Infrastructure automation, Ansible, Docker, containerization, deployment workflows", ar: "أتمتة البنية التحتية وAnsible وDocker والحاويات وسير النشر" },
    date: { en: "Hands-on training", ar: "تدريب عملي" }, meta: [], image: "assets/brand/logo.svg", verifyUrl: null },
  { title: { en: "Computer Networking Fundamentals", ar: "أساسيات شبكات الحاسب" },
    issuer: { en: "Cisco CCNA principles, network administration, bandwidth management", ar: "مبادئ Cisco CCNA وإدارة الشبكات وإدارة عرض النطاق" },
    date: { en: "Training", ar: "تدريب" }, meta: [], image: "assets/brand/logo.svg", verifyUrl: null },
];

const NAV_SECTIONS = [
  ["home",      { en: "Home",      ar: "الرئيسية" }],
  ["about",     { en: "About",     ar: "نبذة" }],
  ["education", { en: "Education", ar: "التعليم" }],
  ["skills",    { en: "Skills",    ar: "المهارات" }],
  ["services",  { en: "Services",  ar: "الخدمات" }],
  ["projects",  { en: "Projects",  ar: "المشاريع" }],
  ["contact",   { en: "Contact",   ar: "تواصل" }],
];
