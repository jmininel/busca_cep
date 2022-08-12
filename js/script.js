const cep = document.querySelector("#inputCep")
const rua = document.querySelector("#inputLogr")
const bairro = document.querySelector("#inputBairro")
const cidade = document.querySelector("#inputCidade")
const estado = document.querySelector("#inputEstado")


cep.addEventListener('click', (e) => {
  const pegaInputCep = e.target.value

  getApi(pegaInputCep)
})

const getApi = async(cep) => {
  const api = `https://viacep.com.br/ws/${cep}/json/`

  const response = await fetch(api);
  const data = await response.json();

  console.log(data)
  rua.value = data.logradouro
  bairro.value = data.bairro
  cidade.value = data.localidade
  estado.value = data.uf
}
