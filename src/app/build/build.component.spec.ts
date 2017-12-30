import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildComponent } from './build.component';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';
import { RouterModule } from '@angular/router/src/router_module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTabsModule, MatListModule, MatTooltipModule, MatGridListModule } from '@angular/material';
import { TabListComponent } from '../tab-list/tab-list.component';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildComponent, SidebarNavComponent, TabListComponent ],
      imports: [ RouterTestingModule, HttpModule, MatTabsModule, MatListModule, MatGridListModule, MatTooltipModule, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
