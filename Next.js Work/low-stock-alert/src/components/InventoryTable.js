"use client";

import { predictLowStock } from '../utills/aiCount';

export default function InventoryTable({ inventory }) 
{
  const predictedInventory = inventory.map(item => predictLowStock(item));

  return (
    <div className="overflow-x-auto">

      <table className="w-full text-left">

        <thead className="bg-blue-600 text-white rounded-t-lg">
          <tr>
            <th className="p-4 font-semibold rounded-tl-lg">Product</th>
            <th className="p-4 font-semibold">Quantity</th>
            <th className="p-4 font-semibold">Days Left</th>
            <th className="p-4 font-semibold">Status</th>
            <th className="p-4 font-semibold rounded-tr-lg">Action</th>
          </tr>
        </thead>

        <tbody>
            
          {predictedInventory.map(item => (

            <tr key={item.id} className={`table-row border-b border-gray-200 ${ item.isLowStock ? 'bg-red-50' : 'bg-white' }`}>
              <td className="p-4 font-medium text-gray-800">{item.name}</td>
              <td className="p-4 text-gray-600">{item.quantity}</td>
              <td className="p-4 text-gray-600">{item.daysLeft} days</td>
              <td className="p-4">
                {item.isLowStock 
                ? 
                (
                  <span className="text-red-600 font-semibold">Low Stock!</span>
                ) 
                : 
                (
                  <span className="text-green-600 font-semibold">Sufficient</span>
                )}
              </td>
              <td className="p-4">
                {item.isLowStock 
                && 
                (
                  <button className="btn-primary" onClick={() => alert(`Order more ${item.name}!`)}>Order Now</button>
                )}
              </td>
            </tr>
          ))}

        </tbody>

      </table>
      
    </div>
  );
}