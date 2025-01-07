function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itensVendidos = document.getElementById('itensVendidos').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

    // Calculando os impostos
    const valorIRPF = valorVenda * irpf;
    const valorPIS = valorVenda * pis;
    const valorCOFINS = valorVenda * cofins;
    const valorINSS = valorVenda * inss;
    const valorISSQN = valorVenda * issqn;
    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valorVenda - totalImpostos;

    // Gerando a nota fiscal
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itensVendidos}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Impostos:</strong></p>
        <ul>
            <li>IRPF: R$ ${valorIRPF.toFixed(2)}</li>
            <li>PIS: R$ ${valorPIS.toFixed(2)}</li>
            <li>COFINS: R$ ${valorCOFINS.toFixed(2)}</li>
            <li>INSS: R$ ${valorINSS.toFixed(2)}</li>
            <li>ISSQN: R$ ${valorISSQN.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;
    resultado.style.display = 'block';
}
