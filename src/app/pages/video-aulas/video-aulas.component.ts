import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-aulas',
  templateUrl: './video-aulas.component.html',
  styleUrl: './video-aulas.component.scss'
})
export class VideoAulasComponent implements OnInit {

  videosList = [
    {
      id: 1,
      title: "Aula 1",
      time: "3:50"
    },
    {
      id: 2,
      title: "Aula 2",
      time: "3:50"
    },
    {
      id: 3,
      title: "Aula 3",
      time: "3:50"
    },
    {
      id: 4,
      title: "Aula 4",
      time: "3:50"
    },
    {
      id: 5,
      title: "Aula 5",
      time: "3:50"
    },
    {
      id: 6,
      title: "Aula 6",
      time: "3:50"
    }
  ]

  ngOnInit() {

  }

}
