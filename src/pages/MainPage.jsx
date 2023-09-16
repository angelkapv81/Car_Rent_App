// import { Suspense } from 'react';
// import MainPageComponent from '../components/MainPageComponent/MainPageComponent';
// import Spinner from '../../components/Spinner/Spinner';
import ListCars from '../components/ListCars/ListCars';

export default function MainPage() {
  return (
    // <div>
    //   <MainPageComponent />
    //   {/* <Suspense fallback={<Spinner />}></Suspense> */}
    // </div>

    <div>
      <ListCars />
      {/* <Suspense fallback={<Spinner />}></Suspense> */}
    </div>
  );
}
