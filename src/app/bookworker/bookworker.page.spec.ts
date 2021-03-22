import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookworkerPage } from './bookworker.page';

describe('BookworkerPage', () => {
  let component: BookworkerPage;
  let fixture: ComponentFixture<BookworkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookworkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookworkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
