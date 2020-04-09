import { Component } from '@angular/core';
import { User } from './_models';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactInformationApp';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private bnIdle: BnNgIdleService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    /*==================Session Time Out=======================*/
    this.bnIdle.startWatching(600).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        this.logout();
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
