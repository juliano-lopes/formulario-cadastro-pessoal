    const formValidation = ()=>{
      
      return false;
    }
    const isValidCep = (cep)=>(cep!=""&&/^[0-9]{8}$/.test(cep));
    const fillAdress = (adressData)=>{
      console.log("cep veio: ",adressData);
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
    