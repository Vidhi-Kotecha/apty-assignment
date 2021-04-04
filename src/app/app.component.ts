import { Component } from '@angular/core'
import { ValueService } from './services/value.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apty-assignment'
  isXSmall$ = this.valueSvc.isXSmall$
  constructor(private valueSvc: ValueService) { }

}
