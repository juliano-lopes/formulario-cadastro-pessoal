window.onload = ()=>{

    const form = document.querySelector("form");
    form.onsubmit= formValidation;
    const cep = document.getElementById("cep");
    cep.addEventListener("change",(e)=>{
getAdressByCep(e.target.value);
    });

    }