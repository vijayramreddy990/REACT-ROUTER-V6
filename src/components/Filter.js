import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const age = searchParam.get("age");
  const city = searchParam.get("city");
  return (
    <div>
      <h1>Filter Page</h1>
      <p>my age is {age}</p>
      <p>
        {"\n"}I an from {city}
      </p>
      <input
        type={"text"}
        placeholder="set Text in query params"
        onChange={(e) => {
          setSearchParam({
            age: 10,
            city: e.target.value,
          });
        }}
      />
      <button
        onClick={(e) => {
          setSearchParam({
            age: 40,
          });
        }}
      >
        Set Age in Query Params
      </button>
    </div>
  );
};

export default Filter;
