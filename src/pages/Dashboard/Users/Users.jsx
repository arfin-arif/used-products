import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Users = () => {

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5050/api/users`)
                const data = await res.json();
                return data;
            }
            catch {}
        }
    })

    const handleDeleteUser = (id) =>{
            try {
                    if(window.confirm('Are you sure?')){
                        axios.delete(`http://localhost:5050/api/users/remove/${id}`)
                        toast.success('Deleted successfully')
                        refetch()}
            } catch (error) {
                console.log(error);
            }
    }


    return (
        <>
            <h3 className='text-3xl font-semibold ml-4 mb-2'>All Users</h3>
            <div className="overflow-x-auto mb-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            {/* <th>Action</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((seller, index) => <tr key={seller?._id} className='hover' >
                                <th>{index + 1}</th>
                                <td>{seller?.name?.firstName}</td>
                                <td>{seller?.email} </td>
                                <td>{seller?.role} </td>
                                {/* <td><label className='btn btn-xs' onClick={() => { handleVerify(seller?._id); handleProductStatus(seller?.email) }}>{seller?.status}</label> </td> */}
                                <td ><label onClick={() => handleDeleteUser(seller?._id)} className='btn btn-sm' htmlFor="">X</label></td>

                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </>

    );
};

export default Users;