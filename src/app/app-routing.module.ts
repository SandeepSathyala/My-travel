import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { SearchComponent } from './pages/search/search.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [

  { path : '', redirectTo: 'home', pathMatch:'full'},
  { path : 'home',component:HomeComponent},
  { path : 'login',component:LoginComponent },
  { path : 'signup', component:SignupComponent },
  { path : 'booking', component:BookingComponent },
  { path : 'contact', component:ContactComponent },
  { path : 'packages', component:PackagesComponent },
  { path : 'services', component:ServicesComponent },
  { path : 'reviews', component:ReviewsComponent},
  { path : 'flights', component:FlightsComponent},
  { path : 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
