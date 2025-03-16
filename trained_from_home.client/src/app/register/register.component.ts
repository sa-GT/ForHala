import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ForGlobalService } from '../../service/for-global.service';
import { HalaService } from '../hala.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private servv: HalaService) { }
  onSubmit(data: any) {
    this.servv.addnewdata(data).subscribe(() => {
      console.warn(data)
    })
  }
}
