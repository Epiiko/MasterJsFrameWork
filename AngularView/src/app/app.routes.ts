import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ModuleWithProviders } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'pagina', component: PaginaComponent},
    {path: 'pagina/:nombre', component: PaginaComponent},
    {path: 'peliculas', component: PeliculasComponent},
    //ruta de error siempre la ultima
    {path: '**', component: ErrorComponent}
];