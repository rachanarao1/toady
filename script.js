const select = document.getElementById('vm-select');
const resultDiv = document.getElementById('result');

select.addEventListener('change', () => {
  const selected = select.options[select.selectedIndex].text;
  resultDiv.textContent = `You selected: ${selected}`;
});
