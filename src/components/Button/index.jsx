function Button({ children }) {
  return (
    <button className="border p-2 rounded-md hover:bg-slate-900 hover:text-white">
      {children}
    </button>
  );
}

export default Button;
