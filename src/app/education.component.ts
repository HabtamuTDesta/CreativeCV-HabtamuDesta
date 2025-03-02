import { Component } from "@angular/core";
@Component({
    selector:'app-education',
    styleUrl:"./common.css",
    template:`
    <div class="container my-5">
        <h5 class="text-center fw-semibold mb-3">Education</h5>
         @for (education of educations; track education.id) {
        <div class="sub-section-container">
            <div class="left">
                <p class="date">{{education.date}}</p>
                <h3>{{education.degree}}</h3>
            </div>
            <div class="right">
                <h3 class="degree">{{ education.course }}</h3>
                <p class="university">{{ education.university }}</p>
                <p>{{education.description}}</p>
            </div>
        </div>
    }


    </div>
    `,

})
export class EducationComponent
{
educations=[
    {
        id:1, 
        date:'Oct 2024 - Present',
        degree:'Full Stack Developer',
        course:'.NET Cloud Full Stack Development',

        description:'A .NET Cloud Full Stack Developer with expertise in software development, database management, and cloud-based solutions. Skilled in building scalable web applications using .NET technologies, frontend frameworks, and cloud services. Experienced in designing secure, efficient architectures and implementing end-to-end solutions to solve real-world business challenges.',
        university:'Humber Polytechnic Institute'
    },
    
    {
        id:2, 
        date:'2011 - 2013', 
        degree:'Master\'s Degree', 
        description:'Earned a master\'s degree in Information Technology with a focus on software development, database management, and network security. Developed a deep understanding of modern computing technologies and their practical applications in solving real-world challenges.',
        university:'University of Madras',
        course:'Master of Science in IT'
    },
  

    {
        id:3,
        date:'2006-2009', 
        degree:'Bachelor of Science', 
        course:'Bachelor of Science Information Science',
        description:'Earned a Bachelor\'s degree in Information Science, focusing on data management, information systems, and technology applications. Gained expertise in database management, information retrieval, and software development, with a strong foundation in organizing, analyzing, and securing digital information. Developed problem-solving and critical-thinking skills to optimize information systems for real-world applications',
        university:'Jimma University'
    }
];
}