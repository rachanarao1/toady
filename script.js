const select = document.getElementById('vm-select');
const runBtn = document.getElementById('run-btn');
const resultDiv = document.getElementById('result');

// Enable Run button only when a VM is selected
select.addEventListener('change', () => {
  runBtn.disabled = !select.value;
  resultDiv.textContent = ''; // Clear result when changing selection
});

// On Run button click
runBtn.addEventListener('click', () => {
  const selected = select.options[select.selectedIndex].text;
  if (!selected) {
    resultDiv.textContent = 'Please select a VM type first.';
    return;
  }
  // Simulate deployment action
  resultDiv.textContent = `Deploying ${selected}...`;
  
  // Here you can add actual deploy logic or API calls
});
