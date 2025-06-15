export default function InputBox({ label, name, inputValue, onValueChange }) {
  function handleValueChangeEvent(event) {
    const { name, value } = event.target;
    onValueChange({
      inputName: name,
      data: parseInt(value),
    });
  }
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        name={name}
        onChange={handleValueChangeEvent}
        value={inputValue}
      />
    </div>
  );
}
