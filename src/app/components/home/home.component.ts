import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  constructor(private router:Router){

  }


  goToAbout(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);
   

  }

  goToService(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);
   

  }

  goToProjectt(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);
   

  }

  goToBlogs(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);
   

  }

  goToContact(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);
   

  }
  
  
}

