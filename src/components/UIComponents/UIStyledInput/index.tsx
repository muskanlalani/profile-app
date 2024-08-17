const UIStyledInput = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (value: string) => void;
}) => {
  return (
    <input
      type="text"
      placeholder="Enter coupon"
      className="border-2 border-gray-300 rounded p-2 w-full max-w-md"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default UIStyledInput;
