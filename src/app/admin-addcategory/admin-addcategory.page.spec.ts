import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAddcategoryPage } from './admin-addcategory.page';

describe('AdminAddcategoryPage', () => {
  let component: AdminAddcategoryPage;
  let fixture: ComponentFixture<AdminAddcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddcategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAddcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
