import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ErrorComponent } from './routes/error/error.component'
import { HomeComponent } from './routes/home/home.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: ErrorComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
