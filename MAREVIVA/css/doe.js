const botao = document.querySelector("#");
const chavePix = '(79) 99939-1880';

function copiar() {
    navigator.clipboard.writeText(chavePix)
        .then(() => {
            alert('Chave PIX copiada para a área de transferência!');
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
};