import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: any;
  @Input() image: any;
  @Input() description: any;
  @Input() rate: any;
  @Input() genres: any;
  @Input() id: any;
  @Input() release_date: any;
  close: boolean = false;
  public img_url: string = "https://image.tmdb.org/t/p/w500";

  constructor() { }

  ngOnInit(): void {
  }
}
