<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agente Finanças - Controle</title>
    
    <link rel="icon" type="image/png" href="logo.png">
    <link rel="apple-touch-icon" href="logo.png">
    <link rel="manifest" href="./manifest.json">
    <meta name="theme-color" content="#121212">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <style>
        :root { 
            --green: #2ecc71; --red: #e74c3c; --blue: #3498db;
            --bg: #121212; --card-bg: #1e1e1e; --text-main: #e0e0e0; 
            --border: #333333; --pink: #ff4081;
        }
        body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: var(--text-main); margin: 0; padding: 15px; display: flex; flex-direction: column; align-items: center; }
        .card { background: var(--card-bg); padding: 20px; border-radius: 20px; width: 100%; max-width: 500px; border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        h2 { color: var(--pink); text-align: center; font-size: 16px; text-transform: uppercase; letter-spacing: 2px; }
        .dash-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 20px 0; }
        .metric { background: #181818; padding: 15px; border-radius: 12px; text-align: center; border: 1px solid var(--border); }
        .metric label { display: block; font-size: 10px; color: #888; text-transform: uppercase; }
        .metric span { font-size: 18px; font-weight: bold; }
        .metric.up { color: var(--green); }
        .metric.down { color: var(--red); }
        .transacao-list { display: flex; flex-direction: column; gap: 8px; max-height: 450px; overflow-y: auto; }
        .item-transacao { background: #252525; padding: 12px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid var(--blue); }
        .item-transacao.entrada { border-left-color: var(--green); }
        .item-transacao.saida { border-left-color: var(--red); }
        .info { display: flex; flex-direction: column; }
        .info .nome { font-weight: bold; font-size: 14px; }
        .info .detalhes { font-size: 10px; color: #aaa; }
        .valor { font-weight: bold; font-size: 14px; }
        .ia-box { font-size: 10px; color: var(--blue); margin-top: 5px; background: #1a2a3a; padding: 5px; border-radius: 4px; }
        .btn-update { background: var(--pink); color: white; border: none; padding: 15px; border-radius: 12px; width: 100%; font-weight: bold; cursor: pointer; margin-top: 20px; }
        #status { font-size: 9px; text-align: center; margin-top: 10px; color: #444; }
    </style>
</head>
<body onload="init()">
<div class="card">
    <h2>AGENT FINANÇAS AI</h2>
    <div class="dash-grid">
        <div class="metric up"><label>Receitas</label><span id="total-entradas">R$ 0,00</span></div>
        <div class="metric down"><label>Despesas</label><span id="total-saidas">R$ 0,00</span></div>
    </div>
    <div id="lista" class="transacao-list"></div>
    <button class="btn-update" onclick="carregarDados()">🔄 ATUALIZAR AGORA</button>
    <div id="status">Sincronizado</div>
</div>

<script>
    const URL_API = "https://script.google.com/macros/s/AKfycbwbx4Utft2D_59jbBZP6jbqKEIHrxeKnK_MarrksV1dzZ7_CK74Z9ITmb0xN0bRdxeTVA/exec";

    function init() { carregarDados(); registrarSW(); }

    function registrarSW() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js')
            .then(() => console.log("SW: Ativo"))
            .catch(err => console.error("SW Erro:", err));
        }
    }

    async function carregarDados() {
        document.getElementById('status').innerText = "Conectando...";
        try {
            // Bypass de cache com timestamp
            const response = await fetch(URL_API + "?t=" + new Date().getTime());
            const dados = await response.json();
            renderizar(dados);
            document.getElementById('status').innerText = "Última atualização: " + new Date().toLocaleTimeString();
        } catch (e) { 
            document.getElementById('status').innerText = "Erro na conexão."; 
            console.error(e);
        }
    }

    function renderizar(dados) {
        const listaDiv = document.getElementById('lista');
        let html = ""; let tEntrada = 0; let tSaida = 0;

        dados.slice().reverse().slice(0, 25).forEach(item => {
            const v = parseFloat(item.Valor || 0);
            const tipo = (item.Tipo || "").toString().toLowerCase().trim();
            const ehReceita = tipo === 'receita' || tipo === 'entrada';

            if(ehReceita) tEntrada += v; else tSaida += v;

            // VERSÃO SIMPLIFICADA: Exibe a data exatamente como vem do Script (já formatada em GMT-3)
            let dataBR = item.Data || "--/--";

            html += `
                <div class="item-transacao ${ehReceita ? 'entrada' : 'saida'}">
                    <div class="info">
                        <span class="nome">${item.Item || 'Sem Nome'}</span>
                        <span class="detalhes">${item.Categoria || 'Geral'} • ${dataBR}</span>
                        ${item.Comentario_da_IA ? `<div class="ia-box">🤖 ${item.Comentario_da_IA}</div>` : ''}
                    </div>
                    <div class="valor">${ehReceita ? '+' : '-'} R$ ${v.toFixed(2)}</div>
                </div>`;
        });
        listaDiv.innerHTML = html;
        document.getElementById('total-entradas').innerText = `R$ ${tEntrada.toFixed(2)}`;
        document.getElementById('total-saidas').innerText = `R$ ${tSaida.toFixed(2)}`;
    }
</script>
</body>
</html>
