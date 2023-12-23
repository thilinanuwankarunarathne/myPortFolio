import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'about',component:AboutComponent},
  { path: '**', redirectTo: '/home' }
];
const routerOption:ExtraOptions={

 scrollPositionRestoration: 'enabled' ,
 anchorScrolling:'enabled'

}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
