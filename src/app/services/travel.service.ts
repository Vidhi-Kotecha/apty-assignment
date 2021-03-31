import { Injectable } from '@angular/core';
import { ITravelDetails } from '../models/travel.model';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  travelData: ITravelDetails[] = [
    {
      imageUrl: 'assets/images/thumbnails/1.png',
      tags: ['Wellington', 'Tianjin'],
      title: 'Khartoum',
      description: 'Aenean lacinia bibendum nulla sed consectetur.',
      message: false,
      like: false,
    },
    {
      imageUrl: 'assets/images/thumbnails/2.png',
      tags: ['Salt Lake City', 'Seville'],
      title: 'Santa Clara',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
      message: false,
      like: false,
    },
    {
      imageUrl: 'assets/images/thumbnails/3.png',
      tags: ['Puebla'],
      title: 'Bengaluru',
      description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      message: false,
      like: true,
    },
    {
      imageUrl: 'assets/images/thumbnails/4.png',
      tags: ['Sacramento', 'Osaka', 'Astana'],
      title: 'Portland',
      description: 'Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      message: true,
      like: false,
    },
    {
      imageUrl: 'assets/images/thumbnails/5.png',
      tags: ['Belgrade', 'Cali', 'Stockholm'],
      title: 'Fairbanks',
      description: 'Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      message: true,
      like: false,
    },
    {
      imageUrl: 'assets/images/thumbnails/6.png',
      tags: ['Trondheim', 'Xian'],
      title: 'Sofia',
      description: 'Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      message: true,
      like: true,
    },
    {
      imageUrl: 'assets/images/thumbnails/7.png',
      tags: ['Aarhus', 'Ankara'],
      title: 'Belfast',
      description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.',
      message: false,
      like: false,
    },
    {
      imageUrl: 'assets/images/thumbnails/8.png',
      tags: ['Sylhet'],
      title: 'Pune',
      description: 'Mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      message: false,
      like: true,
    },
  ]

  selectedTravelData: ITravelDetails[] = []

  constructor() { }

  updateSelectedTravelData(data: ITravelDetails) {
    if (data?.isSelected && this.selectedTravelData.indexOf(data) === -1) {
      this.selectedTravelData.push(data)
    } else {
      const index = this.selectedTravelData.indexOf(data)
      if(index >= 0) {
        this.selectedTravelData.splice(index, 1)
      }
    }
  }

}
