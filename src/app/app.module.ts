import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ServicesComponent } from './pages/services/services.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './pages/nav/nav.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ServicesComponent,
    PackagesComponent,
    ReviewsComponent,
    NavComponent,
    FlightsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
