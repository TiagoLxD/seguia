import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  catalogo = [
    {
      id: 1,
      nome: "Jornada Backend",
      linguagens: ["java", ".NET", 'Python', 'Typescript', 'JavaScript', 'PHP', 'C/C++'],

    },
    {
      id: 2,
      nome: "Jornada Frontend",
      linguagens: ["Ux/UI", "CSS", 'HTML', 'Angular', 'React'],

    },
    {
      id: 3,
      nome: "Jornada mobile",
      linguagens: ["Kotlin", "Flutter", 'Swift', 'React Native', 'Ionic'],

    }
  ]

  depoimentos = [
    {
      id: 1,
      nome: "Lucas",
      image: 'assets/images/depoimentos/lucas.svg',
      depoimento: "A jornada de Front-End foi muito boa para meu desenvolvimento pessoal e profissional."
    },
    {
      id: 2,
      nome: "Amanda",
      image: 'assets/images/depoimentos/amanda.svg',
      depoimento: "Adorei a jornada de desenvolvimento Back-End, cursos muito completos."
    },
    {
      id: 3,
      nome: "Jose",
      image: 'assets/images/depoimentos/lucas.svg',
      depoimento: "A jornada de Front-End foi muito boa para meu desenvolvimento pessoal e profissional."
    }
  ]

}
