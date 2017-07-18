import { Component, ViewEncapsulation, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  topOffSet: number = 0;
  constructor() { }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event: any): void {
    this.topOffSet = window.pageYOffset;
    //window.scrollTo(0, this.topOffSet+662);
  }

  ngOnInit() { }
}
