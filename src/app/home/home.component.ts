import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { AppDataService } from '../service/app-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'contactNo', 'dateOfAssociation'];
  dataSource:any;
  constructor(private dataAccessor:AppDataService){
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.dataAccessor.GetAllCusromers().subscribe(data=>{
      console.log(data);
      this.dataSource=data;
      console.log(this.dataSource);
    });
  }

}
