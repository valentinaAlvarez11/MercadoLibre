// app/(webpage)/product/page.tsx
import React from "react";
import Link from "next/link";

export default function ProductIndexPage() {
  // Ejemplo simple: lista con enlaces al detalle (id de ejemplo)
  const sampleProducts = [
    { id: "1", name: "Producto A" },
    { id: "2", name: "Producto B" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <ul>
        {sampleProducts.map((p) => (
          <li key={p.id} className="mb-2">
            <Link href={`/product/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
