import React from "react";

const ProductDetailFunctionBtn = () => {
  return (
    <div>
      <div className="flex-block product-detail-sec-btn-group">
        <div className="flex-block quantity-input-container">
          <div className="quantity-symbol-btn">
            <svg
              width="11"
              height="4"
              viewBox="0 0 11 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3877 0.772727V3.27273H0.205833V0.772727H10.3877Z"
                fill="#5C469C"
              />
            </svg>
          </div>

          <input
            type="text"
            value={1}
            className="product-detail-quantity-input"
          />

          <div className="quantity-symbol-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33865 15.4091V0.40909H8.8841V15.4091H6.33865ZM0.111373 9.18182V6.63636H15.1114V9.18182H0.111373Z"
                fill="#5C469C"
              />
            </svg>
          </div>
        </div>

        <div className="product-detail-like-btn">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4.15428C8 -0.540161 1 -0.0401611 1 5.95987C1 11.9599 10 16.9601 10 16.9601C10 16.9601 19 11.9599 19 5.95987C19 -0.0401611 12 -0.540161 10 4.15428Z"
              stroke="#5C469C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <button className="product-detail-add-btn background-dark-purple color-white uppercase">
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetailFunctionBtn;
