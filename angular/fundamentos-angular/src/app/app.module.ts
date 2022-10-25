import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultipicaPorPipe } from './multipica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoAwayDataBindingComponent } from './two-away-data-binding/two-away-data-binding.component';
import { FormsModule, NgModel } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExexplosServicos1Component } from './exexplos-servicos1/exexplos-servicos1.component';
import { ExexplosServicos2Component } from './exexplos-servicos2/exexplos-servicos2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        AppComponent,
        PrimeiroComponenteComponent,
        SegundoComponenteComponent,
        MultipicaPorPipe,
        PipeCustomizadoComponent,
        TwoAwayDataBindingComponent,
        RenderizandoListasComponent,
        ComponentePersonalizadoComponent,
        ComponentePaiComponent,
        ComponenteFilhoComponent,
        ExexplosServicos1Component,
        ExexplosServicos2Component,
        CicloDeVidaComponent,
        CicloDeVidaPaiComponent,
        CardComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
