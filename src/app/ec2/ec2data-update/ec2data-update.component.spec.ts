import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2dataUpdateComponent } from './ec2data-update.component';

describe('Ec2dataUpdateComponent', () => {
  let component: Ec2dataUpdateComponent;
  let fixture: ComponentFixture<Ec2dataUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2dataUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2dataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
