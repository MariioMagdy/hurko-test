export interface User {
  fname:string;
  lname:string;
  username:string;
  email:string;
  password:string
  addresses?:
      {
          address_type:string,
          details:string
      }
  phone?:
      {
          phone:string
      }
  image?:string,
  status?:boolean,  /***false default */
  role_id?:any  /***user default */
  tokens?:{
    token:string
  }
  orders?:{
    order:{
      product_id:any
      count:number
      date:Date
      status:string
      startDate:Date
      endDate:Date
    }
  }
  rates?:{
    rate:number,
    product_id:any
  }

}
