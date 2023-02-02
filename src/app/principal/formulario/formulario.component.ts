import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  email: string | undefined;
  password: string | undefined;
  response: any;

  constructor(private http: HttpClient) {}

  submit() {
    this.http
      .post('https://reqres.in/api/registerUser', {
        email: this.email,
        password: this.password,
      })
      .subscribe((response) => (this.response = response));
  }
}

