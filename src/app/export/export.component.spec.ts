import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportComponent } from './export.component';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTabsModule } from '@angular/material';

describe('ExportComponent', () => {
  let component: ExportComponent;
  let fixture: ComponentFixture<ExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportComponent, SidebarNavComponent ],
      imports: [ RouterTestingModule, MatTabsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
