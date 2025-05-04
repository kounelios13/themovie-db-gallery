import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-collection';
  private fb = inject(FormBuilder);
  form = this.fb.group({
    token: ['', Validators.required],
    movie: ['', Validators.required],
  })

  isLoading = false;
  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      console.log(value , this.form.valid);
    });
  }
  save(){}
}
