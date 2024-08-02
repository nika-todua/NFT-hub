import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosecComponent } from './herosec.component';

describe('HerosecComponent', () => {
  let component: HerosecComponent;
  let fixture: ComponentFixture<HerosecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HerosecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
