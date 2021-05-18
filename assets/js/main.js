window.onload = ()=>{

    const form = document.querySelector("form");
    form.onsubmit= formValidation;
const cpf = document.getElementById("cpf");
    cpf.onchange=(e)=>{
      if(!cpfValidation(e.target.value)){
        alert("CPF inválido...");
      }
      }
      
    const cep = document.getElementById("cep");
    cep.onchange = (e)=>{
getAdressByCep(e.target.value);
    }
    const phone = document.getElementById("tel");
phone.onchange=(e)=>{
  if(!isValidPhone(e.target.value)){
    alert("Telefone fixo inválido, não se esqueça de informar o DDD sem o 0");
  }
}

  const celPhone = document.getElementById("cel");
  celPhone.onchange=(e)=>{
    if(!isValidCelPhone(e.target.value)){
      alert("Número de celular inválido, não se esqueça de informar o DDD sem o 0");
    }
  }


    }