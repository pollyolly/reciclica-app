import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  }));

  it('should create form on init',()=>{
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  })

  it('should go to home',()=>{
    spyOn(router, 'navigate'); //inform has to watch the navigate function of object
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })
  it('should go to register',()=>{
    spyOn(router, 'navigate'); //inform has to watch the navigate function of object
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  })
});