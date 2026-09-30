import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  selectedImage: string | null = null;

currentGallery: string[] = [];

currentImageIndex: number = 0;

legalImages = [
  '/login.png',
  '/register.png',
  '/register-request.png',
  '/createcases.png',
  '/dashboard.png',
  '/legalfiles.png',
  '/fileactionhistory.png',
  '/proofofservice.png'
];

productImages = [
  '/prodeditor.png',
  '/prodeditor1.png'
];

inventoryImages = [
  '/addnewattribute.png',
  '/assigninventoryclerk.png',
  '/downloadtoexcel.png',
  '/downloadtoexcelinventorylogs.png',
  '/printinventory.png'
];

weshopImages = [
  '/home.png',
  '/details.png',
  '/footer.png'
];


openGallery(index: number, images: string[]) {

  this.currentGallery = images;

  this.currentImageIndex = index;

  this.selectedImage = images[index];

}


nextImage() {

  if (this.currentGallery.length === 0) {
    return;
  }

  this.currentImageIndex =
    (this.currentImageIndex + 1) %
    this.currentGallery.length;

  this.selectedImage =
    this.currentGallery[this.currentImageIndex];

}


previousImage() {

  if (this.currentGallery.length === 0) {
    return;
  }

  this.currentImageIndex =
    (this.currentImageIndex - 1 +
      this.currentGallery.length) %
    this.currentGallery.length;

  this.selectedImage =
    this.currentGallery[this.currentImageIndex];

}


closeGallery() {

  this.selectedImage = null;

  this.currentGallery = [];

  this.currentImageIndex = 0;

}
}