import {Vehicule} from "./Vehicule";

export class Moto extends Vehicule {
  constructor(niveauCarburant:number,consommation:number,vitesseMax:number,playerName:string)
  {
    super();
    this.type = 'moto'
    this.capaciteReservoir = 60;
    this.niveauCarburant = niveauCarburant;
    this.consommation = consommation;
    this.vitesseMax = vitesseMax;
    this.playerName = playerName;
  }

  klaxone(){
    console.log("wapadou wap yep");
  }

  rouler(){
    super.rouler();
    if(this._niveauCarburant <= 0){
      this.klaxone();
    }
  }

  private win(){
    console.log(`${this.playerName} dans sa moto gagne`)
  }
}
