import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'milestone3_Akash';

  data:any;
  emp:any=[];
  //update-new

  empl:Employee={
    id: 0,
    name: "",
    address: "",
    phone:0,
    country: ""
}
  currentData:Employee={
    id:0,
    name: "",
    address: "",
    phone: 0,
    country: ""
  };
   

  constructor(public service:EmployeeService){}

  ngOnInit()
  {
    this.GetEmployee();
  }

  GetEmployee()
  {
    this.service.GetDetails().subscribe((response)=>
    {
      console.log(response);
      this.emp=response;
    })
  }

  AddEmployee(data:any)
  {
    this.service.AddData(this.empl).subscribe((response)=>
    {
      console.log(response);
      this.GetEmployee();
      
    },Error=>{})
  }

  DeleteEmployee(id:any)
  {
    this.service.DeleteData(id).subscribe((response)=>
    {
      this.GetEmployee();
    })
  }

  UpdateEmployee()
  {
    this.service.UpdateData(this.currentData).subscribe((Response)=>
    {
      console.log(Response);
      this.GetEmployee();
    })
  }

  // updateId:any;

  updateData:any;

  getCurrentEmployee(data:Employee)
  {
    console.log();
    //this.updateData=data;
    this.service.GetDataById(data.id).subscribe((Resp)=>
    {
      console.log(Resp);
       this.updateData=Resp;
       this.currentData=this.updateData;
    })

  }


  

}
