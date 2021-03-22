import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminFeedbacksPage } from './admin-feedbacks.page';

describe('AdminFeedbacksPage', () => {
  let component: AdminFeedbacksPage;
  let fixture: ComponentFixture<AdminFeedbacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFeedbacksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminFeedbacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
