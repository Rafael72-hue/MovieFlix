import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MoviesSeriesComponent } from './components/movies-series/movies-series.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideMenuComponent,
    ModalComponent,
    MoviesComponent,
    TvComponent,
    PaginationComponent,
    MoviesSeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
