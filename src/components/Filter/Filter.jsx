export const Filter = ({onChange}) => {
  return (
    <label htmlFor="">
      Find contacts by name
        <input type="text" onChange={onChange} />
      </label>
  )
}
