import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginPage {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  user!: User;

  ngOnInit() { this.user = new User(); }

  onSubmit(form: NgForm) { this.postLogin(form.form.value); }

  postLogin = (login: User) => {
    this.authService.postLogin(login).subscribe(
      (response: any) => {
        const token = response['access_token']
        console.log(response);
        /* this.router.navigate(['/']); */
      },
      (error) => { console.log('Login failure:\n' + JSON.stringify(error)); } 
    );
  }
}
