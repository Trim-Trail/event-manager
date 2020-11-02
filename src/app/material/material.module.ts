import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const AngularMaterialModules = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    AngularMaterialModules,
  ]
})
export class MaterialModule { }
