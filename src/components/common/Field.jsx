const Field = ({ label, error, children, htmlFor }) => {
  return (
    <div className="mb-4">
      {label && (
        <label id={htmlFor} className=" mb-2">
          {label}
        </label>
      )}
      {children}

      {!!error && (
        <div role="alret" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
};
export default Field;
