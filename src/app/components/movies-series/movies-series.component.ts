import { Component, Input, OnInit } from '@angular/core';
import { ModalProps } from 'src/app/interfaces/modal-props';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies-series',
  templateUrl: './movies-series.component.html',
  styleUrls: ['./movies-series.component.scss']
})
export class MoviesSeriesComponent implements OnInit {

  public img_url: string = "https://image.tmdb.org/t/p/w500";
  @Input() title: any;
  @Input() placeholder: any;
  @Input() type: any;
  public content: any[] = [];
  public modalData: ModalProps = {
    id: 0,
    title: '',
    description: '',
    image: '',
    rate: '',
    genres: [],
    release_date: ''
  };

  public searchContent: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllContents(this.type);
  }

  getPage = (page: any) => {
    this.getAllContents(this.type, page)
  }

  //RETORNA LISTA DE FILMES OU SERIES
  public getAllContents = (content?: string ,page?:number) => {
    this.api.getAllContents(content, page).subscribe((response) => {
      this.content = response.results;
      console.log(this.content)
    })
  }

  // PEGA OS DADOS DE UM(A) UNICO(A) FILME/SERIE
  public getContentDetail = (movieId: number) => {
    this.api.getMovieDetail(this.type, movieId).subscribe(data => {
      if (this.type === 'tv') {
        this.modalData.title = data.name;
        this.modalData.release_date = data.first_air_date;
      } else {
        this.modalData.title = data.title;
        this.modalData.release_date = data.release_date;
      }
      this.modalData.image = data.poster_path;
      this.modalData.description = data.overview;
      this.modalData.genres = data.genres;
      this.modalData.rate = data.vote_average;
      this.modalData.id = data.id;
    })
  }

  // FAZ UMA PESQUISA PELO TITULO DE UM(A) FILME/SERIE
  public searchContents = () => {
    if (this.searchContent === '') {
      return this.getAllContents(this.type);
    } else {
      this.api.searchMovies(this.type, this.searchContent).subscribe(data => {
        this.content = data.results;
      })
    }
  }
}
