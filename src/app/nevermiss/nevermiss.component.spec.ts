import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevermissComponent } from './nevermiss.component';

describe('NevermissComponent', () => {
  let component: NevermissComponent;
  let fixture: ComponentFixture<NevermissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevermissComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevermissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
