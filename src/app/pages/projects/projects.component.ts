import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { iProject } from '../../interfaces/projects';
import { ListProject } from '../../configs/list-projects';

@Component({
  selector: 'app-projects',
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  public listProjects: iProject[] = ListProject;
}
