import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummycomponentComponent } from './dummycomponent.component';

describe('DummycomponentComponent', () => {
  let component: DummycomponentComponent;
  let fixture: ComponentFixture<DummycomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummycomponentComponent]
    });
    fixture = TestBed.createComponent(DummycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
