let affichage = document.getElementById("affichage");
let clear = document.getElementById("clear");

un.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "1";
  } else {
    affichage.value += "1";
  }
});
deux.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "2";
  } else {
    affichage.value += "2";
  }
});
trois.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "3";
  } else {
    affichage.value += "3";
  }
});
quatre.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "4";
  } else {
    affichage.value += "4";
  }
});
cinq.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "5";
  } else {
    affichage.value += "5";
  }
});
six.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "6";
  } else {
    affichage.value += "6";
  }
});
sept.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "7";
  } else {
    affichage.value += "7";
  }
});
huit.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "8";
  } else {
    affichage.value += "8";
  }
});
neuf.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "9";
  } else {
    affichage.value += "9";
  }
});

zero.addEventListener("click", function () {
  if (operateur.value !== "") {
    affichage2.value += "0";
  } else {
    affichage.value += "0";
  }
});

plus.addEventListener("click", function () {
  operateur.value = "+";
});

moins.addEventListener("click", function () {
  operateur.value = "-";
});

diviz.addEventListener("click", function () {
  operateur.value = "/";
});

fois.addEventListener("click", function () {
  operateur.value = "*";
});

clear.addEventListener("click", function () {
  affichage.value = "";
  operateur.value = "";
  affichage2.value = "";
  resultat.value = "";
});

virgule.addEventListener("click", function () {
  const regex = /[.]/;
  if (!affichage.value.match(regex)) {
    affichage.value += ".";
  } else if (affichage2.value !== "") {
    affichage2.value += ".";
  }
});

egal.addEventListener("click", function () {
  switch (operateur.value) {
    case "+":
      resultat.value =
        parseFloat(affichage.value) + parseFloat(affichage2.value);

      break;
    case "-":
      resultat.value =
        parseFloat(affichage.value) - parseFloat(affichage2.value);

      break;
    case "/":
      resultat.value =
        parseFloat(affichage.value) / parseFloat(affichage2.value);

      break;
    case "*":
      resultat.value =
        parseFloat(affichage.value) * parseFloat(affichage2.value);

      break;
  }
});
