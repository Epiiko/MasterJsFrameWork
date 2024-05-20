import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/PeliculasComponent';
import { ModuleWithProviders } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SerachComponent } from './components/serach/serach.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'pagina', component: PaginaComponent},
    {path: 'pagina/:nombre/:apellido', component: PaginaComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'buscar/:search', component: SerachComponent},
    //ruta de error siempre la ultima
    {path: '**', component: ErrorComponent}
];
