import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { FaqComponent } from './faq/faq.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { ContatoComponent } from './contato/contato.component';
import { DicasComponent } from './dicas/dicas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgxMaskModule} from 'ngx-mask';
import { MapaSiteComponent } from './mapa-site/mapa-site.component';
import { PedidoComponent } from './pedido/pedido.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListaUsuarioComponent,
    SobrenosComponent,
    FaqComponent,
    PoliticaPrivacidadeComponent,
    ContatoComponent,
    DicasComponent,
    ProdutosComponent,
    MapaSiteComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
