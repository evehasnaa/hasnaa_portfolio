import marketingImg from "../img/markiting-1_page-0001.jpg";
import ecommerceImg from "../img/ecomerace.png";
import healthcareImg from "../img/healthcare analytics_page-0001.jpg";
import linkedinImg from "../img/linkedin dashboard_page-0001.jpg";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/hasnaa-ahmed-data-analysis/",
  github: "https://github.com/evehasnaa",
  email: "hasnaaahmed745@gmail.com",
  phone: "+20 102 396 7460",
  whatsapp: "https://wa.me/201023967460",
};

export const BOOT_LINES = [
  "> connecting to hasnaa.db ...",
  "> SELECT insights FROM raw_chaos;",
  "> 1,000,000 rows scanned in 0.2s",
  "> joining talent ⨝ caffeine ... OK",
  "> rendering portfolio ...",
];

export const SKILL_ICONS = {
  SQL: "🗄️",
  "POWER BI": "📊",
  PYTHON: "🐍",
  EXCEL: "📈",
  Figma: "🎨",
};

export const SKILLS = {
  SQL: ["Advanced Analytics", "Query Optimization"],
  "POWER BI": ["DAX", "Data Modeling"],
  PYTHON: ["Data Wrangling", "Exploratory Analysis"],
  EXCEL: ["Power Query", "Pivot Tables"],
  Figma: ["Dashboard Design", "Prototyping"],
};

export const EXPERIENCE = [
  {
    role: "Data Collection Analyst",
    org: "SmartCat Company · Remote, Saudi Arabia",
    date: "Apr 2026 – Jun 2026",
    points: [
      "Automated end-to-end data collection using Python delivering structured datasets for AI-powered SaaS products.",
      "Cleaned, validated, and transformed raw data into high-quality datasets optimized for AI model training.",
    ],
  },
  {
    role: "Python & Data Instructor",
    org: "GDGC Al-Azhar University · Cairo",
    date: "Oct 2025 – Present",
    points: [
      "Mentored 15+ trainees in Python, SQL, and data analysis.",
      "Delivered hands-on training in data modeling and Power BI dashboard development with DAX.",
    ],
  },
  {
    role: "Operations Manager",
    org: "AG Care Insurance · Cairo",
    date: "Aug 2025 – Feb 2026",
    points: [
      "Managed medical insurance pricing using Excel, ensuring accurate calculations and policy quotations.",
      "Prepared operational reports and policy documentation using Microsoft Word to support timely policy issuance.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Healthcare Analytics — End to End",
    tag: "Analytics Engineering · Medallion",
    tools:
      "Python · SQL Server · Power BI  · ETL Pipeline · Data Warehouse · What-if Analysis",
    link: "https://github.com/evehasnaa/healthcare-analysis-end-to-end-project-",
    githubLink:
      "https://github.com/evehasnaa/healthcare-analysis-end-to-end-project-",
    powerbiLink: null,
    img: healthcareImg,
    desc: "1M synthetic encounters generated, loaded through Staging → Bronze → Silver → Gold on SQL Server, and served via a Power BI semantic model — a full analytics-engineering pipeline.",
  },
  {
    title: "LinkedIn Job Market Analysis",
    tag: "Labor Market & Recruitment Analytics",
    tools:
      "Python · Power BI · DAX · Power Query · Pandas · Matplotlib · Bookmark",
    link: "https://github.com/evehasnaa/LINKEDIN-JOP-DATA-ANALYSIS-PROJECT-",
    githubLink:
      "https://github.com/evehasnaa/LINKEDIN-JOP-DATA-ANALYSIS-PROJECT-",
    powerbiLink:
      "https://app.powerbi.com/groups/me/reports/3c2f9417-c369-43aa-b8d7-6871086ddb93?ctid=2bb6e5bc-c109-47fb-9433-c1c6f4fa33ff&pbi_source=linkShare",
    img: linkedinImg,
    desc: "327 job postings from 193 companies cleaned with Pandas & Power Query; dashboard with custom DAX measures surfacing a $156K average-salary benchmark, top hiring regions, and 5 job families.",
  },
  {
    title: "Multi-Platform Marketing Analytics",
    tag: "Marketing Performance Analytics",
    tools: "Power BI · DAX · Power Query",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTAxYzZkZTgtYzEzNS00ZTVlLTlhNTMtYmU2NjhlYmU3MTUwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    githubLink: null,
    powerbiLink:
      "https://app.powerbi.com/view?r=eyJrIjoiMTAxYzZkZTgtYzEzNS00ZTVlLTlhNTMtYmU2NjhlYmU3MTUwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    img: marketingImg,
    desc: "4-page report analyzing 20 campaigns across Facebook, Instagram & TikTok — 10+ DAX measures tracking ROI, CPC, CPA, CTR and conversion, with dynamic metric-switching and synced slicers.",
  },
  {
    title: "E-Commerce Customer Segmentation",
    tag: "Customer & Sales Analytics",
    tools: "Python · SQL Server · Power BI · DAX",
    link: "https://github.com/evehasnaa/bootcamp-data-analysis",
    githubLink: "https://github.com/evehasnaa/bootcamp-data-analysis",
    powerbiLink: null,
    img: ecommerceImg,
    desc: "Segmentation & behavioral analysis on SQL Server transaction data — CLV, AOV, Retention, MoM & YoY growth — served through interactive Power BI dashboards for marketing and sales decisions.",
  },
];
