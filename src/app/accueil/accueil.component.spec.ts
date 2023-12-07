import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent]
    });
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it( `should have as text 'Fomekong Fosso Emmanuel'` , () => {
    expect(component).toBeTruthy();
  });
  it( `should have as text 'fomekongfossoemmanuel@gmail.com'` , () => {
    expect(component).toBeTruthy();
  });
  it( `should have as text 'web developer'` , () => {
    expect(component).toBeTruthy();
  });
  it( `should have as text '6 94 78 67 55'` , () => {
    expect(component).toBeTruthy();
  });
});
