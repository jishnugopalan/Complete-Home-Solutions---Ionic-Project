import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkeraccountPage } from './workeraccount.page';

describe('WorkeraccountPage', () => {
  let component: WorkeraccountPage;
  let fixture: ComponentFixture<WorkeraccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkeraccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkeraccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
