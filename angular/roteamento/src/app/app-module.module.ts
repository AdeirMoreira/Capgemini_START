import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComParamentroComponent } from './pagina-com-paramentro/pagina-com-paramentro.component';
import { PaginanaoencontradaComponent } from './paginanaoencontrada/paginanaoencontrada.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: 'primeira-pagina',
        component: PrimeiraPaginaComponent,
    },
    {
        path: 'segunda-pagina',
        component: SegundaPaginaComponent,
    },
    {
        path: 'pagina-com-parametros/:id',
        component: PaginaComParamentroComponent,
    },
    {
        path: '',
        redirectTo: 'primeira-pagina',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pagina-protegida',
        component: PaginaProtegidaComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'lazy-loading',
        loadChildren: () =>
            import('./lazy-loading/lazy-loading.module').then(
                (m) => m.LazyLoadingModule
            ),
    },
    {
        path: '**',
        component: PaginanaoencontradaComponent,
    },
];

@NgModule({
    declarations: [
        PrimeiraPaginaComponent,
        SegundaPaginaComponent,
        PaginanaoencontradaComponent,
        PaginaProtegidaComponent,
        LoginComponent,
    ],
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule],
})
export class AppModuleModule {}
