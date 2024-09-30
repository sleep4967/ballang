export type Product = {
  brand: { id: number; nameEn: string; nameKr: string };
  brandId: number;
  deliveryType: string;
  id: number;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
};
