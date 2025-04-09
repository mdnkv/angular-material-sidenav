import {Component, computed, input, signal} from '@angular/core';
import {MenuItem} from '../../models/sidenav.models';
import {MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidenav-menu',
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatListItemIcon,
    MatListItemTitle,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.css'
})
export class SidenavMenuComponent {

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
    }
  ])

  collapsed = input.required<boolean>()

  avatarWidth = computed(() => this.collapsed() ? '32px' : '100px')

}
