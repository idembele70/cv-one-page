import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [TranslatePipe, NgForOf],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
  log(d: any) {
    console.log(d)

  }
}
