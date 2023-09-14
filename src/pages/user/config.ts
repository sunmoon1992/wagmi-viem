const base = [
  {
    label: 'Recently listed',
    value: 'Recently'
  },
  {
    label: 'Price: low to high',
    value: 'low'
  },
  {
    label: 'Price: high to low',
    value: 'high'
  }
]

export const userCreatedOptions = base

export const userOwnedOrSaleOptions = [
  {
    label: 'Recently received',
    value: 'received'
  },
  ...base
]
