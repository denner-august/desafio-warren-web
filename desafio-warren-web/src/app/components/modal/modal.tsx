import styles from "./modal.module.scss";
import Registros from "@/../registro/registros.json";
import closeButton from "@/../public/icons/close.png";
import Image from "next/image";

interface modalProps {
  isOpen: boolean;
  setOpen: (e: boolean) => void;
  id: string;
}

export function Modal({ id, isOpen, setOpen }: modalProps) {
  const ModalView = () => {
    let findRegistro = Registros.find((item) => item.id === id);

    if (isOpen) {
      return (
        <section className={styles.Container}>
          <article className={styles["modal-content"]}>
            <div>
              <p>Depósito</p>
              <button onClick={() => setOpen(false)}>
                <Image
                  src={closeButton}
                  width={35}
                  height={35}
                  alt="Picture of the author"
                />
              </button>
            </div>
          </article>
        </section>
      );
    }

    return undefined;
  };

  return <ModalView />;
}
