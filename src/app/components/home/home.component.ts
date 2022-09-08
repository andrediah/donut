import { Component, OnInit } from '@angular/core';
import { Donut, Result } from 'src/app/Interfaces/Donut';
import { DonutApiService } from 'src/app/services/donut-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  donuts:Donut | undefined ;
  constructor(private apiService:DonutApiService) { }

  ngOnInit(): void {
    this.getAllDonuts();
    localStorage.setItem('token','xhja787')
  }
  getAllDonuts():void{
    this.apiService.getDonutList().subscribe((data) => {
      
      this.donuts = {...data}
    })
  }

}
