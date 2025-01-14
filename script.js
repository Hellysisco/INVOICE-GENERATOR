const companyAddress = `Cognosphere Dynamics Limited\nPlot 19-21 Port Bell Road\nP. O. Box 201025, Nakawa Kampala\nEmail: sales@cognospheredynamics.com`;
const itemsContainer = document.getElementById('items-container');
const addItemButton = document.getElementById('add-item');
const generatePdfButton = document.getElementById('generate-pdf');
const taxPercentInput = document.getElementById('tax-percent');

function previewLogo(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('logo-preview').src = e.target.result;
            document.getElementById('logo-preview').style.display = 'block';
            document.getElementById('logo-text').style.display = 'none';
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function calculateTotals() {
    let subtotal = 0;
    const itemRows = itemsContainer.querySelectorAll('.item-row');

    itemRows.forEach(row => {
        const quantity = parseFloat(row.querySelector('.quantity').value) || 0;
        const rate = parseFloat(row.querySelector('.rate').value) || 0;
        const amountInput = row.querySelector('.amount');
        const amount = quantity * rate;
        amountInput.value = amount.toFixed(2);