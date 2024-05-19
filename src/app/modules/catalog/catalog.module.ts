import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { SmartCatalogComponent } from './components/feature/smart-catalog/smart-catalog.component';
import { DumbCatalogComponent } from './components/ui/dumb-catalog/dumb-catalog.component';

@NgModule({
  declarations: [CatalogComponent, SmartCatalogComponent, DumbCatalogComponent],
  imports: [CommonModule, CatalogRoutingModule],
})
export class CatalogModule {}
