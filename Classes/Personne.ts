export abstract class Personne {

	nom : string;
	age : number;

	constructor(nom : string , age : number) {
	
	this.nom = nom;
	this.age = age;
	
	}

	sePresenter() {
	console.log("Bonjour je m'appelle " +this.nom + " et j'ai " + this.age)
	}


}