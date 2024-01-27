import { TestBed } from '@angular/core/testing';

import { ScriptRunnerService } from './script-runner.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from '@env/environment';

describe('ScriptRunnerService', () => {
  let service: ScriptRunnerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ScriptRunnerService]
    });
    service = TestBed.inject(ScriptRunnerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to the correct URL', () => {
    const dataRunner = { /* provide test data */ };
    service.run(dataRunner).subscribe();

    const req = httpMock.expectOne(`${environment.API_URL}/run`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(dataRunner);
  });

  it('should return an Observable', () => {
    const dataRunner = { /* provide test data */ };
    const response = { /* provide test response */ };
    service.run(dataRunner).subscribe(res => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/run`);
    req.flush(response);
  });

  it('should handle error and return null', () => {
    const dataRunner = { /* provide test data */ };
    service.run(dataRunner).subscribe(res => {
      expect(res).toBeNull();
    });

    const req = httpMock.expectOne(`${environment.API_URL}/run`);
    req.error(new ErrorEvent('network error'));
  });


});
