import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure';
// import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';

const useCart = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic();
    const { data: orders = [] , refetch } = useQuery({
        queryKey: ["orders" , user?.email],
        queryFn: async () => {
          // const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
          const res = await axiosSecure.get(`/carts?email=${user?.email}`)
          // console.log("useCart : " , res.data)
          
          return res.data;
        },
      });
    
      return [orders , refetch]
};

export default useCart;