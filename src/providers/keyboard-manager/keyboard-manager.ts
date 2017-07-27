import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';

import { Keyboard } from '@ionic-native/keyboard';

/*
  Generated class for the KeyboardManagerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class KeyboardManagerProvider {

  constructor(private keyboard: Keyboard) {
    console.log('Hello KeyboardManagerProvider Provider');
  }
  closeKB(){
    console.log("MBManager Closing KB");
    this.keyboard.close();
  }
  

}
