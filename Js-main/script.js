function findLargerNumber() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num1 === "" || num2 === "") {
    document.getElementById("result1").innerHTML = `Erro: Preencha os dois campos.`;
    return;
  }
  if (num1 > num2) {
    document.getElementById("result1").innerHTML = `Maior número é ${num1}.`;
  } else if (num2 > num1) {
    document.getElementById("result1").innerHTML = `Maior número é ${num2}.`;
  } else {
    document.getElementById("result1").innerHTML = `Os dois números são iguais.`;
  }
}

function displayGradeMessage() {
  let grade = document.getElementById("grade").value;
  if(grade == ""){
      document.getElementById("result2").innerHTML = `Erro: Preencha o campo.`;
      return;
  }
  if (grade < 6) {
    document.getElementById("result2").innerHTML = `Reprovado`;
  } else if (grade >= 6 && grade < 8) {
    document.getElementById("result2").innerHTML = `Aprovado`;
  } else if (grade >= 8) {
    document.getElementById("result2").innerHTML = `Aprovado com louvor`;
  }
}

function getArrayAverage() {
  let arrayInput = document.getElementById("array_input").value;
  let array = arrayInput.split(",").map(Number);
  if(arrayInput == ""){
      document.getElementById("result3").innerHTML = `Erro: Preencha o campo.`;
      return;
  }
  if (array.some((element) => isNaN(element))) {
      document.getElementById("result3").innerHTML = `Erro: o array deve ser escrito no formato correto (ex: 1,2,3,4,5).`;
      return;
  }

  let soma = 0;
  array.forEach((element) => {
    soma += element;
  });
  soma/= array.length;
  document.getElementById("result3").innerHTML = `A média do array é: ${soma}`;
}

function displayAorB() {
  let letra = document.getElementById("letra").value;

  if (letra === "a") {
    document.getElementById("result4").innerHTML = "A";
  } else if (letra === "b") {
    document.getElementById("result4").innerHTML = "B";
  } else {
    document.getElementById("result4").innerHTML = "Outra letra";
  }
}

function sumMatrixElements() {
  let matrixInput = document.getElementById("matrix_input").value;
  let matrix = matrixInput.split("\n").map(row => row.split(",").map(Number));
  if (matrixInput === "") {
    document.getElementById("result5").innerHTML = `Erro: Preencha o campo.`;
    return;
  }
  if (matrix.some(row => row.some(element => isNaN(element)))) {
    document.getElementById("result5").innerHTML = `Erro: A matriz deve ser escrita no formato correto (Ex.: 1,2,3\n4,5,6\n7,8,9).`;
    return;
  }
  let soma = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      soma += matrix[i][j];
    }
  }
  document.getElementById("result5").innerHTML = `A soma dos elementos da matrix é ${soma}`;
}

function calculateFactorial() {
  let numInput = parseInt(document.getElementById("num_input").value);
  if (numInput === "") {
    document.getElementById("result6").innerHTML = `Erro: Preencha o campo.`;
    return;
  }
  let fatorial = 1;
  for (let i = 1; i <= numInput; i++) {
    fatorial *= i;
  }
  document.getElementById("result6").innerHTML = `O fatorial de ${numInput} é ${fatorial}`;
}

function displayOptionMessage() {
  let choiceInput = parseInt(document.getElementById("choice_input").value);
  if (choiceInput === "") {
    document.getElementById("choice_input").innerHTML = `Erro: Preencha o campo.`;
    return;
  }
  switch (choiceInput) {
    case 1:
      document.getElementById("result7").innerHTML = "Opção 1 escolhida";
      break;
    case 2:
      document.getElementById("result7").innerHTML = "Opção 2 escolhida";
      break;
    case 3:
      document.getElementById("result7").innerHTML = "Opção 3 escolhida";
      break;
    default:
        document.getElementById("result7").innerHTML = "Opção inválida";
    }
}

function findLargerNumberInArray() {
    let arrayInput = document.getElementById("array_input2").value;
    let array = arrayInput.split(",").map(Number);
    if (arrayInput === "") {
      document.getElementById("result8").innerHTML = `Erro: Preencha o campo.`;
      return;
    }
    if (array.some((element) => isNaN(element))) {
      document.getElementById("result8").innerHTML = `Erro: o array deve ser escrito no formato correto (ex: 1,2,3,4,5).`;
      return;
    }
    const maiorNumero = Math.max(...array);
    document.getElementById("result8").innerHTML = `O maior número do array é ${maiorNumero}`;
}

function calculateMatrixAverage() {
    let matrixInput2 = document.getElementById("matrix_input2").value;
    let matrix = matrixInput2.split("\n").map(row => row.split(",").map(Number));
    if (matrixInput2 === "") {
      document.getElementById("result9").innerHTML = `Erro: Preencha o campo.`;
      return;
    }
    if (matrix.some(row => row.some(element => isNaN(element)))) {
      document.getElementById("result9").innerHTML = `Erro: A matriz deve ser escrita no formato correto (Ex.: 1,2,3\n4,5,\n7,8,9).`;
      return;
    }
    let soma = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        soma += matrix[i][j];
      }
    }
    const media = soma/(matrix.length * matrix[0].length);
    document.getElementById("result9").innerHTML = `A média dos elementos da matriz é ${media}`;
}