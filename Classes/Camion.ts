import { Vehicule } from "./Vehicule"

export class Camion extends Vehicule {

	

	attacherRemorque(){
		console.log("Remorque Attachée !")
	}

	detacherRemorque() {
		console.log("Remorque détachée!")
	}

	afficherLeVehicule(): void {
		console.log(` ${this.constructor.name} `)
	}

}