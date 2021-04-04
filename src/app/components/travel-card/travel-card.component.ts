import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ITravelDetails, View } from 'src/app/models/travel.model'

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss'],
})
export class TravelCardComponent implements OnInit {
  @Input() cardContent!: ITravelDetails
  @Input() view: View = 'grid'

  @Output() selectContent = new EventEmitter<any>()

  constructor() { }

  ngOnInit() { }

  toggleSelect() {
    this.cardContent.isSelected = !this.cardContent.isSelected
    this.selectContent.emit(this.cardContent)
  }

  eventClicked(event: any) {
    if (event.keyCode === 13) {
      this.toggleSelect()
    }
  }

}
