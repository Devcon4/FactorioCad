import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavComponent } from './sidebar-nav.component';
import { RouterModule } from '@angular/router/src/router_module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTabsModule } from '@angular/material';

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNavComponent ],
      imports: [RouterTestingModule, MatTabsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
