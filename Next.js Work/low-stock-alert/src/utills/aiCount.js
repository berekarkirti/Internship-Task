export function predictLowStock(item) 
{
    const daysLeft = item.quantity / item.dailySales;
    return {
      ...item,
      daysLeft: Math.floor(daysLeft),
      isLowStock: daysLeft <= 3, 
    };
  }