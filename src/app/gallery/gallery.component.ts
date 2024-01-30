import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  showCats: boolean = true;
  showDogs: boolean = true;
  @Output() eventoClickDelHijo = new EventEmitter<any>();
  @Input() inputDelHijo!: string;

  public onShowOnlyCats(show: any) {
    this.showCats = true;
    this.showDogs = false;
    this.eventoClickDelHijo.emit('Gato Gallery');
  }

  public onShowOnlyDogs(show: any) {
    this.showDogs = true;
    this.showCats = false;
    this.eventoClickDelHijo.emit('Dog Gallery');

  }


}
