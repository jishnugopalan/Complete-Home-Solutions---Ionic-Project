import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserhomePage } from './userhome.page';

describe('UserhomePage', () => {
  let component: UserhomePage;
  let fixture: ComponentFixture<UserhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
