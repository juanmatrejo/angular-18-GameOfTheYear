import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { VotesComponent } from './pages/votes/votes.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		VotesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		HttpClientModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
