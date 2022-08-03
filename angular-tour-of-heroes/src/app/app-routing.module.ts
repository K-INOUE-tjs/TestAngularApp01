//アプリケーションにルーティング機能を持たせることができる
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//RouterModule と Routes をインポート
import { HeroesComponent } from './heroes/heroes.component'; //ルートを設定することでルーターに向かう場所を教える
import { DashboardComponent } from './dashboard/dashboard.component';//app-routing.module.tsでDashboardComponentをインポート
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//アプリケーションをダッシュボードへ自動的に置き換える為、routes配列に追加...
  { path: 'dashboard', component: DashboardComponent },//routes配列に、 DashboardComponentへのパスにマッチするルートを追加
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  //▼RouterModule を AppRoutingModule の imports 配列に追加することで、RouterModule.forRoot() を呼び出し一発で routes 設定できる...
  imports: [ RouterModule.forRoot(routes) ],

  //▼AppRoutingModule は RouterModule をエクスポートし、アプリケーション全体で利用できるようにする。
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
