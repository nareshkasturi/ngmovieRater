import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../api.service'
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  faStar = faStar;
  @Input() movie : Movie;
  @Output() updateMovie = new EventEmitter<Movie>();
  rateHovered = 0;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  rateHover(rate: number){
    this.rateHovered = rate;
  }

  rateClicked(rate: number){ 
    this.apiService.rateMovie(rate, this.movie.id).subscribe(
      result => this.getDetails(),
      error => console.log(error)
    );
  }

  getDetails(){ 
    this.apiService.getMovie(this.movie.id).subscribe(
      (movie :Movie) => {
        this.updateMovie.emit(movie);
      },
      error => console.log(error)
    );
  }
}