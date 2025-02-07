export default function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }

  return (
    <>
      <button type="button" name="one" onClick={handleButtonClick}>
        One
      </button>
      <button type="button" name="two" onClick={handleButtonClick}>
        Two
      </button>
    </>
  );
}
