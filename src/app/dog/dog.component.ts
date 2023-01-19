import { Component, OnInit } from '@angular/core';
import { Data } from '../data.interface';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
})
export class DogComponent implements OnInit {
  image!: Data | null;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.generateImage();
  }

  generateImage() {
    this.imagesService.getImage().subscribe((data) => {
      console.log(data);
      this.image = data;
    });
  }
}
