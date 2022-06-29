import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Cảm ơn đã order</h2>
        <p className="email-msg">Kiểm tra email để check hóa đơn</p>
        <p className="description">
          Nếu có câu hỏi gì liên quan, xin liên hệ
          <a className="email" href="mailto:minhdangtechshop@techshop.com">
            minhdangtechshop@techshop.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Về trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
