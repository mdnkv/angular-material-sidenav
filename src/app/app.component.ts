import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatSidenavContainer, MatSidenav, MatSidenavContent} from '@angular/material/sidenav';
import {SidenavMenuComponent} from './components/sidenav-menu/sidenav-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatIcon, MatIconButton, MatSidenavContainer, MatSidenav, MatSidenavContent, SidenavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  navbarCollapsed = signal(false)

  toggleNavbarCollapsed(){
    this.navbarCollapsed.update(value => !value)
  }

  sidenavWidth = computed(() => {
    if (this.navbarCollapsed()){
      if (window.innerWidth <= 768){
        return '0'
      } else {
        return '65px'
      }
    } else {
      return '250px'
    }
  })

  constructor() {
    if (window.innerWidth <= 768){
      // if mobile, then the sidebar is collapsed by default
      this.navbarCollapsed.set(true)
    }
  }

}
