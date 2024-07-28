import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonHeader, IonGrid, IonIcon, IonButtons, IonCol, IonRow, IonToolbar, IonTitle, IonLabel, IonContent, IonCard, IonAlert, IonButton } from '@ionic/angular/standalone';
import Dictionary from 'src/interfaces/global.interface';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonIcon, IonToolbar, IonButtons, IonTitle, IonContent, IonCard, IonLabel, IonCol, IonRow, IonAlert, IonButton, IonGrid],
})
export class Tab2Page {
  dc: Dictionary = new Dictionary;
  time: any;
  cond: boolean = true;
  cron:number=0;
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square, arrowForwardOutline });
  }

  countTime(inicio: string) {
    try {
      switch (inicio) {
        case '1':
          const time = new Date().toISOString();
          this.time = time.slice(10, 20).replace(/T/g, '');
          break;
        case '2':
          this.cond = false;
          break;
      }

      if (this.cond) {
        setTimeout(() => this.countTime('1'), 1000);
        setTimeout(() => this.startCron(),1000);
      }
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  startCron(){
    this.cron += 1;   
    return this.cron;
  }

  startCount() {
    this.cond = true;
    this.countTime('1');
  }

  stopCount() {
    this.cond = false;
  }
}
