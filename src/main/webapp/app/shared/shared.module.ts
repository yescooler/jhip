import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipSharedLibsModule, JhipSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipSharedLibsModule, JhipSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipSharedModule {
  static forRoot() {
    return {
      ngModule: JhipSharedModule
    };
  }
}
