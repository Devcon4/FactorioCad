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
import { MatTabsModule, MatSidenavModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent,
    EditorComponent,
    ItemComponent,
    BuildComponent,
    RootComponent,
    ExportComponent,
    SidebarNavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
