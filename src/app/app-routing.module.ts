import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { UpdateCustomerComponent } from './customers/update-customer/update-customer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'add-customer',component:AddCustomerComponent},
  {path:'update-customer',component:UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
