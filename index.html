<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agente Finanças - BI & Controle</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2"></script>
    <link rel="manifest" href="./manifest.json">
    <style>
        :root { 
            --green: #2ecc71; --red: #e74c3c; --blue: #3498db;
            --bg: #121212; --card-bg: #1e1e1e; --text-main: #e0e0e0; 
            --border: #333333; --pink: #ff4081;
        }
        body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: var(--text-main); margin: 0; padding: 10px; display: flex; flex-direction: column; align-items: center; }
        .card { background: var(--card-bg); padding: 15px; border-radius: 20px; width: 100%; max-width: 450px; border: 1px solid var(--border); margin-bottom: 15px; box-sizing: border-box; }
        
        .chart-main { width: 180px; height: 180px; margin: 0 auto; position: relative; }
        #saldo-info { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; pointer-events: none; }
        #saldo-valor { font-weight: bold; font-size: 1.1rem; display: block; }

        .controles { display: flex; gap: 8px; margin-bottom: 12px; width: 100%; max-width: 450px; }
        select, .btn-nav, .btn-action { background: var(--card-bg); color: white; border: 1px solid var(--border); padding: 10px; border-radius: 12px; cursor: pointer; flex: 1; font-size: 0.85rem; }
        .btn-nav.active { background: var(--blue); border-color: var(--blue); font-weight: bold; }

        .transacao { display: flex; justify-content: space-between; align-items: flex-start; padding: 12px 5px; border-bottom: 1px solid var(--border); gap: 10px; }
        .info { flex: 1; }
        .info strong { display: block; font-size: 0.9rem; margin-bottom: 2px; }
        .info small { color: #888; font-size: 0.75rem; display: block; }
        .cat-tag { color: var(--pink); font-size: 0.7rem; font-weight: bold; text-transform: uppercase; }
        .ai-comment { font-size: 11px; color: var(--blue); margin-top: 8px; background: rgba(52, 152, 219, 0.08); padding: 8px; border-radius: 8px; border-left: 3px solid var(--blue); line-height: 1.3; }
        .valor { font-weight: bold; font-size: 0.95rem; text-align: right; min-width: 85px; }

        h4 { margin: 0 0 15px 0; font-size: 0.8rem; color: var(--blue); text-transform: uppercase; letter-spacing: 1px; }
    </style>
</head>
<body>

    <div class="card">
        <div class="chart-main">
            <canvas id="meuGrafico"></canvas>
            <div id="saldo-info">
                <span style="font-size:0.6rem; color:#888">LÍQUIDO</span>
                <span id="saldo-valor">R$ 0</span>
            </div>
        </div>
        <div style="display: flex; justify-content: space-around; margin-top: 15px; text-align: center;">
            <div><small style="color:#888">Receitas</small><div id="t-ent" style="color: var(--green); font-weight: bold;">R$ 0</div></div>
            <div><small style="color:#888">Despesas</small><div id="t-sai" style="color: var(--red); font-weight: bold;">R$ 0</div></div>
        </div>
    </div>

    <div class="controles">
        <button class="btn-nav active" id="tab-feed" onclick="mudarAba('feed')">📑 Extrato</button>
        <button class="btn-nav" id="tab-bi" onclick="mudarAba('bi')">📈 BI / Estratégia</button>
        <button onclick="carregarDados()" class="btn-action" style="flex:0.25">🔄</button>
        <button onclick="gerarRelatorioHTML()" class="btn-action" style="flex:0.25" title="Baixar Relatório">📄</button>
    </div>

    <div class="controles">
        <select id="filtroTempo" onchange="filtrarERenderizar()" style="flex:1"></select>
    </div>

    <div id="container-feed" class="card">
        <div id="lista-transacoes"></div>
    </div>

    <div id="container-bi" style="display: none; width: 100%; max-width: 450px;">
        <div class="card">
            <h4>📊 Maiores Gastos</h4>
            <canvas id="graficoBarras"></canvas>
        </div>
        <div class="card">
            <h4>📈 Tendência de Gasto (Acumulado)</h4>
            <canvas id="graficoLinha"></canvas>
        </div>
    </div>

    <script>
        Chart.register(ChartDataLabels);
        const URL_API = "https://script.google.com/macros/s/AKfycbwbx4Utft2D_59jbBZP6jbqKEIHrxeKnK_MarrksV1dzZ7_CK74Z9ITmb0xN0bRdxeTVA/exec"; 
        
        const MAPA_CATEGORIAS = {
            'Alimentação': ['mercado', 'hortifruti', 'restaurante', 'ifood', 'comida', 'padaria', 'lanche'],
            'Habitação': ['aluguel', 'luz', 'água', 'internet', 'condomínio', 'boleto', 'despesa', 'financiamento', 'impostos', 'reforma'],
            'Transporte': ['uber', 'gasolina', 'combustível', 'estacionamento'],
            'Lazer': ['cinema', 'viagem', 'netflix', 'bar', 'spotify', 'praia'],
            'Saúde': ['farmácia', 'médico', 'academia'],
            'Compras': ['shopee', 'amazon', 'shein', 'mercado livre', 'roupas', 'eletrônicos', 'eletrodoméstico', 'shopping', 'brinquedo'],
            'Contas': ['faculdade', 'esporte', 'serviços bancários', 'pensão', 'celular', 'assinatura','odonto']
        };

        let todosOsDados = [];
        let charts = {};

        async function carregarDados() {
            try {
                const res = await fetch(`${URL_API}?filtro=tudo`);
                todosOsDados = await res.json();
                popularSeletor(todosOsDados);
                filtrarERenderizar();
            } catch (e) { console.error("Erro na API", e); }
        }

        function popularSeletor(dados) {
            const seletor = document.getElementById('filtroTempo');
            const mesAt = `${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`;
            const meses = [...new Set(dados.map(i => i.Data.split(' ')[0].split('/').slice(1).join('/')))]
                .filter(m => m !== mesAt)
                .sort()
                .reverse();

            let opt = '<option value="mes_atual">Mês Atual</option>';
            meses.forEach(m => opt += `<option value="${m}">${m}</option>`);
            seletor.innerHTML = opt;
        }

        function mudarAba(aba) {
            const isFeed = aba === 'feed';
            document.getElementById('container-feed').style.display = isFeed ? 'block' : 'none';
            document.getElementById('container-bi').style.display = isFeed ? 'none' : 'block';
            document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('active'));
            document.getElementById(`tab-${aba}`).classList.add('active');
            if (!isFeed) processarBI();
        }

        function getDadosFiltrados() {
            const f = document.getElementById('filtroTempo').value;
            const mesAt = `${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`;
            return (f === "mes_atual") ? todosOsDados.filter(i => i.Data.includes(mesAt)) : todosOsDados.filter(i => i.Data.includes(f));
        }

        function filtrarERenderizar() {
            const filtrados = getDadosFiltrados();
            renderizarExtrato(filtrados);
            if (document.getElementById('container-bi').style.display === 'block') processarBI();
        }

        function renderizarExtrato(dados) {
            let tE = 0, tS = 0, html = "";
            [...dados].reverse().forEach(i => {
                const v = parseFloat(i.Valor) || 0;
                const ehR = (i.Tipo || i.tipo || "").toLowerCase().trim() === "receita";
                ehR ? tE += v : tS += v;
                html += `
                <div class="transacao">
                    <div class="info">
                        <small>${i.Data}</small>
                        <strong>${i.Item}</strong>
                        <span class="cat-tag">#${i.Categoria}</span>
                        ${i.Comentario_da_IA ? `<div class="ai-comment">🤖 ${i.Comentario_da_IA}</div>` : ''}
                    </div>
                    <div class="valor" style="color:${ehR?'var(--green)':'var(--red)'}">
                        ${ehR?'+':'-'} R$ ${v.toFixed(2)}
                    </div>
                </div>`;
            });
            document.getElementById('saldo-valor').innerText = `R$ ${(tE-tS).toFixed(0)}`;
            document.getElementById('t-ent').innerText = `R$ ${tE.toFixed(0)}`;
            document.getElementById('t-sai').innerText = `R$ ${tS.toFixed(0)}`;
            document.getElementById('lista-transacoes').innerHTML = html || "<p style='text-align:center'>Vazio.</p>";
            
            updateChart('meuGrafico', 'doughnut', {
                labels: ['Entradas', 'Saídas'],
                datasets: [{ data: [tE, tS], backgroundColor: ['#2ecc71', '#e74c3c'], borderWidth: 0 }]
            }, { cutout: '82%', plugins: { datalabels: { display: false }, legend: { display: false } } });
        }

        function processarBI() {
            const filtrados = getDadosFiltrados();
            const catAgrupada = {}, diaMap = {};
            
            filtrados.forEach(i => {
                if ((i.Tipo || i.tipo || "").toLowerCase() === 'despesa') {
                    const v = parseFloat(i.Valor) || 0;
                    const d = i.Data.split('/')[0];
                    const catOriginal = i.Categoria || 'Geral';
                    
                    let catFinal = null;
                    for (const [macro, subs] of Object.entries(MAPA_CATEGORIAS)) {
                        if (subs.some(s => catOriginal.toLowerCase().includes(s.toLowerCase()))) {
                            catFinal = macro; break;
                        }
                    }
                    if(!catFinal) catFinal = catOriginal;

                    catAgrupada[catFinal] = (catAgrupada[catFinal] || 0) + v;
                    diaMap[d] = (diaMap[d] || 0) + v;
                }
            });

            const entradasOrdenadas = Object.entries(catAgrupada).sort((a, b) => b[1] - a[1]);
            const TOP_N = 5;
            const labelsFinal = [];
            const valoresFinal = [];
            let outrosSoma = 0;

            entradasOrdenadas.forEach(([label, valor], index) => {
                if (index < TOP_N) {
                    labelsFinal.push(label);
                    valoresFinal.push(valor);
                } else {
                    outrosSoma += valor;
                }
            });

            if (outrosSoma > 0) labelsFinal.push("Outros (IA)");
            if (outrosSoma > 0) valoresFinal.push(outrosSoma);

            updateChart('graficoBarras', 'bar', {
                labels: labelsFinal,
                datasets: [{ data: valoresFinal, backgroundColor: '#ff4081', borderRadius: 6 }]
            }, { 
                indexAxis: 'y', 
                plugins: { 
                    legend: { display: false },
                    datalabels: { color: '#fff', anchor: 'end', align: 'right', formatter: v => `R$ ${v.toFixed(0)}`, font: { weight: 'bold' } }
                },
                scales: { x: { display: false }, y: { ticks: { color: '#fff' }, grid: { display: false } } }
            });

            const dias = Object.keys(diaMap).sort((a,b) => a-b);
            let acc = 0;
            updateChart('graficoLinha', 'line', {
                labels: dias,
                datasets: [{ data: dias.map(d => { acc += diaMap[d]; return acc; }), borderColor: '#3498db', backgroundColor: 'rgba(52, 152, 219, 0.1)', fill: true, tension: 0.4 }]
            }, {
                plugins: { 
                    legend: { display: false },
                    datalabels: { display: (ctx) => ctx.dataIndex === ctx.dataset.data.length - 1, backgroundColor: '#3498db', color: '#fff', borderRadius: 4, formatter: v => `R$ ${v.toFixed(0)}` }
                },
                scales: { y: { display: false }, x: { grid: { display: false }, ticks: { color: '#888' } } }
            });
        }

        function updateChart(id, type, data, options) {
            if (charts[id]) charts[id].destroy();
            charts[id] = new Chart(document.getElementById(id), { type, data, options });
        }

        // --- NOVA FUNÇÃO DE RELATÓRIO ---
        function gerarRelatorioHTML() {
            const dados = getDadosFiltrados();
            const periodo = document.getElementById('filtroTempo').options[document.getElementById('filtroTempo').selectedIndex].text;
            
            // Garantir que o BI processe antes de pegar as imagens dos gráficos
            processarBI();

            const imgDonut = document.getElementById('meuGrafico').toDataURL();
            const imgBarras = document.getElementById('graficoBarras').toDataURL();
            const imgLinha = document.getElementById('graficoLinha').toDataURL();

            let tEnt = 0, tSai = 0;
            const catResumo = {};
            const receitas = [];

            dados.forEach(i => {
                const v = parseFloat(i.Valor) || 0;
                const ehR = (i.Tipo || i.tipo || "").toLowerCase().trim() === "receita";
                if(ehR) {
                    tEnt += v;
                    receitas.push(i);
                } else {
                    tSai += v;
                    catResumo[i.Categoria] = (catResumo[i.Categoria] || 0) + v;
                }
            });

            const topReceitas = receitas.sort((a,b) => b.Valor - a.Valor).slice(0, 10);
            
            const htmlConteudo = `
                <html>
                <head>
                    <title>Relatório ${periodo}</title>
                    <style>
                        body { font-family: sans-serif; background: #121212; color: #e0e0e0; padding: 20px; }
                        .card { background: #1e1e1e; padding: 20px; border-radius: 15px; margin-bottom: 20px; border: 1px solid #333; }
                        h2 { color: #3498db; border-bottom: 1px solid #333; padding-bottom: 10px; }
                        .row { display: flex; justify-content: space-between; flex-wrap: wrap; }
                        .metric { text-align: center; flex: 1; }
                        .green { color: #2ecc71; } .red { color: #e74c3c; }
                        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                        th, td { text-align: left; padding: 10px; border-bottom: 1px solid #333; font-size: 14px; }
                        .chart-img { max-width: 100%; height: auto; margin: 10px 0; }
                    </style>
                </head>
                <body>
                    <h1>Relatório Financeiro - ${periodo}</h1>
                    
                    <div class="card">
                        <h2>Resumo Geral</h2>
                        <div class="row">
                            <div class="metric">Receitas<br><strong class="green">R$ ${tEnt.toFixed(2)}</strong></div>
                            <div class="metric">Despesas<br><strong class="red">R$ ${tSai.toFixed(2)}</strong></div>
                            <div class="metric">Saldo<br><strong>R$ ${(tEnt - tSai).toFixed(2)}</strong></div>
                        </div>
                        <center><img src="${imgDonut}" class="chart-img" style="width:250px"></center>
                    </div>

                    <div class="card">
                        <h2>Top 10 Receitas</h2>
                        <table>
                            <tr><th>Item</th><th>Valor</th></tr>
                            ${topReceitas.map(r => `<tr><td>${r.Item}</td><td class="green">R$ ${parseFloat(r.Valor).toFixed(2)}</td></tr>`).join('')}
                        </table>
                    </div>

                    <div class="card">
                        <h2>Gastos por Categoria</h2>
                        <table>
                            <tr><th>Categoria</th><th>Total</th></tr>
                            ${Object.entries(catResumo).sort((a,b) => b[1]-a[1]).map(([c, v]) => `<tr><td>${c}</td><td class="red">R$ ${v.toFixed(2)}</td></tr>`).join('')}
                        </table>
                        <img src="${imgBarras}" class="chart-img">
                    </div>

                    <div class="card">
                        <h2>Tendência de Gasto Acumulado</h2>
                        <img src="${imgLinha}" class="chart-img">
                    </div>

                    <p style="text-align:center; color:#666; font-size: 10px;">Gerado em: ${new Date().toLocaleString()}</p>
                </body>
                </html>
            `;

            const blob = new Blob([htmlConteudo], { type: 'text/html' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `Relatorio_Financeiro_${periodo.replace('/', '_')}.html`;
            link.click();
        }

        window.onload = carregarDados;
    </script>
</body>
</html>
