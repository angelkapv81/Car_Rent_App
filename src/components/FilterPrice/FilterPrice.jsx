import React from 'react';
// { useState }
import applyFilters from './ApplyFilters';
// import cars from '../../data/advertsCars.json';

// const filteredCars = cars.filter(car => {
//   if (!filterPrice) {
//     return true; // Показать все машины, если фильтр не выбран
//   }
//   const carPrice = parseInt(car.price); // Предполагается, что цена хранится в числовом формате
//   return carPrice <= parseInt(filterPrice);
// });
export default function FilterPrice() {
  //   function FilterList() {
  //     const [filters, setFilters] = useState({
  //       make: '',
  //       rentalPrice: '',
  //       mileage: '',
  //     });
  //   }

  return (
    <>
      <select
      // value={filters.make}
      // onChange={e => setFilters({ ...filters, make: e.target.value })}
      >
        <option value="">Выберите марку</option>
        <option value="Kia">Kia</option>
        {/* Другие опции марок */}
      </select>
      <select
      // value={filterPrice}
      // onChange={e => setFilterPrice(e.target.value)}
      >
        <option value="">Все цены</option>
        <option value="100">$100 и ниже</option>
        <option value="200">$200 и ниже</option>
        {/* Другие опции */}
      </select>
      <select
      // value={filterPrice}
      // onChange={e => setFilterPrice(e.target.value)}
      >
        <option value="">пробег</option>
        <option value="100">$100 и ниже</option>
        <option value="200">$200 и ниже</option>
        {/* Другие опции */}
      </select>
      <button onClick={applyFilters}>Search</button>
    </>
  );
}
