import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core'

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{

  /** code of directive */

  color = 'yellow';
  show: boolean = true;
  name = 'Angular';
  condition = false; 


 public longList: any[] = [];

 public showNgFor = false;
 ngOnInit() {
   const longList = [];
   for (let i = 0; i < 5; i++) {
     longList.push({ id: i });
   }
   this.longList = longList;
 }

 public toggleShow() {
   this.show = !this.show;
 }

 public toggleShowNgFor() {
   this.showNgFor = !this.showNgFor;
 }

 mutateLongList() {
   this.longList[0].id = 785;
 }

 addToLongList() {
   this.longList.push({
     id: 15001
   });
 }

 reassignLongList() {
   const longList = [];
   for (let i = 15; i < 30; i++) {
     longList.push({ id: i });
   }
   this.longList = longList;
 }

 removeFirstItem() {
   this.longList.splice(0, 1);
 }

  /** end code of directive */
}
