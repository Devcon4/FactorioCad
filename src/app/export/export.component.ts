import { Component, OnInit, ViewChild } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';
import { Observable, Subject } from 'rxjs';
import { BlueprintStringService } from '../blueprint-string.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { blueprintValidator } from '../blueprint-validator.directive';
import * as monaco from '@timkendrick/monaco-editor';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  rawStringControl = new FormControl(this.bs.blueprintString.getValue());
  editorOptions = {
    theme: 'factorioCad',
    language: 'json', ReadOnly: true,
    minimap: {enabled: false},
    formatOnPaste: true,
    formatOnType: true,
    fontSize: 10,
    tabSize: 1
  };

  constructor(public bs: BlueprintStringService) {
    monaco.editor.defineTheme('factorioCad', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#424242',
        'editor.lineHighlightBorder': '#303030'
      }
    });
  }

  ngOnInit() { }

  updateString(val: string) {
    this.bs.blueprintString.next(val);
  }

  editorInit(e) {
    e.model.updateOptions({ tabSize: 1 });
    this.bs.blueprintJson.subscribe(s => {
      setTimeout(() => {
        e.getAction('editor.action.formatDocument').run();
      }, 0)
    });
  }
}
