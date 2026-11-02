// PRARAMBH 2026 QR Code Generator
let qrCodesGenerated = 0;

function generateAllQRCodes() {
  const baseUrlInput = document.getElementById('baseUrl');
  const baseUrl = baseUrlInput.value.trim().replace(/\/$/, '');
  const qrGrid = document.getElementById('qrGrid');
  const statusDiv = document.getElementById('status');
  const qrCountSpan = document.getElementById('qrCount');
  
  if (!baseUrl || baseUrl === 'https://your-site-name.netlify.app') {
    alert('Please update the base URL with your actual deployed website URL before generating QR codes.');
    baseUrlInput.focus();
    return;
  }
  
  statusDiv.style.display = 'block';
  qrGrid.innerHTML = '';
  qrCodesGenerated = 0;
  
  const guests = getAllGuests();
  
  guests.forEach((guest, index) => {
    setTimeout(() => {
      const invitationUrl = `${baseUrl}/invitation.html?id=${guest.id}`;
      const card = document.createElement('div');
      card.className = 'qr-card';
      
      card.innerHTML = `
        <h3>${guest.name}</h3>
        <div class="guest-id">${guest.id}</div>
        <div class="qr-container" id="qr-${guest.id}"></div>
        <div class="url">${invitationUrl}</div>
        <button class="btn" style="margin-top: 0.5rem; padding: 0.6rem 1.2rem; font-size: 0.9rem;" 
                onclick="downloadQR('${guest.id}', '${guest.name}')">
          ?? Download QR
        </button>
      `;
      
      qrGrid.appendChild(card);
      
      // Generate QR code
      new QRCode(document.getElementById(`qr-${guest.id}`), {
        text: invitationUrl,
width: 512,
height: 512,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      
      qrCodesGenerated++;
      qrCountSpan.textContent = qrCodesGenerated;
      
      if (qrCodesGenerated === guests.length) {
        statusDiv.style.display = 'none';
      }
    }, index * 100);
  });
}

function downloadQR(guestId, guestName) {
  const qrContainer = document.getElementById(`qr-${guestId}`);
  const canvas = qrContainer.querySelector('canvas');
  
  if (canvas) {
    canvas.toBlob((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `PRARAMBH_2026_QR_${guestId}_${guestName.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  } else {
    const img = qrContainer.querySelector('img');
    if (img) {
      const link = document.createElement('a');
      link.href = img.src;
      link.download = `PRARAMBH_2026_QR_${guestId}_${guestName.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

function downloadAllQRCodes() {
  const baseUrlInput = document.getElementById('baseUrl');
  const baseUrl = baseUrlInput.value.trim().replace(/\/$/, '');
  
  if (!baseUrl || baseUrl === 'https://your-site-name.netlify.app') {
    alert('Please update the base URL and generate QR codes first.');
    return;
  }
  
  const guests = getAllGuests();
  const zip = new JSZip();
  const qrFolder = zip.folder("PRARAMBH_2026_QR_Codes");
  
  let processed = 0;
  guests.forEach(guest => {
    const invitationUrl = `${baseUrl}/invitation.html?id=${guest.id}`;
    
    // Create a temporary QR code
    const tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);
    
    new QRCode(tempDiv, {
      text: invitationUrl,
width: 512,
height: 512,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
    
    setTimeout(() => {
      const canvas = tempDiv.querySelector('canvas');
      if (canvas) {
        canvas.toBlob((blob) => {
          qrFolder.file(`PRARAMBH_2026_QR_${guest.id}_${guest.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`, blob);
          document.body.removeChild(tempDiv);
          processed++;
          
          if (processed === guests.length) {
            zip.generateAsync({type:"blob"}).then((content) => {
              saveAs(content, "PRARAMBH_2026_All_QR_Codes.zip");
            });
          }
        });
      }
    }, 200);
  });
  
  alert('Preparing ZIP download... This may take a moment.');
}
