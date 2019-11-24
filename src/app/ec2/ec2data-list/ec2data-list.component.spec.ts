import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ec2dataListComponent } from './ec2data-list.component';

describe('Ec2dataListComponent', () => {
  let component: Ec2dataListComponent;
  let fixture: ComponentFixture<Ec2dataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ec2dataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ec2dataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
