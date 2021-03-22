import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminWorkerlistPage } from './admin-workerlist.page';

describe('AdminWorkerlistPage', () => {
  let component: AdminWorkerlistPage;
  let fixture: ComponentFixture<AdminWorkerlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWorkerlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminWorkerlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
