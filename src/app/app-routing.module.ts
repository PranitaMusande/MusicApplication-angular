import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DeleteMusicComponent } from './delete-music/delete-music.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'result/:name',component:SearchResultComponent},
  {path:'favs',component:WishlistComponent},
  {path:'delete/:id',component:DeleteMusicComponent}
  // {path :'addFav/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
