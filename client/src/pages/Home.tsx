import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardList,
  Database,
  Download,
  ExternalLink,
  FileSpreadsheet,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MousePointer2,
  Network,
  Phone,
  Send,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type FormEvent,
} from "react";
import * as THREE from "three";
import { toast } from "sonner";

type IconType = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

type SkillGroup = {
  label: string;
  title: string;
  icon: IconType;
  skills: string[];
  accent: string;
};

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certificates", "certificates"],
  ["Contact", "contact"],
];

const skillGroups: SkillGroup[] = [
  {
    label: "01 / ANALYTICS",
    title: "Turning data into direction",
    icon: BarChart3,
    skills: [
      "SQL (MySQL)",
      "Power BI",
      "Microsoft Excel",
      "Data Cleaning",
      "KPI Design",
      "Dashboarding",
    ],
    accent: "lime",
  },
  {
    label: "02 / BUSINESS ANALYSIS",
    title: "Making requirements clear",
    icon: ClipboardList,
    skills: [
      "Requirement Gathering",
      "BRD",
      "FRD",
      "Process Mapping",
      "User Stories",
      "Gap Analysis",
    ],
    accent: "blue",
  },
  {
    label: "03 / DELIVERY",
    title: "Keeping teams aligned",
    icon: Network,
    skills: [
      "Agile",
      "Scrum",
      "Jira",
      "Stakeholder Management",
      "UAT Support",
      "Documentation",
    ],
    accent: "violet",
  },
];

const projects = [
  {
    number: "01",
    type: "POWER BI / BUSINESS INTELLIGENCE",
    title: "Retail Performance Command Center",
    description:
      "A dummy executive dashboard concept for tracking revenue, margin, inventory movement, and regional sales performance.",
    tags: ["Power BI", "DAX", "Data Storytelling"],
    metric: "+24.8%",
    metricLabel: "visibility uplift",
    chart: [32, 48, 42, 68, 61, 77, 91],
    accent: "lime",
  },
  {
    number: "02",
    type: "SQL / DATA ANALYSIS",
    title: "Customer Retention Lens",
    description:
      "A dummy cohort analysis that translates customer behavior into clear retention signals for product and growth teams.",
    tags: ["MySQL", "Cohort Analysis", "Excel"],
    metric: "3.2×",
    metricLabel: "faster insight cycle",
    chart: [76, 61, 67, 49, 56, 38, 43],
    accent: "blue",
  },
  {
    number: "03",
    type: "BUSINESS ANALYSIS / AGILE",
    title: "Service Workflow Redesign",
    description:
      "A dummy BA case study mapping current-state friction into a prioritized future-state workflow and delivery backlog.",
    tags: ["BRD", "FRD", "Jira"],
    metric: "18",
    metricLabel: "requirements clarified",
    chart: [28, 33, 49, 44, 63, 71, 84],
    accent: "violet",
  },
  {
    number: "04",
    type: "EXCEL / OPERATIONS ANALYSIS",
    title: "Operations Capacity Planner",
    description:
      "A dummy planning model that connects demand, staffing capacity, and service levels into one decision-ready operating view.",
    tags: ["Excel", "Scenario Planning", "KPIs"],
    metric: "91%",
    metricLabel: "planning confidence",
    chart: [41, 55, 48, 76, 68, 83, 94],
    accent: "amber",
  },
  {
    number: "05",
    type: "REQUIREMENTS / PRODUCT ANALYSIS",
    title: "Product Discovery Blueprint",
    description:
      "A dummy product discovery exercise translating user pain points into prioritized requirements, acceptance criteria, and release slices.",
    tags: ["User Stories", "BRD", "Prioritization"],
    metric: "12",
    metricLabel: "high-value stories",
    chart: [24, 38, 57, 52, 72, 65, 88],
    accent: "coral",
  },
];

const certificates = [
  {
    title: "Business Analysis Foundations",
    issuer: "Dummy Institute of Business Analysis",
    year: "2025",
    code: "BA / 001",
  },
  {
    title: "Power BI Data Analyst Pathway",
    issuer: "Dummy Analytics Academy",
    year: "2025",
    code: "BI / 014",
  },
  {
    title: "Agile & Scrum Essentials",
    issuer: "Dummy Agile Learning",
    year: "2024",
    code: "AG / 008",
  },
];

function OrbitScene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <group ref={group} rotation={[0.18, -0.3, 0.16]}>
      <mesh>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshStandardMaterial
          color="#d6f66e"
          emissive="#8ba834"
          emissiveIntensity={0.28}
          roughness={0.25}
          metalness={0.6}
          wireframe
        />
      </mesh>
      <mesh scale={0.48}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshStandardMaterial
          color="#b8ff53"
          emissive="#b8ff53"
          emissiveIntensity={0.65}
          roughness={0.18}
          metalness={0.5}
        />
      </mesh>
      {[0, 1, 2, 3, 4, 5].map(index => {
        const angle = (index / 6) * Math.PI * 2;
        const height = [0.85, 1.45, 1.05, 1.8, 1.26, 1.58][index];
        return (
          <mesh
            key={index}
            position={[
              Math.cos(angle) * 2.05,
              Math.sin(angle) * 0.38,
              Math.sin(angle) * 2.05,
            ]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.08, height, 0.08]} />
            <meshStandardMaterial
              color={index % 2 ? "#6fa6ff" : "#d6f66e"}
              emissive={index % 2 ? "#254d91" : "#6a802e"}
              emissiveIntensity={0.45}
            />
          </mesh>
        );
      })}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.18, 0.012, 12, 96]} />
        <meshBasicMaterial color="#d6f66e" transparent opacity={0.65} />
      </mesh>
      <mesh rotation={[0.9, 0.2, 0.3]}>
        <torusGeometry args={[1.78, 0.009, 12, 96]} />
        <meshBasicMaterial color="#5f93ff" transparent opacity={0.65} />
      </mesh>
    </group>
  );
}

function DataOrbit() {
  return (
    <div className="orbit-stage" aria-label="3D animated data visualization">
      <div className="orbit-glow" />
      <Canvas
        camera={{ position: [0, 0.2, 6.4], fov: 42 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} />
        <pointLight position={[4, 4, 5]} intensity={16} color="#d6f66e" />
        <pointLight position={[-4, -2, 2]} intensity={10} color="#608cff" />
        <Suspense fallback={null}>
          <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.35}>
            <OrbitScene />
          </Float>
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
      <div className="orbit-caption">
        <span className="status-dot" /> LIVE / ANALYTICS CORE
      </div>
      <div className="orbit-annotation orbit-annotation-top">
        DATA → DECISIONS
      </div>
      <div className="orbit-annotation orbit-annotation-bottom">
        SCROLL TO EXPLORE ↓
      </div>
    </div>
  );
}

function UniverseNodes() {
  const group = useRef<THREE.Group>(null);
  const nodes = Array.from({ length: 26 }, (_, index) => {
    const angle = (index / 26) * Math.PI * 2;
    const radius = 3.1 + (index % 4) * 0.6;
    return {
      position: [
        Math.cos(angle) * radius,
        Math.sin(angle * 1.7) * 1.65,
        Math.sin(angle) * radius,
      ] as [number, number, number],
      scale: 0.025 + (index % 4) * 0.012,
      color:
        index % 5 === 0 ? "#ff9a76" : index % 3 === 0 ? "#9c8cff" : "#61e7e1",
    };
  });

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.028;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.1, 0.006, 8, 120]} />
        <meshBasicMaterial color="#61e7e1" transparent opacity={0.42} />
      </mesh>
      <mesh rotation={[0.8, 0.2, 0.3]}>
        <torusGeometry args={[5.6, 0.004, 8, 120]} />
        <meshBasicMaterial color="#9c8cff" transparent opacity={0.24} />
      </mesh>
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position} scale={node.scale}>
          <sphereGeometry args={[1.8, 10, 10]} />
          <meshBasicMaterial color={node.color} />
        </mesh>
      ))}
      <mesh>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial
          color="#61e7e1"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>
    </group>
  );
}

function PortfolioUniverse() {
  return (
    <div className="universe-layer" aria-hidden="true">
      <div className="universe-wash" />
      <Canvas
        camera={{ position: [0, 0, 11], fov: 45 }}
        dpr={[1, 1.35]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 3, 4]} color="#61e7e1" intensity={8} />
        <pointLight position={[-4, -2, 3]} color="#9c8cff" intensity={6} />
        <Suspense fallback={null}>
          <Float speed={0.35} rotationIntensity={0.16} floatIntensity={0.22}>
            <UniverseNodes />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-meta">
        <span className="section-index">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function MiniChart({ data, accent }: { data: number[]; accent: string }) {
  return (
    <div className={`mini-chart mini-chart-${accent}`}>
      {data.map((value, index) => (
        <span key={index} style={{ height: `${value}%` }} />
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      if (cursorTrailRef.current)
        cursorTrailRef.current.style.transform = `translate3d(${event.clientX - 18}px, ${event.clientY - 18}px, 0)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSent(true);
    toast.success(
      "Message captured — this form is ready to connect to your inbox."
    );
  };

  return (
    <div className="site-shell">
      <div className="grain" />
      <PortfolioUniverse />
      <div ref={cursorTrailRef} className="cursor-trail" />
      <div ref={cursorRef} className="cursor-dot">
        <MousePointer2 size={11} strokeWidth={2.5} />
      </div>

      <header className="site-header">
        <a
          href="#home"
          className="brand-mark"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-symbol">TP</span>
          <span className="brand-copy">
            <strong>Tarun Prajapat</strong>
            <small>Business + Data Analyst</small>
          </span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map(([label, href], index) => (
            <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(value => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid" />
          <div className="hero-copy">
            <motion.div
              className="eyebrow reveal"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="status-dot" /> Open to opportunities{" "}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Clarity from
              <br />
              <em>complexity.</em>
            </motion.h1>
            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              I’m Tarun — a fresher Business &amp; Data Analyst who turns
              scattered information into decisions, teams can act on.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
            >
              <a href="#projects" className="button button-primary">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <button
                className="button button-quiet"
                type="button"
                onClick={() =>
                  toast.info(
                    "Resume download placeholder — add your PDF link here."
                  )
                }
              >
                <Download size={16} /> View resume
              </button>
            </motion.div>
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              <div>
                <strong>06+</strong>
                <span>core analyst skills</span>
              </div>
              <div>
                <strong>03</strong>
                <span>practice case studies</span>
              </div>
              <div>
                <strong>01</strong>
                <span>curious mindset</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            <DataOrbit />
          </motion.div>
          <div className="hero-scroll">
            <span>Scroll to navigate</span>
            <div className="scroll-line" />
          </div>
        </section>

        <div className="signal-strip">
          <div className="signal-track">
            {[
              "SQL / MYSQL",
              "POWER BI",
              "EXCEL",
              "AGILE",
              "SCRUM",
              "JIRA",
              "BRD",
              "FRD",
              "REQUIREMENT GATHERING",
              "SQL / MYSQL",
              "POWER BI",
              "EXCEL",
            ].map((item, index) => (
              <span key={index}>
                <i />
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="content-section about-section">
          <div className="container section-grid">
            <SectionHeading
              index="01"
              eyebrow="A little context"
              title="Analyst by skill. Problem-solver by instinct."
            >
              <p className="section-intro">
                A strong analysis is more than a neat dashboard. It is the
                shared language between a business question and a confident next
                move.
              </p>
            </SectionHeading>
            <div className="about-body">
              <p>
                As a fresher building at the intersection of business and data,
                I enjoy asking the second question, finding the signal inside
                the noise, and making complex things easier to understand.
              </p>
              <p>
                My toolkit blends SQL, Power BI, Excel, and structured BA
                practices — from requirement gathering and documentation to
                Agile delivery and stakeholder alignment.
              </p>
              <div className="about-note">
                <Sparkles size={17} />
              </div>
            </div>
          </div>
          <div className="container about-cards">
            <motion.div
              className="about-card accent-card"
              whileHover={{ y: -6 }}
            >
              <span className="card-index">A / 01</span>
              <Database size={25} />
              <strong>
                Ask better
                <br />
                questions.
              </strong>
              <small>Root cause over surface-level answers.</small>
            </motion.div>
            <motion.div className="about-card" whileHover={{ y: -6 }}>
              <span className="card-index">A / 02</span>
              <Target size={25} />
              <strong>
                Make insight
                <br />
                actionable.
              </strong>
              <small>Every chart needs a clear “so what?”</small>
            </motion.div>
            <motion.div className="about-card" whileHover={{ y: -6 }}>
              <span className="card-index">A / 03</span>
              <FileSpreadsheet size={25} />
              <strong>
                Document the
                <br />
                detail.
              </strong>
              <small>Clear BRDs, FRDs, and traceability.</small>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="content-section skills-section">
          <div className="container">
            <SectionHeading
              index="02"
              eyebrow="The toolkit"
              title="Built for the full analysis loop."
            >
              <p className="section-intro">
                From the first stakeholder conversation to the final insight,
                these are the tools I use to bring structure and momentum.
              </p>
            </SectionHeading>
            <div className="skill-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.article
                    key={group.title}
                    className={`skill-card skill-${group.accent}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="skill-top">
                      <span>{group.label}</span>
                      <Icon size={22} />
                    </div>
                    <h3>{group.title}</h3>
                    <div className="skill-list">
                      {group.skills.map(skill => (
                        <span key={skill}>
                          <Check size={13} />
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="skill-meter">
                      <span>Confidence in practice</span>
                      <div>
                        <i />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section projects-section">
          <div className="container">
            <SectionHeading
              index="03"
              eyebrow="Selected work"
              title="Practice with a point of view."
            >
              <p className="section-intro">
                Projects designed to show how I think, structure an analysis,
                and communicate outcomes.
              </p>
            </SectionHeading>
            <div className="project-list">
              {projects.map((project, index) => (
                <motion.article
                  key={project.number}
                  className={`project-card project-${project.accent}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="project-main">
                    <div className="project-number">{project.number}</div>
                    <div>
                      <span className="project-type">{project.type}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map(tag => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="project-side">
                    <MiniChart data={project.chart} accent={project.accent} />
                    <div className="project-metric">
                      <strong>{project.metric}</strong>
                      <span>{project.metricLabel}</span>
                    </div>
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() =>
                        toast.info(
                          "Project detail placeholder — connect this card to a case study page."
                        )
                      }
                    >
                      <ExternalLink size={17} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="projects-footer">
              <span>More case studies in progress</span>
              <a href="#contact">
                Request the full deck <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="process-band">
          <div className="container process-inner">
            <span className="process-label">My working rhythm</span>
            <div className="process-steps">
              <span>
                <b>01</b> Listen
              </span>
              <ArrowUpRight size={16} />
              <span>
                <b>02</b> Structure
              </span>
              <ArrowUpRight size={16} />
              <span>
                <b>03</b> Analyze
              </span>
              <ArrowUpRight size={16} />
              <span>
                <b>04</b> Communicate
              </span>
            </div>
          </div>
        </section>

        <section id="education" className="content-section education-section">
          <div className="container split-section">
            <SectionHeading
              index="04"
              eyebrow="Learning ground"
              title="Still learning. Already delivering."
            >
              <p className="section-intro">
                A fresher profile with the curiosity to keep asking, testing,
                and improving.
              </p>
            </SectionHeading>
            <div className="timeline">
              <div className="timeline-item">
                <span className="timeline-year">2021 — 2025</span>
                <div>
                  <h3>Bachelor’s Degree in Computer Science</h3>
                  <p>
                    Stani Memorial College Of Engineering & Technology · Jaipur,
                    Rajasthan
                  </p>
                  <small>
                    Focused on databases, systems thinking, and practical
                    problem-solving.
                  </small>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-year">2019 — 2021</span>
                <div>
                  <h3>Senior Secondary Education</h3>
                  <p>
                    Shree Govt. Bangur Senior Secondary School · Pali, Rajasthan
                  </p>
                  <small>Built the foundation for structured thinking.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="certificates"
          className="content-section certificates-section"
        >
          <div className="container">
            <SectionHeading
              index="05"
              eyebrow="Proof of progress"
              title="Credentials in motion."
            >
              <p className="section-intro">
                A growing shelf of certifications that supports the practical
                work.
              </p>
            </SectionHeading>
            <div className="certificate-grid">
              {certificates.map((certificate, index) => (
                <motion.article
                  key={certificate.code}
                  className="certificate-card"
                  whileHover={{ y: -5, rotate: index % 2 ? -0.3 : 0.3 }}
                >
                  <div className="certificate-seal">
                    <Sparkles size={15} />
                    <span>{certificate.code}</span>
                  </div>
                  <div className="certificate-body">
                    <span>{certificate.year}</span>
                    <h3>{certificate.title}</h3>
                    <p>{certificate.issuer}</p>
                  </div>
                  <ArrowUpRight className="certificate-arrow" size={18} />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="section-heading-meta">
                <span className="section-index">06</span>
                <span>Start a conversation</span>
              </div>
              <h2>
                Let’s make the
                <br />
                <em>next move</em> clear.
              </h2>
              <p>
                Have a role, project, or problem that needs a thoughtful
                analyst? I’d love to hear what you’re working on.
              </p>
              <div className="contact-links">
                <a href="mailto:prajapattarun7568@gmail.com">
                  <Mail size={16} /> prajapattarun7568@gmail.com{" "}
                  <ArrowUpRight size={14} />
                </a>
                <a href="tel:+917568447701">
                  <Phone size={16} /> +91 7568447701 <ArrowUpRight size={14} />
                </a>
                <div className="social-row">
                  <a
                    href="https://www.linkedin.com/in/tarun-prajapat-468298253/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={17} />
                  </a>
                  <a
                    href="https://github.com/tarunp032"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={17} />
                  </a>
                </div>
              </div>
            </div>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="form-row">
                <label>
                  <span>Your name</span>
                  <input required name="name" placeholder="Jane Smith" />
                </label>
                <label>
                  <span>Email address</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                  />
                </label>
              </div>
              <label>
                <span>What are you working on?</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about the opportunity..."
                />
              </label>
              <button
                type="submit"
                className="button button-primary form-submit"
              >
                {formSent ? (
                  <>
                    <Check size={17} /> Message ready
                  </>
                ) : (
                  <>
                    Send message <Send size={16} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2025 Tarun Prajapat</span>
          <span>
            Designed for thoughtful work <span className="footer-dot">●</span>
          </span>
          <a href="#home">
            Back to top <ChevronDown size={15} className="rotate-180" />
          </a>
        </div>
      </footer>
    </div>
  );
}
