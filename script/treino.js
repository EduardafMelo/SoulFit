// Troca entre abas
const tabs = document.querySelectorAll('.tab');
const conteudos = document.querySelectorAll('.conteudo');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    conteudos.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Cálculo de IMC
document.getElementById('calcular').addEventListener('click', () => {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');

  if (!peso || !altura || altura <= 0) {
    resultado.textContent = "Por favor, insira valores válidos.";
    resultado.style.color = "red";
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(1);
  let msg = "";

  if (imc < 18.5) msg = "Abaixo do peso 🟡";
  else if (imc < 24.9) msg = "Peso ideal 🟢";
  else if (imc < 29.9) msg = "Sobrepeso 🟠";
  else msg = "Obesidade 🔴";

  resultado.style.color = "#3A2E3E";
  resultado.textContent = `Seu IMC é ${imc} – ${msg}`;
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.conteudo li i').forEach(i => {
    // se icone nao tem conteúdo visível (pode variar por font-face), checamos
    const hasGlyph = window.getComputedStyle(i).getPropertyValue('font-family').toLowerCase().includes('remix');
    // se a font-family não indicar Remix Icon, tentamos usar emoji fallback
    if (!hasGlyph) {
      const emoji = i.dataset.emoji || '🏃';
      i.textContent = emoji;
      i.style.fontFamily = 'inherit';
      i.style.fontSize = '1.2rem';
    }
  });
});