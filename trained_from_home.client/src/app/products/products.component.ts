import { Component } from '@angular/core';
import { HalaService } from '../hala.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private service_hala: HalaService, private activee: ActivatedRoute) { }

  ngOnInit() {
    this.getproduct();
    this.getP();
  }
  abas: any
  idofcat: any;
  abs: any;
  getproduct() {
    this.idofcat = this.activee.snapshot.paramMap.get('id');
    this.service_hala.getproduct().subscribe((data) => {
      this.abas = data.filter((dataa: any) => dataa.id == this.idofcat);
    });
  }
  getP() {
    this.service_hala.getproduct().subscribe(data => {
      this.abs = data;
    })
  }
}





