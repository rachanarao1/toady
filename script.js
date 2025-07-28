const vmSelect = document.getElementById('vm-select');
const deployBtn = document.getElementById('deploy-btn');
const resultDiv = document.getElementById('result');

// Load VM options from catalog.json
fetch('catalog.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(vm => {
      const option = document.createElement('option');
      option.value = vm.id;
      option.textContent = vm.name;
      option.title = vm.description;
      vmSelect.appendChild(option);
    });
  })
  .catch(() => {
    resultDiv.textContent = 'Failed to load VM options.';
  });

vmSelect.addEventListener('change', () => {
  deployBtn.disabled = vmSelect.value === '';
  resultDiv.textContent = '';
});

deployBtn.addEventListener('click', () => {
  if (!vmSelect.value) return;
  const selectedText = vmSelect.options[vmSelect.selectedIndex].text;
  resultDiv.textContent = `Deploying ${selectedText}... 🚀`;
  
  // TODO: Add your actual deployment logic here (API call, terraform exec, etc)
  
  // Simulate deployment delay
  setTimeout(() => {
    resultDiv.textContent = `${selectedText} deployed successfully! ✅`;
  }, 2000);
});
