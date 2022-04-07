export abstract class Vehicule {

	marque : string; 
	couleur : string;
	type: string;


	constructor(marque : string, couleur : string, type : string) {
	
	this.marque = marque;
	this.couleur= couleur;
	this.type = type
	
	}


	avancer() {
	console.log("Le " + this.type + this.marque + " " + this.couleur + " recule")
	}

	reculer() {
	console.log("Le " + this.type + this.marque + " " + this.couleur + " recule")
	}

	freiner() {
	console.log("Le " + this.type + this.marque + " " + this.couleur + " freine")
	}

	afficherLeVehicule() {
	
	}


}