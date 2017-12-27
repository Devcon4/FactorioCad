import { Component, OnInit } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  links: NavLink[] = [
    new NavLink('Build', '/r/(sidebar:build//editor:editor)'),
    new NavLink('Export', '/r/(sidebar:export//editor:editor)'),
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
