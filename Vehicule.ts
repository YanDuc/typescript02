// Créer un attribut statique "nombre de joueurs" dans la classe véhicule.
// Créer un attribut statique "joueurs ayant fini" dans la classe véhicule.
// Créer une méthode statique dans la classe véhicule qui va déterminer la fin de la course est afficher un message de félicitation aux joueurs.

export class Vehicule {
  _type:string;
  authorizedVehicules:Array<string> = ['moto','voiture','camion'];
  _capaciteReservoir:number;
  _niveauCarburant:number;
  errorVehicule:boolean = true;
  _consommation:number;
  _vitesseMax:number;
  _playerName:string;
  _distanceParcourue:number = 0;
  carbu:boolean = false;



  _distanceAParcourir:number = 10000;
  public static _hasWin:boolean = false;
  public static theWinnerIs:string = '';

  public static nombreDeJoueurs:number;
  public static joueursAyantFini:number = 0;

  constructor(){

  }

  set consommation(consommation){
    this._consommation = consommation;
  }
  get consommation(){
    return this._consommation;
  }

  set distanceParcourue(distanceParcourue){
    this._distanceParcourue = distanceParcourue;
  }
  get distanceParcourue(){
    return this._distanceParcourue;
  }

  set playerName(playerName){
    this._playerName = playerName;
  }
  get playerName(){
    return this._playerName;
  }

  set vitesseMax(vitesseMax){
    this._vitesseMax = vitesseMax;
  }
  get vitesseMax(){
    return this._vitesseMax;
  }

  set type(type){
    if(this.authorizedVehicules.indexOf(type) != -1){
      this._type = type;
    }
  }
  get type(){
    return this._type;
  }
  set capaciteReservoir(capReservoir:number){
    this._capaciteReservoir = capReservoir;
  }

  get capaciteReservoir(){
    return this._capaciteReservoir
  }

  set niveauCarburant(niveauCarburant){
    this._niveauCarburant = niveauCarburant;
  }
  get niveauCarburant(){
    return this._niveauCarburant;
  }



  mettreDuCarburant(){
    if(this._niveauCarburant + 10 < this._capaciteReservoir){
      this.carbu = false;
      this._niveauCarburant += 10;
      setTimeout(() => {
        this.mettreDuCarburant()
      }, 300);
    } else {
      this.carbu = true;
      this._niveauCarburant = this._capaciteReservoir;
      this.rouler();
    }
  }

  rouler(){
    if(Vehicule.joueursAyantFini < Vehicule.nombreDeJoueurs){
      if(this._niveauCarburant - this._consommation <= 0){
        this._niveauCarburant = 0;
        //this.carbu = false;
        setTimeout(() => {
          this.mettreDuCarburant()
        }, 2000);
      } else {
        this._niveauCarburant -= this._consommation;
        this._distanceParcourue += this._vitesseMax;
        if(this._distanceParcourue >= this._distanceAParcourir){

          Vehicule.theWinnerIs = this._type;
          Vehicule._hasWin = true;
          Vehicule.joueursAyantFini += 1;
          if(Vehicule.joueursAyantFini == 1){
            console.log(`${this._playerName} WIN !!!`);
          } else {
            console.log(`${this._playerName} est en ${Vehicule.joueursAyantFini}eme position`);
          }
          //this.klaxonne();
        } else {
          setTimeout(() => {
            this.rouler();
          }, 50);
        }
      }
    } else {
      console.log('la course est finie');
    }
  }

  endOfCourse(){
    console.log()
  }

  // klaxonne(){
  //
  // }


  affiche_type(){
    console.log(this._type);
  }
}
