import Image from "next/image";
import styles from "./MenuCard.module.css";

interface MenuCardProps {
  product: {
    name: string;
    img: string;
  };
}

export const MenuCard = ({ product }: MenuCardProps) => {
  const src = process.env.NEXT_PUBLIC_API_URL + product.img;

  return (
    <article className={styles.card}>
      <Image src={src} alt={product.name} width={200} height={200} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
    </article>
  );
};
