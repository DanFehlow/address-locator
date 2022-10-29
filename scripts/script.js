const checkCEP = () => {
  const cep = document.getElementById('cep').value
  if (cep.length !== 8) {
    alert('CEP Inválido')
    return
  }
  const url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url).then(function (response) {
    response.json().then(showPlace)
  })
}

const showPlace = (data) => {
  const results = document.getElementById('local-place')
  if (data.erro) {
    results.innerHTML = 'Não foi possível localizar o endereço'
  } else {
    results.innerHTML = `
  <p>Endereço:${data.logradouro}</p>
  <p>Complemento:${data.complemento}</p>
  <p>Bairro:${data.bairro}</p>
  <p>Cidade:${data.localidade} - ${data.uf}</p>
  `
  }
}

const buttonSearch = document.getElementById('buttonSearch')
buttonSearch.addEventListener('click', checkCEP)
