import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-btn-like',
  templateUrl: './btn-like.component.html',
  styleUrls: ['./btn-like.component.scss'],
})
export class BtnLikeComponent implements OnInit {

  @Input() liked = false
  constructor() { }

  ngOnInit() {
  }

}
