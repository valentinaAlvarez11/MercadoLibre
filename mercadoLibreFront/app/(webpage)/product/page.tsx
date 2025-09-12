// app/product/[id]/page.tsx
import ProductDetails from '../../../components/molecules/ProductComponent';

// Opcional: Define los props si vas a usar el [id] para buscar datos
interface ProductPageProps {
  params: {
    id: string;
  }
}

// Usamos el `id` de los params para buscar los datos del producto
const ProductPage = ({ params }: ProductPageProps) => {
  // Aquí iría tu lógica para obtener los datos del producto
  // usando params.id (p. ej., con un servicio o API)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      
      {/* El componente ProductDetails que implementa el layout de dos columnas */}
      <ProductDetails />

      {/* Puedes añadir otras secciones de la página aquí, como "Productos Relacionados" */}

    </div>
  );
};

export default ProductPage;