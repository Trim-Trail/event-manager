import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenavMain') sidenavMain: MatSidenav;
  mobileQuery: MediaQueryList;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenu(): void{
    this.sidenavMain.toggle();
  }

  // onClose(): void {
  //   //this.isOpened = this.sidenavMain.opened;
  // }

  // onOpen(): void {
  //   //this.isOpened = this.sidenavMain.opened;
  // }

  onMediaQueryChange(query: MediaQueryList): void {
    this.mobileQuery = query;
  }
}
