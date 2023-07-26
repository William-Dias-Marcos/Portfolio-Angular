import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  hideNav(valor: HTMLInputElement) {
    setTimeout(() => {
      valor.checked = false;
    }, 100);
  }
}
