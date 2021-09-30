import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  topTimes: any;

  constructor(private dataService: DataService) { }

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
}
