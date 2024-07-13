import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user} = useContext(AuthContext);
    const { data: orders = [] , refetch } = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
          const data = res.json();
          return data;
        },
      });
    
      return [orders , refetch]
};

export default useCart;