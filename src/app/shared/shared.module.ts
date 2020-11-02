import { NgModule } from '@angular/core';
import { MediaQueryMatcherDirective } from './directives/media-query-matcher.directive';



@NgModule({
  declarations: [MediaQueryMatcherDirective],
  imports: [
  ],
  exports: [
    MediaQueryMatcherDirective
  ]
})
export class SharedModule { }
