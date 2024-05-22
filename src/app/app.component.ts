import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
// import { LocalStoreService } from './services/local-store.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraphComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jointjs-ang-nuevo';
  colorScheme = 'light';

// Ejemplo de uso en un componente
constructor(
  // private localStoreService: LocalStoreService

) {
  }

  toggleColorScheme() {
  }

  applyColorScheme() {

  }
}
