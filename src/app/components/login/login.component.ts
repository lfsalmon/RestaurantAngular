import { Component} from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {User} from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent {
  public page_title: string;
  public user:User;
  public token:any;

  /*public identity,*/
  constructor(
    private _userService:UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.page_title="Login";
    this.user=new User(-1,'','','','')
    //this.token="";
  }
  OnLogin(f: NgForm){
    const box = document.getElementById('wrongidentify');
    box?.style.setProperty("display","none");
    this._userService.UserLogin(this.user).subscribe(
      response=>{
        this.token=response
        console.log(this.token.access);
        
        localStorage.setItem("token", JSON.stringify(this.token));
        this._router.navigate(['/Home'])

      },
      error=>{
        console.error(error);
        const box = document.getElementById('wrongidentify');
        box?.style.setProperty("display","inline-block");
        f.reset();

        var input=document.querySelector('input[id=username]');
        var input2=document.querySelector('input[id=password]');
        input?.classList.remove("has-value");
        input2?.classList.remove("has-value");
      }
      
        
    );
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Inicializado componente Login");
    
  }

  handleChanges(type:string){
    


    if(type==='user'){


      var input=document.querySelector('input[id=username]');
      if(this.user.username=="")
      {
        input?.classList.remove("has-value");
      }
      else
      {
        input?.classList.add("has-value");
      }

      
    }else if(type){
      var input2=document.querySelector('input[id=password]');
      
      if(this.user.password=="")
      {
        input2?.classList.remove("has-value");
      }
      else
      {
        input2?.classList.add("has-value");
      }
    }
    
    

    

  }
  
}