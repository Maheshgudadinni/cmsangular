import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { AppDataService } from 'src/app/service/app-data.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  constructor(private builder: FormBuilder,
    private appdata:AppDataService) {}
  ngOnInit() {}
  addCustomerForm = this.builder.group({
    firstName: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    lastName: this.builder.control('', Validators.required),
    contactNo: this.builder.control('', Validators.required),
    dateOfAssociation: this.builder.control(
      '',
      Validators.required
    ),
    // gender: this.builder.control('male'),
    // role: this.builder.control(''),
    // isactive: this.builder.control(false),
  });

  addCustomer() {
    this.appdata.AddCustomer(this.addCustomerForm.value).subscribe(res=>{
      
    });
    // if (this.addCustomerForm.valid) {
    //   this.service.ProceedRegister(this.addCustomerForm.value).subscribe((res) => {
    //     console.log(res);
    //     this.toast.success(
    //       'Please contact Admin for access',
    //       'Registered Successfully'
    //     );
    //     this.router.navigate(['login']);
    //   });
    // } else {
    //   this.toast.warning('Please send valid data');
    // }
  }
}
