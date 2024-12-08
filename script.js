
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
    } else {
        alert('Formulário enviado com sucesso!');
    }
});