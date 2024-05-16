import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { EsParPipe } from './pipes/espar.pipe';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    EsParPipe]
}