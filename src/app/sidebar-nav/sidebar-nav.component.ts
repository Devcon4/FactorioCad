import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

export class NavLink {
  public isActive = false;
  public name: string;
  public path: string | UrlTree;
  public absPath: string;

  public nav(r: Router, qp: {[key: string]: any}, list: NavLink[] = []) {

    // Timeout to preserve animations.
    setTimeout(() => {
      console.log(qp);
      r.navigateByUrl(this.path, {queryParams: qp});
    }, 0);

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

  private qp;

  constructor(private router: Router, private ar: ActivatedRoute) {
    this.ar.queryParams.subscribe(p => this.qp = p);
  }

  ngOnInit() {
    this.navLinks.forEach(l => l.isActive = l.setIsActive(this.router));
  }

}
