
import React from "react";
import { motion } from "framer-motion";
function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const profile = {
  name: "Anil Kumar Pamidi",
  role: "SAP CPI Integration Consultant",
  location: "Hyderabad, India",
  email: "anil2021ak@gmail.com",
  phone: "+91 97012 72567",
  linkedin: "https://www.linkedin.com/in/anilkumar-ak2021/",
  emailSubject: "SAP CPI Opportunity - Portfolio Inquiry",
  emailBody: "Hi Anil,%0D%0A%0D%0AI came across your portfolio and would like to connect regarding an SAP CPI opportunity.%0D%0A%0D%0AThanks,",
  emailLink: "mailto:anil2021ak@gmail.com?subject=SAP%20CPI%20Opportunity%20-%20Portfolio%20Inquiry&body=Hi%20Anil%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20SAP%20CPI%20opportunity.%0D%0A%0D%0AThanks%2C",
  gmailLink: "https://mail.google.com/mail/?view=cm&fs=1&to=anil2021ak@gmail.com&su=SAP%20CPI%20Opportunity%20-%20Portfolio%20Inquiry&body=Hi%20Anil%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20SAP%20CPI%20opportunity.%0D%0A%0D%0AThanks%2C",
  summary:
    "SAP CPI / SAP BTP Integration Consultant with 3.5+ years of experience building secure, scalable integrations across SAP SuccessFactors, SAP and non-SAP systems using iFlows, REST, SOAP, OData, SFTP, XML, JSON, CSV, Groovy, XSLT, and enterprise integration patterns.",
};

const skills = [
  "SAP CPI",
  "SAP BTP Integration Suite",
  "iFlow Development",
  "SuccessFactors EC",
  "CompoundEmployee API",
  "OData API",
  "REST / SOAP",
  "SFTP",
  "JMS Queue",
  "ProcessDirect",
  "SMTP Adapter",
  "Exception Handling",
  "Exception Subprocess",
  "Groovy Script",
  "XSLT Mapping",
  "Message Mapping",
  "Value Mapping",
  "Content Modifier",
  "Router",
  "Splitter",
  "Multicast",
  "XML / JSON / CSV",
  "OAuth 2.0",
  "PGP Encryption",
  "Message Monitoring",
  "Cloud Connector",
  "API Integrations",
  "SuccessFactors Integrations",
  "SQL",
  "HTML / CSS",
  "JavaScript",
];

const iconPaths = {
  arrow: "M5 12h14M13 5l7 7-7 7",
  mail: "M4 6h16v12H4z M4 7l8 6 8-6",
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.64a16 16 0 0 0 6.36 6.36l1.21-1.21a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z",
  map: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z M12 10a2 2 0 1 0 0-.01",
  link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-5",
  workflow: "M6 3v6h6V3H6z M12 6h4a2 2 0 0 1 2 2v3 M18 11v4 M15 15h6v6h-6z M6 15h6v6H6z M12 18h3",
  server: "M4 6h16v5H4z M4 13h16v5H4z M7 8h.01 M7 15h.01",
  file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h6",
  cloud: "M18 18H7a5 5 0 1 1 1.1-9.88A7 7 0 0 1 21 12a4 4 0 0 1-3 6z",
  code: "M16 18l6-6-6-6 M8 6l-6 6 6 6",
  check: "M20 6L9 17l-5-5",
  briefcase: "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1 M3 7h18v12H3z M3 12h18",
  layers: "M12 2l9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 17l9 5 9-5",
  zap: "M13 2L3 14h8l-1 8 11-14h-8z",
  database: "M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z M4 6v6c0 2.2 3.6 4 8 4s8-1.8 8-4V6 M4 12v6c0 2.2 3.6 4 8 4s8-1.8 8-4v-6",
  monitor: "M3 4h18v12H3z M8 20h8 M12 16v4",
  linkedin: "M6 9h3v10H6z M7.5 5.5a1.7 1.7 0 1 0 0 .01 M12 9h3v1.4c.6-.9 1.5-1.6 3-1.6 2.2 0 4 1.4 4 4.6V19h-3v-5c0-1.5-.7-2.4-2-2.4s-2 1-2 2.4v5h-3z",
};

function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={iconPaths[name] || iconPaths.check} />
    </svg>
  );
}

const expertise = [
  {
    icon: "workflow",
    title: "End-to-End iFlow Development",
    text: "Designing, developing, deploying, and supporting integration flows with routing, transformation, validation, monitoring, and exception handling.",
  },
  {
    icon: "layers",
    title: "SAP SuccessFactors Integrations",
    text: "Employee Central integrations using OData and CompoundEmployee APIs for full load, delta load, payroll, onboarding, and employee master data scenarios.",
  },
  {
    icon: "file",
    title: "Data Transformation",
    text: "Transforming complex hierarchical XML into target structures using Message Mapping, XSLT, XML-to-CSV, JSON-to-XML, and Groovy-based custom logic.",
  },
  {
    icon: "shield",
    title: "Security & Reliability",
    text: "Secure communication using OAuth 2.0, certificate-based authentication, PGP encryption, public key SFTP, and structured error handling.",
  },
  {
    icon: "monitor",
    title: "Monitoring & AMS Support",
    text: "Troubleshooting failed messages, mapping issues, SFTP/API failures, timeout issues, missing data, and production support incidents using CPI monitoring tools.",
  },
  {
    icon: "cloud",
    title: "Cloud & On-Prem Connectivity",
    text: "Experience with cloud integrations and exposure to Cloud Connector-enabled scenarios for secure connectivity between SAP BTP/CPI and on-premise SAP systems.",
  },
];

const projects = [
  // {
  //   title: "SuccessFactors EC to Payroll Vendor SFTP Integration",
  //   type: "SAP to Non-SAP | File-Based Integration",
  //   stack: ["CompoundEmployee", "Looping Process Call", "XSLT", "XML to CSV", "PGP", "SFTP"],
  //   description:
  //     "Built a payroll integration to send employee payroll and compensation data from SuccessFactors Employee Central to an external payroll vendor in encrypted CSV format.",
  //   points: [
  //     "Implemented delta handling using last_modified_on and maintained last successful run logic.",
  //     "Flattened hierarchical CompoundEmployee XML into payroll-ready CSV using XSLT.",
  //     "Used PGP encryption and SFTP public key authentication for secure file delivery.",
  //     "Handled large employee volumes with pagination and Looping Process Call.",
  //   ],
  // }
  { title: "SuccessFactors EC to External SFTP Integration", 
    type: "SAP to Non-SAP | Full File CSV Integration", 
    stack: ["CompoundEmployee API", "XSLT Mapping", "Groovy Script", "XML to CSV", "PGP Encryption", "SFTP Adapter",], 
    description: "Developed an end-to-end SAP CPI integration to extract employee indicative data from SuccessFactors Employee Central and securely deliver encrypted CSV files to the Manulife SFTP server.",
     points: ["Used CompoundEmployee API and Looping Process Call to handle large employee data volumes and pagination processing.", "Transformed hierarchical XML into target CSV structure using XSLT mapping and implemented trailer record generation logic.", 
      "Validated mandatory employee fields using Groovy scripts and converted payloads using XML to CSV converter.", "Implemented PGP encryption, SFTP secure transfer, Exception Subprocess, and automated email alert handling for production support.",], 
    },
  {
    title: "SuccessFactors EC to Active Directory Provisioning",
    type: "API-Based Integration",
    stack: ["SuccessFactors OData", "REST", "Groovy", "Message Mapping", "OAuth 2.0"],
    description:
      "Developed an integration to automatically create or update employee accounts in an Active Directory provisioning system based on employee data changes.",
    points: [
      "Fetched changed employee records using OData API and delta filters.",
      "Validated mandatory fields like email, employee ID, and department using Groovy.",
      "Skipped invalid records and logged them separately to avoid complete interface failure.",
      "Sent transformed records to target REST API using Request-Reply pattern.",
    ],
  },
  {
    title: "Third-Party HR System to SuccessFactors Upsert",
    type: "Inbound Integration",
    stack: ["REST Sender", "JSON to XML", "Message Mapping", "OData Upsert", "Exception Subprocess"],
    description:
      "Created an inbound integration where employee data from a third-party HR system is validated, transformed, and upserted into SuccessFactors Employee Central.",
    points: [
      "Accepted employee payload from external REST API in JSON format.",
      "Converted JSON to XML and mapped fields into SuccessFactors OData upsert structure.",
      "Implemented mandatory-field validation and detailed error notification logic.",
      "Generated support-friendly logs for failed upsert records.",
    ],
  },
  {
    title: "SuccessFactors EC to SAP S/4HANA Employee Replication",
    type: "SAP to SAP Integration",
    stack: ["OData / CompoundEmployee", "Message Mapping", "SOAP / IDoc", "Cloud Connector", "CPI Monitoring"],
    description:
      "Supported employee master and organizational data replication from SuccessFactors Employee Central to SAP S/4HANA for downstream finance, workflow, reporting, and authorization needs.",
    points: [
      "Transformed employee, department, manager, cost center, and job data into SAP target structures.",
      "Handled delta synchronization using lastModifiedOn-based filtering.",
      "Worked with Cloud Connector-enabled connectivity for on-premise S/4HANA access.",
      "Monitored message failures and coordinated with functional/Basis teams during issue resolution.",
    ],
  },
];

const experience = [
  {
    company: "Lab-Informatics",
    role: "Software Engineer",
    focus: "SAP CPI Integration Development & AMS Support",
    period: "Dec 2024 – Present",
    client: "Bentley Systems",
    summary:
      "Working as an SAP CPI Integration Consultant, focusing on enterprise integration development, SuccessFactors connectivity, production monitoring, and AMS support for business-critical interfaces.",
    impact: [
      "Delivered and enhanced end-to-end SAP CPI integrations across API-based and file-based scenarios.",
      "Supported production incidents, monitoring activities, and AMS ticket resolution for active integration interfaces.",
      "Worked with business and technical teams to analyze failures, validate fixes, and support smooth interface operations.",
    ],
    tools: ["SAP CPI", "SAP BTP", "SuccessFactors EC", "OData", "CompoundEmployee", "REST", "SOAP", "SFTP", "Groovy", "XSLT", "Message Mapping", "Exception Subprocess"],
    responsibilities: [
      "Designed and enhanced SAP CPI iFlows using integration patterns such as Request-Reply, Router, Splitter, Content Modifier, ProcessDirect, and Exception Subprocess.",
      "Worked on SuccessFactors Employee Central integrations using OData and CompoundEmployee APIs for employee master data extraction and delta processing.",
      "Implemented payload transformations between XML, JSON, and CSV using Message Mapping, XSLT, and Groovy scripting based on target system requirements.",
      "Configured and supported SFTP, REST, SOAP, and OData adapter-based integrations with authentication, connectivity, and payload validation checks.",
      "Handled AMS support tickets by reviewing message monitoring, MPL logs, failed payloads, adapter errors, mapping failures, and runtime exceptions.",
      "Performed production support activities including message reprocessing, root-cause analysis, error documentation, validation after fixes, and coordination with internal teams.",
    ],
  },
  {
    company: "Cognerium Robotic Labs",
    role: "Angular Developer",
    focus: "Frontend Development & API Integration",
    period: "Aug 2024 – Nov 2024",
    client: "Enterprise Web Applications",
    summary:
      "Worked on Angular-based web application development with focus on responsive UI, API integration, defect fixing, and application support.",
    impact: [
      "Built reusable UI components and improved application screens based on business requirements.",
      "Integrated frontend modules with REST APIs and validated request/response behavior.",
      "Supported debugging and defect fixing during development and testing phases.",
    ],
    tools: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "REST API", "UI Debugging"],
    responsibilities: [
      "Developed responsive Angular components and improved existing UI screens for better usability and maintainability.",
      "Integrated REST APIs with frontend pages and handled data binding, validation, user actions, and error scenarios.",
      "Worked on UI defect fixes related to layout alignment, browser behavior, data display, and form validation issues.",
      "Collaborated with backend teams to verify API payloads, test responses, and troubleshoot integration issues between UI and services.",
    ],
  },
  {
    company: "Nuacem AI",
    role: "Software Engineer",
    focus: "SAP CPI Interface Support & Enhancements",
    period: "Feb 2024 – Jun 2024",
    client: "SmithGroup",
    summary:
      "Supported SAP CPI interfaces by handling monitoring, troubleshooting, minor enhancements, transformation fixes, and support ticket resolution.",
    impact: [
      "Maintained active CPI interfaces and supported day-to-day integration operations.",
      "Resolved support issues related to payload transformation, adapter failures, and message processing errors.",
      "Improved interface stability through mapping fixes, routing updates, and better exception handling.",
    ],
    tools: ["SAP CPI", "Groovy", "XML", "JSON", "CSV", "SFTP", "REST", "Message Monitoring", "Exception Subprocess"],
    responsibilities: [
      "Monitored SAP CPI message processing and analyzed failed messages using message logs, payload traces, and runtime error details.",
      "Worked on XML, JSON, and CSV transformation issues and validated payload structure against target system expectations.",
      "Handled AMS tickets by identifying root causes for mapping issues, adapter errors, missing data, and connectivity failures.",
      "Implemented minor iFlow enhancements including routing changes, mapping corrections, content modifier updates, and exception handling improvements.",
      "Prepared clear issue notes, test observations, and handoff updates for deployment, validation, and support closure activities.",
    ],
  },
  {
    company: "Lab-Informatics",
    role: "Software Engineer",
    focus: "Integration Development & Application Support",
    period: "Jun 2022 – Dec 2023",
    client: "Abiomed",
    summary:
      "Worked on integration flow development, testing, payload validation, and troubleshooting for file-based and API-based integration scenarios.",
    impact: [
      "Supported early-stage CPI integration development and application support activities.",
      "Validated payload transformations and helped troubleshoot interface failures during testing.",
      "Built a strong foundation in SAP CPI, message processing, routing, and integration support.",
    ],
    tools: ["SAP CPI", "XML", "JSON", "REST", "SOAP", "SFTP", "Message Mapping", "Testing"],
    responsibilities: [
      "Built and supported CPI integration flows involving API-based and file-based data exchange between systems.",
      "Worked on mapping and transformation requirements by validating input payloads, target payloads, and field-level conversion logic.",
      "Supported testing activities by checking expected outputs, verifying target data, and documenting observed issues.",
      "Assisted in troubleshooting integration failures related to mapping, authentication, connectivity, file processing, and payload formatting.",
    ],
  },
];

const highlights = [
  "3.5+ years SAP CPI / SAP BTP Integration experience",
  "Delivered end-to-end SAP CPI integrations",
  "Hands-on AMS support and production ticket handling",
  "Strong SuccessFactors EC integration knowledge",
  "Comfortable with XML, JSON, CSV, XSLT, and Groovy",
];

const valueCards = [
  {
    icon: "code",
    title: "Developer Mindset",
    text: "Can build clean CPI solutions from requirement understanding to deployment support.",
  },
  {
    icon: "database",
    title: "Data-Focused",
    text: "Comfortable handling employee data, effective-dated records, delta logic, and large payload scenarios.",
  },
  {
    icon: "shield",
    title: "Production-Aware",
    text: "Understands monitoring, error handling, alerts, reprocessing, security, and support ownership.",
  },
];

function runPortfolioDataTests() {
  const requiredProfileFields = ["name", "role", "email", "phone", "linkedin", "summary", "emailLink"];
  requiredProfileFields.forEach((field) => {
    if (!profile[field]) {
      throw new Error(`Portfolio test failed: missing profile.${field}`);
    }
  });

  if (!profile.emailLink.startsWith("mailto:")) {
    throw new Error("Portfolio test failed: emailLink must use mailto format.");
  }

  if (!profile.gmailLink.startsWith("https://mail.google.com/")) {
    throw new Error("Portfolio test failed: gmailLink must use Gmail compose URL.");
  }

  if (!profile.linkedin.startsWith("https://")) {
    throw new Error("Portfolio test failed: LinkedIn URL must be a secure HTTPS link.");
  }

  if (skills.length < 10) {
    throw new Error("Portfolio test failed: expected at least 10 skills.");
  }

  if (projects.length < 3) {
    throw new Error("Portfolio test failed: expected at least 3 featured projects.");
  }

  projects.forEach((project) => {
    if (!project.title || !project.description || project.points.length === 0 || project.stack.length === 0) {
      throw new Error(`Portfolio test failed: incomplete project data for ${project.title || "unknown project"}.`);
    }
  });

  if (experience.length < 3) {
    throw new Error("Portfolio test failed: expected at least 3 experience entries.");
  }

  if (typeof navigator !== "undefined" && navigator.clipboard) {
    // Clipboard is intentionally not used because many preview/sandbox environments block it.
  }

  return true;
}

runPortfolioDataTests();

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{subtitle}</p>}
    </div>
  );
}

function Chip({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{children}</span>;
}

function ContactPill({ icon, label, value, href }) {
  const content = (
    <>
      <Icon name={icon} size={16} />
      <span className="font-medium">{label}:</span>
      <span>{value}</span>
    </>
  );

  if (href) {
    return (
      <a className="inline-flex items-center gap-2 hover:text-cyan-300" href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <span className="inline-flex items-center gap-2">{content}</span>;
}

function BrandLogo() {
  return (
    <button type="button" onClick={() => scrollToSection("top")} className="group flex items-center gap-3" aria-label="Anil Kumar Pamidi Portfolio Home">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300 via-sky-400 to-indigo-500 shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
        <div className="absolute inset-1 rounded-xl bg-slate-950/90" />
        <span className="relative text-lg font-black tracking-tight text-white">AK</span>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border border-slate-950 bg-emerald-300" />
      </div>
      <div className="hidden text-left leading-tight sm:block">
        <div className="text-base font-black tracking-tight text-white">Anil Kumar</div>
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">SAP CPI Consultant</div>
      </div>
    </button>
  );
}

function scrollToSection(id) {
  if (typeof document === "undefined") return;
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function openExternalLink(url) {
  if (typeof window === "undefined") return;
  window.open(url, "_blank", "noopener,noreferrer");
}

function openEmail() {
  openExternalLink(profile.gmailLink);
}

function handleHireClick() {
  scrollToSection("contact");
}

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <BrandLogo />
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <button type="button" className="hover:text-white" onClick={() => scrollToSection("skills")}>Skills</button>
          <button type="button" className="hover:text-white" onClick={() => scrollToSection("projects")}>Projects</button>
          <button type="button" className="hover:text-white" onClick={() => scrollToSection("experience")}>Experience</button>
          <button type="button" className="hover:text-white" onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
        <button
          type="button"
          onClick={handleHireClick}
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:translate-y-0"
        >
          Hire Me
        </button>
      </header>

      <section id="top" className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 pb-20 pt-10 md:grid-cols-[1.08fr_0.92fr] md:pb-24 md:pt-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Icon name="zap" size={16} /> Available for SAP CPI Integration Roles
          </div>
          {/* <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
            SAP CPI Integration Consultant building secure enterprise integrations.
          </h1> */}

          <h1 className="max-w-5xl bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-5xl font-black leading-[0.95] tracking-[-0.04em] text-transparent md:text-8xl">
          Developing end-to-end SAP CPI integrations with monitoring, transformation, and support expertise.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I design and support SAP CPI iFlows for SuccessFactors, SAP and non-SAP systems using OData, SOAP, REST, SFTP, Groovy, XSLT, mappings, monitoring, and exception handling.
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-3xl font-black text-cyan-300">3.5+</p>
              <p className="mt-1 text-sm text-slate-400">Years Experience</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-3xl font-black text-cyan-300">E2E</p>
              <p className="mt-1 text-sm text-slate-400">CPI Integrations</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 col-span-2 sm:col-span-1">
              <p className="text-3xl font-black text-cyan-300">AMS</p>
              <p className="mt-1 text-sm text-slate-400">Support Tickets</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects <Icon name="arrow" className="ml-2" size={18} />
            </button>
            <button
              type="button"
              onClick={() => openExternalLink(profile.linkedin)}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
            >
              LinkedIn <Icon name="link" className="ml-2" size={18} />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <ContactPill icon="map" label="Location" value={profile.location} />
            <ContactPill icon="mail" label="Email" value={profile.email} href={profile.gmailLink} />
            <ContactPill icon="phone" label="Phone" value={profile.phone} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <Card className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/10 bg-gradient-to-br from-slate-900/95 to-[#071124] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <CardContent className="p-7">
              <div className="rounded-[2rem] border border-white/5 bg-[#020817]/90 p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-cyan-300 to-blue-500 text-3xl font-black text-slate-950 shadow-lg shadow-cyan-500/30">AK</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                    <p className="text-cyan-200">{profile.role}</p>
                  </div>
                </div>
                <div className="mt-7 space-y-4">
                  {highlights.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200">
                      <Icon name="check" className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="skills" className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Skills" title="Core Technical Stack" subtitle="A focused integration skillset covering SAP CPI development, SuccessFactors APIs, transformation, security, monitoring, and support." />
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => <Chip key={skill}>{skill}</Chip>)}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Expertise" title="What I Can Deliver" subtitle="Practical SAP CPI capabilities built around real integration scenarios and production support needs." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <Card key={item.title} className="rounded-3xl border-white/10 bg-white/[0.06] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-300">
                    <Icon name={item.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 bg-gradient-to-b from-[#020617] to-[#071226] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Projects" title="Featured Integration Work" subtitle="Selected SAP CPI project scenarios that show practical experience across file-based, API-based, SAP-to-SAP, and inbound integrations." />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-slate-900/90 to-[#07111f] shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-cyan-500/10">
                <CardContent className="p-7">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.type}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <Icon name="server" className="text-cyan-300" size={24} />
                  </div>
                  <p className="leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => <Chip key={item}>{item}</Chip>)}
                  </div>
                  <ul className="mt-6 space-y-3">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <Icon name="check" className="mt-0.5 shrink-0 text-emerald-300" size={17} /> {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Experience"
            title="Professional Experience"
            subtitle="A role-wise view of my integration delivery, AMS support, monitoring, troubleshooting, and production support responsibilities."
          />

          <div className="relative space-y-8">
            <div className="absolute left-4 top-2 hidden h-full w-px bg-gradient-to-b from-cyan-300/50 via-white/10 to-transparent lg:block" />

            {experience.map((job) => (
              <Card key={`${job.company}-${job.period}`} className="relative rounded-[2rem] border border-white/10 bg-white/[0.055] backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.075]">
                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                    <aside className="relative">
                      <div className="mb-5 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-300 lg:flex">
                        <Icon name="briefcase" size={16} />
                      </div>
                      <p className="text-sm font-semibold text-cyan-300">{job.period}</p>
                      <h3 className="mt-3 text-2xl font-black text-white">{job.company}</h3>
                      <p className="mt-2 text-sm font-semibold text-slate-200">{job.role}</p>
                      <p className="mt-2 text-sm text-cyan-100">{job.focus}</p>
                      <p className="mt-4 inline-flex rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-400">
                        Client: {job.client}
                      </p>
                    </aside>

                    <div>
                      <p className="text-base leading-8 text-slate-300">{job.summary}</p>

                      <div className="mt-6 grid gap-3 md:grid-cols-3">
                        {job.impact.map((item) => (
                          <div key={item} className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.06] p-4 text-sm leading-6 text-slate-200">
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.tools.map((tool) => (
                          <span key={tool} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-cyan-100">
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Key Responsibilities</p>
                        <div className="grid gap-3 md:grid-cols-2">
                          {job.responsibilities.map((point) => (
                            <div key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                              <Icon name="check" className="mt-0.5 shrink-0 text-cyan-300" size={17} />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Value" title="Why Recruiters Should Notice This Profile" />
          <div className="grid gap-5 md:grid-cols-3">
            {valueCards.map((item) => (
              <Card key={item.title} className="rounded-3xl border-white/10 bg-slate-950/70">
                <CardContent className="p-7 text-center">
                  <Icon name={item.icon} className="mx-auto text-cyan-300" size={34} />
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-cyan-400/10 bg-gradient-to-br from-[#081120] via-[#0b1327] to-[#071426] p-10 text-center shadow-[0_0_100px_rgba(6,182,212,0.15)] backdrop-blur-2xl md:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Let’s build reliable integrations together.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Open to SAP CPI Integration Consultant roles involving SAP BTP Integration Suite, SuccessFactors, APIs, SFTP, transformations, and production support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919701272567"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-7 py-3 text-base font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:text-white"
            >
              <Icon name="phone" className="mr-2" size={18} /> {profile.phone}
            </a>
            <button
              type="button"
              onClick={openEmail}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:translate-y-0"
            >
              <Icon name="mail" className="mr-2" size={18} /> Email Me
            </button>
            <button
              type="button"
              onClick={() => openExternalLink(profile.linkedin)}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
            >
              <Icon name="linkedin" className="mr-2" size={18} /> LinkedIn
            </button>
          </div>

        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 bg-black/20 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built for SAP CPI Integration opportunities.
      </footer>
    </main>
  );
}


















// import React from "react";
// import { motion } from "framer-motion";
// function Card({ children, className = "" }) {
//   return <div className={className}>{children}</div>;
// }

// function CardContent({ children, className = "" }) {
//   return <div className={className}>{children}</div>;
// }

// const profile = {
//   name: "Anil Kumar Pamidi",
//   role: "SAP CPI Integration Consultant",
//   location: "Hyderabad, India",
//   email: "anil2021ak@gmail.com",
//   phone: "+91 97012 72567",
//   linkedin: "https://www.linkedin.com/in/anilkumar-ak2021/",
//   emailSubject: "SAP CPI Opportunity - Portfolio Inquiry",
//   emailBody: "Hi Anil,%0D%0A%0D%0AI came across your portfolio and would like to connect regarding an SAP CPI opportunity.%0D%0A%0D%0AThanks,", 
//   emailLink: "mailto:anil2021ak@gmail.com?subject=SAP%20CPI%20Opportunity%20-%20Portfolio%20Inquiry&body=Hi%20Anil%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20SAP%20CPI%20opportunity.%0D%0A%0D%0AThanks%2C",
//   gmailLink: "https://mail.google.com/mail/?view=cm&fs=1&to=anil2021ak@gmail.com&su=SAP%20CPI%20Opportunity%20-%20Portfolio%20Inquiry&body=Hi%20Anil%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20SAP%20CPI%20opportunity.%0D%0A%0D%0AThanks%2C",
//   summary:
//     "SAP CPI / SAP BTP Integration Consultant with 3.5+ years of experience building secure, scalable integrations across SAP SuccessFactors, SAP and non-SAP systems using iFlows, REST, SOAP, OData, SFTP, XML, JSON, CSV, Groovy, XSLT, and enterprise integration patterns.",
// };

// const skills = [
//   "SAP CPI",
//   "SAP BTP Integration Suite",
//   "iFlow Development",
//   "SuccessFactors EC",
//   "CompoundEmployee API",
//   "OData API",
//   "REST / SOAP",
//   "SFTP",
//   "JMS Queue",
//   "ProcessDirect",
//   "SMTP Adapter",
//   "Exception Handling",
//   "Exception Subprocess",
//   "Groovy Script",
//   "XSLT Mapping",
//   "Message Mapping",
//   "Value Mapping",
//   "Content Modifier",
//   "Router",
//   "Splitter",
//   "Multicast",
//   "XML / JSON / CSV",
//   "OAuth 2.0",
//   "PGP Encryption",
//   "Message Monitoring",
//   "Cloud Connector",
//   "API Integrations",
//   "SuccessFactors Integrations",
//   "SQL",
//   "HTML / CSS",
//   "JavaScript",
// ];

// const iconPaths = {
//   arrow: "M5 12h14M13 5l7 7-7 7",
//   mail: "M4 6h16v12H4z M4 7l8 6 8-6",
//   phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.6a2 2 0 0 1-.45 2.11L8 9.64a16 16 0 0 0 6.36 6.36l1.21-1.21a2 2 0 0 1 2.11-.45c.83.28 1.7.48 2.6.6A2 2 0 0 1 22 16.92z",
//   map: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z M12 10a2 2 0 1 0 0-.01",
//   link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
//   shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-5",
//   workflow: "M6 3v6h6V3H6z M12 6h4a2 2 0 0 1 2 2v3 M18 11v4 M15 15h6v6h-6z M6 15h6v6H6z M12 18h3",
//   server: "M4 6h16v5H4z M4 13h16v5H4z M7 8h.01 M7 15h.01",
//   file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h6",
//   cloud: "M18 18H7a5 5 0 1 1 1.1-9.88A7 7 0 0 1 21 12a4 4 0 0 1-3 6z",
//   code: "M16 18l6-6-6-6 M8 6l-6 6 6 6",
//   check: "M20 6L9 17l-5-5",
//   briefcase: "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1 M3 7h18v12H3z M3 12h18",
//   layers: "M12 2l9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 17l9 5 9-5",
//   zap: "M13 2L3 14h8l-1 8 11-14h-8z",
//   database: "M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z M4 6v6c0 2.2 3.6 4 8 4s8-1.8 8-4V6 M4 12v6c0 2.2 3.6 4 8 4s8-1.8 8-4v-6",
//   monitor: "M3 4h18v12H3z M8 20h8 M12 16v4",
//   linkedin: "M6 9h3v10H6z M7.5 5.5a1.7 1.7 0 1 0 0 .01 M12 9h3v1.4c.6-.9 1.5-1.6 3-1.6 2.2 0 4 1.4 4 4.6V19h-3v-5c0-1.5-.7-2.4-2-2.4s-2 1-2 2.4v5h-3z",
// };

// function Icon({ name, size = 20, className = "" }) {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//     >
//       <path d={iconPaths[name] || iconPaths.check} />
//     </svg>
//   );
// }

// const expertise = [
//   {
//     icon: "workflow",
//     title: "End-to-End iFlow Development",
//     text: "Designing, developing, deploying, and supporting integration flows with routing, transformation, validation, monitoring, and exception handling.",
//   },
//   {
//     icon: "layers",
//     title: "SAP SuccessFactors Integrations",
//     text: "Employee Central integrations using OData and CompoundEmployee APIs for full load, delta load, payroll, onboarding, and employee master data scenarios.",
//   },
//   {
//     icon: "file",
//     title: "Data Transformation",
//     text: "Transforming complex hierarchical XML into target structures using Message Mapping, XSLT, XML-to-CSV, JSON-to-XML, and Groovy-based custom logic.",
//   },
//   {
//     icon: "shield",
//     title: "Security & Reliability",
//     text: "Secure communication using OAuth 2.0, certificate-based authentication, PGP encryption, public key SFTP, and structured error handling.",
//   },
//   {
//     icon: "monitor",
//     title: "Monitoring & AMS Support",
//     text: "Troubleshooting failed messages, mapping issues, SFTP/API failures, timeout issues, missing data, and production support incidents using CPI monitoring tools.",
//   },
//   {
//     icon: "cloud",
//     title: "Cloud & On-Prem Connectivity",
//     text: "Experience with cloud integrations and exposure to Cloud Connector-enabled scenarios for secure connectivity between SAP BTP/CPI and on-premise SAP systems.",
//   },
// ];

// const projects = [
//   {
//     title: "SuccessFactors EC to Payroll Vendor SFTP Integration",
//     type: "SAP to Non-SAP | File-Based Integration",
//     stack: ["CompoundEmployee", "Looping Process Call", "XSLT", "XML to CSV", "PGP", "SFTP"],
//     description:
//       "Built a payroll integration to send employee payroll and compensation data from SuccessFactors Employee Central to an external payroll vendor in encrypted CSV format.",
//     points: [
//       "Implemented delta handling using last_modified_on and maintained last successful run logic.",
//       "Flattened hierarchical CompoundEmployee XML into payroll-ready CSV using XSLT.",
//       "Used PGP encryption and SFTP public key authentication for secure file delivery.",
//       "Handled large employee volumes with pagination and Looping Process Call.",
//     ],
//   },
//   {
//     title: "SuccessFactors EC to Active Directory Provisioning",
//     type: "API-Based Integration",
//     stack: ["SuccessFactors OData", "REST", "Groovy", "Message Mapping", "OAuth 2.0"],
//     description:
//       "Developed an integration to automatically create or update employee accounts in an Active Directory provisioning system based on employee data changes.",
//     points: [
//       "Fetched changed employee records using OData API and delta filters.",
//       "Validated mandatory fields like email, employee ID, and department using Groovy.",
//       "Skipped invalid records and logged them separately to avoid complete interface failure.",
//       "Sent transformed records to target REST API using Request-Reply pattern.",
//     ],
//   },
//   {
//     title: "Third-Party HR System to SuccessFactors Upsert",
//     type: "Inbound Integration",
//     stack: ["REST Sender", "JSON to XML", "Message Mapping", "OData Upsert", "Exception Subprocess"],
//     description:
//       "Created an inbound integration where employee data from a third-party HR system is validated, transformed, and upserted into SuccessFactors Employee Central.",
//     points: [
//       "Accepted employee payload from external REST API in JSON format.",
//       "Converted JSON to XML and mapped fields into SuccessFactors OData upsert structure.",
//       "Implemented mandatory-field validation and detailed error notification logic.",
//       "Generated support-friendly logs for failed upsert records.",
//     ],
//   },
//   {
//     title: "SuccessFactors EC to SAP S/4HANA Employee Replication",
//     type: "SAP to SAP Integration",
//     stack: ["OData / CompoundEmployee", "Message Mapping", "SOAP / IDoc", "Cloud Connector", "CPI Monitoring"],
//     description:
//       "Supported employee master and organizational data replication from SuccessFactors Employee Central to SAP S/4HANA for downstream finance, workflow, reporting, and authorization needs.",
//     points: [
//       "Transformed employee, department, manager, cost center, and job data into SAP target structures.",
//       "Handled delta synchronization using lastModifiedOn-based filtering.",
//       "Worked with Cloud Connector-enabled connectivity for on-premise S/4HANA access.",
//       "Monitored message failures and coordinated with functional/Basis teams during issue resolution.",
//     ],
//   },
// ];

// const experience = [
//   {
//     company: "Lab-Informatics",
//     role: "Software Engineer",
//     period: "Dec 2024 – Present",
//     client: "Bentley Systems",
//     summary:
//       "Working on SAP CPI integration development and AMS support for SuccessFactors and enterprise integration scenarios.",
//     tools: ["SAP CPI", "SAP BTP", "SuccessFactors EC", "OData", "REST", "SOAP", "SFTP", "Groovy", "XSLT"],
//     responsibilities: [
//       "Developed and enhanced SAP CPI iFlows for API-based and file-based integrations between SAP and non-SAP systems.",
//       "Worked on SuccessFactors Employee Central integrations using OData and CompoundEmployee APIs for employee master data processing.",
//       "Implemented message transformations using Message Mapping, XSLT, XML-to-CSV, JSON-to-XML, and Groovy scripts.",
//       "Handled routing, filtering, content enrichment, Content Modifier, Router, Splitter, ProcessDirect, and exception handling patterns.",
//       "Supported AMS tickets by monitoring failed messages, analyzing payloads, identifying root causes, and coordinating fixes.",
//       "Worked on production support activities including message reprocessing, error analysis, interface monitoring, and support documentation.",
//     ],
//   },
//   {
//     company: "Cognerium Robotic Labs",
//     role: "Angular Developer",
//     period: "Aug 2024 – Nov 2024",
//     client: "Enterprise Web Applications",
//     summary:
//       "Worked on frontend development, API integration, UI fixes, and application support activities.",
//     tools: ["Angular", "JavaScript", "HTML", "CSS", "REST API", "TypeScript"],
//     responsibilities: [
//       "Built responsive Angular UI components and improved existing application screens based on business requirements.",
//       "Integrated REST APIs with frontend modules and handled data binding, form validations, and UI state management.",
//       "Fixed UI defects, layout issues, and browser compatibility problems during development and testing cycles.",
//       "Worked with backend/API teams to validate request and response structures and troubleshoot integration issues.",
//     ],
//   },
//   {
//     company: "Nuacem AI",
//     role: "Software Engineer",
//     period: "Feb 2024 – Jun 2024",
//     client: "SmithGroup",
//     summary:
//       "Supported SAP CPI interfaces, monitoring, issue resolution, and integration enhancements.",
//     tools: ["SAP CPI", "Groovy", "XML", "JSON", "CSV", "SFTP", "REST", "Exception Subprocess"],
//     responsibilities: [
//       "Maintained existing SAP CPI interfaces and supported integration flows used for business data exchange.",
//       "Worked on XML, JSON, and CSV payload transformations and validated message structures during testing.",
//       "Handled AMS support tickets by checking message monitoring, failed MPL logs, payload issues, and adapter errors.",
//       "Implemented minor enhancements in iFlows such as routing changes, mapping fixes, and exception handling improvements.",
//       "Prepared issue notes and coordinated with internal teams for deployment, validation, and closure of support tasks.",
//     ],
//   },
//   {
//     company: "Lab-Informatics",
//     role: "Software Engineer",
//     period: "Jun 2022 – Dec 2023",
//     client: "Abiomed",
//     summary:
//       "Worked on integration development and application support involving XML/JSON transformations, routing, testing, and debugging.",
//     tools: ["SAP CPI", "XML", "JSON", "REST", "SOAP", "SFTP", "Message Mapping"],
//     responsibilities: [
//       "Built and supported initial CPI integration flows for file-based and API-based integration scenarios.",
//       "Worked on data transformation requirements using mapping logic and payload validation techniques.",
//       "Supported testing activities by validating input/output payloads, checking errors, and confirming expected target data.",
//       "Assisted in troubleshooting integration failures related to mapping, connectivity, authentication, and file processing.",
//     ],
//   },
// ];

// const highlights = [
//   "3.5+ years SAP CPI / SAP BTP Integration experience",
//   "Delivered end-to-end SAP CPI integrations",
//   "Hands-on AMS support and production ticket handling",
//   "Strong SuccessFactors EC integration knowledge",
//   "Comfortable with XML, JSON, CSV, XSLT, and Groovy",
// ];

// const valueCards = [
//   {
//     icon: "code",
//     title: "Developer Mindset",
//     text: "Can build clean CPI solutions from requirement understanding to deployment support.",
//   },
//   {
//     icon: "database",
//     title: "Data-Focused",
//     text: "Comfortable handling employee data, effective-dated records, delta logic, and large payload scenarios.",
//   },
//   {
//     icon: "shield",
//     title: "Production-Aware",
//     text: "Understands monitoring, error handling, alerts, reprocessing, security, and support ownership.",
//   },
// ];

// function runPortfolioDataTests() {
//   const requiredProfileFields = ["name", "role", "email", "phone", "linkedin", "summary", "emailLink"];
//   requiredProfileFields.forEach((field) => {
//     if (!profile[field]) {
//       throw new Error(`Portfolio test failed: missing profile.${field}`);
//     }
//   });

//   if (!profile.emailLink.startsWith("mailto:")) {
//     throw new Error("Portfolio test failed: emailLink must use mailto format.");
//   }

//   if (!profile.gmailLink.startsWith("https://mail.google.com/")) {
//     throw new Error("Portfolio test failed: gmailLink must use Gmail compose URL.");
//   }

//   if (!profile.linkedin.startsWith("https://")) {
//     throw new Error("Portfolio test failed: LinkedIn URL must be a secure HTTPS link.");
//   }

//   if (skills.length < 10) {
//     throw new Error("Portfolio test failed: expected at least 10 skills.");
//   }

//   if (projects.length < 3) {
//     throw new Error("Portfolio test failed: expected at least 3 featured projects.");
//   }

//   projects.forEach((project) => {
//     if (!project.title || !project.description || project.points.length === 0 || project.stack.length === 0) {
//       throw new Error(`Portfolio test failed: incomplete project data for ${project.title || "unknown project"}.`);
//     }
//   });

//   if (experience.length < 3) {
//     throw new Error("Portfolio test failed: expected at least 3 experience entries.");
//   }

//   if (typeof navigator !== "undefined" && navigator.clipboard) {
//     // Clipboard is intentionally not used because many preview/sandbox environments block it.
//   }

//   return true;
// }

// runPortfolioDataTests();

// function SectionTitle({ eyebrow, title, subtitle }) {
//   return (
//     <div className="mx-auto mb-10 max-w-3xl text-center">
//       <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
//       <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
//       {subtitle && <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{subtitle}</p>}
//     </div>
//   );
// }

// function Chip({ children }) {
//   return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{children}</span>;
// }

// function ContactPill({ icon, label, value, href }) {
//   const content = (
//     <>
//       <Icon name={icon} size={16} />
//       <span className="font-medium">{label}:</span>
//       <span>{value}</span>
//     </>
//   );

//   if (href) {
//     return (
//       <a className="inline-flex items-center gap-2 hover:text-cyan-300" href={href} target="_blank" rel="noopener noreferrer">
//         {content}
//       </a>
//     );
//   }

//   return <span className="inline-flex items-center gap-2">{content}</span>;
// }

// function BrandLogo() {
//   return (
//     <button type="button" onClick={() => scrollToSection("top")} className="group flex items-center gap-3" aria-label="Anil Kumar Pamidi Portfolio Home">
//       <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300 via-sky-400 to-indigo-500 shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
//         <div className="absolute inset-1 rounded-xl bg-slate-950/90" />
//         <span className="relative text-lg font-black tracking-tight text-white">AK</span>
//         <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border border-slate-950 bg-emerald-300" />
//       </div>
//       <div className="hidden text-left leading-tight sm:block">
//         <div className="text-base font-black tracking-tight text-white">Anil Kumar</div>
//         <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">SAP CPI Consultant</div>
//       </div>
//     </button>
//   );
// }

// function scrollToSection(id) {
//   if (typeof document === "undefined") return;
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth", block: "start" });
//   }
// }

// function openExternalLink(url) {
//   if (typeof window === "undefined") return;
//   window.open(url, "_blank", "noopener,noreferrer");
// }

// function openEmail() {
//   openExternalLink(profile.gmailLink);
// }

// function handleHireClick() {
//   scrollToSection("contact");
// }

// export default function Portfolio() {
//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-100">
//       <div className="pointer-events-none fixed inset-0 overflow-hidden">
//         <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
//         <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
//         <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
//       </div>

//       <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
//         <BrandLogo />
//         <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
//           <button type="button" className="hover:text-white" onClick={() => scrollToSection("skills")}>Skills</button>
//           <button type="button" className="hover:text-white" onClick={() => scrollToSection("projects")}>Projects</button>
//           <button type="button" className="hover:text-white" onClick={() => scrollToSection("experience")}>Experience</button>
//           <button type="button" className="hover:text-white" onClick={() => scrollToSection("contact")}>Contact</button>
//         </nav>
//         <button
//           type="button"
//           onClick={handleHireClick}
//           className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:translate-y-0"
//         >
//           Hire Me
//         </button>
//       </header>

//       <section id="top" className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 pb-20 pt-10 md:grid-cols-[1.08fr_0.92fr] md:pb-24 md:pt-12">
//         <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
//             <Icon name="zap" size={16} /> Available for SAP CPI Integration Roles
//           </div>
//           {/* <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white md:text-7xl">
//             SAP CPI Integration Consultant building secure enterprise integrations.
//           </h1> */}
//                        <h1 className="max-w-5xl bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-5xl font-black leading-[0.95] tracking-[-0.04em] text-transparent md:text-8xl">
//                Delivering enterprise SAP CPI integrations with reliability, security, and scale.
//              </h1>
//           <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
//             I design and support SAP CPI iFlows for SuccessFactors, SAP and non-SAP systems using OData, SOAP, REST, SFTP, Groovy, XSLT, mappings, monitoring, and exception handling.
//           </p>

//           <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
//             <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
//               <p className="text-3xl font-black text-cyan-300">3.5+</p>
//               <p className="mt-1 text-sm text-slate-400">Years Experience</p>
//             </div>
//             <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
//               <p className="text-3xl font-black text-cyan-300">E2E</p>
//               <p className="mt-1 text-sm text-slate-400">CPI Integrations</p>
//             </div>
//             <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 col-span-2 sm:col-span-1">
//               <p className="text-3xl font-black text-cyan-300">AMS</p>
//               <p className="mt-1 text-sm text-slate-400">Support Tickets</p>
//             </div>
//           </div>
//           <div className="mt-8 flex flex-wrap gap-4">
//             <button
//               type="button"
//               onClick={() => scrollToSection("projects")}
//               className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
//             >
//               View Projects <Icon name="arrow" className="ml-2" size={18} />
//             </button>
//             <button
//               type="button"
//               onClick={() => openExternalLink(profile.linkedin)}
//               className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
//             >
//               LinkedIn <Icon name="link" className="ml-2" size={18} />
//             </button>
//           </div>
//           <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
//             <ContactPill icon="map" label="Location" value={profile.location} />
//             <ContactPill icon="mail" label="Email" value={profile.email} href={profile.gmailLink} />
//             <ContactPill icon="phone" label="Phone" value={profile.phone} />
//           </div>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
//           <Card className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/10 bg-gradient-to-br from-slate-900/95 to-[#071124] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
//             <CardContent className="p-7">
//               <div className="rounded-[2rem] border border-white/5 bg-[#020817]/90 p-8">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-cyan-300 to-blue-500 text-3xl font-black text-slate-950 shadow-lg shadow-cyan-500/30">AK</div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
//                     <p className="text-cyan-200">{profile.role}</p>
//                   </div>
//                 </div>
//                 <div className="mt-7 space-y-4">
//                   {highlights.map((item) => (
//                     <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200">
//                       <Icon name="check" className="mt-0.5 shrink-0 text-cyan-300" size={18} />
//                       <span>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </section>

//       <section id="skills" className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-20">
//         <div className="mx-auto max-w-7xl">
//           <SectionTitle eyebrow="Skills" title="Core Technical Stack" subtitle="A focused integration skillset covering SAP CPI development, SuccessFactors APIs, transformation, security, monitoring, and support." />
//           <div className="flex flex-wrap justify-center gap-3">
//             {skills.map((skill) => <Chip key={skill}>{skill}</Chip>)}
//           </div>
//         </div>
//       </section>

//       <section className="relative z-10 px-6 py-24">
//         <div className="mx-auto max-w-7xl">
//           <SectionTitle eyebrow="Expertise" title="What I Can Deliver" subtitle="Practical SAP CPI capabilities built around real integration scenarios and production support needs." />
//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {expertise.map((item) => (
//               <Card key={item.title} className="rounded-3xl border-white/10 bg-white/[0.06] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.09]">
//                 <CardContent className="p-6">
//                   <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-300">
//                     <Icon name={item.icon} size={24} />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{item.title}</h3>
//                   <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="projects" className="relative z-10 bg-gradient-to-b from-[#020617] to-[#071226] px-6 py-24">
//         <div className="mx-auto max-w-7xl">
//           <SectionTitle eyebrow="Projects" title="Featured Integration Work" subtitle="Selected SAP CPI project scenarios that show practical experience across file-based, API-based, SAP-to-SAP, and inbound integrations." />
//           <div className="grid gap-6 lg:grid-cols-2">
//             {projects.map((project) => (
//               <Card key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-slate-900/90 to-[#07111f] shadow-[0_10px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-cyan-500/10">
//                 <CardContent className="p-7">
//                   <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
//                     <div>
//                       <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.type}</p>
//                       <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
//                     </div>
//                     <Icon name="server" className="text-cyan-300" size={24} />
//                   </div>
//                   <p className="leading-7 text-slate-300">{project.description}</p>
//                   <div className="mt-5 flex flex-wrap gap-2">
//                     {project.stack.map((item) => <Chip key={item}>{item}</Chip>)}
//                   </div>
//                   <ul className="mt-6 space-y-3">
//                     {project.points.map((point) => (
//                       <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
//                         <Icon name="check" className="mt-0.5 shrink-0 text-emerald-300" size={17} /> {point}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="experience" className="relative z-10 px-6 py-24">
//         <div className="mx-auto max-w-6xl">
//           <SectionTitle
//             eyebrow="Experience"
//             title="Professional Timeline"
//             subtitle="Detailed view of my SAP CPI development, AMS support, monitoring, troubleshooting, and integration delivery responsibilities."
//           />
//           <div className="space-y-6">
//             {experience.map((job) => (
//               <Card key={`${job.company}-${job.period}`} className="rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-white/[0.08]">
//                 <CardContent className="p-6 md:p-8">
//                   <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
//                     <div>
//                       <p className="text-sm font-semibold text-cyan-300">{job.period}</p>
//                       <h3 className="mt-3 text-xl font-bold text-white">{job.company}</h3>
//                       <p className="mt-2 text-sm text-slate-300">{job.role}</p>
//                       <p className="mt-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-400">
//                         Client: {job.client}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-base leading-7 text-slate-300">{job.summary}</p>

//                       <div className="mt-5 flex flex-wrap gap-2">
//                         {job.tools.map((tool) => (
//                           <span key={tool} className="rounded-full border border-cyan-300/10 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
//                             {tool}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="mt-6 grid gap-3 md:grid-cols-2">
//                         {job.responsibilities.map((point) => (
//                           <div key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-6 text-slate-300">
//                             <Icon name="check" className="mt-0.5 shrink-0 text-cyan-300" size={17} />
//                             <span>{point}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative z-10 bg-white/[0.03] px-6 py-24">
//         <div className="mx-auto max-w-7xl">
//           <SectionTitle eyebrow="Value" title="Why Recruiters Should Notice This Profile" />
//           <div className="grid gap-5 md:grid-cols-3">
//             {valueCards.map((item) => (
//               <Card key={item.title} className="rounded-3xl border-white/10 bg-slate-950/70">
//                 <CardContent className="p-7 text-center">
//                   <Icon name={item.icon} className="mx-auto text-cyan-300" size={34} />
//                   <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
//                   <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="relative z-10 px-6 py-28">
//         <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-cyan-400/10 bg-gradient-to-br from-[#081120] via-[#0b1327] to-[#071426] p-10 text-center shadow-[0_0_100px_rgba(6,182,212,0.15)] backdrop-blur-2xl md:p-16">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
//           <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Let’s build reliable integrations together.</h2>
//           <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
//             Open to SAP CPI Integration Consultant roles involving SAP BTP Integration Suite, SuccessFactors, APIs, SFTP, transformations, and production support.
//           </p>
//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <a
//               href="tel:+919701272567"
//               className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-7 py-3 text-base font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:text-white"
//             >
//               <Icon name="phone" className="mr-2" size={18} /> {profile.phone}
//             </a>
//             <button
//               type="button"
//               onClick={openEmail}
//               className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:translate-y-0"
//             >
//               <Icon name="mail" className="mr-2" size={18} /> Email Me
//             </button>
//             <button
//               type="button"
//               onClick={() => openExternalLink(profile.linkedin)}
//               className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
//             >
//               <Icon name="linkedin" className="mr-2" size={18} /> LinkedIn
//             </button>
//           </div>

//           </div>
//       </section>

//       <footer className="relative z-10 border-t border-white/5 bg-black/20 px-6 py-8 text-center text-sm text-slate-500">
//         © {new Date().getFullYear()} {profile.name}. Built for SAP CPI Integration opportunities.
//       </footer>
//     </main>
//   );
// }
