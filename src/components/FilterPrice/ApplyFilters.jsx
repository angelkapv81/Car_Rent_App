import React from 'react';
import cars from '../../data/advertsCars.json';

function applyFilters() {
  const [filters, setFilters] = useState({
    price: '',
    make: '',
    model: '',
    mileageFrom: '',
    mileageTo: '',
  });

  const filteredCars = cars.filter(car => {
    const matchMake = !filters.make || car.make === filters.make;
    const matchPrice =
      !filters.price || parseInt(car.price) <= parseInt(filters.price);
    const matchMileageFrom =
      !filters.mileageFrom ||
      parseInt(car.mileage) >= parseInt(filters.mileageFrom);
    const matchMileageTo =
      !filters.mileageTo ||
      parseInt(car.mileage) <= parseInt(filters.mileageTo);

    return matchMake && matchPrice && matchMileageFrom && matchMileageTo;
  });

  setFilteredCars(filteredCars);
}
