import { Component } from '@angular/core';
import { SuraService } from '../sura.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private _servicesura: SuraService) { }
  ngOnInit() { // this is a lifecycle hook, it runs after the component has been initialized
    this.getcat();
  }

  categories: any

  getcat() {
    this._servicesura.getcategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
