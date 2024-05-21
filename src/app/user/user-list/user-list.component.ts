
import { Component, OnInit ,ViewChild} from '@angular/core';
import { UserService } from '../user.service';
import { map } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


 export interface User{
  identification:string;
  name:string;
  address:string;
  phone:string;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  public datasource = new MatTableDataSource();
  public pageSizeOptions:number[] =[5,10,25,50];
  public currentPage = 1;
  public pageSize=10;
  public totalItems = 10;




  public displayedColumns: string[] = ['identification', 'name', 'address', 'phone'];
  //public dataSource: User[]=[];
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
        this.datasource.data = res;
        this.totalItems=50;
        //console.log(this.dataSource);
       }
    );

  }

  //
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUser();
  }
}
