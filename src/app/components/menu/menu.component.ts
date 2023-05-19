import { Component } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(
    
    private _router: Router,
    private _route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this._router.navigate(['/Home']);
    
  }
  
}
