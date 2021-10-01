import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  topTimes: any;
  newTime: any = {};
  
  constructor(private dataService: DataService) { }

  @Input() inputTime: any = {};

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

  convertTime() {
    this.newTime.firstName = this.inputTime.firstName;
    this.newTime.lastName = this.inputTime.lastName;
    this.newTime.hours = (this.inputTime.hours<10) ? "0"+this.inputTime.hours : this.inputTime.hours;
    this.newTime.minutes = (this.inputTime.minutes<10) ? "0"+this.inputTime.minutes : this.inputTime.minutes;
    this.newTime.seconds = (this.inputTime.seconds<10) ? "0"+this.inputTime.seconds : this.inputTime.seconds;
    this.newTime.milliseconds = (this.inputTime.milliseconds<10) ? "00"+this.inputTime.milliseconds : 
      (this.inputTime.seconds<100) ? "0"+this.inputTime.milliseconds : this.inputTime.milliseconds;
    this.newTime.time = this.newTime.hours + ":" + this.newTime.minutes + ":" + this.newTime.seconds + "." + this.newTime.milliseconds;
  }

  postNewTime() {
    this.convertTime();
    this.dataService.postNewTime(this.newTime).subscribe(response => {
      console.log(response), 
      alert("Laptime successfully submitted!\nIt will be visible in the Top times table, after admin approval."),
      window.location.reload();}, 
      error => {console.log(error),
        alert("An unexpected error has occurred!\nPlease recheck the input fields and try again!");
      })
    }
}
