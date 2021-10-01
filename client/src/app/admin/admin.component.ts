import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  unappTimes: any;
  topTimes: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUnappTimes();
    this.getTopTimes();
  }

  getUnappTimes() {
    this.dataService.getUnappTimes().subscribe(response => {
      this.unappTimes = response;
    }, error => {
      console.log(error);
    })
  }

  getTopTimes() {
    this.dataService.getTopTimes().subscribe(response => {
      this.topTimes = response;
    }, error => {
      console.log(error);
    })
  }

  deleteTime(id: number) {
    if (confirm("Are you sure you want to delete the time with table ID: " + id.toString())) {
      this.dataService.deleteTime(id).subscribe(response => {
        console.log(response), this.getUnappTimes(), this.getTopTimes();
      }, error => {
        console.log(error);
      })
    }
  }

  approveTime(id: number) {
    this.dataService.approveTime(id).subscribe(response => {
      console.log(response), this.getUnappTimes(), this.getTopTimes();
    }, error => {
        console.log(error);
      })
    }

}
