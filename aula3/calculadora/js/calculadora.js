function calcular(){
    // Coleta valores escolhidos pelo usuário
    let valora = document.getElementById('valora').value
    let valorb = document.getElementById('valorb').value
    
    // Obtem a lista de seleção de operações
    let op = document.getElementById('operacao')
    // Obetm o sinal selecionado pelo usuário
    let opSelecionada = op.options[op.selectedIndex].value
    //Guarda varíaveis para manipular o texto de cálculo (calc) e resultado (res)
    let calc = window.document.getElementById('calculo')
    let res = window.document.getElementById('resultado')
    // Declara variável para guaradar o resultado
    let resultado = 0
    // Exibe o cálculo
    calc.innerHTML = `<p>O cálculo é, ${valora} ${opSelecionada} ${valorb} </p>`
    //Verifica qual o texto selecionado e com base nele faz o cálculo
    if (opSelecionada == '+'){
        resultado = Number(valora) + Number(valorb)
    }else if (opSelecionada == '-'){
        resultado = Number(valora) - Number(valorb)
    }else if (opSelecionada == '*'){
        resultado = Number(valora) * Number(valorb)
    }else if (opSelecionada == '/'){
        resultado = Number(valora) / Number(valorb)
    }else{
        res.innerHTML = `<p> O resultado é: INDEFINIDO}`
    }
    res.innerHTML = `<p> O resultado é: ${resultado}`
}