import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Blog2Page } from './blog2.page';

describe('Blog2Page', () => {
  let component: Blog2Page;
  let fixture: ComponentFixture<Blog2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Blog2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
