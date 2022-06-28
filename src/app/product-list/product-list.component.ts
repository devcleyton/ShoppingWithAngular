import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [],
})
export class ProductListComponent {
  products = [...products];

  share(name: string) {
    window.alert(`The product ${name} has been shared!`);
  }

  onNotify(name: string){
    window.alert(`You will be notified when the product ${name} goes on sale.`)
  }

}
