import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthorModule} from './author/author.module';
import {BookModule} from './book/book.module';
import {EditorialModule} from './editorial/editorial.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AuthorModule,
        BookModule,
        EditorialModule,
        FormsModule
    ],
     bootstrap: [AppComponent]
    providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }
    ]
})
export class AppModule {}
