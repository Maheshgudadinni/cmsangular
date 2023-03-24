import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../service/app-data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customerId:any;
  displayedColumns: string[] = ['firstName', 'lastName', 'contactNo', 'dateOfAssociation','actions'];
  customersArray:any;
  constructor(private dataAccess:AppDataService){}
  ngOnInit():void{
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.dataAccess.GetAllCusromers().subscribe(data=>{
      this.customersArray=data;
      console.log(this.customersArray);
    });
  }
  getId(code:any){
    this.customerId =code;
    this.dataAccess.CustomerIDD=code;
    console.log(this.dataAccess.CustomerIDD);
  }
}
