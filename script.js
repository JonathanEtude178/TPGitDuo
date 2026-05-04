
const details = document.querySelector("reponse1").value



let tasks = [
{
id: 1,
title: "Faire les courses",
description: "Acheter du lait et du pain",
done: false
}
];

let choix
let taches = ["Menages", "Cuisiner", "Sports", "Sorties"];
Select = false

function taches() {
if (choix == taches(0) || choix == taches(1) || choix == taches(2) || choix == taches(3)) {
    Select = true
  }
}
details.addEventListener("click", () => taches)
