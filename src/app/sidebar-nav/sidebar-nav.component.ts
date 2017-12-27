import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router';
import { UrlTree } from '@angular/router/src/url_tree';

export class NavLink {
  public isActive = false;
  public name: string;
  public path: string | UrlTree;
  public absPath: string;

  public nav(r: Router, list: NavLink[] = []) {

    // Timeout to preserve animations.
    setTimeout(() => {
      r.navigateByUrl(this.path);
    }, 500);

    list.forEach(l => l.isActive = false);
    this.isActive = true;
  }

  public setIsActive(r: Router) {
    return r.isActive(this.path, false);
  }

  public constructor(name: string, path: string | UrlTree) {
    this.name = name;
    this.path = path;
    this.absPath = `../..${path}`;
  }
}

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {
  @Input() navLinks: NavLink[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.navLinks.forEach(l => l.isActive = l.setIsActive(this.router));
    console.log(this.navLinks);
  }

}
