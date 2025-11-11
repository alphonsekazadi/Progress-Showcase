import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Add $localize polyfill for Kendo UI
if (!(globalThis as any).$localize) {
  (globalThis as any).$localize = (template: any, ...expressions: any[]) => {
    let result = template[0];
    for (let i = 1; i < template.length; i++) {
      result += expressions[i - 1] + template[i];
    }
    return result;
  };
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
