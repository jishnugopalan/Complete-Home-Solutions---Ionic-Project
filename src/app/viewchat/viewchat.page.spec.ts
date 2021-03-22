import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewchatPage } from './viewchat.page';

describe('ViewchatPage', () => {
  let component: ViewchatPage;
  let fixture: ComponentFixture<ViewchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
