
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { map } from 'rxjs';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';

 export interface User{
  identification:string;
  name:string;
  address:string;
  phone:string;
};
/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}*/

/*
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public displayedColumns: string[] = ['identification', 'name', 'address', 'phone'];
  public dataSource: User[]=[];
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.getUser();
  }

   private getUser(){
    const resp =  this.userService.listUser().pipe(
      map((res)=>{
        const data = res.response;
        let newData = new Array();
        for(let i =0;i<data.length;i++){
          const user:any = {};
          user.name =`${data[i].first_name} ${data[i].second_name} ${data[i].first_lastname} ${data[i].second_lastname}`;
          user.identification = data[i].identification;
          user.address = data[i].address;
          user.phone = data[i].phone;
          newData.push(user);
        }
        return newData;
      })
    ).subscribe(
       res=>{
        this.dataSource = res;
        console.log(this.dataSource);
       }
    );

  }
}
