import { Component, OnInit } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {

  links: NavLink[] = [
    new NavLink('Build', '/r/(sidebar:build//editor:editor)'),
    new NavLink('Export', '/r/(sidebar:export//editor:editor)'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
