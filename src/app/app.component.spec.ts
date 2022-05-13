import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {InitialListService} from "./list-service/initial-list.service";
import {of} from "rxjs";

describe('AppComponent', () => {
  beforeEach(async () => {
    const serviceMock = jasmine.createSpyObj<InitialListService>('InitialListService', ['getInitialList']);
    serviceMock.getInitialList.and.returnValue(of(['A', 'B', 'C']));

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: InitialListService,
          useValue: serviceMock
        }
      ]
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
