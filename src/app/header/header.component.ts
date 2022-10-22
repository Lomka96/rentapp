import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthPopupScreenComponent } from '../auth-popup-screen/auth-popup-screen.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isPanelMenuEnabled = false;
  isAuthorized = false;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('Authorized') === 'true') {
      this.isAuthorized = true;
      if (localStorage.getItem('Role') === 'ROLE_ADMIN') {
        this.isPanelMenuEnabled = true;
      }
    }
  }

  openAuthWindow() : void {
    this.dialog.open(AuthPopupScreenComponent);
  }

  signOut() {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    localStorage.removeItem('Authorized');
    window.location.href = '/';
  }

}
