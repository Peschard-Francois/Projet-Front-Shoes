'use strict';


//Import de la Database
import * as db from './dataBase.js';

let shoes = db.myArray;



// Declare les variables avec comme valeur les récuperation des balises créer dans le html
const div = document.getElementById('prod')
const produits = document.querySelector('.produits');
const produits2 = document.querySelector('.produits2');





// Delcare le bloc de construction de la div avec les differentes valeur de l'objet
let bloc = "";


for (let i = 0 ; i < shoes.length ; i++){

    bloc += `<div class="shoesId" id="shoesId${shoes[i].id}">
             <img id="img" src="${shoes[i].url}" alt="imgshoes" with="100" height="70">
             <div id="shoesdetails">
                <h3 id="brand">${shoes[i].brand}</h3>
                <h3 id="model">${shoes[i].model}</h3>
                <h3 id="price">${shoes[i].price}</h3>
             </div>
             Quantité : <input min="0" id="qte" type="number" placeholder="0">
             <a class="btnshoes" id="btn${shoes[i].id}" href="#">Acheter</a>
            </div>` 


}

//Tranforme le bloc en html et le l'insere dans la balise div declarer plus haut
div.innerHTML = bloc;


// créer un evenement au CLICK et l'associé a la methode addProduit et removeElement
produits.addEventListener('click', addElement);
produits2.addEventListener('click',removeElement);


// fonction addProduit defini
   function addElement(event){


   //verifier le clique boutton
   if ( event.target.classList.contains('btnshoes')) {

      //recupere l'element parent de type objet
      const add = event.target.parentElement;
      console.log(add)
      
      // et l'ajoute a la fonction 
      objetshoes(add);
   }

   //function qui recupere les informations dans les balises et créer un objet
   function objetshoes(add) {


      //Creation de l'objet
      const Obshoes = {
      img: add.querySelector('#img').src,
      brand: add.querySelector('#brand').textContent,
      model: add.querySelector('#model').textContent,
      qte: add.querySelector('#qte').value,
      price: add.querySelector('#price').textContent
      

      }

      //vérification de la saisie null or 0
      if (add.querySelector('#qte').value <= 0 || add.querySelector('#qte').value == ""){

         alert("Veuillez saisir une quantité !!!")
      }else{
         panier(Obshoes)
      }
   }



//créer la function pagnier 
function panier(Obshoes){

   //recupere la valeur de price(qui est en string) et la transforme en number
   let price = Obshoes.price
   //console.log(typeof price)

   //Créer une div
   let div = document.createElement('div');
   //définit le nom de ça classe
   div.setAttribute('class','listeAchat');

   // Création du bloc type de retour pour afficher l'objet selectionner
   let bloc2 = "";
   
   bloc2 += `
   <img src="${Obshoes.img}" alt="" with="50" height="35">
   <p>Marque : ${Obshoes.brand} | Model : ${Obshoes.model} | Prix : ${Obshoes.qte*price}€</p>
   <a href="#" class="remove">X</a>
   `

   //Tranforme le bloc en html et le l'insere dans la balise div declarer plus haut
   div.innerHTML = bloc2;
   

   // puis une fois la div créer l'insere dans la div dans le ficher html produits2
   produits2.appendChild(div)


   let totalcommande = document.getElementsByClassName('listeAchat')
   totalcommande = Array.from(totalcommande);
   doTotal(totalcommande);

 }
}
  // definit la fonction pour calculer le total et afficher une alerte 15%
   function doTotal(totalcommande) {


      let sum = 0
      totalcommande.forEach(item => {

         sum += Number(item.children[1].innerHTML.slice(length -4, -1))
         if ((sum > 400)) {

            alert("15% de reduction !!")
            
            return
         }


      });
      document.getElementById('totalAff').innerHTML = sum;
   }



   //fonction qui permet de retirer un element au click et mise a jour du prix
   function removeElement(event) {

      let total = document.getElementById('totalAff').innerHTML
      
      let totalConvert = Number(total);
      
      event.preventDefault();
      if (event.target.classList.contains('remove')) {
         event.target.parentElement.remove()
         let Prix = Number(event.target.parentElement.children[1].innerHTML.slice(length -4,-1))
         console.log(Prix)
         document.getElementById('totalAff').innerHTML = totalConvert - Prix;
      }
      
   }



// eventListener au click pour afficher le menu en format tablette et telephone
   let btnnav = document.querySelector('.btnnav');
   let button = document.querySelector('.button');
   btnnav.addEventListener('click', event => {


      button.classList.toggle('show');
  
  
  
  })