// Máscara de CPF
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'');
  v = v.replace(/(\d{3})(\d)/,'$1.$2');
  v = v.replace(/(\d{3})(\d)/,'$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
  this.value = v;
});

// Máscara de telefone
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'');
  v = v.replace(/^(\d\d)(\d)/g,'($1) $2');
  v = v.replace(/(\d{5})(\d)/,'$1-$2');
  this.value = v;
});

// Máscara de CEP
const cepInput = document.getElementById('cep');
cepInput.addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'');
  v = v.replace(/(\d{5})(\d)/,'$1-$2');
  this.value = v;
});
