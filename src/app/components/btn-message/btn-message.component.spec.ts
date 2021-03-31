import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BtnMessageComponent } from './btn-message.component'

describe('BtnMessageComponent', () => {
  let component: BtnMessageComponent
  let fixture: ComponentFixture<BtnMessageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnMessageComponent ],
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMessageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
