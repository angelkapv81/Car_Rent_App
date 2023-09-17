import React from 'react';

export default function CarModal({ carInfo, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>
          {carInfo.make} {carInfo.model}
        </h2>
        <ul>
          <li>{carInfo.address}</li>
          <li>{carInfo.rentalCompany}</li>
          <li>{carInfo.type}</li>
          <li>{carInfo.make}</li>
          <li>{carInfo.id}</li>
        </ul>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
