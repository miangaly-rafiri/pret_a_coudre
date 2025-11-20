import { Injectable } from '@angular/core';
import promoData from '../../data/promo.json';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  private promos: any[] = promoData;

  getPromo(code: string) {
    return this.promos.find(p => p.code.toLowerCase() === code.toLowerCase());
  }
}
