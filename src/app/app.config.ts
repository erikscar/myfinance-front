import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { CustomToast } from './shared/custom-toast/custom-toast';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideToastr({
      preventDuplicates: true,
      toastComponent: CustomToast,
      timeOut: 9999999,
      toastClass: '',
    }),
    provideIonicAngular({}),
  ],
};
