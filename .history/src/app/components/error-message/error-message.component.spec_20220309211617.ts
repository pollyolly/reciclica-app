import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show error message on field touched and error present',()=>{
    component.field = new FormGroup({email: new FormControl()});

    component.field.markAsTouched();
    component.field.setErrors({required: true});
    component.error = "required"
    expect(component.shouldShowComponent()).toBeTruthy();
  })
  it('should show error message on field touched and email error present',()=>{
    component.field = new FormGroup({email: new FormControl()});
    component.field.markAsTouched();
    component.field.setErrors({email: true});
    component.error = "email"
    expect(component.shouldShowComponent()).toBeTruthy();
  })
});
