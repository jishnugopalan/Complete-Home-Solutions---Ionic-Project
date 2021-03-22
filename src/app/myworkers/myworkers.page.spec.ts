import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyworkersPage } from './myworkers.page';

describe('MyworkersPage', () => {
  let component: MyworkersPage;
  let fixture: ComponentFixture<MyworkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyworkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyworkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
