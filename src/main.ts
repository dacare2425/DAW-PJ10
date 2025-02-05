import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot(routes)
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
