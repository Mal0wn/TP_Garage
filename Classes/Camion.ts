import { Vehicule } from "./Vehicule"

export class Camion implements Vehicule {

	marque: string
	couleur: string
	type: string

	constructor(marque : string , couleur : string ){
	
	this.marque = marque;
	this.couleur = couleur;
	this.type = "Camion"

	}
	
	avancer(): void {
		
	}
	reculer(): void {
		
	}
	freiner(): void {
		
	}
	afficherLeVehicule(): void {
		
	}

	attacherRemorque(){
		console.log("Remorque Attachée !")
	}

	detacherRemorque() {
		console.log("Remorque détachée!")
	}


}