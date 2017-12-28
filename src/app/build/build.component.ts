import { Component, OnInit } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';
import { Item } from '../tab-list/tab-list.component';

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

  list = {
    'Logistics': [
      new Item('Test-1', ''),
      new Item('Test-2', ''),
      new Item('Test-3', ''),
      new Item('Test-4', ''),
      new Item('Test-5', ''),
      new Item('Test-6', ''),
    ],
    'Production': [
      new Item('Test-1', ''),
      new Item('Test-2', ''),
      new Item('Test-3', ''),
      new Item('Test-4', ''),
      new Item('Test-5', ''),
      new Item('Test-6', ''),
    ],
    'Components': [
      new Item('Test-1', ''),
      new Item('Test-2', ''),
      new Item('Test-3', ''),
      new Item('Test-4', ''),
      new Item('Test-5', ''),
      new Item('Test-6', ''),
    ],
    'Military': [
      new Item('Test-1', ''),
      new Item('Test-2', ''),
      new Item('Test-3', ''),
      new Item('Test-4', ''),
      new Item('Test-5', ''),
      new Item('Test-6', ''),
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
