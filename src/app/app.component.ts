import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { BannerComponent } from './banner.component';
import { HeaderInfoComponent } from './header.component';
import { ReferenceCompontent } from './reference.component';
import { ProfessionalSkillsComponent } from './skills.component';
import { ExperienceComponent } from './experience.component';
import { EducationComponent } from './education.component';
@Component({
  selector: 'app-root',
  template: `
    <app-navbar/>
    <app-header/>
    <app-banner/>
    <app-skill/>
    <app-experience/>
    <app-education/>
    <app-reference/>
  `,
  imports: [NavbarComponent, BannerComponent,HeaderInfoComponent, ProfessionalSkillsComponent, EducationComponent,
    ExperienceComponent,ReferenceCompontent],
})
export class AppComponent {
  title = 'App-CreativeCV';
}
