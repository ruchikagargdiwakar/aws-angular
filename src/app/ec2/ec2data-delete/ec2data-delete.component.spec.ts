import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2dataDeleteComponent } from './ec2data-delete.component';

describe('Ec2dataDeleteComponent', () => {
  let component: Ec2dataDeleteComponent;
  let fixture: ComponentFixture<Ec2dataDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2dataDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2dataDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
