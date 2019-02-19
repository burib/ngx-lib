import { NgModule } from '@angular/core';
import { NgxLibComponent } from './ngx-lib.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NgxLibComponent, FooterComponent],
  imports: [
  ],
  exports: [NgxLibComponent]
})
export class NgxLibModule { }
