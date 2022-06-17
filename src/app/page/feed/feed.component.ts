import { Component, ElementRef, HostListener, Input } from '@angular/core'

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  /** code of directive */

  color = 'yellow';
  show: boolean = true;
  name = 'Angular';
  condition = false; 


  /** end code of directive */
}
