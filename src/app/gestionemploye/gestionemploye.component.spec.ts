import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionemployeComponent } from './gestionemploye.component';

describe('GestionemployeComponent', () => {
  let component: GestionemployeComponent;
  let fixture: ComponentFixture<GestionemployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionemployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
