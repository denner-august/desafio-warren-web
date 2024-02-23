import Image from "next/image";
import styles from "./header.module.scss";
import logo from "@/../public/icons/budget.png";

export function Header() {
  return (
    <header className={styles.Container} role="heading">
      <Image
        role="logo"
        priority
        src={logo}
        width={75}
        height={75}
        alt="logo"
        blurDataURL={"@/../public/icons/budget.png"}
      />
    </header>
  );
}
