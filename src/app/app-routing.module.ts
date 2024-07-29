import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {HomeComponent} from "./home/home.component";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {authGuard} from "./auth.guard";
import {NotFoundComponent} from "./not-found/not-found.component";

/* define routes array */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    canActivate: [authGuard], /* setting can activate guard to main */
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: 'second',
        component: SecondComponent
      },
      {
        path: 'third',
        component: ThirdComponent
      }
    ]
  },
  /* we put this wild card route at last because it matches any route after main*/
  {
    path: '**', /* any other path */
    component: NotFoundComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)], /* put to root context */
  exports: [RouterModule] /* why is this exported
  when someone imports app routing module it automatically gets
  router module
  Router outlet is in router module
  App module needs Router Module
  They can import it there or get from here */
})
export class AppRoutingModule {
}
