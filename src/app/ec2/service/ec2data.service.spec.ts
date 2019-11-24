import { TestBed } from '@angular/core/testing';

import { Ec2dataService } from './ec2data.service';

describe('Ec2dataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ec2dataService = TestBed.get(Ec2dataService);
    expect(service).toBeTruthy();
  });
});
