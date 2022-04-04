import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  // public img_url: string = "https://image.tmdb.org/t/p/w500";
  // public movies: any[] = [];
  // public newMovies: any[] = [];
  // public modalData: ModalProps = {
  //   id: 0,
  //   title: '',
  //   description: '',
  //   image: '',
  //   rate: '',
  //   genres: [],
  //   release_date: ''
  // };


  // public searchMovie: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // public getAllContents = (content?: string ,page?:number) => {
  //   this.api.getAllContents(content, page).subscribe((response) => {
  //     this.movies = response.results;
  //     console.log(this.movies)
  //   })
  // }

  // public getMovieDetail = (movieId: number) => {
  //   this.api.getMovieDetail(this.movie, movieId).subscribe(data => {
  //     this.modalData.title = data.title;
  //     this.modalData.image = data.poster_path;
  //     this.modalData.description = data.overview;
  //     this.modalData.genres = data.genres;
  //     this.modalData.rate = data.vote_average;
  //     this.modalData.id = data.id;
  //     this.modalData.release_date = data.release_date;
  //     console.log(this.modalData);
  //   })
  // }

  // public searchMovies = () => {
  //   if (this.searchMovie === '') {
  //     return this.getAllContents(this.movie);
  //   } else {
  //     this.api.searchMovies(this.movie, this.searchMovie).subscribe(data => {
  //       this.movies = data.results;
  //     })
  //   }
  // }
}
