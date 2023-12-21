document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calculateCPCButton').addEventListener('click', calculateCPC);
  document.getElementById('calculateCTRButton').addEventListener('click', calculateCTR);
});

function calculateCPC() {
  const impressions = parseFloat(document.getElementById('impressions').value);
  const clicks = parseFloat(document.getElementById('clicks').value);
  const cpcResult = document.getElementById('cpcResult');

  if (!isNaN(impressions) && !isNaN(clicks) && impressions > 0 && clicks > 0) {
    const cpc = clicks / impressions;
    cpcResult.textContent = `CPC: $${cpc.toFixed(5)}`;
    cpcResult.style.color = '#333';
  } else {
    cpcResult.textContent = 'Please enter valid values.';
    cpcResult.style.color = 'red';
  }
}

function calculateCTR() {
  const impressions = parseFloat(document.getElementById('impressions').value);
  const clicks = parseFloat(document.getElementById('clicks').value);
  const ctrResult = document.getElementById('ctrResult');

  if (!isNaN(impressions) && !isNaN(clicks) && impressions > 0 && clicks > 0) {
    const ctr = (clicks / impressions) * 100;
    ctrResult.textContent = `CTR: ${ctr.toFixed(2)}%`;
    ctrResult.style.color = '#333';
  } else {
    ctrResult.textContent = 'Please enter valid values.';
    ctrResult.style.color = 'red';
  }
}
