# PakJobs Hub - Clean & Minimalist Pakistan Job Portal

Yeh website Pakistan ke tamam soobon (Provinces) ki job news aur updates ke liye tayar ki gayi hai.

## 📁 Files & Folder Structure

```
job_news_orhan/
│
├── index.html          # Main HTML structure, layout, navbar, province filters, & empty state
├── css/
│   └── style.css       # Clean, modern, minimalist CSS styling (responsive)
├── js/
│   └── app.js          # Interactive province filters, search, toast notifications & job rendering
└── assets/             # Images, icons aur future documents ke liye folder
    └── README.md
```

---

## 🌟 Features

1. **Clean & Minimalist Design**:
   - Modern typography (`Plus Jakarta Sans`)
   - Professional Pakistani emerald green & slate gray color palette
   - Fast loading & 100% responsive (Mobile, Tablet, Desktop)

2. **Tamam Subon ki Coverage (Provinces)**:
   - Punjab (PPSC, Police, School Education)
   - Sindh (SPSC, Karachi Municipal, Sindh Police)
   - Khyber Pakhtunkhwa (KPPSC, Elementary & Secondary)
   - Balochistan (BPSC, Levies, Health)
   - Federal / Islamabad (FPSC, FIA, NADRA, FBR, Ministries)
   - Azad Jammu & Kashmir (AJK)
   - Gilgit-Baltistan (GB)

3. **Current Status (Filhal No News)**:
   - Website pe filhal koi dummy/fake job news nahi rakhi gayi.
   - Elegant Empty State UI dikhaya gaya hai jahan likha hai ke:
     *"Filhal koi naya job alert mojood nahi hai. Nayi jobs aate hi foran update kardi jayengi."*
   - Visitors ke liye "Job Alert" email subscription ka clean box mojood hai.

---

## 🚀 How to Add New Jobs in Future

Jab bhi aap kisi bhi soobay ki nayi job add karna chahein, aap `js/app.js` file open karein aur `JOBS_DATA` array mein naya object add kar dein:

```javascript
const JOBS_DATA = [
  {
    id: 1,
    title: "Secondary School Teacher (SST - BPS-16)",
    department: "School Education Department",
    province: "punjab", // 'punjab', 'sindh', 'kpk', 'balochistan', 'islamabad', 'ajk', 'gb'
    location: "Lahore, Multan, Rawalpindi",
    lastDate: "15 Dec 2026",
    source: "PPSC",
    link: "https://ppsc.gop.pk"
  }
];
```

Website automatic us job ko uske mutaliqa soobay ke filter mein card bana kar show kar degi!

---

## 🌐 Website Kaise Run Karein
Aap `index.html` file par double click karke kisi bhi browser (Chrome, Edge, Firefox) mein direct open kar sakte hain.
