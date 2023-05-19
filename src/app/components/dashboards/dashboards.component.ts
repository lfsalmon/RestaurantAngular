import { Component } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {User} from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css'],
  providers:[UserService]
})
export class DashboardsComponent {
  public page_title: string;
  public user:User;
  public token:any;
  constructor(
    private _userService:UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.page_title="Login";
    this.user=new User(-1,'','','','')

    
    var getUser=_userService.GetUserData();
    console.log(getUser)
    /*if(getUser===null) this._router.navigate(['/Login']);

    getUser?.subscribe(
      responnse=>
      {
        console.log(responnse);
      },
      error=>
      {
        console.error(error);
        this._router.navigate(['/Login']);
        
      }
    );    */
  }
}
