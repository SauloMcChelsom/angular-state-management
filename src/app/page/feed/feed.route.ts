import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed.component';
import { AuthGuard } from '@app/core/guards/auth-guard.service';


const routes: Routes = [
  {
    path: '', 
    component: FeedComponent,
  },
  {
    path: 'detail',
    loadChildren: () => import('../../page/feed/detail/detail.module').then(m => m.DetailModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'edit',
    loadChildren: () => import('../../page/feed/edit/edit.module').then(m => m.EditModule),
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeedRoute {}

