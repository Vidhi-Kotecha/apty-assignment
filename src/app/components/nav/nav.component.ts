import { Component, OnInit } from '@angular/core'
import { ValueService } from 'src/app/services/value.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  isXSmall$ = this.valueSvc.isXSmall$
  constructor(private valueSvc: ValueService) { }

  ngOnInit() { }

}
