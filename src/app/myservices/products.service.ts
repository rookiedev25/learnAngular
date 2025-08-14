import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {
    console.log('product-service');
  }

  getProducts() {
    return [
      {
        id: 1,
        name: 'Apple iPhone 15 Pro',
        price: 1299,
        category: 'Smartphone',
      },
      {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        price: 1199,
        category: 'Smartphone',
      },
      { id: 3, name: 'Apple MacBook Air M2', price: 1049, category: 'Laptop' },
      { id: 4, name: 'Dell XPS 13 Plus', price: 1299, category: 'Laptop' },
      {
        id: 5,
        name: 'Sony WH-1000XM5 Headphones',
        price: 399,
        category: 'Audio',
      },
      { id: 6, name: 'Bose QuietComfort Ultra', price: 379, category: 'Audio' },
      { id: 7, name: 'Apple iPad Pro 12.9"', price: 1399, category: 'Tablet' },
      { id: 8, name: 'Samsung Galaxy Tab S9+', price: 899, category: 'Tablet' },
      { id: 9, name: 'Sony PlayStation 5', price: 499, category: 'Gaming' },
      { id: 10, name: 'Xbox Series X', price: 499, category: 'Gaming' },
      {
        id: 11,
        name: 'Apple Watch Series 9',
        price: 399,
        category: 'Wearable',
      },
      {
        id: 12,
        name: 'Samsung Galaxy Watch 6',
        price: 349,
        category: 'Wearable',
      },
      {
        id: 13,
        name: 'Canon EOS R50 Mirrorless Camera',
        price: 799,
        category: 'Camera',
      },
      { id: 14, name: 'GoPro Hero 12 Black', price: 399, category: 'Camera' },
      {
        id: 15,
        name: 'Google Pixel 8 Pro',
        price: 999,
        category: 'Smartphone',
      },
      { id: 16, name: 'Lenovo Yoga 9i Gen 8', price: 1199, category: 'Laptop' },
      { id: 17, name: 'JBL Charge 5 Speaker', price: 149, category: 'Audio' },
      {
        id: 18,
        name: 'Apple AirPods Pro (2nd Gen)',
        price: 249,
        category: 'Audio',
      },
      {
        id: 19,
        name: 'Asus ROG Ally Handheld Console',
        price: 699,
        category: 'Gaming',
      },
      { id: 20, name: 'DJI Mini 4 Pro Drone', price: 999, category: 'Camera' },
    ];
  }
}
