import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AppConfig} from '../../../configs/app.config';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';
import {ProgressBarService} from '../../../core/services/progress-bar.service';
/** @title Responsive sidenav */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.css'],
})
export class SideNav implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private progressBarService: ProgressBarService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
  }
  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  menuItems: any[];
  @ViewChild('snav') public snav;


  private _mobileQueryListener: () => void;

  shouldRun = true;

  ngOnInit() {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
    this.menuItems = [
      // {link: '/', name: _('home'),icon:'plus-circle'},
      // {link: '/' + 'clientForm', name: _('Core-Front'),icon:'plus-circle'},
      // {link: '/' + 'main', name: _('Start'),icon:'plus-circle'},
      {link: '/' + 'client-form/0/user_admin', name: _('Agregar nuevo cliente'), icon: 'plus-circle'},
      {link: '/' + 'client-selection', name: _('Modificar datos Cliente'), icon: 'edit'},
      {link: '/' + 'client-list', name: _('Ver lista de clientes'), icon: 'th'}
      // {link: '/' + 'login', name: _('Login'),icon:'plus-circle'}
    ];
    this.snav.toggle();

    this.progressBarService.talk$.subscribe((mode: string) => {
      this.snav.toggle();
    });


  }

}
