import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";
import { PostSaveComponent } from './post-save/post-save.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import { GlyphComponent } from './bootstrap/glyph/glyph.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "./services/message.service";
import { ModalComponent } from './bootstrap/modal/modal.component';
import { AlertComponent } from './bootstrap/alert/alert.component';
import { SistemasListComponent } from './sistemas-list/sistemas-list.component';
import {ApiService} from "./services/api.service";
import {SistemaService} from "./services/sistema.service";
import {PagerService} from "./services/sistema-pagination.services";
import { SistemaSaveComponent } from './sistema-save/sistema-save.component';


const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: PostListComponent},
    {path: 'posts', component: PostListComponent},
    {path: 'posts/create', component: PostSaveComponent},
    {path: 'posts/:id/edit', component: PostSaveComponent},
    {path: 'sistemas', component: SistemasListComponent},
    {path: 'sistemas/create', component: SistemaSaveComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostSaveComponent,
        ButtonComponent,
        GlyphComponent,
        ModalComponent,
        AlertComponent,
        SistemasListComponent,
        SistemaSaveComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [PostService, ApiService, SistemaService, MessageService, PagerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
