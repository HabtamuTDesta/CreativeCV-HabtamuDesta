import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
     <nav class="navbar navbar-dark bg-dark navbar-expand rounded">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CREATIVE CV</a>
    <div>
      <ul class="navbar-nav me-auto">
        @for(link of links;track link.id){
            <li class="nav-item">
          <a class="nav-link" [href]="link.url">{{link.text}}
          </a>
        </li>
        }
     </ul>
    </div>
  </div>
</nav>
   `,
})
export class NavbarComponent{
    links=[
        {id:1,text:'Home',url:'/'},
        {id:2,text:'About',url:'/about'},
        {id:3,text:'Skills',url:'/skill'},
        {id:4,text:'Portfolio',url:'/portfolio'},
        {id:5,text:'Contact',url:'/contact'},
        ];
}

