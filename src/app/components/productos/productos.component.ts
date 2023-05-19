import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductService]
})
export class ProductosComponent {
  public _products: Array<Product>;

  constructor(
    private _productService:ProductService
  ){
    this._products=new Array<Product>();
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._products=this._productService.GetProducts();
      
  }

}
