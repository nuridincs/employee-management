import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ApiService]
})
export class MainComponent implements OnInit {

  comments = [
    {
      name: 'John',
      comment: 'John',
      time: '2 month ago',
      label: 'Google'
    },
    {
      name: 'John',
      comment: 'John',
      time: '2 month ago',
      label: 'Dribble'
    },
    {
      name: 'John',
      comment: 'John',
      time: '2 month ago',
      label: 'Behance'
    },
    {
      name: 'John',
      comment: 'John',
      time: '2 month ago',
      label: 'Google'
    },
    {
      name: 'John',
      comment: 'John',
      time: '2 month ago',
      label: 'Google'
    },
  ];

  dataArr = [];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getAll().subscribe((data: any) => {
      this.dataArr = data.result;
    });
  }

}
