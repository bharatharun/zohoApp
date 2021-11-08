import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponent implements OnInit {
  images:any =[];
  constructor() { }

  ngOnInit(): void {
    this.images=[
      {image:"assets/blog-img212.jpg"},
      {image:"assets/blog-img218.jpg"},
      {image:"assets/blog-img220.jpg"},
      {image:"assets/blog-img219.jpg"},
      {image:"assets/blog-img211.jpg"},
      {image:"assets/blog-img222.jpg"}
    ]
  }
    
}
