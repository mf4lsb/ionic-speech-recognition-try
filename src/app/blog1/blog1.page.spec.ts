import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Blog1Page } from './blog1.page';

describe('Blog1Page', () => {
  let component: Blog1Page;
  let fixture: ComponentFixture<Blog1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Blog1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
