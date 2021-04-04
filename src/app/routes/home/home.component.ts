import { Component, HostListener, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {  Subscription } from 'rxjs'
import { ITravelDetails, View } from 'src/app/models/travel.model'
import { TravelService } from 'src/app/services/travel.service'
import { ValueService } from 'src/app/services/value.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  view: View = 'grid'
  travelData: ITravelDetails[] = []
  gridViewUrl = 'assets/images/icons/grid-white.svg'
  listViewUrl = 'assets/images/icons/list.svg'
  selectedTravelData: ITravelDetails[] = []

  isXSmall$ = this.valueSvc.isXSmall$
  routeSubscription: Subscription | null = null
  columnCount = 4

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private valueSvc: ValueService, 
    private travelService: TravelService
  ) { }

  ngOnInit() {
    this.travelData = this.travelService.travelData
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
    let col = 0
    let outputArr = []
    while(col < this.columnCount) {
      for(let i = 0; i < this.travelService.travelData.length; i+=this.columnCount) {
        let val = this.travelService.travelData[i + col]
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
    this.selectedTravelData = this.travelService.updateSelectedTravelData(event)
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
