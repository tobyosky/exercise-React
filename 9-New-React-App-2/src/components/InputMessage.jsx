export default function InputMessage({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        className="rounded-xl p-3 bg-white w-full"
        placeholder="Scrivi il tuo messaggio..."
        value={value}
        onChange={onChange}
      />
    </>
  );
}
