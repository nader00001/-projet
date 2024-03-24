import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceuilComponent } from './Components/aceuil/aceuil.component';
import { Aceuil3Component } from './Components/aceuil3/aceuil3.component';
import { Aceuil4Component } from './Components/aceuil4/aceuil4.component';
import { Kessa31Component } from './Components/cinqueimme/kessa31/kessa31.component';
import { Kessa32Component } from './Components/cinqueimme/kessa32/kessa32.component';
import { Kessa33Component } from './Components/cinqueimme/kessa33/kessa33.component';
import { Kessa34Component } from './Components/cinqueimme/kessa34/kessa34.component';
import { Quest31Component } from './Components/cinqueimme/quest31/quest31.component';
import { Quest32Component } from './Components/cinqueimme/quest32/quest32.component';
import { Quest33Component } from './Components/cinqueimme/quest33/quest33.component';
import { Quest34Component } from './Components/cinqueimme/quest34/quest34.component';
import { Kessa1Component } from './Components/quatriemme/9essa/kessa1/kessa1.component';
import { Kessa2Component } from './Components/quatriemme/9essa/kessa2/kessa2.component';
import { Kessa3Component } from './Components/quatriemme/9essa/kessa3/kessa3.component';
import { Kessa4Component } from './Components/quatriemme/9essa/kessa4/kessa4.component';
import { Quest41Component } from './Components/quatriemme/9essa/quest41/quest41.component';
import { Quest42Component } from './Components/quatriemme/9essa/quest42/quest42.component';
import { Quest43Component } from './Components/quatriemme/9essa/quest43/quest43.component';
import { Quest44Component } from './Components/quatriemme/9essa/quest44/quest44.component';

const routes: Routes = [
  { path: 'kes1', component: Kessa1Component },
  { path: 'kes2', component: Kessa2Component },
  { path: 'kes3', component: Kessa3Component },
  { path: 'kes4', component: Kessa4Component },

  { path: 'Aceuil', component: AceuilComponent },
  { path: 'kessa1', component: Kessa31Component },
  { path: 'kessa2', component: Kessa32Component },
  { path: 'kessa3', component: Kessa33Component },
  { path: 'kessa4', component: Kessa34Component },
  { path: 'aceuil3', component: Aceuil3Component },
  { path: 'aceuil4', component: Aceuil4Component },
  { path: 'quest31', component: Quest31Component },
  { path: 'quest32', component: Quest32Component },
  { path: 'quest33', component: Quest33Component },
  { path: 'quest34', component: Quest34Component },
  { path: 'quest41', component: Quest41Component },
  { path: 'quest42', component: Quest42Component },
  { path: 'quest43', component: Quest43Component },
  { path: 'quest44', component: Quest44Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
