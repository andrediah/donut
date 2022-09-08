import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonutDetail } from 'src/app/Interfaces/DonutDetail';
import { DonutApiService } from 'src/app/services/donut-api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  constructor(private apiService:DonutApiService,private router:Router,private route:ActivatedRoute) { }
  donut:DonutDetail | undefined;
  donutId:number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.donutId = Number(params.get('id'));      
    });
    this.getDonutDetail();

  }

  getDonutDetail(): void{
    this.apiService.getDonutDetail(this.donutId).subscribe((data) => {
      this.donut = {...data}

    });

  }

}
