function buscaCep() {
  const getInputCep = document.querySelector("#cepInput");
  const returnDiv = document.querySelector(".return_form");
  const apiUrl = `https://viacep.com.br/ws/${getInputCep.value}/json/`;
  const apiAcess = fetch(apiUrl);

  apiAcess.then((reponse) => {
    let retorna = reponse.json();
    retorna.then((data) => {
      returnDiv.innerHTML = `
      <b>CEP:</b> ${data.cep} <p>
      <b>Cidade:</b> ${data.localidade} - ${data.uf} <p> 
      <b>Bairro:</b> ${data.bairro} <p>
      <b>Rua:</b> ${data.logradouro} <p>
      <b>DDD:</b> ${data.ddd} <p>
      <b>IBGE:</b> ${data.ibge} <p>`;
    });
  });
}
