"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type Props = {
  email: string;
};

const CopyEmailButton = ({ email }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <button
        onClick={handleCopy}
        className="flex items-center justify-center hover:text-foreground transition-colors"
        aria-label="Copy email"
        type="button"
      >
        {copied ? (
          <Check className="h-4 w-4 transition-all" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>

      <span>{email}</span>
    </div>
  );
};

export default CopyEmailButton;
