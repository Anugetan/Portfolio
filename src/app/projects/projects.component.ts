import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle('Projects | Jonathan Eguna');

    this.meta.updateTag({
      name: 'description',
      content:
        'Software development projects by Jonathan Eguna including Java, Spring Boot, Angular, NestJS, Next.js and database applications.'
    });
  }
}