import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../components/Loading/Loading";


const MyOrders = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);

    const {data : myOrders , refetch , isLoading } = useQuery({
        queryKey : ['myOrders'],
        queryFn : async() => {
            const res = await axiosPublic.get(`/confirmorder?email=${user?.email}`);
            // const orders = await res?.data.map(order => order.carts)
           console.log("myorders " , res.data);
            return res.data

        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="px-10 mt-4">
            <h2 className="text-2xl font-bold mb-3">My orders</h2>


            {/* orders */}
           <div>
           {
                myOrders?.map(order => (<div className=" overflow-x-auto shadow-md sm:rounded-lg" key={order?.key}>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="w-[96px] h-[96px] p-4 rounded-full">
                            <div className="lg:w-[64px] w-[64px] lg:h-[64px] h-[64px]">
                              <img
                                src={order?.image}
                                alt="Apple Watch"
                                className="rounded-full lg:w-[64px] w-[64px] lg:h-[64px] h-[64px] "
                              />
                            </div>
                          </td>
      
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white lg:w-[490px] w-[220px]">
                            <p className="lg:w-[490px] w-[220px]">
                              {order?.productName}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              {order.quantity}
                            </div>
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {order?.recentPrice}
                          </td>
                          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            {order?.recentPrice * order?.quantity}
                          </td>
                          {/* <td className="px-6 py-4">
                            <p
                              className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer"
                              onClick={() => handleDelete(order)}
                            >
                              Remove
                            </p>
                          </td> */}
                        </tr>
                        
                      </tbody>
                    </table>
                      
                  </div>))
            }
           </div>

        </div>
    );
};

export default MyOrders;