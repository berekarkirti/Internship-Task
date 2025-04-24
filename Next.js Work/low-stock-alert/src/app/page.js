import InventoryTable from '../components/InventoryTable';
import { inventoryData } from '../data/inventory';

export default function Home() 
{
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-800">
          Low Stock Alert Dashboard
        </h1>

        <div className="card">
          <InventoryTable inventory={inventoryData} />
        </div>

      </div>
      
    </div>
  );
}