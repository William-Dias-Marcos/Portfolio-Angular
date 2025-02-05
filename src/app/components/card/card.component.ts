import { Component, input } from '@angular/core';
import { iProject } from '../../interfaces/projects';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  public project = input.required<iProject>();
}
