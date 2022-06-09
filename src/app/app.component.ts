import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav', { static: true }) 
  public sidenav: MatSidenav

  public  theme$ = 'nature-theme'
  //black-theme / nature-theme / default-theme / light-theme

  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {

    /**
     * Se a aba do navegador for arrastada para tamnho que
     * o menu lateral irar sumir
     * se for arrastada para maior o menu lateral ira aparecer
     */
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}