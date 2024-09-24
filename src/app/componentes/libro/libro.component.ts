import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { MenubarModule } from 'primeng/menubar';
import {TableModule} from 'primeng/table';
@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [MenuComponent,MenubarModule,TableModule],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {

}
