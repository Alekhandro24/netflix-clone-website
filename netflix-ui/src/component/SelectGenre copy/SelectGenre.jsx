import React from "react";
import { Select } from "./SelectGenre.styled";
import { useDispatch } from "react-redux";
import { fetchDataByGenre } from "../../redux/thunk";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(
          fetchDataByGenre({
            genres,
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectGenre;
