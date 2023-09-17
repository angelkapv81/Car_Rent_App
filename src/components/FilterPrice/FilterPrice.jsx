import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './FilterPrice.module.css';
import { createMake } from '../../redux/store';

export default function SelectPropsForm({ applyFilters }) {
  const [make, setMake] = useState('');

  const dispatch = useDispatch();

  const [maxRentalPrice, setMaxRentalPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'make':
        setMake(event.target.value);
        break;
      case 'maxRentalPrice':
        setMaxRentalPrice(value);
        break;
      case 'minMileage':
        setMinMileage(value);
        break;
      case 'maxMileage':
        setMaxMileage(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createMake(make));
    window.localStorage.setItem(
      'maxRentalPrice',
      JSON.stringify(maxRentalPrice)
    );
    window.localStorage.setItem('minMileage', JSON.stringify(minMileage));
    window.localStorage.setItem('maxMileage', JSON.stringify(maxMileage));
  };
  return (
    <form className={styles.filter_list}>
      <select
        name="make"
        className={styles.filter.make}
        value={make}
        onChange={handleChange}
      >
        <option value="">Car brand</option>
        <option value="Buick">Buick</option>
        <option value="Volvo">Volvo</option>
        <option value="HUMMER">HUMMER</option>
        <option value="Subaru">Subaru</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Nissan">Nissan </option>
        <option value="Lincoln">Lincoln </option>
        <option value="GMC">GMC </option>
        <option value="Hyundai">Hyundai </option>
        <option value="MINI">MINI </option>
        <option value="Bentley">Bentley </option>
        <option value="Mercedes-Benz">Mercedes-Benz </option>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Pontiac">Pontiac</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Chrysler">Chrysler</option>
        <option value="Kia">Kia</option>
        <option value="Land Rover">Land Rover</option>
      </select>

      <select
        name="maxRentalPrice"
        value={maxRentalPrice}
        onChange={handleChange}
      >
        <option value="">Все цены</option>
        <option value="100">30</option>
        <option value="100">40</option>
        <option value="100">50</option>
        <option value="100">60</option>
        <option value="100">70</option>
        <option value="100">80</option>
      </select>
      <select name="minMileage" value={minMileage} onChange={handleChange}>
        <option value="">пробег</option>
        <option value="100">30</option>
        <option value="100">40</option>
        <option value="100">50</option>
        <option value="100">60</option>
        <option value="100">70</option>
        <option value="100">80</option>
      </select>
      <select name="maxMileage" value={maxMileage} onChange={handleChange}>
        <option value="">пробег</option>
        <option value="100">30</option>
        <option value="100">40</option>
        <option value="100">50</option>
        <option value="100">60</option>
        <option value="100">70</option>
        <option value="100">80</option>
      </select>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}
