import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCRUDComponent } from './angular-crud/angular-crud.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StudentDataService} from '../app/DataService/StudentDataService';
import { CourseCrudComponent } from './course-crud/course-crud.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './account/register/register.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ShellComponent } from './shell/shell.component';


// used to create fake backend
import { FakeBackendProvider } from './shared/mocks/fake-backend-interceptor';



import { ConfigService } from './shared/config.service';




/* Module Imports */
import { CoreModule } from './core/core.module';
import { HomeModule }  from './home/home.module';
import { AccountModule }  from './account/account.module';
import { ShellModule } from './shell/shell.module';
import { TopSecretModule } from './top-secret/top-secret.module';
import { SharedModule }   from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AngularCRUDComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    CourseCrudComponent,
    CourseAddComponent,
    CourseUpdateComponent,
    RegisterComponent,
    AuthCallbackComponent,
    ShellComponent,
    AuthCallbackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CoreModule,
    HomeModule,
    AccountModule,
    TopSecretModule,   
    AppRoutingModule,
    ShellModule,   
    SharedModule,   
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar:true
    })
  ],
  providers: [StudentDataService,ConfigService,FakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
