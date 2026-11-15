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

const JOBS_DATA = [];

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

// Update the numerical counts on each button badge
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

  // If jobs exist in future, render sleek cards
  container.innerHTML = `
    <div style="display: grid; gap: 1rem;">
      ${filtered.map(createJobCardHtml).join("")}
    </div>
  `;
}

// Function to generate individual job card HTML when jobs are added
function createJobCardHtml(job) {
  const provinceLabel = PROVINCE_NAMES[job.province] || job.province;
  return `
    <article class="job-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
      <div>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.4rem;">
          <span style="background: #ecfdf5; color: #065f46; font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 9999px;">
            ${provinceLabel}
          </span>
          <span style="font-size: 0.8rem; color: #64748b; font-weight: 500;">
            ${job.department}
          </span>
        </div>
        <h4 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.35rem;">
          ${job.title}
        </h4>
        <div style="font-size: 0.825rem; color: #64748b; display: flex; gap: 1rem;">
          <span>📍 ${job.location || 'Pakistan'}</span>
          <span>📅 Last Date: <strong>${job.lastDate}</strong></span>
        </div>
      </div>
      <div>
        <a href="${job.link || '#'}" style="display: inline-block; background: #047857; color: #ffffff; font-weight: 600; font-size: 0.85rem; padding: 0.5rem 1rem; border-radius: 8px;">
          View Details &rarr;
        </a>
      </div>
    </article>
  `;
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
