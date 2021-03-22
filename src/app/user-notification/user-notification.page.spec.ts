import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserNotificationPage } from './user-notification.page';

describe('UserNotificationPage', () => {
  let component: UserNotificationPage;
  let fixture: ComponentFixture<UserNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
