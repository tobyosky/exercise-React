export default function MouseClicker() {
  function handleImgButtonClick(event) {
    if (event.target.tagName === "IMG") {
      console.log(event.target);
    }
  }

  function handleButtonClick(event) {
    if (event.target.tagName === "BUTTON") {
      console.log(event.currentTarget.name);
    } else {
      handleImgButtonClick(event);
    }
  }

  return (
    <>
      <button type="button" name="one" onClick={handleButtonClick}>
        One
      </button>
      <button type="button" name="two" onClick={handleButtonClick}>
        <img width={24} height={24} />
        Two
      </button>
    </>
  );
}
