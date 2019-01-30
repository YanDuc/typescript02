
import {Vehicule} from "./Vehicule";

export class Camion extends Vehicule {
  constructor(niveauCarburant:number,consommation:number,vitesseMax:number,playerName:string)
  {
    super();
    this.type = 'camion';
    this.capaciteReservoir = 2000;
    this.niveauCarburant = niveauCarburant;
    this.consommation = consommation;
    this.vitesseMax = vitesseMax;
    this.playerName = playerName;
  }

  klaxone(){
    console.log("broubla be wap");
  }

  rouler(){
    super.rouler();
    if(this._niveauCarburant <= 0){
      this.klaxone();
    }
  }

  private win(){
    console.log(`${this.playerName} dans son Camion gagne`)
  }
}
