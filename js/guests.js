const GUESTS = [
  { id: "guest01", name: "Sri D. Nageswar Rao", designation: "Chairman", institution: "Laxmi Vikash Group of Institutions", video: "videos/d-nageswar-rao.mp4" },
  { id: "guest02", name: "Prof. Ajay Kumar Mahapatra", designation: "Chief Administrative Officer (CAO)", institution: "Laxmi Vikash Group of Institutions", video: "videos/ajay-kumar-mahapatra.mp4" },
  { id: "guest03", name: "Shri P. K. Dash", designation: "Senior Advisor", institution: "Chairman's Office", video: "videos/p-k-dash.mp4" },
  { id: "guest04", name: "Prasanna Kumar Dash", designation: "Senior Advisor", institution: "Chairman's Office", video: "videos/prasanna-kumar-dash.mp4" },
  { id: "guest05", name: "Dr. Purnendu Mishra", designation: "Principal", institution: "Vikash Institute of Technology (VIT)", video: "videos/purnendu-mishra.mp4" },
  { id: "guest06", name: "Dr. Dilip Khamari", designation: "Principal", institution: "Vikash Polytechnic (VPT)", video: "videos/dilip-khamari.mp4" },
  { id: "guest07", name: "Prof. Satyabrata Mishra", designation: "Principal", institution: "Vikash Degree College (VDC)", video: "videos/satyabrata-mishra.mp4" },
  { id: "guest08", name: "Dr. Kshirod Pradhan", designation: "Principal", institution: "Vikash School of Business Management (VSBM)", video: "videos/guest-08.mp4" },
  { id: "guest09", name: "Dr. Bikram Kumar Das", designation: "Principal", institution: "Vikash Law School (VLS)", video: "videos/bikram-kumar-das.mp4" },
  { id: "guest10", name: "Ms. Dipanjali Patel", designation: "Principal", institution: "Vikash Nursing College (VNC)", video: "videos/dipanjali-patel.mp4" },
  { id: "guest11", name: "Dr. Subhendra Sekhar Mishra", designation: "Principal", institution: "Vikash Pharmacy College (VPC)", video: "videos/subhendra-sekhar-mishra.mp4" },
  { id: "guest12", name: "Mr. R. S. V. Krishna", designation: "Dean, Student Affairs", institution: "VHEI", video: "videos/r-s-v-krishna.mp4" },
  { id: "guest13", name: "Mr. Deepak Kumar Nayak", designation: "Vice Principal", institution: "Vikash School of Business Management (VSBM)", video: "videos/deepak-kumar-nayak.mp4" }
];
function getGuestById(id) { return GUESTS.find(g => g.id === id); }
function getAllGuests() { return GUESTS; }