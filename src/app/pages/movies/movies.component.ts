import { Component, OnInit } from '@angular/core';
import { ModalProps } from 'src/app/interfaces/modal-props';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public img_url: string = "https://image.tmdb.org/t/p/w500";
  public movies: any[] = [];
  public newMovies: any[] = [];
  public currentPage: number = 1;
  public modalData: ModalProps = {
    id: 0,
    title: '',
    description: '',
    image: '',
    rate: '',
    genres: [],
    release_date: ''
  };
  public prevPage: number = 0;
  public nextPage: number = 0;
  public movie: string = 'movie';

  public searchMovie: string = '';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllContents(this.movie);
  }

  public nextPages = () => {
    this.prevPage = this.currentPage;
    this.currentPage++
    this.nextPage = this.currentPage + 1;
    this.getAllContents(this.movie, this.currentPage)
  }

  public previousPages = () => {
    if (this.currentPage === 0 || this.prevPage === 0) {
      return ;
    } else {
      if (this.currentPage > 1) {
        this.currentPage--;
      } else {
        return;
      }
      if (this.currentPage > 1) {
        if(this.prevPage === 0) {
          return;
        } else {
          this.prevPage = this.currentPage - 1;
        }
      }
      this.nextPage = this.currentPage + 1;
      this.getAllContents(this.movie, this.currentPage)
    }
  }



  public getAllContents = (content?: string ,page?:number) => {
    this.api.getAllContents(content, page).subscribe((response) => {
      this.movies = response.results;
      console.log(this.movies)
    })
  }

  public getMovieDetail = (movieId: number) => {
    this.api.getMovieDetail(this.movie, movieId).subscribe(data => {
      this.modalData.title = data.title;
      this.modalData.image = data.poster_path;
      this.modalData.description = data.overview;
      this.modalData.genres = data.genres;
      this.modalData.rate = data.vote_average;
      this.modalData.id = data.id;
      this.modalData.release_date = data.release_date;
      console.log(this.modalData);
    })
  }

  public searchMovies = () => {
    if (this.searchMovie === '') {
      return this.getAllContents(this.movie);
    } else {
      this.api.searchMovies(this.movie, this.searchMovie).subscribe(data => {
        this.movies = data.results;
      })
    }
  }
}
