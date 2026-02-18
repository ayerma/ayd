const profile = {
  name: "Aliaksei Yermachonak",
  title: "Senior Java Developer | Team Lead | Full-Stack, Cloud & AI",
  summary:
    "Senior Java developer with extensive experience in leadership roles and diverse projects across backend, full-stack, and cloud development. Proven track record of delivering complex applications with Java ecosystem technologies, AWS infrastructure, and modern frameworks. Active in the tech community as a content creator, lecturer, mentor, and coordinator.",
  experience: [
    {
      period: "Nov 2024 - Present",
      role: "Developer Team Lead",
      company: "EPAM Systems",
      location: "Gdansk, Poland",
      highlights: [
        "Leading migration of application to a new version with improved functionality.",
        "Implemented proxy solution integrating multiple applications with role-based access.",
        "Orchestrated Java ecosystem development with custom libraries.",
        "Optimized data processing workflows to meet a critical 1-minute performance deadline."
      ]
    },
    {
      period: "Jan 2024 - Oct 2024",
      role: "Software Developer",
      company: "EPAM Systems",
      location: "Gdansk, Poland",
      highlights: [
        "Migrated application to a new version, removing legacy features and adding capabilities.",
        "Implemented metrics framework for accurate version performance comparability.",
        "Established 100% functional test coverage for business-critical functionality."
      ]
    },
    {
      period: "Jul 2022 - Dec 2023",
      role: "Key Developer",
      company: "EPAM Systems",
      location: "Gdansk, Poland",
      highlights: [
        "Implemented key features with Java backend and React frontend.",
        "Led monolith decomposition initiative and integrated AI capabilities.",
        "Redesigned invoice processing system and eliminated transaction losses.",
        "Facilitated cross-team communication for payment/invoice integration."
      ]
    },
    {
      period: "Oct 2021 - Jun 2022",
      role: "Development Team Lead",
      company: "EPAM Systems",
      location: "Gdansk, Poland",
      highlights: [
        "Led development of data processing application in AWS infrastructure.",
        "Automated customer data onboarding from multiple source formats.",
        "Used Jenkins for CI/CD and Terraform for infrastructure preparation.",
        "Managed regular releases across 4 development teams."
      ]
    },
    {
      period: "Mar 2021 - Sep 2021",
      role: "Software Developer",
      company: "EPAM Systems",
      location: "Gdansk, Poland",
      highlights: [
        "Enhanced existing adapters with new functionality.",
        "Configured input data and environments in AWS (EC2, S3, Lambda, Step Functions, EKS, DynamoDB, API Gateway)."
      ]
    },
    {
      period: "Sep 2019 - Feb 2021",
      role: "Software Developer",
      company: "EPAM Systems",
      location: "Minsk, Belarus",
      highlights: [
        "Implemented UX enhancements with accessibility support using React, PropTypes, and Jest.",
        "Created search information widget with React frontend and Java backend.",
        "Implemented caching and multithreading with Spring framework.",
        "Redesigned feature architecture for updated customer requirements."
      ]
    },
    {
      period: "Jan 2018 - Aug 2019",
      role: "Junior Software Developer",
      company: "EPAM Systems",
      location: "Minsk, Belarus",
      highlights: [
        "Enhanced features, fixed bugs, and increased test coverage.",
        "Contributed to both frontend and backend development."
      ]
    },
    {
      period: "Aug 2015 - Nov 2018",
      role: "Engineer",
      company: "Republican Unitary Enterprise BELTEI",
      location: "Minsk, Belarus",
      highlights: ["Designed and tuned automation systems for power plants."]
    },
    {
      period: "Aug 2015 - Nov 2018",
      role: "Technician",
      company: "ENECA",
      location: "Minsk, Belarus",
      highlights: [
        "Designed automation systems for small objects: shops, storage, social objects, and hotels."
      ]
    }
  ],
  skills: [
    {
      category: "Backend Development",
      items:
        "Java (Core, Multithreading, Concurrency), Spring (Core, MVC, Data, Boot, Security), JPA, Hibernate, REST APIs, gRPC, Protobuf, SQL (MySQL, PostgreSQL), NoSQL"
    },
    {
      category: "Frontend Development",
      items: "JavaScript (ES6+), TypeScript, React.js, jQuery, HTML5, CSS3"
    },
    {
      category: "Cloud & DevOps",
      items:
        "AWS (EC2, S3, Lambda, Step Functions, EKS, DynamoDB, API Gateway), Jenkins, Terraform, Docker, Kubernetes"
    },
    {
      category: "Testing & Quality",
      items:
        "JUnit, Mockito, TestNG, testing pyramid methodology, performance testing"
    },
    {
      category: "Tools & Methodologies",
      items:
        "Git, TFS, Jira, Mercurial, Agile/Scrum, Kanban, Waterfall, microservices architecture, Elastic Stack, New Relic, OpenAI integration"
    }
  ],
  education: [
    {
      period: "2010 - 2015",
      institution: "Belarusian National Technical University",
      location: "Minsk, Belarus",
      details: "Bachelor's Degree, Automation Engineer"
    },
    {
      period: "2012 - 2013 (Erasmus)",
      institution: "Warsaw University of Technology",
      location: "Warsaw, Poland",
      details: "Power Engineering"
    }
  ]
};

const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
const sectionById = new Map(
  navLinks
    .map((link) => link.getAttribute("href"))
    .filter(Boolean)
    .map((href) => [href.slice(1), document.querySelector(href)])
    .filter((entry) => entry[1])
);

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const target = link.getAttribute("href")?.slice(1);
    link.classList.toggle("active", target === sectionId);
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) {
        setActiveNav(visible.target.id);
      }
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] }
  );
  sectionById.forEach((section) => observer.observe(section));
}

const revealItems = Array.from(document.querySelectorAll(".reveal"));
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function applyRevealDelays() {
  revealItems.forEach((item) => {
    const step = Number(item.dataset.delay || 0);
    if (step > 0) {
      item.style.transitionDelay = `${Math.min(step * 90, 360)}ms`;
    }
  });
}

if (!reduceMotionQuery.matches && "IntersectionObserver" in window) {
  applyRevealDelays();
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const downloadButton = document.getElementById("download-generated-pdf");
if (downloadButton) {
  downloadButton.addEventListener("click", () => generateCvPdf(profile));
}

function generateCvPdf(data) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("PDF library not loaded. Refresh the page and try again.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  let y = margin;

  const ensureSpace = (requiredHeight) => {
    if (y + requiredHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const addHeading = (text) => {
    ensureSpace(28);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(15, 76, 129);
    doc.text(text, margin, y);
    y += 22;
  };

  const addParagraph = (text, size = 11, spacing = 16) => {
    if (!text) return;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(30, 39, 59);
    const lines = doc.splitTextToSize(text, pageWidth - margin * 2);
    ensureSpace(lines.length * spacing + 6);
    lines.forEach((line) => {
      doc.text(line, margin, y);
      y += spacing;
    });
    y += 2;
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(20, 33, 61);
  doc.text(data.name, margin, y);
  y += 24;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(15, 76, 129);
  doc.text(data.title, margin, y);
  y += 18;

  y += 8;
  addHeading("Summary");
  addParagraph(data.summary);
  y += 8;

  addHeading("Professional Experience");
  if (typeof doc.autoTable === "function") {
    doc.autoTable({
      startY: y,
      margin: { left: margin, right: margin },
      head: [["Period", "Role / Company", "Key Highlights"]],
      body: data.experience.map((item) => [
        item.period,
        `${item.role}, ${item.company} (${item.location})`,
        item.highlights.map((line) => `- ${line}`).join("\n")
      ]),
      theme: "grid",
      styles: {
        font: "helvetica",
        fontSize: 9,
        cellPadding: 5,
        valign: "top",
        textColor: [30, 39, 59],
        overflow: "linebreak"
      },
      headStyles: {
        fillColor: [15, 76, 129],
        textColor: [255, 255, 255],
        fontStyle: "bold"
      },
      columnStyles: {
        0: { cellWidth: 86 },
        1: { cellWidth: 174 },
        2: { cellWidth: "auto" }
      }
    });
    y = doc.lastAutoTable.finalY + 18;
  } else {
    data.experience.forEach((item) => {
      ensureSpace(40);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.text(`${item.period} - ${item.role}, ${item.company}`, margin, y);
      y += 14;
      addParagraph(item.highlights.map((line) => `- ${line}`).join(" "), 9.8, 13);
      y += 4;
    });
  }

  addHeading("Skills");
  if (typeof doc.autoTable === "function") {
    doc.autoTable({
      startY: y,
      margin: { left: margin, right: margin },
      head: [["Category", "Technologies"]],
      body: data.skills.map((item) => [item.category, item.items]),
      theme: "striped",
      styles: {
        font: "helvetica",
        fontSize: 9.5,
        cellPadding: 5,
        textColor: [30, 39, 59]
      },
      headStyles: {
        fillColor: [200, 107, 42],
        textColor: [255, 255, 255],
        fontStyle: "bold"
      },
      columnStyles: {
        0: { cellWidth: 150, fontStyle: "bold" },
        1: { cellWidth: "auto" }
      }
    });
    y = doc.lastAutoTable.finalY + 18;
  } else {
    data.skills.forEach((item) => {
      ensureSpace(34);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(item.category, margin, y);
      y += 13;
      addParagraph(item.items, 9.8, 13);
    });
  }

  addHeading("Education");
  data.education.forEach((item) => {
    ensureSpace(48);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(20, 33, 61);
    doc.text(`${item.period} - ${item.institution}`, margin, y);
    y += 14;
    addParagraph(`${item.location}. ${item.details}`, 10, 14);
  });

  const pageCount = doc.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    doc.setPage(page);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(120, 126, 138);
    doc.text(
      `Generated CV | ${data.name} | Page ${page} of ${pageCount}`,
      margin,
      pageHeight - 20
    );
  }

  doc.save("Aliaksei-Yermachonak-CV.pdf");
}
