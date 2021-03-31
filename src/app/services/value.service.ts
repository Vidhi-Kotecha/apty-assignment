import { Injectable } from '@angular/core'
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ValueService {

  constructor(private breakpointObserver: BreakpointObserver) { }

  public isXSmall$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall])
    .pipe(map((res: BreakpointState) => res.matches))
}
