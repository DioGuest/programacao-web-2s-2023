// controllers/calculadoraController.js

exports.mostrarFormulario = (req, res) => {
    res.render('index'); // Renderiza o formulário para o usuário
  };
  
  exports.calcular = (req, res) => {
    const { numeroA, numeroB, operacao } = req.body;
    let resultado;
  
    // Realiza a operação com base nos dados recebidos
    if (operacao === '+') {
      resultado = parseFloat(numeroA) + parseFloat(numeroB);
    } else if (operacao === '-') {
      resultado = parseFloat(numeroA) - parseFloat(numeroB);
    } else if (operacao === '*') {
      resultado = parseFloat(numeroA) * parseFloat(numeroB);
    } else if (operacao === '/') {
      resultado = parseFloat(numeroA) / parseFloat(numeroB);
    } else {
      resultado = 'Operação inválida';
    }
  
    // Renderiza a página de resultado com o resultado da operação
    res.render('resultado', { resultado });
  };
  
  exports.novoCalculo = (req, res) => {
    res.redirect('/'); // Redireciona o usuário de volta para o formulário
  };
  