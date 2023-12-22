import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});

  }
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }
}
