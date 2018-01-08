import { Component, OnInit, ViewChild } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';
import { Observable, Subject } from 'rxjs';
import { BlueprintStringService } from '../blueprint-string.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { blueprintValidator } from '../blueprint-validator.directive';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  private rawStringControl = new FormControl(this.bs.blueprintString.getValue(), blueprintValidator());
  editorOptions = {
    theme: 'factorioCad',
    language: 'json', ReadOnly: true,
    minimap: {enabled: false},
    formatOnPaste: true,
    formatOnType: true,
    fontSize: 10
  };

  constructor(private bs: BlueprintStringService) {}

  ngOnInit() {
  }

  updateString(val: string) {
    this.bs.blueprintString.next(val);
  }

  editorInit(e) {
    this.bs.blueprintJson.subscribe(s => {
      setTimeout(() => {
        e.getAction('editor.action.formatDocument').run();
      }, 100)
    });
    this.bs.blueprintJson.take(1).subscribe(s => {
      setTimeout(() => {
        e.model.updateOptions({ tabSize: 1 });
      }, 0)
    });
  }
}
