const cars = require('../data/advertsCars.json');

export default function filterCars(cars, filters) {
  return cars.filter(car => {
    car.rentalPriceParsed = Number.parseInt(car.rentalPrice.slice(1));
    // console.log('----------------->>>>>>>>>', car.rentalPriceParsed);
    // Проверка фильтра по названию фирмы
    if (filters.make && car.make !== filters.make) {
      return false;
    }

    // Проверка фильтра по цене аренды
    if (filters.rentalPrice && car.rentalPriceParsed !== filters.rentalPrice) {
      return false;
    }

    // Проверка фильтра по пробегу
    if (filters.mileageMin && car.mileage < filters.mileageMin) {
      return false;
    }

    if (filters.mileageMax && car.mileage > filters.mileageMax) {
      return false;
    }

    // Если все условия прошли, оставляем объект в результате фильтрации
    return true;
  });
}

const filters = {
  make: 'BMW',
  rentalPrice: 300,
  mileageMin: 0,
  mileageMax: 10000000,
};

const filteredCars = filterCars(cars, filters);
console.log(filteredCars);
