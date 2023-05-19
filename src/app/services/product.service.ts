import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product} from "../models/product";
import {endpointUserAuth} from "./global";


@Injectable()
export class ProductService{
    public _producturls;
    constructor(
        public _http:HttpClient
    ){
        this._producturls=endpointUserAuth
    }

    GetProducts()
    {
        var products= new Array();
        for(var i=0;i<10;i++)
        {
            products.push(new Product(i+1,"Producto"+(i+1),"Some fucking description",i*19.5));
        }
        return products;
    }


}