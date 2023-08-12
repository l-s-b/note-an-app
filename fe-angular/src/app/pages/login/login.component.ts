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
  showPassword: boolean = false;
  remember: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleUserRemembering() {
    this.remember = !this.remember;
    if (!this.remember) {
      localStorage.setItem('currentUser', '');
    }
  }

  ngOnInit() { this.user = new User(); }

  onSubmit(form: NgForm) { this.postLogin(form.form.value); }

  postLogin = (login: User) => {
    this.authService.postLogin(login).subscribe(
      () => { // No token handling from client side from now.
        if ( this.remember ) {
          localStorage.setItem('currentUser', login.username); // Store username to get their JWT later on
        }
        this.router.navigate(['/']);
      },
      (error) => { console.log('Login failure:\n' + JSON.stringify(error)); } 
    );
  }
}
