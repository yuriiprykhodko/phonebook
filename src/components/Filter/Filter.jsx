import { useDispatch } from "react-redux";
import { setFilter } from "redux/store";


export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label htmlFor="">
      Find contacts by name
        <input type="text" onChange={(e)=>dispatch(setFilter(e.target.value))} />
      </label>
  )
}
