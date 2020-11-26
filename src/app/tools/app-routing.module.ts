import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from '../components/todo/todo.component';
import {TransferComponent} from '../components/transfer/transfer.component';
import {HomeComponent} from '../components/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:  'todo', component: TodoComponent},
  { path:  'transfer', component: TransferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
