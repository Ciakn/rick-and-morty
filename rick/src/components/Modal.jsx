import { XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function Modal({ title, children, onOpen, open }) {
    if (!open) return;
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
                  <button onClick={() => onOpen(false)}>
            <XCircleIcon className="icon close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
