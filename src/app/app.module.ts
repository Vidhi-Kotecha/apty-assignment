import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TravelCardComponent } from './components/travel-card/travel-card.component'
import { BtnLikeComponent } from './components/btn-like/btn-like.component'
import { BtnMessageComponent } from './components/btn-message/btn-message.component'
import { TagsComponent } from './components/tags/tags.component'
import { NavComponent } from './components/nav/nav.component'
import { HomeComponent } from './routes/home/home.component'
import { ErrorComponent } from './routes/error/error.component'

@NgModule({
  declarations: [
    AppComponent,
    TravelCardComponent,
    BtnLikeComponent,
    BtnMessageComponent,
    TagsComponent,
    NavComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
