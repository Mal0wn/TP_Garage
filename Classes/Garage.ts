import { Garagiste} from "./Garagiste";
import { Moto} from "./Moto";
import { Voiture } from "./Voiture";
import { Camion } from "./Camion";
export class Garage {

	nom : string;
	garagiste : Garagiste;
	ListeMotos : Array<Moto>;
	ListeVoiture : Array<Voiture>;
	ListeCamions : Array<Camion>;
	

	constructor( nom : string) {
	this.nom = nom;
	}

	ajouterVehicule() {
	
	}

	retirerVehicule() {
	
	}

	afficherGarage() {
		console.log("Nom du garage: " + this.nom)
	}

	afficherMotos() {
	
	}

	afficherVoiture() {
	
	}

	afficherCamions() {
	
	}



}