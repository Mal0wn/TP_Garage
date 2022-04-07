export abstract class Vehicule {

	marque : string; 
	couleur : string;


	constructor(marque : string, couleur : string) {
	
	this.marque = marque;
	this.couleur= couleur
	
	}


	avancer() {
	console.log("Le vehicule " + this.marque + " " + this.couleur + " avance")
	}

	reculer() {
	console.log("Le vehicule " + this.marque + " " + this.couleur + " recule")
	}

	freiner() {
	console.log("Le vehicule " + this.marque + " " + this.couleur + " freine")
	}

	afficherLeVehicule() {
	
	}


}