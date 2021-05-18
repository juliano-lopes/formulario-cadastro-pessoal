    const formValidation = ()=>{
if(!cpfValidation(document.getElementById("cpf").value)){
  alert("CPF inválido...");
  document.getElementById("cpf").focus();
  return false;
}
if(!isValidCelPhone(document.getElementById("cel").value)){
  alert("Número de celular inválido, não se esqueça de informar o DDD sem o 0");
  document.getElementById("cel").focus();
  return false;
}

      return false;
    }

const isValidCelPhone = (celPhone)=>(celPhone!=""&&/^[0-9]{11}$/.test(celPhone));
const isValidPhone = (phone)=>(phone!="" ? /^[0-9]{10}$/.test(phone) : true);
