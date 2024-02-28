import React, { useEffect, useState } from "react";
import { categoriesList } from "../../../api/adminApi";
import Modal from "react-modal";
import AddCatregory from "./AddCatregory";
import { changeCategorystatus } from "../../../api/adminApi";

function CourseCategory() {
  const [category, setCategory] = useState([]);
  const [modalIsOpen, setModalIsOPen] = useState(false);
  const [unlistModalOpen, setUnlistModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setModalIsOPen(true);
  };
  const closeModal = () => {
    setModalIsOPen(false);
  };

  const openunlistModal = (categoryId) => {
   
    setUnlistModalOpen(categoryId);
  };

  const closeunlistModal = () => {
    setUnlistModalOpen(null);
  };

  useEffect(() => {
    categoriesList()
      .then((res) => {
        
        setCategory(res?.data?.category);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const listunlistCategory = async (categoryId, listStatus) => {
    try {
      setLoading(true);
      const res = await changeCategorystatus(categoryId);
      if (res?.status === 200) {
        let updatedData = category.map((category) => {
          if (category._id === categoryId) {
            return {
              ...category,
              isBlocked: !listStatus,
            };
          }
          return category;
        });
        setCategory(updatedData);
        setUnlistModalOpen(false);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" w-full pxn -0 mx-0 mb-0 place-items-center">
        <div className="  rounded-lg dark:border-gray-700">
          <div className="relative  shadow-md sm:rounded-lg">
            <div className="bg-slate-400">
              <h1 className="text-3xl pt-2 text-center">
                <b>Categories</b>
              </h1>
            </div>
            <div
              className=" btn flex items-center text-gray-300 focus:bg-slate-400  hover:bg-slate-600 justify-center  dark:bg-gray-950 focus:outline-none"
              onClick={openModal}
            >
              Add New Category
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Add New Category"
              className="w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto bg-transparent  pt-12 outline-none rounded-lg"
            >
              <div className="justify-end">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-200 rounded-full text-sm w-10 h-10 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white mt-36"
                >
                  <svg
                    className="w-4 h-4 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="text-lg font-semibold text-center pt-5 text-gray-900 dark:text-black">
                Add Category
              </h3>
              <AddCatregory />
            </Modal>
            <div className="fixed"></div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {category.length > 0 ? (
                category.map((data) => (
                  <tr
                    key={data._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {data.name}
                        </div>
                      </div>
                    </th>

                    <td className="px-6 py-4">
                      {data.isBlocked ? (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-700 mr-2" />{" "}
                          Blocked
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                          Active
                        </div>
                      )}
                    </td>

                    <td className="px-6 py-4">
                      {data.isBlocked ? (
                        <button
                          type="button"
                          onClick={() => openunlistModal(data._id)}
                          className="focus:outline-none w-24 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          List
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openunlistModal(data._id)}
                          className="focus:outline-none w-24 text-white bg-red-700 hover-bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          UnList
                        </button>
                      )}
                    </td>

                    <div
                      id={`popup-modal-${data._id}`}
                      tabIndex={-1}
                      className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${
                        unlistModalOpen === data._id ? "" : "hidden"
                      }`}
                    >
                      <div className="relative w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover-bg-gray-600 dark:hover-text-white"
                            data-modal-hide={`popup-modal-${data._id}`}
                            onClick={() => closeunlistModal()}
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                          <div className="p-6 text-center">
                            <svg
                              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            {data.isBlocked ? (
                              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure you want to make available{" "}
                                {data.name}?
                              </h3>
                            ) : (
                              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Are you sure to Unlist {data.name}?
                              </h3>
                            )}
                            <button
                              data-modal-hide={`popup-modal-${data._id}`}
                              type="button"
                              onClick={() => {
                                listunlistCategory(data._id, data.isBlocked);
                                closeunlistModal();
                              }}
                              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                              Yes, I'm sure
                            </button>
                            <button
                              data-modal-hide={`popup-modal-${data._id}`}
                              type="button"
                              onClick={() => closeunlistModal()}
                              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover-text-white dark:hover-bg-gray-600 dark:focus:ring-gray-600"
                            >
                              No, cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-900 dark:text-white"
                  >
                    No category added
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CourseCategory;
