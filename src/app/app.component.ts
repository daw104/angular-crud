import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  variableDelPadre!: string;
  featureClick!: any;

  onFeatureClick(feature: any) {
    this.featureClick = feature;
  }


  capturaElEventoDelHijo(event: any) {
    this.variableDelPadre = event;
  }


}
