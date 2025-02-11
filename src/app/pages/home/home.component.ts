import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
