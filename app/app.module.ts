import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxDataGrid, DxButton } from 'devextreme-angular2';

import { AppComponent }  from './app.component';
import { HeroService } from './hero.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, DxDataGrid, DxButton],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }