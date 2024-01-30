import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<any>();
  @Input() title!: string;

  constructor() {
  }

  public onSelectClick(feature: any) {
    this.featureSelected.emit(feature);
  }


}
