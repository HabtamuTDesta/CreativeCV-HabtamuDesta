import { Component,signal,computed } from '@angular/core';
import { AboutMe } from './aboutme.component';
import { BasicInfo } from './basicInfo.component';


@Component({
    selector: 'app-banner',
    template: `
      <div class="card mt-2">
        <div class="card-body">
        <div class="card shadow-sm p-4">
              <div style="display: flex; justify-content: space-between; align-items: center;">
              <app-aboutme style="flex: 1; margin: 10px;"></app-aboutme>
              <basicinfo-app style="flex: 1; margin: 10px;"></basicinfo-app>
              </div>
        </div>
        </div>
      </div>
    `,
    imports: [AboutMe, BasicInfo],  // Import components in the banner component
  })
  export class BannerComponent { }
