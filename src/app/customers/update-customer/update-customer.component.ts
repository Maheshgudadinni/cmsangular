import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppDataService } from 'src/app/service/app-data.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent {
   cusId:any;
  constructor(private builder: FormBuilder, private appdata: AppDataService) {}
  ngOnInit() {
    
    console.log(this.updateCustomerForm.value);
    this.cusId=this.appdata.CustomerIDD;
    console.log(this.cusId);
    
  }
  updateCustomerForm = this.builder.group({
    cusid:this.builder.control('',Validators.required),
    firstName: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    lastName: this.builder.control('', Validators.required),
    contactNo: this.builder.control('', Validators.required),
    dateOfAssociation: this.builder.control('', Validators.required),
    // gender: this.builder.control('male'),
    // role: this.builder.control(''),
    // isactive: this.builder.control(false),
  });

  updateCustomer() {
    this.updateCustomerForm.value.cusid=this.cusId;
    console.log(this.updateCustomerForm.value);
    this.appdata
      .UpdateCustomer(
        this.cusId,
        this.updateCustomerForm.value
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
