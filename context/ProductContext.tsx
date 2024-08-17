"use client";
import { Product } from "@/views/guestViews/productListing";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { toast } from "react-toastify";
import { COUPON_NAME } from "../constants/couponConstants";

export interface ProductContextProps {
  handleAddToCart: (productDetails: Product) => void;
  handleAddProduct: (product: ProductDetail) => void;
  handleDecreaseProduct: (product: ProductDetail) => void;
  handleDeleteProduct: (productId: string) => void;
  handleCoupon: () => void;
  handleCouponClose: () => void;
  handleApplyCoupon: (coupon: string) => void;
  handleChangeCoupon: (value: string) => void;
  handleRemoveWarning: (productId: string) => void;
  handleRemoveWarningClose: () => void;
  prodDetails: ProductDetail[];
  openCoupon: boolean;
  isCouponAdded: boolean;
  addedProductIds: string[];
  openWarningDeleteId: string;
  couponText: string;
  isCouponApplied: boolean;
  couponErr: string;
}

export interface ProductDetail extends Product {
  totalPrice: number;
  quantity: number;
  totalDiscount: number;
}

const ProductContext = createContext<ProductContextProps>({
  handleAddToCart: () => {},
  handleAddProduct: () => {},
  handleDecreaseProduct: () => {},
  handleDeleteProduct: () => {},
  handleCoupon: () => {},
  handleCouponClose: () => {},
  handleApplyCoupon: () => {},
  handleChangeCoupon: () => {},
  handleRemoveWarning: () => {},
  handleRemoveWarningClose: () => {},
  prodDetails: [],
  openCoupon: false,
  isCouponAdded: false,
  addedProductIds: [],
  openWarningDeleteId: "",
  couponText: "",
  isCouponApplied: false,
  couponErr: "",
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [prodDetails, setProdDetails] = useState<ProductDetail[]>([]);
  const [openCoupon, setOpenCoupon] = useState(false);
  const [isCouponAdded, setIsCouponAdded] = useState(false);
  const [addedProductIds, setAddedProductIds] = useState<string[]>([]);
  const [openWarningDeleteId, setOpenWarningDeleteId] = useState("");
  const [couponText, setCouponText] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponErr, setCouponErr] = useState("");

  const handleAddToCart = useCallback((product: Product) => {
    toast("Product added to cart!");
    setProdDetails((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);

      if (existingProduct) {
        // Update existing product in cart
        return prevCart.map((item) =>
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
        // Add new product to cart
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

    // Added products array to check conditon for add to cart and added
    setAddedProductIds((prevIds) => [...prevIds, String(product._id)]);
  }, []);

  const handleAddProduct = useCallback((product: ProductDetail) => {
    setProdDetails((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);

      return existingProduct
        ? // Update quantity and price of existing product
          prevCart.map((item) =>
            item._id === product._id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: (item.quantity + 1) * product.price,
                  totalDiscount: (item.quantity + 1) * product.originalPrice,
                }
              : item
          )
        : // Add new product to cart with updating 1 quantity
          [
            ...prevCart,
            {
              ...product,
              quantity: 1,
              totalPrice: product.price,
              totalDiscount: product.originalPrice - product.price,
            },
          ];
    });
  }, []);

  const handleDecreaseProduct = useCallback((product: ProductDetail) => {
    setProdDetails((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          // Decrease quantity and update price and discount if more than one
          return prevCart.map((item) =>
            item._id === product._id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  totalPrice: (item.quantity - 1) * product.price,
                  totalDiscount: (item.quantity - 1) * product.originalPrice,
                }
              : item
          );
        } else {
          // Remove product if quantity is one
          return prevCart.filter((item) => item._id !== product._id);
        }
      }

      // Return previous cart value if product not found
      return prevCart;
    });
  }, []);

  const handleDeleteProduct = useCallback((productId: string) => {
    // Remove product
    setProdDetails((prevCart) =>
      prevCart.filter((item) => item._id !== productId)
    );
    //Changing added text to add to cart again by updating state
    setAddedProductIds((prevCart) =>
      prevCart.filter((item) => item !== productId)
    );
    setOpenWarningDeleteId(""); // Close warning modal
  }, []);

  const handleRemoveWarning = useCallback((productId: string) => {
    setOpenWarningDeleteId(productId);
  }, []);

  const handleRemoveWarningClose = useCallback(() => {
    setOpenWarningDeleteId("");
  }, []);

  const handleCoupon = useCallback(() => {
    setOpenCoupon(true);
    setIsCouponAdded(true);
  }, []);

  const handleCouponClose = useCallback(() => {
    setOpenCoupon(false);
  }, []);

  const handleApplyCoupon = useCallback((coupon: string) => {
    if (coupon === COUPON_NAME) {
      // Coupon is valid
      setIsCouponApplied(true);
      toast.success("Coupon Applied!");
    } else {
      // Coupon is invalid or empty
      setCouponErr(coupon ? "" : "Please enter coupon value");
      if (coupon && coupon !== COUPON_NAME) {
        toast.error("Invalid coupon");
      }
    }
  }, []);

  const handleChangeCoupon = useCallback((value: string) => {
    setCouponText(value);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        handleAddToCart,
        handleAddProduct,
        handleDecreaseProduct,
        handleDeleteProduct,
        handleCoupon,
        handleCouponClose,
        handleApplyCoupon,
        handleChangeCoupon,
        handleRemoveWarning,
        handleRemoveWarningClose,
        prodDetails,
        openCoupon,
        isCouponAdded,
        addedProductIds,
        openWarningDeleteId,
        couponText,
        isCouponApplied,
        couponErr,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextProps => {
  const context = useContext(ProductContext);
  return context;
};
