import { Component } from "@angular/core";
@Component({
    selector:'app-header',
    template:`
    <header class="hero-section d-flex flex-column align-items-center justify-content-center">
    <div class="text-center">
        <img [src]="profile_img" alt="" class="rounded-circle profile-img mb-3">
        <h2 class="text-white fw-bold">{{name}}</h2>
        <p class="text-blue mb-4  fw-bold" >{{role}}</p>
        <button (click)="onButtonClicked('hireme')" class="btn btn-success">Hire Me</button>
        <span style="margin-left: 10px;"></span>
        <button (click)="onButtonClicked('download')" class="btn btn-success">Download CV</button>
    </div>
   
</header>
    `,
})
export class HeaderInfoComponent
{
    name="Habtamu Desta";
    role="Full-Stack .NET Cloud Developer";
    profile_img="assets/profile_pic.jpg";
    
    
    onButtonClicked(action: string) {
        if (action === 'hireme') 
        {
            alert('I appreciate your interst to hire me!. \nUse my email your better communications!');
        } 
        else if (action === 'download') 
        {
            alert('Unfortunatly this feature doesn\'t work.\nIt will be functinal in a bit!');
        }
    }
}