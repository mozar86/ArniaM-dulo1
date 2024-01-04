// Espera o DOM ser carregado para começar a manipulação
document.addEventListener("DOMContentLoaded", function() {
    // Array de objetos representando alunos
    const alunos = [
      {
        id: 1,
        nome: 'Jéssica Maria Freitas',
        rg: '14568896-59',
        cpf: '485.895.963-59',
        email: 'jessica@gmail.com',
        dataNascimento: '20/07/1989'
      },
      // Adicione mais alunos se necessário
    ];
  
    const tbody = document.getElementById('alunos-lista');
  
    // Itera sobre o array de alunos e cria linhas na tabela para cada aluno
    alunos.forEach(aluno => {
      const tr = document.createElement('tr'); // Cria uma nova linha na tabela
  
      // Preenche a linha com os dados do aluno
      tr.innerHTML = `
        <td>${aluno.id}</td>
        <td>${aluno.nome}</td>
        <td>${aluno.rg}</td>
        <td>${aluno.cpf}</td>
        <td>${aluno.email}</td>
        <td>${aluno.dataNascimento}</td>
      `;
  
      tbody.appendChild(tr); // Adiciona a linha à tabela
    });
  });
  