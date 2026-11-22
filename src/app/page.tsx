import Image from "next/image";
import Link from "next/link";
import { getCatalog } from "@/api/catalog";
import { MenuCard } from "@/components/MenuCard";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./page.module.css";

const CATEGORY_LABELS: Record<string, string> = {
  pizza: "Пиццы",
  breakfast: "Завтраки",
  wings: "Крылышки",
  milkshake: "Милкшейки",
};

export const instant = false;

const IndexPage = async () => {
  const { catalog } = await getCatalog();

  const categories = [...new Set(catalog.map((p) => p.category))];

  const sections = categories.map((category) => ({
    category,
    products: catalog.filter((p) => p.category === category),
  }));

  return (
    <div className="container">
      <div className={styles.columns}>
        <div className={styles.menu}>
          <nav className={styles.categories}>
            {categories.map((category) => {
              return (
                <ButtonLink key={category} href={`/#${category}`} variant="muted" size="md">
                  {CATEGORY_LABELS[category]}
                </ButtonLink>
              );
            })}
          </nav>

          {sections.map(({ category, products }) => {
            return (
              <section key={category} id={category} className={styles.section}>
                <h2 className={styles.category}>{CATEGORY_LABELS[category]}</h2>

                <div className={styles.productGrid}>
                  {products.map((product) => {
                    return <MenuCard key={product.name} product={product} />;
                  })}
                </div>
              </section>
            );
          })}
        </div>
        <div className={styles.promo}>
          <Link href="/">
            <Image src="/promo.png" alt="promo" width={282} height={365} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
