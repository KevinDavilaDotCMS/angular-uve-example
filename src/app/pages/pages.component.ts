import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { DYNAMIC_COMPONENTS } from '../utils';


import { onFetchPageAssetFromUVE } from '../../../deps/client/src';
import { JsonPipe } from '@angular/common';
import { DotcmsLayoutComponent, PageContextService } from '../../../deps/angular';

@Component({
  selector: 'dotcms-pages',
  standalone: true,
  imports: [
    DotcmsLayoutComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    JsonPipe,
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
})
export class DotCMSPagesComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly context = signal<any>(null);
  protected readonly components = signal<any>(DYNAMIC_COMPONENTS);

  pageContextService = inject(PageContextService);

  ngOnInit() {
    console.log("II")
    // Get the context data from the route
    this.route.data
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.context.set(data['context']);
      });

    onFetchPageAssetFromUVE((pageAsset) => {
      this.context.update((context) => ({ ...context, pageAsset }));
    });
  }
}
