import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product/product.service';
// import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {



allProducts:any[]
filteredData:any[]


  p: number = 1;
  collection: any[] ;
  constructor(private _allproducts:ProductService) {


   }



  ngOnInit(): void {
    this.getAllProducts()
    console.log(this.allProducts);


  }

  getAllProducts():any{
    this._allproducts.getAllproducts().subscribe(res=>{


      this.allProducts = res.data
      this.filteredData=[...this.allProducts]
      this.collection=this.filteredData
      console.log(this.allProducts);
      console.log(this.filteredData);
      console.log(this.collection);


    })

  }
  pageChanged(pee:number){

    document.getElementById("top").scrollIntoView()

  }
  selectChangeHandler(value:any){
    console.log(value.target.value);
    console.log(this.filteredData);
 this.filteredData = this.allProducts.filter(key=>{

      if(value.target.value === "Man"){
        if(key.price > 20)   return this.allProducts
      }else if(value.target.value === "Women"){
        if(key.price < 20)   return this.allProducts

      }
      else if(value.target.value === "Shoes"){
        if(key.price > 80)   return this.allProducts

      }
      else if(value.target.value === "Accessories"){
        if(key.price > 90)   return this.allProducts

      }else {
        return this.allProducts
      }
    })
 return   this.collection =this.filteredData

  }


}









  //   filter(event){
  //     this.ArryCopy = this.posts.filter(key=>{
  //       return key.title.toLowerCase().includes(event.target.value)
  //     })
  //     console.log(this.ArryCopy);

  // }
