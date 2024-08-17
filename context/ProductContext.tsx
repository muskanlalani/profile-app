"use client";
import { Product } from "@/views/guestViews/productListing";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { COUPON_NAME } from "../constants/couponConstants";

export interface ProductContextProps {
  handleAddToCart: (productDetails: Product) => void;
  handleAddProduct: (product: ProductDetail) => void;
  prodDetails: ProductDetail[];
  openCoupon: boolean;
  handleDecreaseProduct: (product: ProductDetail) => void;
  handleDeleteProduct: (productId: string) => void;
  handleCoupon: () => void;
  handleCouponClose: () => void;
  isCouponAdded: boolean;
  addedProductIds: string[];
  openWarningDeleteId: string;
  couponText: string;
  handleRemoveWarning: (productId: string) => void;
  handleRemoveWarningClose: () => void;
  handleApplyCoupon: (coupon: string) => void;
  handleChangeCoupon: (value: string) => void;
  isCouponApplied: boolean;
}

export interface ProductDetail extends Product {
  totalPrice: number;
  quantity: number;
  totalDiscount: number;
}

const ProuctContext = createContext<ProductContextProps>({
  handleAddToCart: () => {},
  handleAddProduct: () => {},
  handleDecreaseProduct: () => {},
  handleDeleteProduct: () => {},
  prodDetails: [],
  openCoupon: false,
  isCouponAdded: false,
  addedProductIds: [],
  openWarningDeleteId: "",
  couponText: "",
  handleCoupon: () => {},
  handleCouponClose: () => {},
  handleRemoveWarning: () => {},
  handleRemoveWarningClose: () => {},
  handleApplyCoupon: () => {},
  handleChangeCoupon: () => {},
  isCouponApplied: false,
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [prodDetails, setProdDetails] = useState<ProductDetail[]>([]);
  const [openCoupon, setOpenCoupon] = useState(false);
  const [isCouponAdded, setIsCouponAdded] = useState(false);
  const [addedProductIds, setAddedProductIds] = useState<string[]>([]);
  const [openWarningDeleteId, setOpenWarningDeleteId] = useState("");
  const [couponText, setCouponText] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handleAddToCart = (product: Product) => {
    toast("Product added to cart!");
    setProdDetails((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart?.map((item) =>
          item._id === product._id
            ? {
                ...item,
                totalPrice: item.price,
                totalDiscount: item.originalPrice,
                isAdded: true,
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity: 1,
            totalPrice: product.price,
            totalDiscount: product.originalPrice,
          },
        ];
      }
    });
    setAddedProductIds((prevIds) => [...prevIds, String(product._id)]);
  };

  const handleAddProduct = (product: ProductDetail) => {
    setProdDetails((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart?.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * product.price,
                totalDiscount: (item.quantity + 1) * product.originalPrice,
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity: 1,
            totalPrice: product.price,
            totalDiscount: product.originalPrice - product.price,
          },
        ];
      }
    });
  };

  const handleDecreaseProduct = (product: ProductDetail) => {
    setProdDetails((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart?.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: (item.quantity - 1) * product.price,
                totalDiscount: (item.quantity - 1) * product.originalPrice,
              }
            : item
        );
      } else if (existingProduct && existingProduct.quantity === 1) {
        return prevCart.filter((item) => item._id !== product._id);
      } else {
        return prevCart;
      }
    });
  };

  const handleDeleteProduct = (productId: string) => {
    setProdDetails((prevCart) =>
      prevCart.filter((item) => item._id !== productId)
    );
    setOpenWarningDeleteId("");
  };

  const handleRemoveWarning = (productId: string) => {
    setOpenWarningDeleteId(productId);
  };

  const handleRemoveWarningClose = () => {
    setOpenWarningDeleteId("");
  };

  const handleCoupon = () => {
    setOpenCoupon(true);
    setIsCouponAdded(true);
  };

  const handleCouponClose = () => {
    setOpenCoupon(false);
  };

  const handleApplyCoupon = (coupon: string) => {
    if (coupon === COUPON_NAME) {
      setIsCouponApplied(true);
      toast.success("Coupon Applied!");
    } else {
      toast.error("Invalid coupon");
    }
  };

  const handleChangeCoupon = (value: string) => {
    setCouponText(value);
  };

  return (
    <ProuctContext.Provider
      value={{
        handleAddToCart,
        prodDetails,
        openCoupon,
        isCouponAdded,
        addedProductIds,
        couponText,
        openWarningDeleteId,
        handleAddProduct,
        handleDecreaseProduct,
        handleDeleteProduct,
        handleCoupon,
        handleCouponClose,
        handleRemoveWarning,
        handleRemoveWarningClose,
        handleApplyCoupon,
        handleChangeCoupon,
        isCouponApplied,
      }}
    >
      {children}
    </ProuctContext.Provider>
  );
};

export const useProductContext = (): ProductContextProps => {
  const context = useContext(ProuctContext);
  return context;
};
