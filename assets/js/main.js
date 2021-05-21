window.onload = ()=>{

    const form = document.querySelector("form");
    form.onsubmit= formValidation;
const cpf = document.getElementById("cpf");
    cpf.onchange=(e)=>{
      if(!cpfValidation(e.target.value)){
        roleAlert(document.querySelector('label[for='+e.target.id+']'),"Preenchimento incorreto...");
      }
      }
      
    const cep = document.getElementById("cep");
    cep.onchange = (e)=>{
getAdressByCep(e.target);
    }
    const phone = document.getElementById("tel");
phone.onchange=(e)=>{
  if(!isValidPhone(e.target.value)){
    roleAlert(document.querySelector('label[for='+e.target.id+']'),"Preenchimento incorreto...");
    phone.value="";
  }
}

  const celPhone = document.getElementById("cel");
  celPhone.onchange=(e)=>{
    if(!isValidCelPhone(e.target.value)){
      roleAlert(document.querySelector('label[for='+e.target.id+']'),"Preenchimento incorreto...");
    }
  }
    }