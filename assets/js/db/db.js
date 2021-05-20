let db;
if(!("indexedDB" in window)){
alert("Este navegador não suporta indexedDB");

}
else{
  
let openConnection = window.indexedDB.open("personalregistration",1);
openConnection.onupgradeneeded = (e)=>{
  let connection=e.target.result;
  connection.createObjectStore("people",{keyPath: "id", autoIncrement: true});
  }
  openConnection.onsuccess=(e)=>{
    db=e.target.result;
    console.log("sucesso ao conectar ao banco: ",db);
getPeople();
  }
  openConnection.onerror=(e)=>{
    console.log("Erro ao conectar ao banco: ",e.target.result);
  }
}
const addPeople = (people) =>{
  let transaction = db.transaction(["people"],"readwrite");
  let store = transaction.objectStore("people");
  let insert = store.put(people);
  insert.onsuccess=(e)=>{

    if(people.id){
      document.getElementById("id").parentNode.removeChild(document.getElementById("id"));
      document.getElementById("salvar").textContent="Salvar dados";
     alert("Os dados de "+people.nome+"foram atualizados com sucesso!");
    } else {
      alert("Cadastro efetuado com sucesso!");
    }

  }
  insert.onerror=(e)=>{
people.id ? alert("Ocorreu um erro ao tentar atualizar os dados...") :    alert("Ocorreu um erro ao cadastrar...");
  }
}
const getPeople = () =>{
  let transaction = db.transaction(["people"],"readwrite");
  let store = transaction.objectStore("people");
  let select = store.getAll();
  
  select.onsuccess=(e)=>{
    console.log("todas as pessoas: ",e.target.result);
    
  e.target.result ? addPeopleOnTable(e.target.result) : false;  
  }

    select.onerror=(e)=>{
    console.log("Erro ao consultar cadastro: ",e.target.result);
  }
  
}
const deletePeople = (linkElement) =>{
  if(window.confirm("Deseja realmente apagar os dados de "+linkElement.getAttribute("title")+"?")){
  let transaction = db.transaction(["people"],"readwrite");
  let store = transaction.objectStore("people");
  let del = store.delete(parseInt(linkElement.getAttribute("data-id")));
  
  del.onsuccess=(e)=>{
    alert("Dados deletados com sucesso");
    getPeople();
  }

    del.onerror=(e)=>{
    alert("Erro ao deletar cadastro.");
  }
}
}
const updatePeople = (linkElement) =>{
  
  let transaction = db.transaction(["people"],"readwrite");
  let store = transaction.objectStore("people");
  let select = store.get(parseInt(linkElement.getAttribute("data-id")));
  
  select.onsuccess=(e)=>{
    console.log("pessoa para atualizar: ",e.target.result);
    fillFormWithPersonData(e.target.result);
  }

    select.onerror=(e)=>{
    console.log("Erro ao atualizar dados pessoais...");
  }

}
const fillFormWithPersonData = (person)=>{
  if(person){
    const peopleForm=document.getElementById("people-form");
    peopleForm.querySelectorAll("input, select").forEach((field)=>{
field.value=person[field.id];
    });
let updateInput = document.createElement("input");
updateInput.setAttribute("type","hidden");
updateInput.id="id";
updateInput.setAttribute("data-id",person.id);
updateInput.value=person.id;
peopleForm.insertBefore(updateInput,peopleForm.firstChild);
peopleForm.querySelector('#nome').focus();
document.getElementById("salvar").textContent="Atualizar dados";

let cancelButton = document.createElement("button");
cancelButton.setAttribute("type","button");
cancelButton.textContent="Cancelar";
cancelButton.addEventListener("click",(e)=>{
  document.getElementById("salvar").textContent="Salvar dados";
  document.getElementById("id").parentNode.removeChild(document.getElementById("id"));
  cancelButton.parentNode.removeChild(cancelButton);
  cleanForm(document.getElementById("people-form"));
});
peopleForm.querySelector(".field-btn").appendChild(cancelButton);
  }
}
const addPeopleOnTable = (people)=>{
let tableBody = document.getElementById("people-table-body");
tableBody.innerHTML="";
people.forEach((person)=>{
let tr = document.createElement("tr");
let cells=`<th>${person.nome}</th> <td>${person.cpf}</td> <td>${person.rg}</td> <td>${person.sexo=='m' ? 'Masculino' : 'Feminino'} </td> <td>${person.cep}</td> <td>${person.endereco}</td> <td>${person.numero}</td> <td>${person.bairro}</td> <td>${person.cidade}</td> <td>${person.uf}</td> <td>${person.tel}</td> <td>${person.cel}</td> <td><a data-id='${person.id}' data-action='edite' href='#' onclick='updatePeople(this);' title='${person.nome}'>Editar dados</a><br><a data-id='${person.id}' data-action='delete' onclick='deletePeople(this);' href='#' title='${person.nome}'>Deletar dados</a>`;
tr.innerHTML=cells;
tableBody.appendChild(tr);

});
}