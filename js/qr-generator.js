// PRARAMBH 2026 QR Code Generator
let qrCodesGenerated = 0;

function generateAllQRCodes() {
  const baseUrlInput = document.getElementById('baseUrl');
  const baseUrl = baseUrlInput.value.trim().replace(/\/$/, '');
  const qrGrid = document.getElementById('qrGrid');
  const statusDiv = document.getElementById('status');
  const qrCountSpan = document.getElementById('qrCount');
  const qrTypeSelect = document.getElementById('qrType');
  const totalCountSpan = document.getElementById('totalCount');
  
  if (!baseUrl || baseUrl === 'https://your-site-name.netlify.app') {
    alert('Please update the base URL with your actual deployed website URL before generating QR codes.');
    baseUrlInput.focus();
    return;
  }
  
  statusDiv.style.display = 'block';
  qrGrid.innerHTML = '';
  qrCodesGenerated = 0;
  
  let items = [];
  if (qrTypeSelect && qrTypeSelect.value === 'staff') {
    items = typeof getAllStaff === 'function' ? getAllStaff() : (window.STAFF || []);
  } else {
    items = typeof getAllGuests === 'function' ? getAllGuests() : (window.GUESTS || []);
  }
  
  if (totalCountSpan) {
    totalCountSpan.textContent = items.length;
  }
  
  if (items.length === 0) {
    statusDiv.style.display = 'none';
    alert('No items found for this type.');
    return;
  }
  
  items.forEach((item, index) => {
    setTimeout(() => {
      const invitationUrl = (qrTypeSelect && qrTypeSelect.value === 'staff')
        ? `${baseUrl}/pages/staff.html?id=${item.id}`
        : `${baseUrl}/invitation.html?id=${item.id}`;
      const card = document.createElement('div');
      card.className = 'qr-card';
      
      card.innerHTML = `
        <h3>${item.name}</h3>
        <div class="guest-id">${item.id}</div>
        ${item.designation ? `<div style="color: var(--muted); font-size: 0.9rem; margin-bottom: 0.5rem;">${item.designation}</div>` : ''}
        <div class="qr-container" id="qr-${item.id}"></div>
        <div class="url">${invitationUrl}</div>
        <button class="btn" style="margin-top: 0.5rem; padding: 0.6rem 1.2rem; font-size: 0.9rem;" 
                onclick="downloadQR('${item.id}', '${item.name}')">
          📥 Download QR
        </button>
      `;
      
      qrGrid.appendChild(card);
      
      // Generate QR code
      new QRCode(document.getElementById(`qr-${item.id}`), {
        text: invitationUrl,
        width: 512,
        height: 512,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      
      qrCodesGenerated++;
      qrCountSpan.textContent = qrCodesGenerated;
      
      if (qrCodesGenerated === items.length) {
        statusDiv.style.display = 'none';
      }
    }, index * 50);
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
  const qrTypeSelect = document.getElementById('qrType');
  
  if (!baseUrl || baseUrl === 'https://your-site-name.netlify.app') {
    alert('Please update the base URL and generate QR codes first.');
    return;
  }
  
  let items = [];
  let folderName = "PRARAMBH_2026_Guest_QR_Codes";
  if (qrTypeSelect && qrTypeSelect.value === 'staff') {
    items = typeof getAllStaff === 'function' ? getAllStaff() : (window.STAFF || []);
    folderName = "PRARAMBH_2026_Staff_QR_Codes";
  } else {
    items = typeof getAllGuests === 'function' ? getAllGuests() : (window.GUESTS || []);
    folderName = "PRARAMBH_2026_Guest_QR_Codes";
  }
  
  if (items.length === 0) {
    alert('No items found for this type.');
    return;
  }
  
  const zip = new JSZip();
  const qrFolder = zip.folder(folderName);
  
  let processed = 0;
  items.forEach(item => {
    const invitationUrl = (qrTypeSelect && qrTypeSelect.value === 'staff')
      ? `${baseUrl}/pages/staff.html?id=${item.id}`
      : `${baseUrl}/invitation.html?id=${item.id}`;
    
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
          qrFolder.file(`PRARAMBH_2026_QR_${item.id}_${item.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`, blob);
          document.body.removeChild(tempDiv);
          processed++;
          
          if (processed === items.length) {
            zip.generateAsync({type:"blob"}).then((content) => {
              saveAs(content, `${folderName}.zip`);
            });
          }
        });
      } else {
        document.body.removeChild(tempDiv);
        processed++;
      }
    }, 200);
  });
  
  alert('Preparing ZIP download... This may take a moment.');
}
