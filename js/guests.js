// PRARAMBH 2026 Guest Configuration
// Update this file to add/edit guest information
// Each guest needs a unique ID and corresponding invitation image

const GUESTS = [
  {
    id: "guest01",
    name: "Dr. Purnendu Mishra",
    designation: "Principal, Vikash Institute of Technology",
    institution: "Vikash Institute of Technology",
    image: "invitations/invitation-01.png"
  },
  {
    id: "guest02",
    name: "Guest 2 Name",
    designation: "Guest 2 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-02.png"
  },
  {
    id: "guest03",
    name: "Guest 3 Name",
    designation: "Guest 3 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-03.png"
  },
  {
    id: "guest04",
    name: "Guest 4 Name",
    designation: "Guest 4 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-04.png"
  },
  {
    id: "guest05",
    name: "Guest 5 Name",
    designation: "Guest 5 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-05.png"
  },
  {
    id: "guest06",
    name: "Guest 6 Name",
    designation: "Guest 6 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-06.png"
  },
  {
    id: "guest07",
    name: "Guest 7 Name",
    designation: "Guest 7 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-07.png"
  },
  {
    id: "guest08",
    name: "Guest 8 Name",
    designation: "Guest 8 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-08.png"
  },
  {
    id: "guest09",
    name: "Guest 9 Name",
    designation: "Guest 9 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-09.png"
  },
  {
    id: "guest10",
    name: "Guest 10 Name",
    designation: "Guest 10 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-10.png"
  },
  {
    id: "guest11",
    name: "Guest 11 Name",
    designation: "Guest 11 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-11.png"
  },
  {
    id: "guest12",
    name: "Guest 12 Name",
    designation: "Guest 12 Designation",
    institution: "Vikash Institute of Technology & Vikash Polytechnic",
    image: "invitations/invitation-12.png"
  }
];

// Function to get guest by ID
function getGuestById(id) {
  return GUESTS.find(guest => guest.id === id);
}

// Function to get all guests
function getAllGuests() {
  return GUESTS;
}
