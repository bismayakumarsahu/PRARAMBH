const GUESTS = [
  { id: "guest01", name: "Sri D. Nageswar Rao", designation: "Chairman", institution: "Laxmi Vikash Group of Institutions", video: "videos/Sj. D. Nageswar Rao.mp4" },
  { id: "guest02", name: "Prof. Ajay Kumar Mohapatra", designation: "Chief Administrative Officer (CAO)", institution: "Laxmi Vikash Group of Institutions", video: "videos/Prof. Ajay Ku. Mohapatra.mp4" },
  { id: "guest03", name: "Shri P. K. Dash", designation: "Senior Advisor", institution: "Chairman's Office", video: "videos/Shri P. K. Dash.mp4" },
  { id: "guest04", name: "Mr. Jyoti Ranjan Mohanty", designation: "Senior Advisor", institution: "Chairman's Office", video: "videos/Mr. Jyoti Ranjan Mohanty.mp4" },
  { id: "guest05", name: "Dr. Purnendu Mishra", designation: "Principal", institution: "Vikash Institute of Technology (VIT)", video: "videos/Dr. Purnendu Mishra.mp4" },
  { id: "guest06", name: "Dr. Dillip Khamari", designation: "Principal", institution: "Vikash Polytechnic (VPT)", video: "videos/Dr. Dillip Khamari.mp4" },
  { id: "guest07", name: "Prof. Satyabrata Mishra", designation: "Principal", institution: "Vikash Degree College (VDC)", video: "videos/Prof. Satyabrata Mishra.mp4" },
  { id: "guest08", name: "Dr. Kshirod Ku. Pradhan", designation: "Principal", institution: "Vikash School of Business Management (VSBM)", video: "videos/Dr. Kshirod Ku. Pradhan.mp4" },
  { id: "guest09", name: "Dr. Bikram Ku. Das", designation: "Principal", institution: "Vikash Law School (VLS)", video: "videos/Dr. Bikram Ku. Das.mp4" },
  { id: "guest10", name: "Mrs. Dipanjali Patel", designation: "Principal", institution: "Vikash Nursing College (VNC)", video: "videos/Mrs. Dipanjali Patel.mp4" },
  { id: "guest11", name: "Dr. Subhendu Sekhar Mishra", designation: "Principal", institution: "Vikash Pharmacy College (VPC)", video: "videos/Dr. Subhendu Sekhar Mishra.mp4" },
  { id: "guest12", name: "Dr. R. S. V. Krishna", designation: "Dean, Student Affairs", institution: "VHEI", video: "videos/Dr. R. S. V. Krishna.mp4" },
  { id: "guest13", name: "Mr. Deepak Ku. Nayak", designation: "Vice Principal", institution: "Vikash School of Business Management (VSBM)", video: "videos/Mr. Deepak Ku. Nayak.mp4" }
];
function getGuestById(id) { return GUESTS.find(g => g.id === id); }
function getAllGuests() { return GUESTS; }