import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {FooterComponent} from './components/footer/footer.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {Error404PageComponent} from './pages/error404-page/error404-page.component';
import {ScrollToFirstInvalidDirective} from './directives/scroll-to-first-invalid.directive';
import {NgxExampleLibraryModule} from '@ismaestro/ngx-example-library';
import {WebStorageModule} from 'ngx-store';
import { HeroLoadingComponent } from './components/hero-loading/hero-loading.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    RouterModule,
    NgxExampleLibraryModule,
    WebStorageModule,
    ChartModule,
    FormsModule
  ],
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    FooterComponent,
    SpinnerComponent,
    HeroLoadingComponent,
    ScrollToFirstInvalidDirective,

  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    NgxExampleLibraryModule,
    WebStorageModule,
    FooterComponent,
    SpinnerComponent,
    HeroLoadingComponent,
    ScrollToFirstInvalidDirective,
  ]
})

export class SharedModule {
  static forRoot(){
    return{
    NgModule:SharedModule
    };
  }
}
