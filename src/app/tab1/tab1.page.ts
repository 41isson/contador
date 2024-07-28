import { Component } from '@angular/core';
import { IonHeader,IonGrid,IonButtons,IonCol,IonRow, IonToolbar, IonTitle,IonLabel, IonContent,IonCard,IonAlert,IonButton } from '@ionic/angular/standalone';
import Dictionary from 'src/interfaces/global.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar,IonButtons,IonTitle, IonContent,IonCard,IonLabel,IonCol,IonRow, IonAlert,IonButton,IonGrid],
})



export class Tab1Page  {
  dc: Dictionary = new Dictionary;
  numero:number = 1;
  sum:number = 0;
  constructor() {}
   sumCounter(){
    this.sum += this.numero;
    return this.sum;
   }

   removeCounter(){
    this.sum = 0;
    return this.sum;
   }


}
