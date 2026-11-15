/**
 * PakJobs Hub - Main JavaScript
 * 
 * NOTE: As requested, the jobs list is currently kept empty (`JOBS_DATA = []`).
 * When you want to add jobs in the future, simply add objects into the `JOBS_DATA` array below.
 */

// =============================================================================
// 1. DATA SOURCE (Filhal empty rakhi gayi hai)
// =============================================================================
// Example of how to add a job in future:
/*
const sampleJob = {
  id: 1,
  title: "Elementary School Teacher (BPS-14)",
  department: "School Education Department",
  province: "punjab", // 'punjab', 'sindh', 'kpk', 'balochistan', 'islamabad', 'ajk', 'gb'
  location: "Lahore, Rawalpindi, Faisalabad",
  lastDate: "25 Nov 2026",
  source: "PPSC",
  link: "#"
};
*/

const JOBS_DATA = [
  {
    "id": 1,
    "title": "Assistant Director (Investigation - BPS-17)",
    "department": "Federal Investigation Agency (FIA)",
    "commission": "FPSC",
    "province": "islamabad",
    "location": "Islamabad, Lahore, Karachi, Peshawar, Quetta",
    "scale": "BPS-17",
    "education": "Second Class or Grade 'C' Master's Degree / 16 Years Education",
    "totalPositions": "45 Posts",
    "lastDate": "18 Dec 2026",
    "applyUrl": "https://fpsc.gov.pk",
    "description": "FPSC Consolidated Advertisement for FIA Assistant Directors. Open merit and provincial quotas applicable across Pakistan."
  },
  {
    "id": 2,
    "title": "Inspector Customs / Preventive Officer (BPS-16)",
    "department": "Federal Board of Revenue (Revenue Division)",
    "commission": "FPSC",
    "province": "islamabad",
    "location": "Islamabad, Karachi Ports, Lahore Dry Port",
    "scale": "BPS-16",
    "education": "Bachelor's Degree in Economics, Commerce, Statistics, Law, Pharmacy or Physics",
    "totalPositions": "78 Posts",
    "lastDate": "22 Dec 2026",
    "applyUrl": "https://fpsc.gov.pk",
    "description": "Customs enforcement and border cargo monitoring under Federal Board of Revenue."
  },
  {
    "id": 3,
    "title": "Data Entry Operator & Customer Care Executive",
    "department": "National Database and Registration Authority (NADRA)",
    "commission": "Direct / NJP",
    "province": "islamabad",
    "location": "Islamabad, Rawalpindi & Regional Registration Centers",
    "scale": "BPS-14 / Equivalent",
    "education": "Intermediate / ICS / DAE with minimum 30 wpm typing speed",
    "totalPositions": "120 Posts",
    "lastDate": "08 Dec 2026",
    "applyUrl": "https://njp.gov.pk",
    "description": "Citizen registration, biometric processing and digital data verification."
  },
  {
    "id": 4,
    "title": "Software Engineer & Cloud System Administrator",
    "department": "National Information Technology Board (NITB)",
    "commission": "NJP",
    "province": "islamabad",
    "location": "Islamabad Capital Territory",
    "scale": "PPS-07",
    "education": "BS / MS in Computer Science, Software Engineering or IT",
    "totalPositions": "18 Posts",
    "lastDate": "12 Dec 2026",
    "applyUrl": "https://njp.gov.pk",
    "description": "Federal e-governance development, API integration and cloud infrastructure management."
  },
  {
    "id": 5,
    "title": "Secondary School Educator (SSE - Science & Math BPS-16)",
    "department": "School Education Department Punjab",
    "commission": "PPSC",
    "province": "punjab",
    "location": "Lahore, Multan, Rawalpindi, Faisalabad, Gujranwala",
    "scale": "BPS-16",
    "education": "M.Sc / BS in Physics, Mathematics, Chemistry or Biology with B.Ed",
    "totalPositions": "450 Posts",
    "lastDate": "30 Nov 2026",
    "applyUrl": "https://ppsc.gop.pk",
    "description": "Teaching positions in Government High Schools across all districts of Punjab."
  },
  {
    "id": 6,
    "title": "Sub-Inspector (Open Merit & Service Quota)",
    "department": "Punjab Police Department",
    "commission": "PPSC",
    "province": "punjab",
    "location": "All Punjab Police Regions (Lahore, Rawalpindi, Multan, Sahiwal)",
    "scale": "BPS-14",
    "education": "Graduate (BA / BSc / B.Com / BS) with required physical standards",
    "totalPositions": "185 Posts",
    "lastDate": "05 Dec 2026",
    "applyUrl": "https://ppsc.gop.pk",
    "description": "Law enforcement, investigation officer rank posts in Punjab Police."
  },
  {
    "id": 7,
    "title": "Medical Officer & Women Medical Officer (BPS-17)",
    "department": "Primary & Secondary Healthcare Department Punjab",
    "commission": "PPSC",
    "province": "punjab",
    "location": "DHQ & THQ Hospitals across Punjab",
    "scale": "BPS-17",
    "education": "MBBS with PMDC registration and 1 year house job completion",
    "totalPositions": "320 Posts",
    "lastDate": "28 Nov 2026",
    "applyUrl": "https://ppsc.gop.pk",
    "description": "Healthcare services in provincial government rural and urban medical facilities."
  },
  {
    "id": 8,
    "title": "Junior Clerk (BPS-11)",
    "department": "Board of Revenue & District Administration Punjab",
    "commission": "PPSC",
    "province": "punjab",
    "location": "All 36 Districts of Punjab",
    "scale": "BPS-11",
    "education": "Higher Secondary School Certificate (2nd Division) with 25 wpm typing",
    "totalPositions": "95 Posts",
    "lastDate": "10 Dec 2026",
    "applyUrl": "https://ppsc.gop.pk",
    "description": "Record maintenance, computerized revenue management and administrative assistance."
  },
  {
    "id": 9,
    "title": "Staff Nurse (Female / Male BPS-16)",
    "department": "Health Department Government of Sindh",
    "commission": "SPSC",
    "province": "sindh",
    "location": "Karachi, Hyderabad, Sukkur, Larkana, Mirpurkhas",
    "scale": "BPS-16",
    "education": "B.Sc Nursing / Diploma in General Nursing with PNC registration",
    "totalPositions": "210 Posts",
    "lastDate": "02 Dec 2026",
    "applyUrl": "https://spsc.gov.pk",
    "description": "Public health medical nursing posts under Sindh Health Department."
  },
  {
    "id": 10,
    "title": "Assistant Director (Oil & Gas Directorate)",
    "department": "Energy Department Sindh (Adv No. 07/2026)",
    "commission": "SPSC",
    "province": "sindh",
    "location": "Karachi Head Office",
    "scale": "BPS-17",
    "education": "BE / BS in Petroleum Engineering, Chemical or Mechanical Engineering",
    "totalPositions": "14 Posts",
    "lastDate": "15 Dec 2026",
    "applyUrl": "https://spsc.gov.pk",
    "description": "Monitoring exploration blocks, field royalties and energy policy implementation."
  },
  {
    "id": 11,
    "title": "Police Constable & Driver Constable (BPS-07)",
    "department": "Sindh Police Department",
    "commission": "PTS / Sindh Police",
    "province": "sindh",
    "location": "Karachi Range, Hyderabad Range & Shaheed Benazirabad",
    "scale": "BPS-07",
    "education": "Matriculation (10th grade pass) with valid driving license for drivers",
    "totalPositions": "550 Posts",
    "lastDate": "25 Nov 2026",
    "applyUrl": "https://sindhpolice.gov.pk",
    "description": "General security, traffic management and patrol operations in Sindh."
  },
  {
    "id": 12,
    "title": "Junior Scale Stenographer (BPS-14)",
    "department": "Services, General Administration & Coordination Department",
    "commission": "SPSC",
    "province": "sindh",
    "location": "Sindh Secretariat Karachi",
    "scale": "BPS-14",
    "education": "Intermediate with 80 wpm in Shorthand and 35 wpm in typing",
    "totalPositions": "36 Posts",
    "lastDate": "08 Dec 2026",
    "applyUrl": "https://spsc.gov.pk",
    "description": "Secretariat official communications and documentation management."
  },
  {
    "id": 13,
    "title": "Subject Specialist / Lecturer (BPS-17)",
    "department": "Higher Education Department Khyber Pakhtunkhwa",
    "commission": "KPPSC",
    "province": "kpk",
    "location": "Peshawar, Mardan, Swat, Abbottabad, D.I. Khan, Bannu",
    "scale": "BPS-17",
    "education": "Master's Degree (at least 2nd Class) in English, Urdu, CS, Physics, Math",
    "totalPositions": "160 Posts",
    "lastDate": "04 Dec 2026",
    "applyUrl": "https://kppsc.gov.pk",
    "description": "Teaching faculty appointments in Government Degree Colleges of Khyber Pakhtunkhwa."
  },
  {
    "id": 14,
    "title": "Assistant Sub-Inspector (ASI - BPS-11)",
    "department": "Khyber Pakhtunkhwa Police",
    "commission": "KPPSC",
    "province": "kpk",
    "location": "Peshawar, Malakand, Hazara, Kohat, D.I. Khan Ranges",
    "scale": "BPS-11",
    "education": "Bachelor's Degree from a recognized university with required physical fitness",
    "totalPositions": "90 Posts",
    "lastDate": "10 Dec 2026",
    "applyUrl": "https://kppsc.gov.pk",
    "description": "Police operational field leadership and investigation wing recruitment."
  },
  {
    "id": 15,
    "title": "Primary School Teacher (PST - BPS-12)",
    "department": "Elementary & Secondary Education KP",
    "commission": "NTS / KPPSC",
    "province": "kpk",
    "location": "All Districts including Merged Tribal Districts (NMDs)",
    "scale": "BPS-12",
    "education": "Bachelor's Degree (14 years) with ADE / B.Ed qualification",
    "totalPositions": "420 Posts",
    "lastDate": "28 Nov 2026",
    "applyUrl": "https://kppsc.gov.pk",
    "description": "Primary education instruction in government elementary schools of KP."
  },
  {
    "id": 16,
    "title": "Assistant Commissioner & Section Officer (BCS BPS-17)",
    "department": "Balochistan Civil Services / S&GAD",
    "commission": "BPSC",
    "province": "balochistan",
    "location": "Quetta, Gwadar, Khuzdar, Turbat, Sibi",
    "scale": "BPS-17",
    "education": "Bachelor's Degree (2nd Division) from HEC recognized university",
    "totalPositions": "38 Posts",
    "lastDate": "15 Dec 2026",
    "applyUrl": "https://bpsc.gob.pk",
    "description": "Provincial administrative service officers for district management and secretariat."
  },
  {
    "id": 17,
    "title": "Junior Engineer (Electrical - BPS-17)",
    "department": "Quetta Electric Supply Company (QESCO)",
    "commission": "NJP",
    "province": "balochistan",
    "location": "Quetta, Loralai, Pishin, Khuzdar",
    "scale": "BPS-17",
    "education": "B.Sc / BE in Electrical Engineering with valid PEC registration",
    "totalPositions": "25 Posts",
    "lastDate": "05 Dec 2026",
    "applyUrl": "https://njp.gov.pk",
    "description": "Grid station operations, transmission lines management and distribution oversight."
  },
  {
    "id": 18,
    "title": "Levies Sepoy & Wireless Operator (BPS-07)",
    "department": "Balochistan Levies Force",
    "commission": "District Committee / Direct",
    "province": "balochistan",
    "location": "Gwadar, Chaman, Panjgur, Zhob",
    "scale": "BPS-07",
    "education": "Matriculation with minimum 5'6\" height and running fitness test",
    "totalPositions": "140 Posts",
    "lastDate": "01 Dec 2026",
    "applyUrl": "https://balochistan.gov.pk",
    "description": "Law enforcement and border security duties in designated Levies areas."
  },
  {
    "id": 19,
    "title": "Senior Teacher (Science & General BPS-16)",
    "department": "Education Department Azad Jammu & Kashmir",
    "commission": "AJKPSC",
    "province": "ajk",
    "location": "Muzaffarabad, Mirpur, Rawalakot, Kotli, Bagh",
    "scale": "BPS-16",
    "education": "BS / Master's degree in relevant subject with B.Ed",
    "totalPositions": "85 Posts",
    "lastDate": "06 Dec 2026",
    "applyUrl": "https://ajkpsc.gov.pk",
    "description": "Secondary level school education under Government of AJ&K."
  },
  {
    "id": 20,
    "title": "Medical Officer (BPS-17)",
    "department": "Department of Health Azad Kashmir",
    "commission": "AJKPSC",
    "province": "ajk",
    "location": "AIMS Muzaffarabad & District Headquarters",
    "scale": "BPS-17",
    "education": "MBBS with PMDC / PMC certificate and 1 year recognized internship",
    "totalPositions": "45 Posts",
    "lastDate": "10 Dec 2026",
    "applyUrl": "https://ajkpsc.gov.pk",
    "description": "Hospital medical care and clinical duties in Azad Kashmir."
  },
  {
    "id": 21,
    "title": "Sub-Inspector & Police Constable",
    "department": "Gilgit-Baltistan Police Department",
    "commission": "PTS / GB Police",
    "province": "gb",
    "location": "Gilgit, Skardu, Diamer, Hunza, Ghizer",
    "scale": "BPS-14 / BPS-07",
    "education": "Graduation for SI / Matriculation for Constables with GB Domicile",
    "totalPositions": "110 Posts",
    "lastDate": "03 Dec 2026",
    "applyUrl": "https://gbpolice.gov.pk",
    "description": "Tourist police, local law enforcement and highway protection in Gilgit-Baltistan."
  },
  {
    "id": 22,
    "title": "Tourism & Wildlife Field Inspector (BPS-16)",
    "department": "Tourism, Sports & Culture Department Gilgit-Baltistan",
    "commission": "FPSC / Regional Selection Board",
    "province": "gb",
    "location": "Hunza, Skardu, Deosai, Gilgit",
    "scale": "BPS-16",
    "education": "Bachelor's / BS in Tourism, Environmental Science or Forestry",
    "totalPositions": "15 Posts",
    "lastDate": "14 Dec 2026",
    "applyUrl": "https://njp.gov.pk",
    "description": "Ecotourism facilitation, national park surveillance and environmental preservation."
  }
];

// Province display names mapping
const PROVINCE_NAMES = {
  all: "All Pakistan",
  punjab: "Punjab",
  sindh: "Sindh",
  kpk: "Khyber Pakhtunkhwa (KPK)",
  balochistan: "Balochistan",
  islamabad: "Islamabad (Federal)",
  ajk: "Azad Jammu & Kashmir (AJK)",
  gb: "Gilgit-Baltistan"
};

let currentSelectedProvince = "all";
let currentSearchQuery = "";

// =============================================================================
// 2. DOM INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  setupProvinceFilterButtons();
  setupHeaderAlertButton();
  updateBadgeCounts();
  renderJobs();
});

// Setup click handlers for province filter buttons
function setupProvinceFilterButtons() {
  const buttons = document.querySelectorAll(".province-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const province = btn.getAttribute("data-province");
      filterByProvince(province);
    });
  });
}

// Setup header alert button
function setupHeaderAlertButton() {
  const alertBtn = document.getElementById("btnHeaderAlert");
  if (alertBtn) {
    alertBtn.addEventListener("click", () => {
      const subscribeSection = document.getElementById("subscribe");
      if (subscribeSection) {
        subscribeSection.scrollIntoView({ behavior: "smooth" });
        const emailInput = document.getElementById("subscriberEmail");
        if (emailInput) {
          setTimeout(() => emailInput.focus(), 500);
        }
      }
    });
  }
}

// Update the numerical counts on each button badge and province directory cards
function updateBadgeCounts() {
  const buttons = document.querySelectorAll(".province-btn");
  buttons.forEach((btn) => {
    const province = btn.getAttribute("data-province");
    const badge = btn.querySelector(".count-badge");
    if (!badge) return;

    if (province === "all") {
      badge.textContent = JOBS_DATA.length;
    } else {
      const count = JOBS_DATA.filter((j) => j.province.toLowerCase() === province.toLowerCase()).length;
      badge.textContent = count;
    }
  });

  // Also update provincial overview cards
  const cards = document.querySelectorAll(".province-card");
  cards.forEach((card) => {
    const onclickAttr = card.getAttribute("onclick") || "";
    for (const [key, name] of Object.entries(PROVINCE_NAMES)) {
      if (onclickAttr.includes(`'${key}'`)) {
        const statusSpan = card.querySelector(".p-status");
        if (statusSpan) {
          const count = key === "all" 
            ? JOBS_DATA.length 
            : JOBS_DATA.filter(j => j.province.toLowerCase() === key.toLowerCase()).length;
          statusSpan.textContent = `${count} Jobs`;
        }
      }
    }
  });
}

// =============================================================================
// 3. FILTER & SEARCH LOGIC
// =============================================================================
function filterByProvince(provinceKey) {
  currentSelectedProvince = provinceKey || "all";
  currentSearchQuery = "";
  
  // Clear search input if filled
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  // Update active button state
  const buttons = document.querySelectorAll(".province-btn");
  buttons.forEach((b) => {
    if (b.getAttribute("data-province") === currentSelectedProvince) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });

  // Update labels
  const filterLabel = document.getElementById("currentFilterText");
  if (filterLabel) {
    filterLabel.textContent = PROVINCE_NAMES[currentSelectedProvince] || "All Pakistan";
  }

  const feedTitle = document.getElementById("feedSectionTitle");
  if (feedTitle) {
    if (currentSelectedProvince === "all") {
      feedTitle.textContent = "Latest Job Announcements";
    } else {
      feedTitle.textContent = `${PROVINCE_NAMES[currentSelectedProvince]} Jobs`;
    }
  }

  // Re-render
  renderJobs();

  // Scroll smoothly to feed
  const feed = document.getElementById("feed");
  if (feed) {
    feed.scrollIntoView({ behavior: "smooth" });
  }
}

function handleSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  
  const query = input.value.trim().toLowerCase();
  currentSearchQuery = query;

  renderJobs();
  
  const feed = document.getElementById("feed");
  if (feed) {
    feed.scrollIntoView({ behavior: "smooth" });
  }
}

// =============================================================================
// 4. RENDERING JOBS & EMPTY STATE
// =============================================================================
function renderJobs() {
  const container = document.getElementById("jobsListContainer");
  if (!container) return;

  // Filter dataset
  let filtered = [...JOBS_DATA];

  if (currentSelectedProvince !== "all") {
    filtered = filtered.filter(
      (item) => item.province.toLowerCase() === currentSelectedProvince.toLowerCase()
    );
  }

  if (currentSearchQuery) {
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(currentSearchQuery) ||
        item.department.toLowerCase().includes(currentSearchQuery) ||
        (item.location && item.location.toLowerCase().includes(currentSearchQuery))
    );
  }

  // If no jobs exist (which is the case currently)
  if (filtered.length === 0) {
    const provinceLabel = PROVINCE_NAMES[currentSelectedProvince] || "Pakistan";
    
    container.innerHTML = `
      <div class="empty-state-card">
        <div class="empty-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        
        <h3 class="empty-title">
          ${currentSearchQuery 
            ? `Koi Job Nahi Mili ("${escapeHTML(currentSearchQuery)}")` 
            : `Filhal ${provinceLabel} ke liye koi naya job alert mojood nahi hai`}
        </h3>
        <p class="empty-desc">
          ${currentSearchQuery 
            ? `Aapki search query se milti julti koi job mojood nahi. Dobara koshish karen ya filter reset karen.` 
            : `Pakistan ke tamam soobon (Punjab, Sindh, KPK, Balochistan, Federal) ki taraf se jese hi nayi jobs ya news aayengi, woh yahan foran update kardi jayengi.`}
        </p>

        <div class="empty-provinces-taglist">
          <span class="province-tag">Punjab</span>
          <span class="province-tag">Sindh</span>
          <span class="province-tag">KPK</span>
          <span class="province-tag">Balochistan</span>
          <span class="province-tag">Islamabad</span>
          <span class="province-tag">AJK</span>
          <span class="province-tag">Gilgit-Baltistan</span>
        </div>

        <div class="alert-subscribe-box" id="subscribe">
          <h4>Nayi Job Aate Hi Khabar Paayen</h4>
          <p>Apna Email darj karen taake nayi job aate hi aapko alert mil sake.</p>
          <form id="subscribeForm" onsubmit="event.preventDefault(); handleSubscribe();" class="sub-input-group">
            <input type="email" id="subscriberEmail" class="sub-input" placeholder="Apna email address likhein..." required>
            <button type="submit" class="btn-sub">Alert Me</button>
          </form>
        </div>
      </div>
    `;
    return;
  }

  // If jobs exist, render sleek cards
  container.innerHTML = `
    <div class="jobs-grid">
      ${filtered.map(createJobCardHtml).join("")}
    </div>
  `;
}

// Function to generate individual job card HTML
function createJobCardHtml(job) {
  const provinceLabel = PROVINCE_NAMES[job.province] || job.province;
  return `
    <article class="job-card" id="job-${job.id}">
      <div class="job-card-header">
        <div class="job-badges">
          <span class="badge-province">${provinceLabel}</span>
          ${job.commission ? `<span class="badge-commission">${escapeHTML(job.commission)}</span>` : ''}
          ${job.scale ? `<span class="badge-scale">${escapeHTML(job.scale)}</span>` : ''}
        </div>
        <div class="job-date-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Last Date: ${escapeHTML(job.lastDate)}
        </div>
      </div>

      <h4 class="job-title">${escapeHTML(job.title)}</h4>
      <p class="job-dept">${escapeHTML(job.department)}</p>

      <div class="job-meta-grid">
        <div class="meta-item">
          <span>📍</span>
          <span>Location: <strong>${escapeHTML(job.location || 'Pakistan')}</strong></span>
        </div>
        <div class="meta-item">
          <span>🎓</span>
          <span>Education: <strong>${escapeHTML(job.education || 'See Advertisement')}</strong></span>
        </div>
        <div class="meta-item">
          <span>👥</span>
          <span>Vacancies: <strong>${escapeHTML(job.totalPositions || 'Multiple')}</strong></span>
        </div>
      </div>

      <div class="job-card-footer">
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0; max-width: 450px;">
          ${escapeHTML(job.description || '')}
        </p>
        <div class="job-actions">
          <button class="btn-details-modal" onclick="openJobModal(${job.id})">Details & Instructions</button>
          <a href="${job.applyUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn-apply-direct">
            Apply Online &rarr;
          </a>
        </div>
      </div>
    </article>
  `;
}

// Global modal handlers
function openJobModal(jobId) {
  const job = JOBS_DATA.find(j => j.id === jobId);
  if (!job) return;

  const modal = document.getElementById("jobModal");
  const modalBody = document.getElementById("jobModalBody");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="badge-province" style="margin-bottom: 0.5rem; display: inline-block;">${PROVINCE_NAMES[job.province] || job.province}</span>
      <h2 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-top: 0.35rem; line-height: 1.3;">${escapeHTML(job.title)}</h2>
      <p style="font-size: 0.95rem; color: var(--color-primary-dark); font-weight: 600; margin-top: 0.25rem;">${escapeHTML(job.department)}</p>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem; font-size: 0.875rem;">
      <p style="margin-bottom: 0.4rem;"><strong>Recruitment Body:</strong> ${escapeHTML(job.commission || 'Direct')}</p>
      <p style="margin-bottom: 0.4rem;"><strong>Pay Scale / Grade:</strong> ${escapeHTML(job.scale || 'N/A')}</p>
      <p style="margin-bottom: 0.4rem;"><strong>Posting Station:</strong> ${escapeHTML(job.location || 'Pakistan')}</p>
      <p style="margin-bottom: 0.4rem;"><strong>Required Qualification:</strong> ${escapeHTML(job.education || 'As per official advertisement')}</p>
      <p style="margin-bottom: 0.4rem;"><strong>Total Positions:</strong> ${escapeHTML(job.totalPositions || 'Check Advertisement')}</p>
      <p style="margin-bottom: 0; color: #dc2626;"><strong>Last Date to Apply:</strong> ${escapeHTML(job.lastDate)}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">Job Description & Eligibility:</h4>
      <p style="font-size: 0.9rem; color: #475569; line-height: 1.6;">${escapeHTML(job.description || '')}</p>
    </div>

    <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem; font-size: 0.85rem; color: #065f46;">
      <strong>Online Apply Instructions:</strong><br>
      1. Official website par account create karein.<br>
      2. 1-Link / JazzCash / 1-Bill se application fee deposit karein.<br>
      3. Scanned CNIC, degree aur photo upload karke final form submit karein.
    </div>

    <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
      <button onclick="closeJobModal()" style="background: #e2e8f0; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 600; cursor: pointer;">Close</button>
      <a href="${job.applyUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn-apply-direct" style="padding: 0.6rem 1.2rem;">Visit Official Portal &rarr;</a>
    </div>
  `;

  modal.classList.add("open");
}

function closeJobModal() {
  const modal = document.getElementById("jobModal");
  if (modal) modal.classList.remove("open");
}

// =============================================================================
// 5. SUBSCRIPTION & TOAST UTILITY
// =============================================================================
function handleSubscribe() {
  const emailInput = document.getElementById("subscriberEmail");
  if (!emailInput || !emailInput.value) return;

  const email = emailInput.value.trim();
  showToast(`Shukriya (${email})! Nayi jobs aate hi aapko notification mil jayegi.`);
  emailInput.value = "";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
