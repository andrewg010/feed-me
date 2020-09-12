import items from './items'

export const getFilteredFoodItems = (filter = '') => items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
