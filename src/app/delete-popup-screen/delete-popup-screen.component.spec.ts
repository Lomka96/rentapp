import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePopupScreenComponent } from './delete-popup-screen.component';

describe('DeletePopupScreenComponent', () => {
  let component: DeletePopupScreenComponent;
  let fixture: ComponentFixture<DeletePopupScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePopupScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePopupScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
