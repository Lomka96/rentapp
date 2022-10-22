import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPopupScreenComponent } from './add-popup-screen.component';

describe('AddPopupScreenComponent', () => {
  let component: AddPopupScreenComponent;
  let fixture: ComponentFixture<AddPopupScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPopupScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPopupScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
