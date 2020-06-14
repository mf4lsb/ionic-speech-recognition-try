import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Blog3Page } from './blog3.page';

describe('Blog3Page', () => {
  let component: Blog3Page;
  let fixture: ComponentFixture<Blog3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Blog3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
