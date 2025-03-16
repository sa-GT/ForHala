import { Component } from '@angular/core';
import { HalaService } from '../hala.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private sura: HalaService, private route: Router) { }

  ngOnInit() {

  }

  checks(data: any) {
    this.sura.checkforuser().subscribe((dataa) => {
      let users = dataa.find((findd: any) => findd.email == data.email && findd.password == data.password)

      if (users) {
        alert("success login");
        this.route.navigate([''])
      } else {
        alert("invalid Email or password")
      }
    })
  }
}
