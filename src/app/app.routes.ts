import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./pages/siluets/siluets.component').then(m => m.SiluetsComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/siluets/pages/page-home/page-home.component').then(m => m.PageHomeComponent),
        title: 'Home',
      },
      {
        path: 'news',
        loadComponent: () => import('./pages/siluets/pages/news/news.component').then(m => m.NewsComponent),
        title: 'News',
      },
      {
        path: 'news/gigi',
        loadComponent: () => import('./pages/siluets/pages/news/pages/gigi/gigi.component').then(m => m.GigiComponent),
        title: 'Gigi',
      },
      {
        path: 'news/beauty',
        loadComponent: () =>
          import('./pages/siluets/pages/news/pages/beauty/beauty.component').then(m => m.BeautyComponent),
        title: 'Beauty',
      },
      {
        path: 'contacts',
        loadComponent: () => import('./pages/siluets/pages/contacts/contacts.component').then(m => m.ContactsComponent),
        title: 'Contacts',
      },
      {
        path: 'offers',
        loadComponent: () => import('./pages/siluets/pages/offers/offers.component').then(m => m.OffersComponent),
        title: 'Offers',
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/services.component').then(m => m.ServicesComponent),
        title: 'Services',
      },
      {
        path: 'services/face',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/pages/face/face.component').then(m => m.FaceComponent),
        title: 'Face',
      },
      {
        path: 'services/face/massage',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/pages/face/pages/massage/massage.component').then(
            m => m.MassageComponent
          ),
        title: 'Massage',
      },
      {
        path: 'services/face/appliances',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/pages/face/pages/appliances/appliances.component').then(
            m => m.AppliancesComponent
          ),
        title: 'Appliances',
      },
      {
        path: 'services/face/peelings',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/pages/face/pages/peelings/peelings.component').then(
            m => m.PeelingsComponent
          ),
        title: 'Peelings',
      },
      {
        path: 'services/body',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/pages/page-body/page-body.component').then(
            m => m.PageBodyComponent
          ),
        title: 'Body',
      },
      {
        path: 'services/body/lpg-massage',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/pages/page-body/pages/lpg-massage/lpg-massage.component').then(
            m => m.LpgMassageComponent
          ),
        title: 'LPG',
      },
      {
        path: 'services/body/wrapping',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/pages/page-body/pages/wrapping/wrapping.component').then(
            m => m.WrappingComponent
          ),
        title: 'Wrapping',
      },
      {
        path: 'services/waxing',
        loadComponent: () =>
          import('./pages/siluets/pages/page-services/pages/waxing/waxing.component').then(m => m.WaxingComponent),
        title: 'Waxing',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
    title: '404',
  },
];
