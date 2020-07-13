import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ChartsModule } from 'ng2-charts';

import { environment } from '../environments/environment';
import { routes } from './routes';
import { SentryErrorHandler } from './sentry';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// Container components
import { TopComponent } from './containers/top/top.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';

// Components
import { AppComponent } from './app.component';
import { AbstractBaseListComponent } from './components/abstract-base-list/abstract-base-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedItemComponent,
    HeaderComponent,
    TopComponent,
    NotFoundComponent,
    PaginationComponent,
    AbstractBaseListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    Title,
    {
      provide: ErrorHandler,
      useClass: environment.production ? SentryErrorHandler : ErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
