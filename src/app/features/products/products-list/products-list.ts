import { Component } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, KeyValuePipe, LowerCasePipe, NgClass, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { DiscountPipe } from '../../../shared/pipes/discount-pipe';

@Component({
  selector: 'app-products-list',
  imports: [NgClass,DiscountPipe],
  templateUrl: './products-list.html'
})
export class ProductsList {
  products: IProduct[] = [
    {
      id: "1",
      name: "Laptop",
      imgUrl: "https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM",
      price: 1200,
      quantity: 10,
      catId: "1"
    },
    {
      id: "2",
      name: "Mouse",
      imgUrl: "https://picsum.photos/200?random=2",
      price: 25,
      quantity: 0,
      catId: "1"
    },

    {
      id: "3",
      name: "T-Shirt",
      imgUrl: "https://picsum.photos/200?random=3",
      price: 30,
      quantity: 1,
      catId: "2"
    },
    {
      id: "4",
      name: "Jeans",
      imgUrl: "https://picsum.photos/200?random=4",
      price: 70,
      quantity: 25,
      catId: "2"
    },

    {
      id: "5",
      name: "Coffee Mug",
      imgUrl: "https://picsum.photos/200?random=5",
      price: 12,
      quantity: 0,
      catId: "3"
    },
    {
      id: "6",
      name: "Notebook",
      imgUrl: "https://picsum.photos/200?random=6",
      price: 8,
      quantity: 100,
      catId: "3"
    }
  ];
  d:Date=new Date()
  p=new Promise((res,rej)=>{
    setTimeout(()=>{
      res('Hello world')
    },3000)
  })
  classes:string="bg-blue-700 font-bold"
  headerClass='bg-red-600'
  classesObj={'bg-blue-700':true,'font-bold':false}
  headerStyles='font-size:60px;color:red'
  changeHeaderClasses(){
    this.classesObj['font-bold']=true
  }
}
