function enviar(){
var nome = document.getElementById('nome')
var email = document.getElementById('email')
var senha = document.getElementById('senha')
nome = nome.value
email = email.value
senha = senha.value

var res = document.getElementById('escrito')
res.innerHTML =
  '<h2 id="titu">CADASTRO CONCLUIDO COM SUCESSO!</h2><br>' +
  '<p id="paragrafo">NOME: '+ nome + '</p><br>' +
  '<p id="paragrafo">E-MAIL: ' + email + '</p><br>' +
  '<p id="paragrafo">SENHA: ' + senha + '</p>'
}