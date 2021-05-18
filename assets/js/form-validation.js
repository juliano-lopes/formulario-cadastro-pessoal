    const formValidation = ()=>{
      const cpf = document.getElementById("cpf");
      const celPhone=document.getElementById("cel");
if(!cpfValidation(cpf.value)){
  alert("CPF inválido...");
  document.getElementById("cpf").focus();
  return false;
}
if(!isValidCelPhone(celPhone.value)){
  alert("Número de celular inválido, não se esqueça de informar o DDD sem o 0");
  celPhone.focus();
  
  return false;
}

      return false;
    }

const isValidCelPhone = (celPhone)=>(celPhone!=""&&/^[0-9]{11}$/.test(celPhone));
const isValidPhone = (phone)=>(phone!="" ? /^[0-9]{10}$/.test(phone) : true);
const roleAlert = (targetElement, msg)=>{
let errorElement = targetElement.querySelector('[data-error-msg]') ? targetElement.querySelector('[data-error-msg]') : document.createElement("span");
errorElement.setAttribute("role","alert");
errorElement.setAttribute("data-error-msg","error");
targetElement.insertBefore(errorElement,targetElement.firstChild);
errorElement.textContent=`(!) ${msg} `;
setTimeout(function(){
  errorElement.removeAttribute("role");
},200);

document.getElementById(targetElement.getAttribute("for")).onkeydown = (e)=>{
  if(targetElement.querySelector('[data-error-msg]')){
    targetElement.removeChild(targetElement.querySelector('[data-error-msg]'));
  }
}


}