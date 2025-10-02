import { Component } from '@angular/core';
import { MainCardComponent } from "./components/main-card/main-card.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SidebarComponent, MainCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
