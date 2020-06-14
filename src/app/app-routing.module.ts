import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  // {
  //   path: "home",
  //   loadChildren: () =>
  //     import("./home/home.module").then((m) => m.HomePageModule),
  // },
  // {
  //   path: "",
  //   redirectTo: "home",
  //   pathMatch: "full",
  // },
  // {
  //   path: "blog",
  //   loadChildren: () =>
  //     import("./blog/blog.module").then((m) => m.BlogPageModule),
  // },
  // {
  //   path: "tabs",
  //   loadChildren: () =>
  //     import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  // },
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: 'blog1',
    loadChildren: () => import('./blog1/blog1.module').then( m => m.Blog1PageModule)
  },
  {
    path: 'blog2',
    loadChildren: () => import('./blog2/blog2.module').then( m => m.Blog2PageModule)
  },
  {
    path: 'blog3',
    loadChildren: () => import('./blog3/blog3.module').then( m => m.Blog3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
