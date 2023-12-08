import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAulasComponent } from './video-aulas.component';

describe('VideoAulasComponent', () => {
  let component: VideoAulasComponent;
  let fixture: ComponentFixture<VideoAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoAulasComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(VideoAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of videos', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.video-list')).toBeTruthy();

  });

  it('should render youtube-player div class', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.youtube-player')).toBeTruthy();
  });

  it('should have an array of videos in videosList', () => {
    expect(Array.isArray(component.videosList)).toBe(true);
  });

  it('should have the correct number of videos in videosList', () => {
    expect(component.videosList.length).toBe(6);
  });

  it('should have the correct video properties in videosList', () => {
    const expectedVideos = [
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
    ];
    expect(component.videosList).toEqual(expectedVideos);
  });
});
