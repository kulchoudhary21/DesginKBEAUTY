interface Product {
  id: Number;
  title: string;

  image: string;
  description: string;
  url: string;
}
const ProductsReadNow: Product[] = [
  {
    id: 1,
    title: "BABY IT'S COLD OUTSIDE",
    image: "../../public/images/readnow3.png",
    description:
      "Winter's here, and there's nothing dry, dehydrated or atopic skin likes less! Cooling temperatures, increased use of heating and declining humity...",
    url: "#",
  },
  {
    id: 2,
    title: "BABY IT'S COLD OUTSIDE",
    image: "../../public/images/readnow2.png",
    description:
      "COSRX Aloe Soothing Sun Cream offers high protection with SPF 50+ PA+++. Enriched with aloe vera leaf extract, it calms and soothes the skin while providing effective sun protection. It absorbs quickly without leaving a greasy feeling, making it ideal for daily use on both face and body.",
    url: "#",
  },
  {
    id: 3,
    title: "BABY IT'S COLD OUTSIDE",
    image: "../../public/images/readnow1.png",
    description:
      "Purito Centella Green Level Unscented Sun offers high SPF 50+ PA++++ protection against UVA and UVB rays. Formulated with centella asiatica extract and other mild ingredients, it is suitable for sensitive skin. It provides a lightweight, non-greasy finish, making it comfortable for daily wear.",
    url: "#",
  },
];
export default ProductsReadNow;
