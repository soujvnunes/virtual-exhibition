import { useState } from "react";

export default function useMeta(name: string, content: string) {
  const head = document.head;
  const [meta] = useState(() => document.createElement("meta"));

  if (head.contains(meta)) {
    meta.setAttribute("name", name);
    meta.setAttribute("content", content);
  } else head.insertAdjacentElement("beforeend", meta);
}
