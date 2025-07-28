const vmSelect = document.getElementById('vm-select');
const deployBtn = document.getElementById('deploy-btn');
const resultDiv = document.getElementById('result');

// Enable Deploy button only when VM is selected
vmSelect.addEventListener('change', () => {
  deployBtn.disabled = !vmSelect.value;
  resultDiv.textContent = '';
});

deployBtn.addEventListener('click', () => {
  const selectedVm = vmSelect.options[vmSelect.selectedIndex].text;
  if (!selectedVm) {
    resultDiv.textContent = 'Please select a VM to deploy.';
    return;
  }
  resultDiv.textContent = `Deploying ${selectedVm}...`;
  
  // Here you can add your deploy logic or API calls
});
