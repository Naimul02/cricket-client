import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  console.log("user : ", user);
  const {
    refetch,
    isLoading,
    data: orders = [],
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/addtocart?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const handleDelete = (order) => {
    fetch(`http://localhost:5000/addtocart?id=${order._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your product has been successfully deleted");
        refetch();
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      {orders ? (
        <h1 className="lg:mx-[104px]  mx-4 text-2xl text-green-600 font-semibold mt-3">
          Your Order
        </h1>
      ) : (
        <></>
      )}
      <div className="mt-4">
        {orders.length ? (
          orders.map((order) => (
            <div className=" overflow-x-auto shadow-md sm:rounded-lg lg:mx-[104px]">
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
                    <td className="px-6 py-4">
                      <p
                        className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer"
                        onClick={() => handleDelete(order)}
                      >
                        Remove
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <h3 className="text-2xl my-10 font-semibold lg:mx-[104px] mx-4 text-green-600">
            You have not ordered any products yet
          </h3>
        )}
      </div>
      {orders.length ? (
        <div className="flex lg:mx-0 mx-2 lg:flex-row flex-col">
          <Link to="/checkout">
            <button className="btn bg-green-600 lg:ml-[104px] text-center mt-3 text-white lg:w-[300px] hover:bg-emerald-700 w-full ">
              Proceed to checkout
            </button>
          </Link>
          <Link to="/shopallproducts">
            <button className="btn bg-green-600 lg:ml-[12px] text-center mt-3 text-white lg:w-[300px] hover:bg-emerald-700 mb-[4%] w-full">
              Back to shopping
            </button>
          </Link>
        </div>
      ) : (
        <Link to="/shopallproducts">
          <button className="btn bg-green-600 lg:mx-[104px] text-center mt-3 text-white lg:w-[300px] hover:bg-emerald-700 mb-[4%] w-[342px] mx-2">
            Back to shopping
          </button>
        </Link>
      )}
    </div>
  );
};

export default Orders;
