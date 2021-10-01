import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  topTimes: any;
  
  constructor(private dataService: DataService) { }

  @Input() newTime: any = {}

  ngOnInit(): void {
    this.getTopTimes();
  }

  getTopTimes() {
    this.dataService.getTopTimes().subscribe(response => {
      this.topTimes = response;
    }, error => {
      console.log(error);
    })
  }

  postNewTime() {
    this.dataService.postNewTime(this.newTime).subscribe(response => {
      console.log(response), 
      alert("Laptime successfully submitted!\nIt will be visible in the top times table, after admin approval.")}, 
      error => {console.log(error),
        alert("An unexpected error has occurred!\nPlease recheck the input fields and try again!");
      })
    }
}
