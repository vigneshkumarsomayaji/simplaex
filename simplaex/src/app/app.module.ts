import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {WebpackTranslateLoader} from './webpack-translate-loader';
import {APP_CONFIG, AppConfig} from './configs/app.config';
import {SharedModule} from './shared/shared.module';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
// import {CoreApiService} from '../app/modules/core-front/shared/coreFront.service';

@NgModule({
  imports: [
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader
      }
    }),
    NgxExampleLibraryModule.forRoot({
      config: {
        say: 'hello'
      }
    }),
    CoreModule,
    SharedModule,
    AppRoutingModule,
    
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig}, 
    // CoreApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
