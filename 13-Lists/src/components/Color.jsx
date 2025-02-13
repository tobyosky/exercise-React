export default function Color({ color }) {
  return <li key={color.id}>{color.name}</li>;
}
