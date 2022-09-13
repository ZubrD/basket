import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: "Ненужная вещь" },
    { id: 2, value: 5, name: "Ложка" },
    { id: 3, value: 0, name: "Вилка" },
    { id: 4, value: 0, name: "Тарелка" },
    { id: 5, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounter = counters.filter((c) => c.id !== id);
    setCounters(newCounter);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    let newValues = [...counters];
    newValues.forEach((item) => {
      item.id === id && item.value++;
    });
    setCounters(newValues);
  };

   const handleDecrement = (id) => {
    let newValues = [...counters];
    newValues.forEach((item) => {
      item.id === id && item.value--;
    });
    setCounters(newValues);
  }; 

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
