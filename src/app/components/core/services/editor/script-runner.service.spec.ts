import { TestBed } from '@angular/core/testing';

import { ScriptRunnerService } from './script-runner.service';

describe('ScriptRunnerService', () => {
  let service: ScriptRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
