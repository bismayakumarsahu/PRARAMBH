import qrcode
import os

# Staff data from js/staff.js
STAFF = [
    {"id": "staff01", "name": "Mr. ABC", "designation": "HOD"},
    {"id": "staff02", "name": "Ms. DEF", "designation": "Faculty"}
]

# Base URL for the staff page
BASE_URL = "https://your-site-name.netlify.app"

# Output directory
OUTPUT_DIR = "qr_codes"
os.makedirs(OUTPUT_DIR, exist_ok=True)

for staff in STAFF:
    # QR code points to staff page with staff ID
    invitation_url = f"{BASE_URL}/pages/staff.html?id={staff['id']}"

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(invitation_url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    # Sanitize filename
    safe_name = "".join(c for c in staff["name"] if c.isalnum() or c in (" ", "-")).replace(" ", "_")
    filename = f"{OUTPUT_DIR}/PRARAMBH_2026_QR_{staff['id']}_{safe_name}.png"
    img.save(filename)
    print(f"Generated: {filename}")
    print(f"  URL: {invitation_url}")

print("\nDone! QR codes saved in", OUTPUT_DIR)