import { Vehicule } from "./Vehicule";

export class Voiture extends Vehicule {
	

	afficherLeVehicule(): void {
		console.log(` ${this.constructor.name} `)
	}

}