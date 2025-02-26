export default function InputMessage({ value, onChange, ref }) {
  return (
    <>
      <input
        type="text"
        className="rounded-xl p-3 bg-white w-full"
        placeholder="Send Message..."
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </>
  );
}
