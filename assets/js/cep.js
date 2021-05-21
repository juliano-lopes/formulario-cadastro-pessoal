const isValidCep = (cep)=>(cep!=""&&/^[0-9]{8}$/.test(cep));
const fillAdress = (adressData)=>{

  document.getElementById("endereco").value=adressData.logradouro;
    document.getElementById("bairro").value=adressData.bairro;
  document.getElementById("cidade").value=adressData.localidade;
  document.getElementById("uf").value=adressData.uf;
}
const cleanAdress = (adressData)=>{
  
  document.getElementById("endereco").value="";
    document.getElementById("bairro").value="";
  document.getElementById("cidade").value="";
  document.getElementById("uf").value="";
}
const getAdressByCep =(cep)=>{
  
if(isValidCep(cep.value)){
  
  let url=`https://viacep.com.br/ws/${cep.value}/json/?callback=fillAdress`;
  
let script = document.createElement("script");
script.src=url;
document.body.appendChild(script);
}
else{
  roleAlert(document.querySelector('label[for='+cep.id+']'),"Preenchimento incorreto...");
cleanAdress();
}
}