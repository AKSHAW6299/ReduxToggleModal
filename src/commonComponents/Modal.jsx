import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../actions/modalActions";

const Modal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.users?.isOpen); // ✅ Correct selector

    if (!isOpen) return null;

    // Dummy data for the table
    const dummyData = [
        { id: 1, name: "John Doe", email: "john@example.com", age: 25 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", age: 35 },
        { id: 3, name: "Alice Brown", email: "alice@example.com", age: 22 },
        { id: 4, name: "Bob Johnson", email: "bob@example.com", age: 28 },
        { id: 5, name: "Charlie White", email: "charlie@example.com", age: 35 },
        { id: 6, name: "David Black", email: "david@example.com", age: 45 },
        { id: 7, name: "Emma Wilson", email: "emma@example.com", age: 26 },
        { id: 8, name: "Frank Harris", email: "frank@example.com", age: 29 },
        { id: 9, name: "Grace Lee", email: "grace@example.com", age: 36 },
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-3/4 md:w-2/3 lg:w-1/2 p-8 rounded-xl shadow-2xl relative">
                {/* Close (X) button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                    onClick={() => dispatch(closeModal())}
                >
                    ❌
                </button>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Enhanced Modal</h2>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <th className="border border-gray-300 px-4 py-2">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((user) => (
                                <tr key={user.id} className="text-center hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6 space-x-4">
                    <div></div>
                    <div>
                        <button
                            className="px-6 py-2 bg-gray-500 text-white font-medium hover:bg-gray-600 transition duration-200"
                            onClick={() => dispatch(closeModal())}
                        >
                            Close
                        </button>
                        <button
                            className="px-6 py-2 bg-green-600 text-white font-medium hover:bg-green-700 transition duration-200 ml-2"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
