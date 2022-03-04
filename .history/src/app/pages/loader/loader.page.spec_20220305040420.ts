import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router; //router 

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule //router module provider
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router); //TestBed is to create an instance of service and component
  }));

  it('should go to login page after load',()=>{
    spyOn(router, 'navigate'); //inform has to watch the router navigate
    component.ngOnInit();
    expect(router.navigate).toHaveBeenCalledWith('login');
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
