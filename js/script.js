$(document).ready(function() {
    $('#icon').click(function() {
        $('ul').toggleClass('show');
    })
})

/***Limpando formulario */
const limparFomulario = (endereco) => {
    document.getElementById('address').value = ''
    document.getElementById('district').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = ''
}

/**Preenchendo formulario */
const preencherFormulario = (endereco) => {
    document.getElementById('address').value = endereco.logradouro
    document.getElementById('district').value = endereco.bairro
    document.getElementById('city').value = endereco.localidade
    document.getElementById('state').value = endereco.uf
}



const eNumero = (numero) => /^[0-9]+$/.test(numero);
/**Verificando se todos os diitos são letras e se tem no maximo 8 */
const cepvalido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFomulario();
    /**Está pegando o endereço através da api de cep**/
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepvalido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();

        /**Verificando se o cep existe**/
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('address').value = 'Cep não encontrado'
            document.getElementById('district').value = 'Cep não encontrado'
            document.getElementById('city').value = 'Cep não encontrado'
            document.getElementById('state').value = 'Cep não encontrado'
        } else {
            /**Preenchendo o formulario**/
            preencherFormulario(endereco)
        }
    } else {
        document.getElementById('address').value = 'Cep incoreeto'
        document.getElementById('district').value = 'Cep incoreeto'
        document.getElementById('city').value = 'Cep incoreeto'
        document.getElementById('state').value = 'Cep incoreeto'
    }

}
document.getElementById('cep').addEventListener('focusout', pesquisarCep);


//Number inputs 
function numberInput(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;

    key = String.fromCharCode(key);

    var regex = /^[0-9]+$/;

    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

//Text inputs
function textInput(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;

    key = String.fromCharCode(key);

    var regex = /^[a-z]/;

    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}