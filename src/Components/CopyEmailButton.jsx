import { useState } from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CopyEmailButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "esbeyajanikarrar@gmail.com";
  const handleCopyClick = () => {
    const el = document.createElement("textarea");
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    // Provide visual feedback
    setIsCopied(true);

    // Reset the copy status after a short delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <button
      onClick={handleCopyClick}
      className="handleCopyClick"
      style={{
        border: "none",
        fontSize: "14px",
        backgroundColor: "transparent",
        fontWeight: "500",
        animationDuration: "5s",
        textDecoration: "underline",
      }}
    >
      <div
        className="divCopyIcon"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isCopied ? "Copied!" : email}
        <ContentCopyIcon
          className="cobyIcon"
        />
      </div>
    </button>
  );
};

export default CopyEmailButton;
