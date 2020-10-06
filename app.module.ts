import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { CategoryService } from './service/category.service';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryListComponent } from './components/category-list/category-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-user' },
  { path: 'user/create-user', component: UserCreateComponent },
  { path: 'user/edit-user/:id', component: UserEditComponent },
  { path: 'user/users-list', component: UserListComponent },
  { path: 'category/create-category', component: CategoryCreateComponent },
  { path: 'category/edit-category/:id', component: CategoryEditComponent },
  { path: 'category/category-list', component: CategoryListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [UserService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export class AppRoutingModule { }
