import * as React from "react";
import Image from "next/image";

import closeImg from "../../images/x.svg";



interface MessageProps {
  title: string;
  status?: "success" | "error";
  onClose: () => void;
}

const Message: React.FC<MessageProps> = ({
  title,
  status = "neutral",
  children,
  onClose,
}) => (
  <div className={`message message__status-${status}`}>
    <p className="message__title">{title}</p>
    {children ? <div className="message__content">{children}</div> : null}
    <Image
      src={closeImg}
      className="message__close-icon"
      onClick={onClose}
    />
  </div>
);

export default Message;
