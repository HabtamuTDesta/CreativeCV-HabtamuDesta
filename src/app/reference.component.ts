import { Component } from "@angular/core";

@Component({
    selector:'app-reference',
    styleUrl:'./common.css',

    template:`
    <div class="container my-5">
  <h2 class="title">References</h2>
  <div class="reference-content">
    <img src="assets/reference_profile.png" alt="Picture" class="profile2-img" />
    
    <div class="text-content">
      <p>{{ reference_description}}</p>
      <div class="author">
        <h3>Hailemaryam</h3>
        <p class="position">Director of ICT / University of Gondar</p>
        
      </div>
      <div class="progress-bar">
        <span class="progress gray"></span>
        <span class="progress gray"></span>
        <span class="progress green"></span>
      </div>
    </div>
  </div>
</div>
    `,
})
export class ReferenceCompontent{
    reference_description="Habtamu is a highly skilled and dedicated professional with a keen eye for detail. His expertise and leadership have been invaluable in driving innovation and success. He consistently demonstrates a strong work ethic and a commitment to excellence, making him a trusted and respected figure in his field.";
}