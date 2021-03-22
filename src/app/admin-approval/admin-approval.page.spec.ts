import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminApprovalPage } from './admin-approval.page';

describe('AdminApprovalPage', () => {
  let component: AdminApprovalPage;
  let fixture: ComponentFixture<AdminApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApprovalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
