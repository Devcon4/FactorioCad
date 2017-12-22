import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { EditorComponent } from './editor/editor.component';
import { ItemComponent } from './item/item.component';
import { BuildComponent } from './build/build.component';
import { ExportComponent } from './export/export.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolboxComponent,
    EditorComponent,
    ItemComponent,
    BuildComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
