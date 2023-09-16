// import { Suspense } from 'react';
import CardCars from '../components/CardCars/CardCars';
// import Spinner from '../../components/Spinner/Spinner';

export default function FavoritesPage() {
  return (
    <div>
      <CardCars />
      {/* <Suspense fallback={<Spinner />}></Suspense> */}
    </div>
  );
}
