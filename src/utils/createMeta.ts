type CreateMetaKs = "name" | "content";

export default function createMeta(params: Record<CreateMetaKs, string>) {
  const meta = document.createElement("meta");

  (Object.keys(params) as Array<CreateMetaKs>).forEach((param) =>
    meta.setAttribute(param, params[param]),
  );

  document.head.appendChild(meta);
}
