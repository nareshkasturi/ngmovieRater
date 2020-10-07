import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/Movie';
import { FormControl, FormGroup} from '@angular/forms';
import { ApiService } from '../../api.service'
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  id = null;
  movieForm;

  @Output() movieCreated = new EventEmitter<Movie>()
  @Output() movieUpdated = new EventEmitter<Movie>()

  @Input() set movie (val: Movie){
    this.id = val.id,
    this.movieForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
    });
  }

  imports: [
    ApiService,
  ]
  

  constructor(
    private apiService : ApiService
  ) { }

  ngOnInit(): void {
  }

  formDisabled(){
    if (this.movieForm.value.title.length && this.movieForm.value.description.length){
      return false;
    } else {
      return true;
    }
  }

  saveForm() {
    console.log(this.movieForm.value);
    if (this.id){
      this.apiService.updateMovie(this.id, this.movieForm.value.title, this.movieForm.value.description).subscribe(
        (result: Movie) => this.movieUpdated.emit(result),
        error => console.log(error),
      );} else {
      this.apiService.createMovie(this.movieForm.value.title, this.movieForm.value.description).subscribe(
        (result: Movie) => this.movieCreated.emit(result),
        error => console.log(error),
    );}
  }
}
