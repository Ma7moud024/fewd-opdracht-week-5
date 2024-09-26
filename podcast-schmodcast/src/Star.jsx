import './Star.css';

export default function Star({ full, rate, number, guid }) {
  return (
    <span className="Star" onClick={() => rate(number, guid)}>
      {full ? '★' : '☆'}{' '}
    </span>
  );
}
