let voiture1 = [];
let voiture2 = [];
let total = 0;
let code;

const catalog = {
  model1: { name: "Motion", price: 17990 },
  model2: { name: "Active", price: 19990 },
  model3: { name: "Design", price: 21490 },
  model4: { name: "Premium", price: 22490 },
  motor1: { name: "80ch", price: 0 },
  motor2: { name: "120ch", price: 500 },
  motor3: { name: "140ch", price: 2000 },
  motor4: { name: "200ch", price: 2700 },
  color1: { name: "Blanc Glacier", price: 0 },
  color2: { name: "Gris Urban", price: 230 },
  color3: { name: "Bleu Celadon", price: 540 },
  color4: { name: "Bleu Iron", price: 540 },
  color5: { name: "Gris Titanium", price: 540 },
  color6: { name: "Noir Etoilé", price: 540 },
  color7: { name: "Gris Platine", price: 540 },
  color8: { name: "Brun Vison", price: 540 },
  color9: { name: "Rouge Flamme", price: 740 },
  color10: { name: "Orange Valencia", price: 740 }
};

/* Choix 1 : Finition */
function choix_finition() {
  voiture1[0] = prompt(
    "Choix de la finition :\n1)- Motion (17 990 €)\n2)- Active (19 990 €)\n3)- Design (21 490 €)\n4)- Premium (22 490 €)"
  );
  switch (voiture1[0]) {
    case "1":
      voiture1[0] = catalog.model1.name;
      voiture2[0] = catalog.model1.price;
      break;
    case "2":
      voiture1[0] = catalog.model2.name;
      voiture2[0] = catalog.model2.price;
      break;
    case "3":
      voiture1[0] = catalog.model3.name;
      voiture2[0] = catalog.model3.price;
      break;
    case "4":
      voiture1[0] = catalog.model4.name;
      voiture2[0] = catalog.model4.price;
      break;
    default:
      console.log("default - err");
      choix_finition();
      break;
  }
  console.log("Choix 1 : " + voiture1[0] + " - " + voiture2[0] + " €");
}

/* Choix 2 : Moteur */
function choix_moteur() {
  voiture1[1] = prompt(
    "Choix du moteur :\n1)- 100ch (inclus)\n2)- 120ch (500 €)\n3)- 140ch (2000 €)\n4)- 200ch (2700 €)"
  );
  switch (voiture1[1]) {
    case "1":
      voiture1[1] = catalog.motor1.name;
      voiture2[1] = catalog.motor1.price;
      break;
    case "2":
      voiture1[1] = catalog.motor2.name;
      voiture2[1] = catalog.motor2.price;
      break;
    case "3":
      voiture1[1] = catalog.motor3.name;
      voiture2[1] = catalog.motor3.price;
      break;
    case "4":
      voiture1[1] = catalog.motor4.name;
      voiture2[1] = catalog.motor4.price;
      break;
    default:
      console.log("default - err");
      choix_moteur();
      break;
  }
  console.log("Choix 2 : " + voiture1[1] + " - " + voiture2[1] + " €");
}

/* Choix 3 : Couleur */
function choix_couleur() {
  voiture1[2] = prompt(
    "Choix de la couleur :\n1)- Blanc Glacier (inclus)\n2)- Gris Urban (230 €)\n3)- Bleu Celadon (540 €)\n4)- Bleu Iron (540 €)\n5)- Gris Titanium (540 €)\n6)- Noir Etoilé (540 €)\n7)- Gris Platine (540 €)\n8)- Brun Vison (540 €)\n9)- Rouge Flamme (740 €)\n10)- Orange Valencia (740 €)"
  );
  switch (voiture1[2]) {
    case "1":
      voiture1[2] = catalog.color1.name;
      voiture2[2] = catalog.color1.price;
      break;
    case "2":
      voiture1[2] = catalog.color2.name;
      voiture2[2] = catalog.color2.price;
      break;
    case "3":
      voiture1[2] = catalog.color3.name;
      voiture2[2] = catalog.color3.price;
      break;
    case "4":
      voiture1[2] = catalog.color4.name;
      voiture2[2] = catalog.color4.price;
      break;
    case "5":
      voiture1[2] = catalog.color5.name;
      voiture2[2] = catalog.color5.price;
      break;
    case "6":
      voiture1[2] = catalog.color6.name;
      voiture2[2] = catalog.color6.price;
      break;
    case "7":
      voiture1[2] = catalog.color7.name;
      voiture2[2] = catalog.color7.price;
      break;
    case "8":
      voiture1[2] = catalog.color8.name;
      voiture2[2] = catalog.color8.price;
      break;
    case "9":
      voiture1[2] = catalog.color9.name;
      voiture2[2] = catalog.color9.price;
      break;
    case "10":
      voiture1[2] = catalog.color10.name;
      voiture2[2] = catalog.color10.price;
      break;
    default:
      console.log("default - err");
      choix_couleur();
      break;
  }
  console.log("Choix 3 : " + voiture1[2] + " - " + voiture2[2] + " €");
}

/* Choix 4 : Accessoire 1 */
function choix_pack1() {
  voiture1[3] = prompt("Ajouter le Pack MusiK (500 €) ?\n1)- oui\n2)- non");
  switch (voiture1[3]) {
    case "1":
      voiture1[3] = "Pack MusiK";
      voiture2[3] = 500;
      break;
    case "2":
      voiture1[3] = "";
      voiture2[3] = 0;
      break;
    default:
      console.log("default - err");
      choix_pack1();
      break;
  }
  console.log("Choix 4 : " + voiture1[3] + " - " + voiture2[3] + " €");
}

/* Choix 5 : Accessoire 2 */
function choix_pack2() {
  voiture1[4] = prompt(
    "Ajouter le Pack Sport “Kéké 3000” (600 €) ?\n1)- oui\n2)- non"
  );
  switch (voiture1[4]) {
    case "1":
      voiture1[4] = "Pack Sport “Kéké 3000”";
      voiture2[4] = 600;
      break;
    case "2":
      voiture1[4] = "";
      voiture2[4] = 0;
      break;

    default:
      console.log("default - err");
      choix_pack2();
      break;
  }
  console.log("Choix 5 : " + voiture1[4] + " - " + voiture2[4] + " €");
}

/* Addition données tableau voiture2[] */
function addition(total) {
  for (let i = 0; i < voiture2.length; i++) {
    total += Number(voiture2[i]);
  }
  return total;
}

/* Afficher message récapitulatif configuration */
function message(afficher) {
  let text1;
  let text2;
  let text3;
  let text4;
  let text5;
  if (voiture1[0] != "") {
    text1 = "Finition : " + voiture1[0] + "\n  +  " + voiture2[0] + " €";
  }
  if (voiture2[1] !== undefined) {
    text2 = "Moteur : " + voiture1[1] + "\n  +  " + voiture2[1] + " €";
  } else {
    text2 = "Moteur :";
  }
  if (voiture2[2] !== undefined) {
    text3 = "Couleur : " + voiture1[2] + "\n  +  " + voiture2[2] + " €";
  } else {
    text3 = "Couleur :";
  }

  if (voiture2[3] == 0) {
    text4 = "";
  } else if (voiture2[3] !== undefined) {
    text4 = "Accessoire : " + voiture1[3] + "\n  +  " + voiture2[3] + " €\n";
  } else {
    text4 = "";
  }

  if (voiture2[4] == 0) {
    text5 = "";
  } else if (voiture2[4] !== undefined) {
    text5 = "Accessoire : " + voiture1[4] + "\n  +  " + voiture2[4] + " €\n";
  } else {
    text5 = "";
  }

  let text9 = "Prix total (TTC) : " + addition(total) + " €uros";
  afficher = text1 + "\n" + text2 + "\n" + text3 + "\n" + text4 + text5 + text9;
  return afficher;
}

/* Générer code aléatoire alphanumerique */
function code_aleatoire(code) {
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    code += possible.charAt(Math.floor(Math.random() * possible.length));

  return code;
}

/* Sortie */
function fin() {
  alert(
    "Félicitation, votre configuration est maintenant terminée !\n\n" +
      message() +
      "\n\nVous pouvez retrouver votre configuration avec le code\n" +
      code_aleatoire()
  );
}

/* Configuration modification */
function configauto2() {
  let client_action = 0;

  while (client_action != "1") {
    client_action = prompt(
      "Prix total (TTC) de la configuration : " +
        addition(total) +
        " €uros\n" +
        voiture1[0] +
        " " +
        voiture1[1] +
        " " +
        voiture1[2] +
        " " +
        voiture1[3] +
        " " +
        voiture1[4] +
        "\n\nQue souhaitez vous-faire ?\n1- Valider la configuration\n2- Modifier la finition\n3- Modifier le moteur\n4- Modifier la couleur\n5- Modifier le Pack Musik\n6- Modifier le Pack Sport “Kéké 3000”"
    );
    switch (client_action) {
      case "1":
        break;
      case "2":
        choix_finition();
        alert(message());
        break;
      case "3":
        choix_moteur();
        alert(message());
        break;
      case "4":
        choix_couleur();
        alert(message());
        break;
      case "5":
        choix_pack1();
        alert(message());
        break;
      case "6":
        choix_pack2();
        alert(message());
        break;
      default:
        alert(client_action + " n'est pas un choix valide");
        configauto2();
        break;
    }
  }
}

/* Configuration initiale */
function configauto() {
  alert("Bienvenue dans notre configurateur auto");
  choix_finition();
  alert(message());
  choix_moteur();
  alert(message());
  choix_couleur();
  alert(message());
  choix_pack1();
  alert(message());
  choix_pack2();
  alert(message());
  configauto2();
  fin();
}

/* Début */
configauto();
