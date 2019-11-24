import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2dataCreateComponent } from './ec2data-create.component';

describe('Ec2dataCreateComponent', () => {
  let component: Ec2dataCreateComponent;
  let fixture: ComponentFixture<Ec2dataCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2dataCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2dataCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
