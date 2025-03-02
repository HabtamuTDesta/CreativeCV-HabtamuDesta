import { Component } from "@angular/core";

@Component({
selector:'app-experience',
template:`

    <div class="container my-5"><!--card shadow-sm p-4-->
        <h5 class="text-center fw-bold mb-4">Work Experience</h5>
        @for (experience of experienceList; track experience.id) 
            {
            <div class="sub-section-container">
            <div class="left">
                <p class="date">{{experience.date}}</p>
                <h3>{{experience.ornganization}}</h3>
            </div>
            <div class="right">
                <h3>{{experience.role}}</h3>
                <p>{{experience.description}}</p>
            </div>
        </div>
        }
`,
styleUrl:'./common.css'
})
export class ExperienceComponent
{
    experienceList=[
        {
            id:1,
            date:'Jan 2020 Mar 2023', 
            ornganization:'University of Gondar', 
            role:'Software Developer',
            description:'As a Software Developer, I was responsible for designing, developing, testing, and maintaining software applications. I collaborated with cross-functional teams to analyze requirements, troubleshoot issues, and implement efficient solutions. I also wrote clean, scalable code, optimized system performance, and ensured software quality through debugging and testing. Additionally, I contributed to documentation, code reviews, and continuous improvement efforts to enhance development processes.'

        },
        {
            id:2,
            date:'Jan 2013 Feb 2020', 
            ornganization:'University of Gondar', 
            role:'Lecturer',
            description:'As a Lecturer, I was responsible for delivering lectures, preparing course materials, assessing student performance, and conducting research in my field. I also provided academic guidance, contributed to curriculum development, and participated in departmental activities to foster a dynamic learning environment.'

        },
    
        {
            id:3,
            date:'Sep 2009 - Aug 2010', 
            ornganization:'University of Gondar', 
            role:'Graduate Assistant',
            description:'Support faculty or staff in academic, research, or administrative tasks while pursuing their studies. Responsibilities may include assisting with research projects, grading assignments, teaching or tutoring students, and providing general administrative support.'
        }
    ];
}