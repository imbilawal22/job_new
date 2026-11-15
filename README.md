# PakJobs Hub - Pakistan All Provinces Job News & Alerts

Clean & Minimalist Pakistan Job Portal with automated job updates & GitHub Actions deployment.

## 🚀 Live Website & Deployment
- **Repository**: [https://github.com/imbilawal22/job_new](https://github.com/imbilawal22/job_new)
- **GitHub Actions**: [https://github.com/imbilawal22/job_new/actions](https://github.com/imbilawal22/job_new/actions)
- **Live URL**: `https://imbilawal22.github.io/job_new/` *(Settings > Pages > Source: GitHub Actions)*

---

## 🌟 Key Features

1. **Active Job Openings Across All Provinces**:
   - **Federal / Islamabad**: FPSC (FIA, FBR Customs), NADRA, NITB (National Job Portal - NJP)
   - **Punjab**: PPSC (School Education SSE, Punjab Police Sub-Inspectors, Health Dept Medical Officers, Board of Revenue Junior Clerks)
   - **Sindh**: SPSC (Energy Dept Oil & Gas, Health Staff Nurses, Sindh Police Constables, SGA&CD)
   - **KPK**: KPPSC (Higher Education Lecturers, KPK Police ASIs, Elementary PST Teachers)
   - **Balochistan**: BPSC (Civil Service BCS, QESCO Electrical Engineers, Levies Force)
   - **Azad Jammu & Kashmir (AJK)**: AJKPSC (Teachers, Medical Officers)
   - **Gilgit-Baltistan (GB)**: GB Police, Tourism & Wildlife Field Inspectors

2. **Interactive UI & Functionality**:
   - Dynamic Province Filters (clicking Punjab, Sindh, etc. instantly filters jobs and updates active counters)
   - Fast keyword search bar (searches job title, department, qualification, or city)
   - Job Detail Modal with step-by-step application and fee payment instructions (1-Link, 1-Bill, Bank Challan)
   - Direct link to official government recruitment portals (`.gov.pk` domains)
   - Email alert subscription

3. **Automated AI Job Research & Updater**:
   - Powered by Python script `scripts/update_jobs.py` & Gemini API
   - Saves job data to `data/jobs.json` and syncs with `js/app.js`

4. **GitHub Actions Workflows**:
   - `.github/workflows/deploy.yml`: Automatically deploys the website to **GitHub Pages** on every push!
   - `.github/workflows/auto_job_updater.yml`: Runs on a daily schedule (or manually via Actions tab) to research & push new job updates.

---

## 🛠 Project Structure

```
job_new/
├── .github/
│   └── workflows/
│       ├── deploy.yml            # GitHub Pages automated deployment
│       └── auto_job_updater.yml  # Daily AI job research & auto-updater
├── assets/                       # Image assets and icons
├── css/
│   └── style.css                 # Clean, responsive minimalist styling
├── data/
│   └── jobs.json                 # Structured JSON dataset of Pakistan jobs
├── js/
│   └── app.js                    # Interactive app logic, filters, modal & search
├── scripts/
│   └── update_jobs.py            # AI & official registry fetcher
├── index.html                    # Main HTML webpage
└── README.md                     # Documentation
```

---

## ⚙️ How to Enable GitHub Pages

1. Go to repository: **Settings > Pages**
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Once selected, every push to `main` will automatically deploy the site to:
   `https://imbilawal22.github.io/job_new/`
