import { useEffect, useRef } from "preact/hooks";

interface Props {
  isOpen: boolean;
}

export default function SearchModal(props: Props) {
    const ref = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (props.isOpen) {
            ref.current?.showModal();
            return;
        }
        ref.current?.close();
    }, [props.isOpen]);
    return (
      <>
        <dialog
          ref={ref}
        >
          <div>{props.children}</div>
        </dialog>
      </>
    );
}
