import { useState } from "react";

export default function useMeta<
  // eslint-disable-next-line @typescript-eslint/ban-types
  K extends string = "name" | "content" | (string & {}),
>(params: Record<K, string>) {
  const head = document.head;
  const [meta] = useState(() => document.createElement("meta"));

  if (head.contains(meta)) {
    (Object.keys(params) as Array<K>).forEach((param) =>
      meta.setAttribute(param, params[param]),
    );
  } else head.insertAdjacentElement("beforeend", meta);
}
