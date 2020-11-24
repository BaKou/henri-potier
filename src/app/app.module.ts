import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import '@angular/common/locales/global/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookComponent } from './component/book/book.component';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { TopbarComponent } from './shared/layout/topbar/topbar.component';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { CartBookComponent } from './component/cart-book/cart-book.component';
import { SearchPipe } from './core/pipe/search.pipe';
import { DetailBookComponent } from './component/detail-book/detail-book.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopbarComponent,
    HomeComponent,
    BookListComponent,
    BookComponent,
    CartComponent,
    FooterComponent,
    NotFoundComponent,
    CartListComponent,
    CartBookComponent,
    SearchPipe,
    DetailBookComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
