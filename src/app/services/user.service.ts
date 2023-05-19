import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import {endpointUserAuth} from "./global";

@Injectable()
export class UserService{
    private _userurls;
    constructor(
        public _http:HttpClient

    ){
        this._userurls=endpointUserAuth;
    }

    UserLogin(user:User):Observable<any>
    {
        var params={
            "username":user.username,
            "password":user.password
        }
        var paramsJson=JSON.stringify(params);
        let headers=new HttpHeaders().set('Content-Type',' application/json');
        return this._http.post(this._userurls.login,paramsJson,{headers:headers})
    }

    GetUserData()
    {   
        var tokenstr=localStorage.getItem('token')
        console.log(tokenstr);

        if(tokenstr){
            var token=JSON.parse(tokenstr)
            let headers=new HttpHeaders().set('Content-Type',' application/json').set('Authorization','Bearer '+token.access);
            return this._http.get(this._userurls.me,{headers:headers}) 
        }
        return null;
        
    }
    GetToken()
    {           
        return localStorage.getItem('token');
    }
}