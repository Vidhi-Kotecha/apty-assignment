import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Event, ParamMap, Router } from '@angular/router'
import { Subscription } from 'rxjs'
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

  isXSmall$ = this.valueSvc.isXSmall$
  routeSubscription: Subscription | null = null

  constructor(private router: Router, private route: ActivatedRoute, private valueSvc: ValueService) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe((queryParams) => {
      const viewParam = queryParams.view
      this.view = viewParam === 'grid' || viewParam === 'list' ? viewParam : 'grid'
      this.toggleView(this.view)
    })
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
      if(index >= 0) {
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

  // hideSnackbar() {
  //   const x = document.getElementById('snackbar')
  //   if (x) {
  //     x.classList.remove('show')
  //   }
  // }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe()
  }

}
