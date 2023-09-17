import React, { useState } from 'react';

import styles from './ListCars.module.css';
import cars from '../../data/advertsCars.json';
import filterCars from 'services/filter';

// import CarModal from '../CarModal/CarModal';

export default function ListCars() {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedCar, setSelectedCar] = useState(null);

  // const openModal = car => {
  //   setSelectedCar(car);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setSelectedCar(null);
  //   setShowModal(false);
  // };
  const make = JSON.parse(window.localStorage.getItem('make')) ?? '';
  const rentalPrice =
    JSON.parse(window.localStorage.getItem('rentalPrice')) ?? '';
  const mileageMin =
    JSON.parse(window.localStorage.getItem('mileageMin')) ?? '';
  const mileageMax =
    JSON.parse(window.localStorage.getItem('mileageMax')) ?? '';

  const filteredCars = filterCars(cars, {
    make,
    rentalPrice,
    mileageMin,
    mileageMax,
  });
  return (
    <div className={styles.car_list}>
      {filteredCars.map(car => (
        <div className={styles.car_card} key={car.id}>
          <img
            className={styles.car_img}
            src={car.img}
            alt={`${car.make} ${car.model}`}
          />
          <ul>
            <li>{`${car.make} ${car.model},`}</li>
            <li>{car.year}</li>
            <li>{car.rentalPrice}</li>
          </ul>
          <ul>
            <li>{car.address}</li>
            <li>{car.rentalCompany}</li>
            <li>{car.type}</li>
            <li>{car.make}</li>
            <li>{car.id}</li>
            <li>
              <ul>
                {car.accessories.map((accessory, index) => (
                  <li key={index}>{accessory}</li>
                ))}
              </ul>
            </li>
          </ul>
          <button
          // onClick={openModal}
          >
            Load more
          </button>
        </div>
      ))}
      {/* {showModal && <CarModal carInfo={selectedCar} onClose={closeModal} />} */}
    </div>
  );
}
