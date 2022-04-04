import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public openMenu: boolean = false;

  ngOnInit(): void {
  }

  changeBurguerMenu () {
    this.openMenu = !this.openMenu
  }

}
