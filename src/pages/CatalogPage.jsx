// import { Suspense } from 'react';
import ListCars from '../components/ListCars/ListCars';
import FilterPrice from '../components/FilterPrice/FilterPrice';
// import Spinner from '../../components/Spinner/Spinner';
import styles from './CatalogPage.module.css';
export default function CatalogPage() {
  return (
    <div className={styles.car_container}>
      <FilterPrice />
      <ListCars />
      {/* <Suspense fallback={<Spinner />}></Suspense> */}
    </div>
  );
}
