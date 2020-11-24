import { OffersResult } from '../results/offers.result';

export const mockOffers = {
  offers: [
    { type: 'percentage', value: 5 },
    { type: 'minus', value: 15 },
    { type: 'slice', sliceValue: 100, value: 12 }
  ]
} as OffersResult;
