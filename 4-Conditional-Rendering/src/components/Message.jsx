import Age from "./Age";

export default function Message({ age }) {
  return age > 18 ? <Age age={age} /> : <p>Sei molto giovane!</p>;
}
