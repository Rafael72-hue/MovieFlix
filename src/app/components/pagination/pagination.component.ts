import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() page = new EventEmitter;
  public currentPage: number = 1;
  public prevPage: number = 0;
  public nextPage: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public nextPages = () => {
    this.currentPage++
    // MANDANDO NOVA PÁGINA PARA O COMPONENTE PAI
    this.page.emit(this.currentPage.toString())
  }

  public previousPages = () => {
    this.currentPage--;
    // MANDANDO NOVA PÁGINA PARA O COMPONENTE PAI
    this.page.emit(this.currentPage.toString())
  }

}
