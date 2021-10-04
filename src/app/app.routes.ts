import {RouterModule, Routes} from "@angular/router";
import {PageComponent} from "./page/page.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";

export const AppRoutes: Routes =[
  {path: '',component: PageComponent},
  {path: 'login',component: LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
