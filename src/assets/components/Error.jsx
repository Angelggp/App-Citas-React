export default function Error({ msg }) {
  return (
    <div className="text-center font-bold p-2 mb-2 text-white bg-red-600 rounded-md uppercase">
      <p>{msg}</p>
    </div>
  );
}
