
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CadastroService, ICadastro } from './cadastro.service';
import { environment } from 'src/environment/environment';

describe('CadastroService', () => {
  let service: CadastroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CadastroService]
    });
    service = TestBed.inject(CadastroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to the API', () => {
    const mockData: ICadastro = {
      completeName: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123'
    };

    service.cadastrar(mockData).subscribe();

    const req = httpMock.expectOne(`${environment.API_URL}/cadastro`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockData);
  });
});
