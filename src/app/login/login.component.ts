import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private routerService = inject(Router);

  login(txtUsername: HTMLInputElement, txtPassword: HTMLInputElement) {
    const username = txtUsername.value;
    const password = txtPassword.value;
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('logged', 'true'); /* add to local storage */
      this.routerService.navigateByUrl('/main'); /* navigate to main */
    } else {
      localStorage.removeItem('logged');  /* remove key value pair */
      alert("Invalid login credentials");
      txtUsername.focus();
      txtUsername.select();
    }
  }
}
