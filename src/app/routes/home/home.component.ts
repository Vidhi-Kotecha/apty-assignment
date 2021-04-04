import { Component, HostListener, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {  Subscription } from 'rxjs'
import { ITravelDetails, View } from 'src/app/models/travel.model'
import { ValueService } from 'src/app/services/value.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  view: View = 'grid'

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

  gridViewUrl = 'assets/images/icons/grid-white.svg'
  listViewUrl = 'assets/images/icons/list.svg'
  selectedTravelData: ITravelDetails[] = []
  initialTravelData = this.travelData

  isXSmall$ = this.valueSvc.isXSmall$
  routeSubscription: Subscription | null = null
  columnCount = 4

  constructor(private router: Router, private route: ActivatedRoute, private valueSvc: ValueService) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe((queryParams) => {
      const viewParam = queryParams.view
      this.view = viewParam === 'grid' || viewParam === 'list' ? viewParam : 'grid'
      this.toggleView(this.view)
    })
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth <= 600) {
      this.columnCount = 1
    } else if(window.innerWidth > 600 && window.innerWidth <= 860) {
      this.columnCount = 2
    } else if(window.innerWidth > 860 && window.innerWidth <= 1280) {
      this.columnCount = 3
    } else if(window.innerWidth > 1280) {
      this.columnCount = 4
    }
    this.reorderHorizontally()
  }

  reorderHorizontally() {
    console.log(this.columnCount)
    let col = 0
    let outputArr = []
    while(col < this.columnCount) {
      for(let i = 0; i < this.initialTravelData.length; i+=this.columnCount) {
        let val = this.initialTravelData[i + col]
        if(val !== undefined) {
          outputArr.push(val)
        }
      }
      col++
    }
    this.travelData = outputArr
  }

  toggleView(selectedView: View) {
    this.gridViewUrl = selectedView === 'grid' ? 'assets/images/icons/grid-white.svg' : 'assets/images/icons/grid.svg'
    this.listViewUrl = selectedView === 'list' ? 'assets/images/icons/list-white.svg' : 'assets/images/icons/list.svg'
    this.view = selectedView
    this.router.navigate([], { queryParams: { view: this.view } })
  }

  selectContent(event: ITravelDetails) {
    if (event?.isSelected && this.selectedTravelData.indexOf(event) === -1) {
      this.selectedTravelData.push(event)
    } else {
      const index = this.selectedTravelData.indexOf(event)
      if (index >= 0) {
        this.selectedTravelData.splice(index, 1)
      }
    }
    const x = document.getElementById('snackbar')
    if (x) {
      if (this.selectedTravelData?.length > 0) {
        if (!x.classList.contains('show')) {
          x.classList.add('show')
        }
      } else {
        x.classList.remove('show')
      }
    }
  }

 eventClicked(event: any, view: View) {
   if(event.keyCode === 13 || event.keyCode === 32) {
     this.toggleView(view)
   }
 }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe()
  }

}
