import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabListComponent } from './tab-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTabsModule, MatGridListModule, MatTooltipModule } from '@angular/material';

describe('ScrollListComponent', () => {
  let component: TabListComponent;
  let fixture: ComponentFixture<TabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabListComponent ],
      imports: [RouterTestingModule, MatTabsModule, MatGridListModule, MatTooltipModule]
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
