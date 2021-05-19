import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { ContainerComponent } from './container/container.component';
import { CardPageComponent } from './card-page/card-page.component';
import { CardService } from './card.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/cards', pathMatch: 'full'},
  {path: 'cards', component: CardsComponent},
  {path: 'cards/:id', component: CardPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ContainerComponent,
    CardPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
