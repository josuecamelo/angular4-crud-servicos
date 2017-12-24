import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: PostListComponent},
    {path: 'posts', component: PostListComponent},
    //{path: 'posts/create', component: PostSaveComponent},
    //{path: 'posts/:id/edit', component: PostSaveComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
