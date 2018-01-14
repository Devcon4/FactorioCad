import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  links: NavLink[] = [
    new NavLink('Build', '/factorioCad/(sidebar:build//editor:editor)'),
    new NavLink('Export', '/factorioCad/(sidebar:export//editor:editor)'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
