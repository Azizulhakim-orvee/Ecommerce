<div className="flex flex-col">
<label className="text-gray-700" htmlFor="count">
  Quantity
</label>
<div className="flex items-center mt-1">
  <button className="text-gray-500 focus:outline-none focus:text-green-900 focus:scale-105 transition-all transform">
    <svg
      className="h-6 w-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={() => {
        qty > 1 && setQty(qty - 1);
      }}
    >
      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </button>
  <span className="mx-1 text-2xl text-green-700 font-dancing-script">
    {qty}
  </span>
  <button className="text-gray-500 focus:outline-none focus:text-green-900 focus:scale-105 transition-all transform">
    <svg
      className="h-6 w-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={() => {
        qty < 5 && setQty(qty + 1);
      }}
    >
      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </button>
</div>
</div>