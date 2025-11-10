// Seleciona elementos
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav_links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const exploreBtn = document.getElementById('exploreBtn');
const modal = document.getElementById('exploreModal');
const closeModal = document.getElementById('closeModal');

exploreBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});


function abrirModal(nomeReceita) {
  const modal = document.getElementById('modal');
  const modalConteudo = document.getElementById('modal-conteudo');

  modalConteudo.innerHTML = '<span class="fechar" onclick="fecharModal()">&times;</span>';

  // SALGADOS
  if (nomeReceita === 'strogonoff') {
    modalConteudo.innerHTML += `
            <h2>Strogonoff fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 1/2 peito de frango<br>
            - 1/2 cebola<br>
            - 1 tomate<br>
            - 1 xícara de molho de tomate<br>
            - 1 copo de iogurte natural<br>
            - Sal e pimenta a gosto<br>
            - 1 batata-doce para acompanhar</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Corte o frango em cubos e tempere.<br>
            2. Refogue a cebola e o frango.<br>
            3. Adicione tomate, molho e iogurte.<br>
            4. Cozinhe até ficar macio.<br>
            5. Sirva com batata-doce assada.</p>
        `;
  }

  if (nomeReceita === 'omelete') {
    modalConteudo.innerHTML += `
            <h2>Omelete fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 2 ovos<br>
            - 1 colher de sopa de leite<br>
            - Sal, pimenta e temperos a gosto<br>
            - Legumes variados</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Bata os ovos com leite, sal e temperos.<br>
            2. Coloque legumes picados na frigideira.<br>
            3. Despeje os ovos e cozinhe até firmar.<br>
            4. Sirva quente.</p>
        `;
  }

  if (nomeReceita === 'quibe') {
    modalConteudo.innerHTML += `
            <h2>Quibe fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 1 xícara de trigo para quibe<br>
            - 250g carne moída magra<br>
            - Hortelã, cebola, sal e pimenta a gosto</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Hidrate o trigo.<br>
            2. Misture com a carne e temperos.<br>
            3. Modele os quibes e asse por 30 min a 180°C.</p>
        `;
  }

  if (nomeReceita === 'coxinha') {
    modalConteudo.innerHTML += `
            <h2>Cachorro Quente fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - Pão integral<br>
            - Salsicha light ou peito de frango desfiado<br>
            - Molho de tomate caseiro<br>
            - Alface, tomate e cenoura ralada</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Cozinhe a salsicha ou frango.<br>
            2. Monte no pão com vegetais e molho.<br>
            3. Sirva imediatamente.</p>
        `;
  }

  if (nomeReceita === 'pastel') {
    modalConteudo.innerHTML += `
            <h2>Pastel fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - Massa integral para pastel<br>
            - Recheio de frango, queijo magro ou legumes<br>
            - Temperos a gosto</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Recheie a massa.<br>
            2. Feche e pincele com ovo.<br>
            3. Asse por 15-20 min a 200°C.</p>
        `;
  }

  if (nomeReceita === 'crepioca') {
    modalConteudo.innerHTML += `
            <h2>Crepioca fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 2 colheres de sopa de tapioca<br>
            - 1 ovo<br>
            - Sal a gosto<br>
            - Recheio a gosto</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Misture ovo e tapioca.<br>
            2. Cozinhe em frigideira antiaderente.<br>
            3. Adicione recheio e dobre.</p>
        `;
  }

  if (nomeReceita === 'almondega') {
    modalConteudo.innerHTML += `
            <h2>Almondega fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 250g carne magra moída<br>
            - 1 ovo<br>
            - Temperos a gosto<br>
            - Farinha de aveia para empanar</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Misture carne, ovo e temperos.<br>
            2. Modele as almôndegas.<br>
            3. Asse ou cozinhe no molho.</p>
        `;
  }

  if (nomeReceita === 'espaguete') {
    modalConteudo.innerHTML += `
            <h2>Espaguete fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 100g de espaguete integral<br>
            - Molho de tomate caseiro<br>
            - Legumes e ervas a gosto</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Cozinhe o macarrão.<br>
            2. Prepare o molho com legumes.<br>
            3. Misture e sirva quente.</p>
        `;
  }

  if (nomeReceita === 'paodequeijo') {
    modalConteudo.innerHTML += `
            <h2>Pão de Queijo fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 1 xícara de polvilho azedo<br>
            - 1 ovo<br>
            - 2 colheres de sopa de queijo magro ralado<br>
            - 2 colheres de sopa de iogurte natural</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Misture os ingredientes.<br>
            2. Modele bolinhas.<br>
            3. Asse por 15-20 min a 180°C.</p>
        `;
  }

  if (nomeReceita === 'torta') {
    modalConteudo.innerHTML += `
            <h2>Torta de Frango fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - Massa integral<br>
            - Frango desfiado<br>
            - Legumes e temperos</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Recheie a massa com frango e legumes.<br>
            2. Asse por 30-35 min a 180°C.</p>
        `;
  }

  // DOCES
  if (nomeReceita === 'brigadeiro') {
    modalConteudo.innerHTML += `
            <h2>Brigadeiro fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 1 colher de sopa de cacau em pó<br>
            - 2 colheres de sopa de leite condensado light<br>
            - Granulado dietético</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Misture o cacau com leite condensado.<br>
            2. Cozinhe até engrossar.<br>
            3. Enrole e passe no granulado dietético.</p>
        `;
  }

  if (nomeReceita === 'boloCenoura') {
    modalConteudo.innerHTML += `
            <h2>Bolo de Cenoura fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 2 cenouras médias<br>
            - 3 ovos<br>
            - 1/2 xícara de óleo de coco<br>
            - 1 xícara de farinha integral<br>
            - 1/2 xícara de adoçante culinário<br>
            - 1 colher de fermento em pó</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Bata cenoura, ovos e óleo.<br>
            2. Misture os secos.<br>
            3. Asse por 30-35 min a 180°C.</p>
        `;
  }

  if (nomeReceita === 'mousse') {
    modalConteudo.innerHTML += `
            <h2>Mousse fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 1/2 xícara de iogurte grego<br>
            - 2 colheres de sopa de cacau em pó<br>
            - 1 colher de mel</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Misture todos os ingredientes.<br>
            2. Leve à geladeira por 1h antes de servir.</p>
        `;
  }

  if (nomeReceita === 'pudim') {
    modalConteudo.innerHTML += `
            <h2>Pudim fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 1 lata de leite condensado light<br>
            - 3 ovos<br>
            - 1/2 xícara de leite desnatado<br>
            - Adoçante a gosto</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Bata todos os ingredientes.<br>
            2. Asse em banho-maria por 40 min a 180°C.<br>
            3. Leve à geladeira antes de servir.</p>
        `;
  }

  if (nomeReceita === 'tortaDoce') {
    modalConteudo.innerHTML += `
            <h2>Torta doce fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - Massa integral<br>
            - Frutas ou recheio light<br>
            - Adoçante a gosto</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Recheie a massa com frutas.<br>
            2. Asse por 25-30 min a 180°C.</p>
        `;
  }

  if (nomeReceita === 'brownie') {
    modalConteudo.innerHTML += `
            <h2>Brownie fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 1/2 xícara de farinha de aveia<br>
            - 1/4 xícara de cacau em pó<br>
            - 2 ovos<br>
            - 1/4 xícara de mel ou adoçante<br>
            - 2 colheres de sopa de óleo de coco</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Misture todos os ingredientes.<br>
            2. Asse por 20-25 min a 180°C.</p>
        `;
  }

  if (nomeReceita === 'panqueca') {
    modalConteudo.innerHTML += `
            <h2>Panqueca fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 2 ovos<br>
            - 2 colheres de sopa de aveia<br>
            - 1/2 banana<br>
            - Canela a gosto</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Bata tudo no liquidificador.<br>
            2. Cozinhe em frigideira antiaderente.<br>
            3. Sirva com mel ou frutas.</p>
        `;
  }

  if (nomeReceita === 'waffle') {
    modalConteudo.innerHTML += `
            <h2>Waffle fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 2 ovos<br>
            - 1/2 xícara de aveia<br>
            - 1/2 banana<br>
            - Canela a gosto</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Misture tudo.<br>
            2. Cozinhe na máquina de waffle até dourar.<br>
            3. Sirva com frutas.</p>
        `;
  }

  if (nomeReceita === 'smoothie') {
    modalConteudo.innerHTML += `
            <h2>Smoothie fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 1 banana<br>
            - 1/2 xícara de morangos<br>
            - 1/2 xícara de leite ou leite vegetal<br>
            - 1 colher de aveia</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Bata tudo no liquidificador.<br>
            2. Sirva gelado.</p>
        `;
  }

  if (nomeReceita === 'sorvete') {
    modalConteudo.innerHTML += `
            <h2>Sorvete fit</h2>
            <p><strong>Ingredientes:</strong><br>
            - 2 bananas congeladas<br>
            - 1 colher de cacau ou frutas<br>
            - 1 colher de iogurte</p>
            <p><strong>Modo de preparo:</strong><br>
            1. Bata no processador até ficar cremoso.<br>
            2. Sirva imediatamente.</p>
        `;
  }

  modal.style.display = 'block';
}

function fecharModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Fechar modal ao clicar fora do conteúdo
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


