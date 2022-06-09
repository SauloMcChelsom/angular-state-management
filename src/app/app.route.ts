import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./page/feed/feed.module').then(m => m.FeedModule),
  },
  {
    path: 'feed',
    loadChildren: () => import('./page/feed/feed.module').then(m => m.FeedModule),
  },
  {
    path: 'feed/edit',
    loadChildren: () => import('./page/feed/feed.module').then(m => m.FeedModule),
  },
  {
    path: 'feed/detail',
    loadChildren: () => import('./page/feed/feed.module').then(m => m.FeedModule),
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./page/tutorial/tutorial.module').then(m => m.TutorialModule),
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./shared/erros/not-found/notfound.module').then(m => m.PageNotFoundModule) 
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoute {}
