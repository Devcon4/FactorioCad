import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildComponent } from './build/build.component';
import { ExportComponent } from './export/export.component';
import { EditorComponent } from './editor/editor.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  { path: '', redirectTo: '/r(sidebar:build//editor:editor)', pathMatch: 'full' },
  { path: 'r', component: RootComponent, children: [
    { path: 'build', component: BuildComponent, outlet: 'sidebar' },
    { path: 'export', component: ExportComponent, outlet: 'sidebar' },
    { path: 'editor', component: EditorComponent, outlet: 'editor' }
  ]},
  // Todo: Fix this later.
  { path: '**', redirectTo: '/r/(sidebar:build//editor:editor)', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
