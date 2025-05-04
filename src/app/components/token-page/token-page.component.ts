import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token-page',
  imports: [ReactiveFormsModule],
  templateUrl: './token-page.component.html',
  styleUrl: './token-page.component.scss'
})
export class TokenPageComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    token: ['', Validators.required]
  })

  private tokenSrv = inject(TokenService);
  private router = inject(Router);

  save(){
    if (this.form.valid) {
      const token = this.form.get('token')?.value ?? "";
      this.tokenSrv.setToken(token);
      this.form.reset();
      this.router.navigate(['/gallery']);
    } else {
      console.log('Form is invalid');
    }
  }
}
