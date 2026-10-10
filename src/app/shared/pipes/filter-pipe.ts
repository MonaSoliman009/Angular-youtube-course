import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../features/products/models/iproduct';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
  transform(products:IProduct[],searchText:string=''): IProduct[] {
    if(!searchText){
      return products
    }else{
      return products.filter((prd)=>prd.name.toLowerCase().includes(searchText.toLowerCase()))
    }
  }
}
