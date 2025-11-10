document.addEventListener("DOMContentLoaded", () => {
  console.log("Arquivo treino.js carregado!");

  // === Troca entre abas ===
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

  // === Cálculo de IMC ===
  const botao = document.getElementById("calcular");
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");
  const resultado = document.getElementById("resultado");

  botao.addEventListener("click", () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

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

  // === Corrige ícones que não renderizam ===
  document.querySelectorAll('.conteudo li i').forEach(i => {
    const hasGlyph = window
      .getComputedStyle(i)
      .getPropertyValue('font-family')
      .toLowerCase()
      .includes('remix');
    if (!hasGlyph) {
      const emoji = i.dataset.emoji || '🏃';
      i.textContent = emoji;
      i.style.fontFamily = 'inherit';
      i.style.fontSize = '1.2rem';
    }
  });
});
