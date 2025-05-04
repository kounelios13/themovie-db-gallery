import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MoviedbService } from '../../services/moviedb.service';
import { MovieSearchResponse, Result } from '../../models/movie-search-response';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  private fb = inject(FormBuilder);
  private movieSrv = inject(MoviedbService)
  private router = inject(Router);
  form = this.fb.group({
    movie: ['', Validators.required],
  });

  movies : Result[] = [];
  searchMovie() {
    if(!this.form.valid) {
      console.log('Form is invalid');
      return;
    }
    const query = this.form.get('movie')?.value ?? "";
    this.movieSrv.searchMovie(query).subscribe((response : MovieSearchResponse) => {
      console.log(response);
      this.movies = response.results.map((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
        return movie  
      });
    }, (error : Error) => {
      console.error(error);
    });
  }

  toDetails(id : number) {
    console.log(id);
    // Navigate to the details page with the movie ID
    this.router.navigate(['/video', id] , {

    
        
      
    });
  }
}
