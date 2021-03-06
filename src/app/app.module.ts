import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogoHeroComponent } from './modules/logo-hero/logo-hero.component';
import { OneRowColorMediaComponent } from './modules/one-row-color-media/one-row-color-media.component';
import { MultilineMediaComponent } from './modules/multiline-media/multiline-media.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoHeroComponent,
    OneRowColorMediaComponent,
    MultilineMediaComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
