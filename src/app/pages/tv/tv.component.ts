import { Component, OnInit } from '@angular/core';
import { ModalProps } from 'src/app/interfaces/modal-props';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  public img_url: string = "https://image.tmdb.org/t/p/w500";
  public tvContent: any[] = [];
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
  public tv: string = 'tv';
  public searchMovie: string = '';


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getSerieContent(this.tv);
  }

  public nextPages = () => {
    this.prevPage = this.currentPage;
    this.currentPage++
    this.nextPage = this.currentPage + 1;
    this.getSerieContent(this.tv, this.currentPage)
  }

  public previousPages = () => {
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
      this.getSerieContent(this.tv, this.currentPage)
  }



  public getSerieContent = (content?: string ,page?:number) => {
    this.api.getAllContents(content, page).subscribe((response) => {
      this.tvContent = response.results;
      console.log(this.tvContent)
    })
  }

  public getTvDetail = (seriesId: number) => {
    this.api.getMovieDetail(this.tv, seriesId).subscribe(data => {
      console.log(data.name);
      this.modalData.title = data.name;
      this.modalData.image = data.poster_path;
      this.modalData.description = data.overview;
      this.modalData.genres = data.genres_ids;
      this.modalData.rate = data.vote_average;
      this.modalData.id = data.id;
      this.modalData.release_date = data.release_date;
    })
  }

  public searchMovies = () => {
    if (this.searchMovie === '') {
      return this.getSerieContent(this.tv);
    } else {
      this.api.searchMovies(this.tv, this.searchMovie).subscribe(data => {
        this.tvContent = data.results;
      })
    }
  }
}
