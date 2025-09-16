export const metadata = {
  title: "Crear Producto | MercadoLibre",
  description: "Agrega un nuevo producto a MercadoLibre. Gestiona tu inventario fácilmente.",
  keywords: ["crear producto", "mercadolibre", "inventario", "ecommerce"],
  openGraph: {
    title: "Crear Producto | MercadoLibre",
    description: "Agrega un nuevo producto a MercadoLibre. Gestiona tu inventario fácilmente.",
    url: "http://localhost:3000/createproduct",
    images: [
      {
        url: "/assets/mercadolibre.png",
        width: 800,
        height: 600,
      },
    ],
  },
  alternates: {
    canonical: "http://localhost:3000/createproduct",
  },
};

import CreateProductClient from "./CreateProductClient";

export default function CreateProductPage() {
  return <CreateProductClient />;
}
