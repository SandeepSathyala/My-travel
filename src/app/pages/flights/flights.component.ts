import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';



@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  Flight: any = [];

  constructor(public sharedService: SharedService,public router: Router,public route: ActivatedRoute) { 
    this.loaddata();
  }

  ngOnInit(): void { }

  loaddata() {
    return this.sharedService.getTasks().subscribe((data: {}) => {
      this.Flight= data;
   });
  }

}
