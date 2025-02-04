import Age from "./Age";

export default function Welcome({ name, age }) {
  return (
    <>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>

      <Age age={age} />
    </>
  );
}
