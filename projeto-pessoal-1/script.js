const palavra = 'termo';

const comoJogar = document.getElementById('info');
const mostrarInfo = document.getElementById('comoJogar');
const fechamenu = document.getElementById('fechaMenu');
const reset = document.getElementById('buttonReset');

const enter = document.getElementById('enter');
const enter2 = document.getElementById('enter2');
const enter3 = document.getElementById('enter3');
const enter4 = document.getElementById('enter4');
const enter5 = document.getElementById('enter5');
const enter6 = document.getElementById('enter6');

const arrTecla = document.getElementsByClassName('tecla');

reset.addEventListener('click', function () {
  window.location.reload(true);
})

const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');

const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');
const t10 = document.getElementById('t10');

const t11 = document.getElementById('t11');
const t12 = document.getElementById('t12');
const t13 = document.getElementById('t13');
const t14 = document.getElementById('t14');
const t15 = document.getElementById('t15');

const t16 = document.getElementById('t16');
const t17 = document.getElementById('t17');
const t18 = document.getElementById('t18');
const t19 = document.getElementById('t19');
const t20 = document.getElementById('t20');

const t21 = document.getElementById('t21');
const t22 = document.getElementById('t22');
const t23 = document.getElementById('t23');
const t24 = document.getElementById('t24');
const t25 = document.getElementById('t25');

const t26 = document.getElementById('t26');
const t27 = document.getElementById('t27');
const t28 = document.getElementById('t28');
const t29 = document.getElementById('t29');
const t30 = document.getElementById('t30');

const linha1 = () => {
  const letrasRestantes = [];
  const listaInput = [t1, t2, t3, t4, t5];
  const confirmaPalavra = `${t1.innerText}${t2.innerText}${t3.innerText}${t4.innerText}${t5.innerText}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].innerHTML) {
        listaInput[index].classList.add('bg-success');
        listaInput[index].classList.add('p-2');
        listaInput[index].classList.add('text-white');
        listaInput[index].classList.add('bg-opacity-75');
        for (let i = 0; i < arrTecla.length; i += 1) {
          if (palavra[index].toUpperCase() === arrTecla[i].innerText) {
            arrTecla[i].classList.add('bg-success');
            arrTecla[i].classList.add('p-2');
            arrTecla[i].classList.add('text-white');
            arrTecla[i].classList.add('bg-opacity-75');
          }
        }
      } else {
        listaInput[index].style.backgroundColor = 'rgba(0, 0, 0, 0.74)';
        letrasRestantes.push(palavra[index])
      }
    }
  }
  return letrasRestantes;
}

const linha1_1 = () => {
  const listaInput = [t1, t2, t3, t4, t5];
  const verifica = listaInput.every((element) => element.classList.contains('bg-success') === true);
  if (verifica === true) {
    const teclado = document.getElementById('teclado');
    const textoWin = document.getElementById('textWin');
    textoWin.innerText = 'PARABÉNS! ACERTOU DE PRIMEIRA';
    teclado.style.display = 'none';
  }
  const letrasRestantes = linha1();
  const inputFaltando = [t1, t2, t3, t4, t5].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].innerHTML === letrasRestantes[i]) {
        inputFaltando[index].classList.add('bg-danger');
        inputFaltando[index].classList.add('p-2');
        inputFaltando[index].classList.add('text-white');
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha2 = () => {
  const letrasRestantes = [];
  const listaInput = [t6, t7, t8, t9, t10];
  const confirmaPalavra = `${t6.innerText}${t7.innerText}${t8.innerText}${t9.innerText}${t10.innerText}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].innerHTML) {
        listaInput[index].classList.add('bg-success');
        listaInput[index].classList.add('p-2');
        listaInput[index].classList.add('text-white');
        listaInput[index].classList.add('bg-opacity-75');
        for (let i = 0; i < arrTecla.length; i += 1) {
          if (palavra[index].toUpperCase() === arrTecla[i].innerText) {
            arrTecla[i].classList.add('bg-success');
            arrTecla[i].classList.add('p-2');
            arrTecla[i].classList.add('text-white');
            arrTecla[i].classList.add('bg-opacity-75');
          }
        }
      } else {
        listaInput[index].style.backgroundColor = 'rgba(0, 0, 0, 0.74)';
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha2_1 = () => {
  // const listaInput = [t6, t7, t8, t9, t10];
  // const verifica = listaInput.every((element) => element.classList.contains('bg-success') === true);
  // if (verifica === true) {
  //   const teclado = document.getElementById('teclado');
  //   const textoWin = document.getElementById('textWin');
  //   textoWin.innerText = 'PARABÉNS! ACERTOU DE SEGUNDA';
  //   teclado.style.display = 'none';
  // }
  const letrasRestantes = linha2();
  const inputFaltando = [t6, t7, t8, t9, t10].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].innerHTML === letrasRestantes[i]) {
        inputFaltando[index].classList.add('bg-danger');
        inputFaltando[index].classList.add('p-2');
        inputFaltando[index].classList.add('text-white');
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha3 = () => {
  const letrasRestantes = [];
  const listaInput = [t11, t12, t13, t14, t15];
  const confirmaPalavra = `${t11.innerText}${t12.innerText}${t13.innerText}${t14.innerText}${t15.innerText}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].innerHTML) {
        listaInput[index].classList.add('bg-success');
        listaInput[index].classList.add('p-2');
        listaInput[index].classList.add('text-white');
        listaInput[index].classList.add('bg-opacity-75');
      } else {
        listaInput[index].style.backgroundColor = 'rgba(0, 0, 0, 0.74)';
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha3_1 = () => {
  const letrasRestantes = linha3();
  const inputFaltando = [t11, t12, t13, t14, t15].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].innerHTML === letrasRestantes[i]) {
        inputFaltando[index].classList.add('bg-danger');
        inputFaltando[index].classList.add('p-2');
        inputFaltando[index].classList.add('text-white');
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha4 = () => {
  const letrasRestantes = [];
  const listaInput = [t16, t17, t18, t19, t20];
  const confirmaPalavra = `${t16.innerText}${t17.innerText}${t18.innerText}${t19.innerText}${t20.innerText}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].innerHTML) {
        listaInput[index].classList.add('bg-success');
        listaInput[index].classList.add('p-2');
        listaInput[index].classList.add('text-white');
        listaInput[index].classList.add('bg-opacity-75');
      } else {
        listaInput[index].style.backgroundColor = 'rgba(0, 0, 0, 0.74)';
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha4_1 = () => {
  const letrasRestantes = linha4();
  const inputFaltando = [t16, t17, t18, t19, t20].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].innerHTML === letrasRestantes[i]) {
        inputFaltando[index].classList.add('bg-danger');
        inputFaltando[index].classList.add('p-2');
        inputFaltando[index].classList.add('text-white');
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha5 = () => {
  const letrasRestantes = [];
  const listaInput = [t21, t22, t23, t24, t25];
  const confirmaPalavra = `${t21.innerText}${t22.innerText}${t23.innerText}${t24.innerText}${t25.innerText}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].innerHTML) {
        listaInput[index].classList.add('bg-success');
        listaInput[index].classList.add('p-2');
        listaInput[index].classList.add('text-white');
        listaInput[index].classList.add('bg-opacity-75');
      } else {
        listaInput[index].style.backgroundColor = 'rgba(0, 0, 0, 0.74)';
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha5_1 = () => {
  const letrasRestantes = linha5();
  const inputFaltando = [t21, t22, t23, t24, t25].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].innerHTML === letrasRestantes[i]) {
        inputFaltando[index].classList.add('bg-danger');
        inputFaltando[index].classList.add('p-2');
        inputFaltando[index].classList.add('text-white');
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const linha6 = () => {
  const letrasRestantes = [];
  const listaInput = [t26, t27, t28, t29, t30];
  const confirmaPalavra = `${t26.innerText}${t27.innerText}${t28.innerText}${t29.innerText}${t30.innerText}`;
  if (confirmaPalavra.length === 5) {
    for (let index = 0; index < palavra.length; index += 1) {
      if (palavra[index] === listaInput[index].innerHTML) {
        listaInput[index].style.backgroundColor = 'green';        
        listaInput[index].classList.add('bg-success');
        listaInput[index].classList.add('p-2');
        listaInput[index].classList.add('text-white');
        listaInput[index].classList.add('bg-opacity-75');      
      } else {
        listaInput[index].style.backgroundColor = 'rgba(0, 0, 0, 0.74)';
        letrasRestantes.push(palavra[index])
      }
      listaInput[index].disabled = true;
    }
  }
  return letrasRestantes;
}

const linha6_1 = () => {
  const letrasRestantes = linha6();
  const inputFaltando = [t26, t27, t28, t29, t30].filter((element) => element.style.backgroundColor !== 'green');
  for (let index = 0; index < inputFaltando.length; index += 1) {
    for (let i = 0; i < letrasRestantes.length; i += 1) {
      if (inputFaltando[index].value === letrasRestantes[i]) {
        inputFaltando[index].classList.add('bg-danger');
        inputFaltando[index].classList.add('p-2');
        inputFaltando[index].classList.add('text-white');
        letrasRestantes.splice(i, 1);
      }
    }
  }
}

const arrDiv = document.getElementsByClassName('inputText');

const arr1 = [t1, t2, t3, t4, t5];
const arr2 = [t6, t7, t8, t9, t10];
const arr3 = [t11, t12, t13, t14, t15];
const arr4 = [t16, t17, t18, t19, t20];
const arr5 = [t21, t22, t23, t24, t25];
const arr6 = [t26, t27, t28, t29, t30];

function classeLinha1() {
  for (let index = 0; index < arrDiv.length; index += 1) {
    if (arrDiv[index].addEventListener('click', function () {
      for (let i = 0; i < arrDiv.length; i += 1) {
        arrDiv[i].classList.remove('oi');
      }
      arrDiv[index].classList.add('oi');
    }));
  }
}

classeLinha1();

enter.addEventListener('click', function () {
  const confirmaPalavra = `${t1.innerText}${t2.innerText}${t3.innerText}${t4.innerText}${t5.innerText}`;
  if (confirmaPalavra.length === 5) {
    linha1();
    linha1_1();
    for (let index = 0; index < arr1.length; index += 1) {
      arr1[index].disabled = true;
      arr1[index].classList.remove('oi');
      arr2[index].disabled = false;
    }
    enter.style.display = 'none';
    enter2.style.display = 'block';
    t6.classList.add('oi');
  }
})

enter2.addEventListener('click', function () {
  const confirmaPalavra = `${t6.innerText}${t7.innerText}${t8.innerText}${t9.innerText}${t10.innerText}`;
  if (confirmaPalavra.length === 5) {
    linha2();
    linha2_1();
    for (let index = 0; index < arr1.length; index += 1) {
      arr2[index].disabled = true;
      arr2[index].classList.remove('oi');
      arr3[index].disabled = false;
    }
    enter2.style.display = 'none';
    enter3.style.display = 'block';
    t11.classList.add('oi');
  }
});

enter3.addEventListener('click', function () {
  const confirmaPalavra = `${t11.innerText}${t12.innerText}${t13.innerText}${t14.innerText}${t15.innerText}`;
  if (confirmaPalavra.length === 5) {
  linha3();
  linha3_1();
  for (let index = 0; index < arr1.length; index += 1) {
    arr3[index].disabled = true;
    arr3[index].classList.remove('oi');
    arr4[index].disabled = false;
  }
  enter3.style.display = 'none';
  enter4.style.display = 'block';
  t16.classList.add('oi');
}
});

enter4.addEventListener('click', function () {
  const confirmaPalavra = `${t16.innerText}${t17.innerText}${t18.innerText}${t19.innerText}${t20.innerText}`;
  if (confirmaPalavra.length === 5) {
  linha4();
  linha4_1();
  for (let index = 0; index < arr1.length; index += 1) {
    arr4[index].disabled = true;
    arr4[index].classList.remove('oi');
    arr5[index].disabled = false;
  }
  enter4.style.display = 'none';
  enter5.style.display = 'block';
  t21.classList.add('oi');
}
});

enter5.addEventListener('click', function () {
  const confirmaPalavra = `${t21.innerText}${t22.innerText}${t23.innerText}${t24.innerText}${t25.innerText}`;
  if (confirmaPalavra.length === 5) {
  linha5();
  linha5_1();
  for (let index = 0; index < arr1.length; index += 1) {
    arr5[index].disabled = true;
    arr5[index].classList.remove('oi');
    arr6[index].disabled = false;
  }
  enter5.style.display = 'none';
  enter6.style.display = 'block';
  t26.classList.add('oi');
}
});

enter6.addEventListener('click', function () {
  const confirmaPalavra = `${t26.innerText}${t27.innerText}${t28.innerText}${t29.innerText}${t30.innerText}`;
  if (confirmaPalavra.length === 5) {
  linha6();
  linha6_1();
  for (let index = 0; index < arr1.length; index += 1) {
    arr6[index].disabled = true;
    arr6[index].classList.remove('oi');
  }
  enter6.style.display = 'none';
  const teclado = document.getElementById('teclado');
  teclado.style.display = 'none';
}
});

function teclado() {
  let tecla = '';
  for (let index = 0; index < arrTecla.length; index += 1) {
    arrTecla[index].addEventListener('click', function() {
      tecla = arrTecla[index].innerHTML.toLowerCase();
      let indN = undefined;
      for (let i = 0; i < arrDiv.length; i += 1) {
        if (arrDiv[i].classList.contains('oi') === true) {
          arrDiv[i].innerText = tecla;
          indN = i;
        }
      }
      for (let ind = 0; ind < arrDiv.length; ind += 1) {
        if (arrDiv[ind].classList.contains('oi') === true && arrDiv[indN + 1].disabled === false) {
          arrDiv[indN + 1].classList.add('oi');
          arrDiv[indN].classList.remove('oi');
        }
      }
    })
  }
};

teclado();
