import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  private file: string;

  constructor(private http: Http) {
    http.get('assets/json/iconMap.json').subscribe(j => {
      this.file = j.json().map(r => ({name: r.name, path: r.path, group: r.group }));
    });
   }

  ngOnInit() {
  }

}
