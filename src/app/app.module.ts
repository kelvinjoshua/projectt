import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AuthorComponent } from './author/author.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';//import beacause forms module isnt available by default//
@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    AuthorComponent,
    FormComponent,
    HighlightDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
