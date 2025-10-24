const form = document.getElementById("formProgresso");
const mensagem = document.getElementById("mensagem");
const tabela = document.getElementById("tabelaProgresso").querySelector("tbody");

let dados = []; // armazena os registros

// Configuração inicial do Chart.js
const ctx = document.getElementById("graficoProgresso").getContext("2d");
const grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Peso Atual',
                data: [],
                borderColor: '#C78AFF',
                backgroundColor: 'rgba(199,138,255,0.2)',
                fill: true,
                tension:0.3,
                pointBackgroundColor:'#C78AFF',
                pointRadius:6
            },
            {
                label: 'Meta de Peso',
                data: [],
                borderColor: '#FF4DA1',
                borderDash:[5,5],
                fill:false,
                tension:0.3,
                pointRadius:0
            }
        ]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{ position:'top' },
            tooltip:{
                callbacks:{
                    label:function(context){
                        return context.dataset.label+": "+context.formattedValue+" kg";
                    }
                }
            }
        },
        scales:{
            y:{ beginAtZero:false }
        }
    }
});

// Função para atualizar tabela e gráfico
form.addEventListener("submit", function(e){
    e.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const meta = parseFloat(document.getElementById("meta").value);
    const gordura = document.getElementById("gordura").value ? parseFloat(document.getElementById("gordura").value) : "-";
    const dataAtual = new Date().toLocaleDateString("pt-BR");

    // Diferença
    const diff = dados.length>0 ? (peso - dados[dados.length-1].peso).toFixed(1) : "-";

    // Observação
    let obs = "-";
    if(diff!=="-"){
        if(diff<0) obs = "Bom progresso! 👍";
        else if(diff>0) obs = "Vamos melhorar! 💪";
        else obs = "Mantendo o ritmo!";
    }

    const registro = { data:dataAtual, peso, meta, diff, gordura, obs };
    dados.push(registro);

    // Atualiza tabela
    tabela.innerHTML = "";
    dados.forEach(r=>{
        tabela.innerHTML += `<tr>
            <td>${r.data}</td>
            <td>${r.peso}</td>
            <td>${r.meta}</td>
            <td>${r.diff}</td>
            <td>${r.gordura}</td>
            <td>${r.obs}</td>
        </tr>`;
    });

    // Atualiza gráfico
    grafico.data.labels = dados.map(d=>d.data);
    grafico.data.datasets[0].data = dados.map(d=>d.peso);
    grafico.data.datasets[1].data = dados.map(d=>d.meta);
    grafico.update();

    // Mensagem motivacional
    let msg = `Último peso registrado: ${peso}kg. `;
    if(diff!=="-" && diff<0) msg += `Parabéns! Você perdeu ${Math.abs(diff)}kg desde o último registro! 🎉`;
    mensagem.textContent = msg;

    // Reset form
    form.reset();
});
