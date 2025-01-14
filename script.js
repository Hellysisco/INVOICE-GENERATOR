const scriptContent = `document.getElementById('generate-button').addEventListener('click', () => {
    const clientName = document.getElementById('client-name').value;
    const clientAddress = document.getElementById('client-address').value;
    const itemDescription = document.getElementById('item-description').value;
    const quantity = document.getElementById('quantity').value;
    const unitPrice = document.getElementById('unit-price').value;
    const total = quantity * unitPrice;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text(`Invoice`, 10, 10);
    doc.text(`Client Name: ${clientName}`, 10, 20);
    doc.text(`Client Address: ${clientAddress}`, 10, 30);
    doc.text(`Item: ${itemDescription}`, 10, 40);
    doc.text(`Quantity: ${quantity}`, 10, 50);
    doc.text(`Unit Price: $${unitPrice}`, 10, 60);
    doc.text(`Total: $${total}`, 10, 70);

    doc.save(`Invoice-${clientName}.pdf`);
});`;

// Setting up the application structure
const fs = require('fs');
const path = require('path');
const appDir = path.join(__dirname, 'InvoiceGenerator');
const htmlPath = path.join(appDir, 'index.html');
const scriptPath = path.join(appDir, 'script.js');

fs.mkdirSync(appDir, { recursive: true });
fs.writeFileSync(htmlPath, htmlContent);
fs.writeFileSync(scriptPath, scriptContent);

console.log(`Invoice Generator created at ${appDir}.`);
