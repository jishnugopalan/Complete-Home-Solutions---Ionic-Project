import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptNotificationPage } from './accept-notification.page';

describe('AcceptNotificationPage', () => {
  let component: AcceptNotificationPage;
  let fixture: ComponentFixture<AcceptNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
