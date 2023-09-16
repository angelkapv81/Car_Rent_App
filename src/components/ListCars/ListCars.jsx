import React from 'react';
import styles from './ListCars.module.css';
import cars from '../../data/advertsCars.json';

export default function ListCars() {
  return (
    <div className={styles.car_list}>
      {cars.map(car => (
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
          <button>Load more</button>
        </div>
      ))}
    </div>
  );
}
