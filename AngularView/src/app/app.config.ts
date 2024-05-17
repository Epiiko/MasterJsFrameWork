import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { EsParPipe } from './pipes/espar.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule)]
}