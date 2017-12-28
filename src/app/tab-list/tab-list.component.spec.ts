import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabListComponent } from './scroll-list.component';

describe('ScrollListComponent', () => {
  let component: TabListComponent;
  let fixture: ComponentFixture<TabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
