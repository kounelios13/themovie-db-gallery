import { Routes } from '@angular/router';

import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent),
        canActivate: [authGuard]
    },
    {
        path: 'video/:id',
        loadComponent: () => import('./components/video-details/video-details.component').then(m => m.VideoDetailsComponent),
        canActivate: [authGuard]
    },
    {
        path: 'token',
        loadComponent: () => import('./components/token-page/token-page.component').then(m => m.TokenPageComponent),
        
    },
];
