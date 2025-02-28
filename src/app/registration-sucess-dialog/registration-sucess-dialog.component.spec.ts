import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSucessDialogComponent } from './registration-sucess-dialog.component';

describe('RegistrationSucessDialogComponent', () => {
  let component: RegistrationSucessDialogComponent;
  let fixture: ComponentFixture<RegistrationSucessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationSucessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationSucessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
