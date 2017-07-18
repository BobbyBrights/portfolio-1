import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  aURL: string;
  private _subscription1: Subscription;

  constructor(private router: Router) {
    this._subscription1 = this.router.events
      .subscribe((event) => {
        this.aURL = this.router.url
      })
    }
}
