// app/(webpage)/product/[id]/page.tsx
import ProductClient from "./ProductClient";

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Fetch product data from backend
  const res = await fetch(`http://localhost:3000/product/${params.id}`);
  const data = await res.json();
  const product = data.producto;

  if (!product) {
    return {
      title: "Producto no encontrado | MercadoLibre",
      description: "El producto solicitado no existe o fue eliminado.",
      alternates: {
        canonical: `http://localhost:3001/product/${params.id}`,
      },
    };
  }

  return {
    title: `${product.name} | MercadoLibre`,
    description: product.description?.[0] || "Detalles del producto en MercadoLibre.",
    keywords: [product.name, "mercadolibre", "producto", "ecommerce"],
    openGraph: {
      title: `${product.name} | MercadoLibre`,
      description: product.description?.[0] || "Detalles del producto en MercadoLibre.",
      url: `http://localhost:3001/product/${params.id}`,
      images: [
        {
          url: product.imageUrl || "/assets/mercadolibre.png",
          width: 800,
          height: 600,
        },
      ],
    },
    alternates: {
      canonical: `http://localhost:3001/product/${params.id}`,
    },
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductClient id={params.id} />;
}
