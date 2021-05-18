const cpfValidation = (cpf)=>  {
  let sum,rest;
  sum = 0;
if (cpf == "00000000000"){
return false;
}

for (let i=1; i<=9; i++){
sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
}
rest = (sum * 10) % 11;
rest = (rest == 10) || (rest == 11) ?  0 : rest;
  if (rest != parseInt(cpf.substring(9, 10)) ){
    return false;
  }

sum = 0;
  for (let i = 1; i <= 10; i++){
    sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
  }
  rest = (sum * 10) % 11;

 rest = (rest == 10) || (rest == 11) ? 0 : rest;
  if (rest != parseInt(cpf.substring(10, 11) ) ){
    return false;
  }
  return true;
}
