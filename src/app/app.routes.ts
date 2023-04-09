import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'elixir',
        loadChildren: () => import('./elixir/elixir.module').then((m) => m.ElixirModule)
    },
    {
        path: '',
        redirectTo: 'elixir',
        pathMatch: 'full'
    }
];
