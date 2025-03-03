import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property/property-card/property-card.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@NgModule({
  declarations: [PropertyCardComponent,NavBarComponent],
  imports: [
    CommonModule
  ],
  exports : [PropertyCardComponent,NavBarComponent]

})
export class SharedModuleModule { }
