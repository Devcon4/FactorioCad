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
  MatProgressSpinnerModule,
  MatInputModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TabListComponent } from './tab-list/tab-list.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common/src/common_module';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { BlueprintStringService } from './blueprint-string.service';
import { BlueprintValidatorDirective } from './blueprint-validator.directive';
import { ChangeDetectionStrategy } from '@angular/core';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    (<any>window).monaco.editor.defineTheme('factorioCad', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#424242',
        'editor.lineHighlightBorder': '#303030'
      }
    });
  }
}
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
    TabListComponent,
    BlueprintValidatorDirective
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
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  providers: [
    BlueprintStringService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
