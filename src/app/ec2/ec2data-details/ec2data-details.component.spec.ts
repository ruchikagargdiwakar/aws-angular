import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2dataDetailsComponent } from './ec2data-details.component';

describe('Ec2dataDetailsComponent', () => {
  let component: Ec2dataDetailsComponent;
  let fixture: ComponentFixture<Ec2dataDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2dataDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2dataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
