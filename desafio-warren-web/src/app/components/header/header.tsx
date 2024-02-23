import Image from "next/image";
import styles from "./header.module.scss";
import logo from "@/../public/icons/budget.png";

export function Header() {
  return (
    <header className={styles.Container}>
      <Image
        src={logo}
        width={75}
        height={75}
        alt="Picture of the author"
        blurDataURL={"@/../public/icons/budget.png"}
      />
    </header>
  );
}
