import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoblistPage } from './joblist.page';

describe('JoblistPage', () => {
  let component: JoblistPage;
  let fixture: ComponentFixture<JoblistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoblistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
