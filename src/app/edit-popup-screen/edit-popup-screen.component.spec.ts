import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopupScreenComponent } from './edit-popup-screen.component';

describe('EditPopupScreenComponent', () => {
  let component: EditPopupScreenComponent;
  let fixture: ComponentFixture<EditPopupScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPopupScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPopupScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
