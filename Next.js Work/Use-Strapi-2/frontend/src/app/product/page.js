'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductComponent from '@/component/product';

const ProductPage = () =>  
{
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() =>
  {
    const token = localStorage.getItem('token');

    if (!token) 
    {
      router.push('/login'); 
    } 
    else 
    {
      setIsAuth(true);
    }

  }, []);

  if (!isAuth) 
  {
    return null;
  }

  return (
    <>
      <ProductComponent />
    </>
  );
}

export default ProductPage;
