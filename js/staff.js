const STAFF = [
  { id: "staff01", name: "Mr. ABC", designation: "Teaching Staff" },
  { id: "staff02", name: "Ms. DEF", designation: "Non-Teaching Staff" }
];
function getAllStaff() { return STAFF; }
function getStaffById(id) { return STAFF.find(s => s.id === id); }