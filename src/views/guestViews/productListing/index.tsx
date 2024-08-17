"use client";
import ProductCard from "../productCard";
import { useProductContext } from "../../../../context/ProductContext";
import CouponSuccess from "../couponPopup";
import CouponGift from "../couponGift";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import WrapperContainer from "@/components/UIComponents/WrapperContainer";

export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  originalPrice: number;
  currency: string;
};

const ProductListing = () => {
  const { openCoupon, isCouponAdded } = useProductContext();
  const [productListing, setProductListing] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/getProducts");
        setProductListing(response.data);
      } catch (error) {
        toast.error("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  return (
    <WrapperContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productListing?.map((product) => (
          <ProductCard key={product._id} productDetails={product} />
        ))}
      </div>
      {openCoupon ? <CouponSuccess /> : !isCouponAdded && <CouponGift />}
    </WrapperContainer>
  );
};

export default ProductListing;
