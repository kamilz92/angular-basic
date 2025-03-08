import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// rending app component (top level component) to the browser
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
