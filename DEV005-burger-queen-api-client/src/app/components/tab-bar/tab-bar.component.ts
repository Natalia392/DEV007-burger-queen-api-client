import { Component, Input, Output, EventEmitter } from '@angular/core';
import { tabButton } from 'src/app/models/products.interface';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {
  @Input() activeTab = ''; // variable que almacena el nombre de la pestaña activa actual.
  @Input() tabOptions: tabButton[] = [];
  @Output() tabChange: EventEmitter<string> = new EventEmitter();

  // Función que se llama cuando se hace clic en una pestaña. Cambia la activeTab al nombre de la pestaña seleccionada.
  openTab(tabName: string) {
    this.tabChange.emit(tabName);
  }
}
