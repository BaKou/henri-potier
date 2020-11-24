import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resolverLoading = true;

  constructor(private router: Router, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.handleRouterLoading();
  }

  private handleRouterLoading(): void {
    this.router.events.subscribe(routerEvent => {
      setTimeout(() => this.ref.detectChanges());

      if (routerEvent instanceof NavigationStart) {
        this.resolverLoading = true;
      }

      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ) {
        this.resolverLoading = false;
      }
    });
  }
}
