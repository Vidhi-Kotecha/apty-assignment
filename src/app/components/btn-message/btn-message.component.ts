import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-btn-message',
  templateUrl: './btn-message.component.html',
  styleUrls: ['./btn-message.component.scss'],
})
export class BtnMessageComponent implements OnInit {

  @Input() messaged = false
  constructor() { }

  ngOnInit() { }

}
