import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GethttpService } from './gethttp.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { ExtractMessagePipe } from '../extract-message.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, JsonPipe, ExtractMessagePipe, CommonModule],
  providers: [GethttpService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  activity: any
  dog: any
  imageUrl: any;
  joke: any;

  constructor(private service: GethttpService) {
    this.service.getActivity().subscribe(data => {
      this.activity = data.activity;
      console.log(this.activity)
    });

    this.service.getDog().subscribe(data => {
      this.imageUrl = data.message;
      console.log(this.imageUrl)
    });

    this.service.getJoke().subscribe(data => {
      this.joke = data;
      console.log(this.joke)
    });
   }


  
  refreshActivity() {
    this.service.getActivity().subscribe(data => {
      this.activity = data.activity;
    });
  }

  refreshDog() {
    this.service.getDog().subscribe(data => {
      this.imageUrl = data.message;
    });
  }

  refreshJoke() {
    this.service.getJoke().subscribe(data => {
      this.joke = data;
    });
  }
}
