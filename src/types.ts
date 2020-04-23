
interface State {
  state: string;
  stateShort: string;
  taxPercent: number;
}

interface Discount {
  price: number;
  discountPercent: number;
}

export const states: State[] = [
  {
    state: '',
    stateShort: 'UT',
    taxPercent: 0.0685,
  },
  {
    state: '',
    stateShort: 'NV',
    taxPercent: 0.08,
  },
];

export const discounts: Discount[] = [
  {
    price: 1000,
    discountPercent: 0.03,
  },
  {
    price: 5000,
    discountPercent: 0.05,
  }
];