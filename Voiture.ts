import {Vehicule} from "./Vehicule";

export class Voiture extends Vehicule {

  constructor(niveauCarburant:number,consommation:number,vitesseMax:number,playerName:string)
  {
    super();
    this.type = 'voiture';
    this.capaciteReservoir = 120;
    this.niveauCarburant = niveauCarburant;
    this.consommation = consommation;
    this.vitesseMax = vitesseMax;
    this.playerName = playerName;
  }

  klaxone(){
    console.log("pipidou poinpoin");
  }

  rouler(){
    super.rouler();
    if(this._niveauCarburant <= 0){
      this.klaxone();
    }
  }
  private win(){
    console.log(`${this.playerName} dans sa voiture gagne`)
  }
}
