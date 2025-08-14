import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../myservices/products.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-playground',
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {
  user = 
    {
      username: '',
      email: '',
    };
  submitForm(form: NgForm) {
    console.log('Form Submitted:', form.value);
  }

  // eventName = '______';
  // handleClickEvent(event: Event) {
  //   this.eventName = event.type;
  // }

  // myProducts: any[] = [];
  // constructor(private prodCatalogue: ProductService) {

  // }

  // this is a manual method which can be used to fetch the api-data from the service to UI/component based on some DOM-interactions such as button clicks
  // getProductData() {
  //   this.myProducts = this.prodCatalogue.getProducts();
  //   console.log('show-products-button-clicked')
  // }

  // should always use ngOnInit here since it is responsible to load the service data first after this component is rendered on screen
  // ngOnInit(): void{
  //   this.myProducts = this.productCatalogue.getProducts();
  //   console.log('ngOnInit loaded')
  // }

  // cart = [
  //   {
  //     id: '1',
  //     item: 'Milk',
  //     quantity: 10,
  //   },
  //   {
  //     id: '2',
  //     item: 'Oats',
  //     quantity: '2kg',
  //   },
  //   {
  //     id: '3',
  //     item: 'Protein powder',
  //     quantity: '1kg',
  //   },
  //   {
  //     id: '4',
  //     item: 'Eggs',
  //     quantity: 24,
  //   },
  // ];

  // coffee: string = "Americano"

  // orderCoffee(coffeeType: string){
  //   this.coffee = coffeeType;
  // }

  // displayBox: boolean = true;
  // displayDiv: boolean = true;
  // buttonLabelBox: string = 'box changes here';
  // buttonLabelDiv: string = 'div changes here';

  // toggleBox(): void {
  //   if (this.displayBox) {
  //     this.displayBox = false;
  //     this.buttonLabelBox = 'click to see box';
  //   } else {
  //     this.displayBox = true;
  //     this.buttonLabelBox = 'click to hide box';
  //   }
  // }

  // toggleDiv(): void {
  //   if (this.displayDiv) {
  //     this.displayDiv = false;
  //     this.buttonLabelDiv = 'click to see RED DIV';
  //   } else {
  //     this.displayDiv = true;
  //     this.buttonLabelDiv = 'click to see BLUE DIV';
  //   }
  // }
}
