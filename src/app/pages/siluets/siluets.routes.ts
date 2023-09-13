import { Routes } from '@angular/router';
import { SiluetsComponent } from './siluets.component';

export const SILUETS_ROUTES: Routes = [
  {
    path: '',
    component: SiluetsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
        title: 'Home',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/page-home/page-home.component').then(m => m.PageHomeComponent),
        title: 'Siluets',
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent),
        title: 'Blog',
      },
      {
        path: 'blog/beauty',
        loadComponent: () => import('./pages/blog/pages/beauty/beauty.component').then(m => m.BeautyComponent),
        title: 'Beauty',
      },
      {
        path: 'contacts',
        loadComponent: () => import('./pages/contacts/contacts.component').then(m => m.ContactsComponent),
        title: 'Contacts',
      },
      {
        path: 'offers',
        loadComponent: () => import('./pages/offers/offers.component').then(m => m.OffersComponent),
        title: 'Offers',
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/page-services/services.component').then(m => m.ServicesComponent),
        title: 'Services',
      },
      {
        path: 'services/face',
        loadComponent: () => import('./pages/page-services/pages/face/face.component').then(m => m.FaceComponent),
        title: 'Face',
      },
      {
        path: 'services/face/massage',
        loadComponent: () =>
          import('./pages/page-services/pages/face/pages/massage/massage.component').then(m => m.MassageComponent),
        title: 'Massage',
      },
      {
        path: 'services/face/appliances',
        loadComponent: () =>
          import('./pages/page-services/pages/face/pages/appliances/appliances.component').then(
            m => m.AppliancesComponent
          ),
        title: 'Appliances',
      },
      {
        path: 'services/face/peelings',
        loadComponent: () =>
          import('./pages/page-services/pages/face/pages/peelings/peelings.component').then(m => m.PeelingsComponent),
        title: 'Peelings',
      },
      {
        path: 'services/body',
        loadComponent: () =>
          import('./pages/page-services/pages/page-body/page-body.component').then(m => m.PageBodyComponent),
        title: 'Body',
      },
      {
        path: 'services/body/lpg-massage',
        loadComponent: () =>
          import('./pages/page-services/pages/page-body/pages/lpg-massage/lpg-massage.component').then(
            m => m.LpgMassageComponent
          ),
        title: 'LPG',
      },
      {
        path: 'services/body/wrapping',
        loadComponent: () =>
          import('./pages/page-services/pages/page-body/pages/wrapping/wrapping.component').then(
            m => m.WrappingComponent
          ),
        title: 'Wrapping',
      },
      {
        path: 'services/waxing',
        loadComponent: () => import('./pages/page-services/pages/waxing/waxing.component').then(m => m.WaxingComponent),
        title: 'Waxing',
      },
    ],
  },
];
