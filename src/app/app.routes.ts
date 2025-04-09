import { Routes } from '@angular/router';
import {DashboardViewComponent} from './views/dashboard-view/dashboard-view.component';
import {ContentViewComponent} from './views/content-view/content-view.component';
import {CommentsViewComponent} from './views/comments-view/comments-view.component';
import {AnalyticsViewComponent} from './views/analytics-view/analytics-view.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardViewComponent
  },
  {
    path: 'content',
    component: ContentViewComponent
  },
  {
    path: 'comments',
    component: CommentsViewComponent
  },
  {
    path: 'analytics',
    component: AnalyticsViewComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];
