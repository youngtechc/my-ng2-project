import {provide}    from '@angular/core';
import {XHRBackend} from '@angular/http';

import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService}               from './in-memory-data.service';

import {bootstrap}      from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms}         from '@angular/forms';

import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  provide(XHRBackend, {useClass: InMemoryBackendService}),  // in-mem server
  provide(SEED_DATA, {useClass: InMemoryDataService})
]);
