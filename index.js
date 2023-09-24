
const getInputCep = document.querySelector("#cepInput");

const returnDiv = document.querySelector(".return_form");



getInputCep.addEventListener('keyup', (event) => {  
  if(event.target.value.length === 8){
    buscaCep(event.target.value)
  }
})



function buscaCep() {
  const apiUrl = `https://viacep.com.br/ws/${getInputCep.value}/json/`;
  const apiAcess = fetch(apiUrl);

  apiAcess.then((reponse) => {
    let retorna = reponse.json();

    
    retorna
      .then((data) => {


        const error = data.erro
        const htmlError = `<b>Cep inválido!</b>`

        if(error){
          return returnDiv.innerHTML = htmlError
        }
        if(error){
          return (re)
        }
        returnDiv.innerHTML = `
      <b>CEP:</b> ${data.cep} <p>
      <b>Cidade:</b> ${data.localidade} - ${data.uf} <p> 
      <b>Bairro:</b> ${data.bairro} <p>
      <b>Rua:</b> ${data.logradouro} <p>
      <b>DDD:</b> ${data.ddd} <p>
      <b>IBGE:</b> ${data.ibge} <p>`;
      })
      .catch((error) => {
        returnDiv.innerHTML = `<b>CEP:</b> ${getInputCep.value} <p> <b>Erro:</b> ${error}`;
      });
  });
}
