import { Component, OnChanges, OnInit, Input, EventEmitter, Output, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import * as monaco from '@timkendrick/monaco-editor';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss']
})
export class MonacoEditorComponent implements OnInit, OnChanges {
  @Input() options: monaco.editor.IEditorOptions = {};
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onInit: EventEmitter<monaco.editor.IStandaloneCodeEditor> = new EventEmitter<monaco.editor.IStandaloneCodeEditor>();
  @ViewChild('editorRef')EditorRef: ElementRef;

  private _editor: monaco.editor.IStandaloneCodeEditor;

  constructor() { }
  
  ngOnInit() {
    this._editor = monaco.editor.create(this.EditorRef.nativeElement, {
      ...this.options,
      automaticLayout: true,
      value: this.value
    });

    this._editor.onDidChangeModelContent(e => this.valueChange.emit(this._editor.getValue()));
    this.onInit.emit(this._editor);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!this._editor) {
      if(changes['value'] && changes['value'].currentValue !== changes['value'].previousValue) {
        this._editor.setValue(changes['value'].currentValue);
      }
      if(changes['options'] && changes['options'].currentValue  !== changes['options'].previousValue) {
        this._editor.updateOptions(changes['options'].currentValue);
      }
    }
  }
}
