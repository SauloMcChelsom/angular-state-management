import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules, NoPreloading  } from '@angular/router'

export const ROUTES: Routes = [
  //{ path: '',redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'feed',
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

      /**
       * Build-in preloading strategies — Estratégias de pré-carregamento integradas
       * NoPreloading -> (padrão) carrega conforme o usuario acessa a tela
       * PreloadAllModules - > carrega todos os módulos em segundo plano
       * 
       * Custom preloading strategies - Estratégias de pré-carregamento personalizadas
       * motivo:Se o número de módulos em seu aplicativo da web for grande
       * exemplo:
       * preloadingStrategy: CustomPreloadingStrategyService
       * cria uma classe service CustomPreloadingStrategyService
       * 
       *import {Injectable} from '@angular/core';
        import {PreloadingStrategy, Route} from '@angular/router';
        import {Observable, of} from 'rxjs';
        @Injectable({
          providedIn: 'root'
        })
        export class CustomPreloadingStrategyService implements PreloadingStrategy {
        preload(route: Route, fn: () => Observable<any>): Observable<any> {
            if (route.data && route.data.preload) {
              return fn();
            }
            return of(null);
          }
        }
      */
      preloadingStrategy: NoPreloading,

      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoute {}