import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router); //TestBed is to create an instance of service and component
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
