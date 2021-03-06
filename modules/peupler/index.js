"use strict";
// Chercher le fichier avec le tablaux
const tableau = require("./tableaux.js");

const maxPrenom = tableau.tabPrenom.length;
const maxNom = tableau.tabNom.length;
const maxIndicatif = tableau.tabIndicatif.length;
const maxDomaine = tableau.tabDomaine.length;

const peupler = () =>{
	//console.log("ok");
	// choisir un prénom au hazard
	let position = Math.floor(Math.random() * maxPrenom);
	let prenom = tableau.tabPrenom[position];

	// choisir un nom au hazard
	position = Math.floor(Math.random() * maxNom);
	let nom = tableau.tabNom[position];

	// choisir un indicatif au hazard et telephone au hazard
	position = Math.floor(Math.random() * maxIndicatif);
	let telephone = tableau.tabIndicatif[position];
	for (let i=0; i<7; i++){
		if (i==0 || i == 3){
			telephone += "-" + Math.floor(Math.random() * 9).toString();
		} else{
			telephone += Math.floor(Math.random() * 9).toString();
		}
		
	}

	// choisir un domaine au hazard
	position = Math.floor(Math.random() * maxDomaine);
	let domaine = nom + prenom + tableau.tabDomaine[position];

	return {
		prenom: prenom,
		nom: nom,
		telephone: telephone,
		courriel: domaine,
	}
}

module.exports = peupler;