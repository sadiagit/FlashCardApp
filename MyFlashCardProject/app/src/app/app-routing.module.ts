import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { TopicsComponent } from './topics/topics.component';


const routes: Routes = [
  { path: 'topics', component: TopicsComponent },
  { path: 'flash-card', component: FlashCardComponent },
  { path: '**', component: FlashCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
