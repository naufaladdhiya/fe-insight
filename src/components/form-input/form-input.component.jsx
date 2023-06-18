const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="mt-2">
      <label className="mt-1">{label}</label>
      <input
        className="w-full max-w-xs mt-2 shadow-lg input input-bordered"
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
