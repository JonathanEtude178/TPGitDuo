
let tasks = [
{
id: 1,
title: "Fitness",
description: "",
done: false
}
]
=======

const details = document.querySelector("reponse1").value



let choix
let taches = ["Menages", "Cuisiner", "Sports", "Sorties"];
Select = false

function taches() {
if (choix == taches(0) || choix == taches(1) || choix == taches(2) || choix == taches(3)) {
    Select = true
  }
}
details.addEventListener("click", () => taches)

