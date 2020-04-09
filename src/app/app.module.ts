import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDatabaseService } from './_services';
import { UpdateModelComponent } from './update-model/update-model.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfirmationModelComponent } from './confirmation-model/confirmation-model.component';
import { ToastrModule } from 'ngx-toastr';
import { BnNgIdleService } from 'bn-ng-idle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UpdateModelComponent,
    ConfirmationModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatIconModule,
    ToastrModule.forRoot(),
    InMemoryWebApiModule.forRoot(FakeDatabaseService)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    // session time out
    BnNgIdleService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
