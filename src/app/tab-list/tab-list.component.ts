import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NavLink } from '../sidebar-nav/sidebar-nav.component';
import { Router, ActivatedRoute } from '@angular/router';
import { orderBy } from 'lodash';
import { environment } from '../../environments/environment';
import { SelectedService } from '../selected.service';

export enum ItemType {
  Logistics,
  Production,
  Components,
  Military
}

export class ImageRef {
  public name: string;
  public url: string;
  public group: ItemType;

  public constructor(name: string, url: string, group: ItemType) {
    this.name = name;
    this.url = url;
    this.group = group;
  }
}

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent {
  @Input() list: {[key: string]: ImageRef[]} = {};
  @Input() ordinalMap: {[key: string]: number} = {};

  private toggled: {[key: string]: boolean} = {};

  constructor(private router: Router, private route: ActivatedRoute, private selected: SelectedService) {
  }

  getProps(obj: any) {
    return orderBy(Object.getOwnPropertyNames(obj), p => this.ordinalMap[p]);
  }

  trackFunc(x, i) {
    return i.name;
  }

  getUrl(url: string) {
    return `${environment.deployUrl}/${url}`;
  }

  select(item: ImageRef) {
    this.toggled = {};
    this.toggled[item.name] = true;
    this.selected.value = item;
  }
}
