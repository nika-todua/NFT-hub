import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersecComponent } from './partnersec.component';

describe('PartnersecComponent', () => {
  let component: PartnersecComponent;
  let fixture: ComponentFixture<PartnersecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnersecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
