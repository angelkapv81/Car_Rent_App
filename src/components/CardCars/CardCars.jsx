import React from 'react';
// import styles from '../ListCars/ListCars.module.css';
import cars from '../../data/advertsCars.json';
// CatalogPage;ListCars;
// impotr cars from '../../data/advertsCars.json';

// Module not found: Error: Can't resolve '../data/advertsCars.json' in 'D:\Documents\projects\Car_Rent_App\src\components\ListCars'

export default function CardCars() {
  return (
    <>
      <h1>Список автомобилей</h1>
      <div className="car-list">
        {cars.map(car => (
          <div className="car-card" key={car.id}>
            <img src={car.img} alt={`${car.make} ${car.model}`} />
            <h2>{`${car.make} ${car.model}`}</h2>
            <p>
              <strong>Год выпуска:</strong> {car.year}
            </p>
            <p>
              <strong>Тип:</strong> {car.type}
            </p>
            <p>
              <strong>Описание:</strong> {car.description}
            </p>
            <p>
              <strong>Расход топлива:</strong> {car.fuelConsumption} л/100 км
            </p>
            <p>
              <strong>Объем двигателя:</strong> {car.engineSize}
            </p>
            <p>
              <strong>Аксессуары:</strong>
            </p>
            <ul>
              {car.accessories.map((accessory, index) => (
                <li key={index}>{accessory}</li>
              ))}
            </ul>
            <p>
              <strong>Функциональности:</strong>
            </p>
            <ul>
              {car.functionalities.map((functionality, index) => (
                <li key={index}>{functionality}</li>
              ))}
            </ul>
            <p>
              <strong>Цена аренды:</strong> {car.rentalPrice} в день
            </p>
            <p>
              <strong>Компания аренды:</strong> {car.rentalCompany}
            </p>
            <p>
              <strong>Адрес:</strong> {car.address}
            </p>
            <p>
              <strong>Условия аренды:</strong> <br />
              {car.rentalConditions}
            </p>
            <p>
              <strong>Пробег:</strong> {car.mileage} км
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
