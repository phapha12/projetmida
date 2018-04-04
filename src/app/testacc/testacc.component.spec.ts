import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestaccComponent } from './testacc.component';

describe('TestaccComponent', () => {
  let component: TestaccComponent;
  let fixture: ComponentFixture<TestaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
