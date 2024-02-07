import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})
export class SearchComponent implements OnInit {
  @Input() formData = { from: '', to: '', date: '', twowaydate: '', twoway: '', oneway: ''}

 constructor(private sharedService: SharedService,private router:Router) { }
 ngOnInit(): void {
 }
SearchFlights(){
this.sharedService.SearchFlights(this.formData).subscribe((data: {}) => {
  this.router.navigate(['/flights'])
  
})
}

}
