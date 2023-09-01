import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./pages/siluets/siluets.component').then(m => m.SiluetsComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/siluets/pages/page-home/page-home.component').then(m => m.PageHomeComponent),
      },
      {
        path: 'news',
        loadComponent: () => import('./pages/siluets/pages/news/news.component').then(m => m.NewsComponent),
      },
      {
        path: 'contacts',
        loadComponent: () => import('./pages/siluets/pages/contacts/contacts.component').then(m => m.ContactsComponent),
      },
      {
        path: 'offers',
        loadComponent: () => import('./pages/siluets/pages/offers/offers.component').then(m => m.OffersComponent),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/services.component').then(m => m.ServicesComponent),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
  },
];
