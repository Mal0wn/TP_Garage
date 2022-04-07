import { Vehicule } from "./Vehicule";

export class Moto extends Vehicule {
	
	faireUnWheeling() {
		console.log("Kéké Wheeling")
	}

	afficherLeVehicule(): void {
		console.log(` ${this.constructor.name} `)
	}

}