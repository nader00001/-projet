import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AceuilComponent } from './Components/aceuil/aceuil.component';
import { ClasseComponent } from './Components/classe/classe.component';
import { KessasComponent } from './Components/kessas/kessas.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { SpeechComponent } from './Components/speech/speech.component';

import { Kessa1Component } from './Components/quatriemme/9essa/kessa1/kessa1.component';
import { Kessa2Component } from './Components/quatriemme/9essa/kessa2/kessa2.component';
import { Kessa3Component } from './Components/quatriemme/9essa/kessa3/kessa3.component';
import { Kessa4Component } from './Components/quatriemme/9essa/kessa4/kessa4.component';

import { Aceuil3Component } from './Components/aceuil3/aceuil3.component';
import { Aceuil4Component } from './Components/aceuil4/aceuil4.component';
import { Kessa31Component } from './Components/cinqueimme/kessa31/kessa31.component';
import { Kessa32Component } from './Components/cinqueimme/kessa32/kessa32.component';
import { Kessa33Component } from './Components/cinqueimme/kessa33/kessa33.component';
import { Kessa34Component } from './Components/cinqueimme/kessa34/kessa34.component';

import { Quest32Component } from './Components/cinqueimme/quest32/quest32.component';
import { Quest33Component } from './Components/cinqueimme/quest33/quest33.component';
import { Quest34Component } from './Components/cinqueimme/quest34/quest34.component';

import { Quest42Component } from './Components/quatriemme/9essa/quest42/quest42.component';
import { Quest43Component } from './Components/quatriemme/9essa/quest43/quest43.component';
import { Quest44Component } from './Components/quatriemme/9essa/quest44/quest44.component';

@NgModule({
  declarations: [
    AppComponent,
    AceuilComponent,
    KessasComponent,
    ClasseComponent,
    SpeechComponent,

    Kessa1Component,
    Kessa2Component,
    Kessa3Component,
    Kessa4Component,

    Kessa31Component,
    Kessa32Component,
    Kessa33Component,
    Kessa34Component,
    Aceuil4Component,
    Aceuil3Component,

    Quest32Component,
    Quest33Component,
    Quest34Component,

    Quest42Component,
    Quest43Component,
    Quest44Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule , ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
