import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Provider } from '@angular/core';
import { RootComponent } from './root.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSidenavModule, MatTabsModule, MatListModule, MatGridListModule, MatTooltipModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlatformModule } from '@angular/cdk/platform';
import { providerDef } from '@angular/core/src/view/provider';
import { MatCommonModule } from '@angular/material/core/typings/common-behaviors/common-module';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { HttpModule } from '@angular/http';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';

describe('RootComponent', () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ RootComponent, SidebarNavComponent ],
      imports: [
        RouterTestingModule,
        BrowserTestingModule,
        MatSidenavModule,
        NoopAnimationsModule,
        HttpModule,
        MatTabsModule,
        MatListModule,
        MatGridListModule,
        MatTooltipModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
