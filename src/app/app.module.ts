import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { EditorComponent } from './editor/editor.component';
import { ItemComponent } from './item/item.component';
import { BuildComponent } from './build/build.component';
import { ExportComponent } from './export/export.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import {
  MatTabsModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TabListComponent } from './tab-list/tab-list.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent,
    EditorComponent,
    ItemComponent,
    BuildComponent,
    RootComponent,
    ExportComponent,
    SidebarNavComponent,
    TabListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    HttpModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
