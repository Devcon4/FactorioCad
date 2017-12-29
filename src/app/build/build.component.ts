import { Component, OnInit } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';
import { Item, ItemType } from '../tab-list/tab-list.component';
import { Http } from '@angular/http';

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

  list = {};
  ordinalMap = {
    'Logistics': 0,
    'Production': 1,
    'Components': 2,
    'Military': 3

  };

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/json/iconMap.json').subscribe(m => {
      m.json().map(i => new Item(i.name, i.path, i.group)).forEach(i => {
        this.list[ItemType[i.group]] = [...(this.list[ItemType[i.group]] || []), i];
      });
      console.log(this.list);
    });
  }

}
