// import { Suspense } from 'react';
import ListCars from '../components/ListCars/ListCars';
import FilterPrice from '../components/FilterPrice/FilterPrice';
// import Spinner from '../../components/Spinner/Spinner';

export default function CatalogPage() {
  return (
    <div>
      <FilterPrice />
      <ListCars />
      {/* <Suspense fallback={<Spinner />}></Suspense> */}
    </div>
  );
}
