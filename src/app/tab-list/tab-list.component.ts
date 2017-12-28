import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY } from '@angular/cdk/overlay/typings/overlay-directives';

export class Item {
  public name: string;
  public url: string;

  public constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {
  @Input() list: {[key: string]: Item[]} = {};

  private tabs: string[] = [];
  private fragment: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tabs = Object.getOwnPropertyNames(this.list);
  }
}
