import React, { useState } from "react";
import { deleteModule } from "../../../api/instructorApi";
import { toast } from "react-toastify";

const ModuleDelete = ({ module, setModules, modules,courseId}) => {
  const [deleting, setDeleting] = useState(false);
  

  const handleModuleDelete = async (moduleId) => {
    try {
      const response = await deleteModule(moduleId,courseId);
      const updatedModuleList = modules.filter(
        (module) => module._id !== moduleId
      );
      setModules(updatedModuleList);
      toast.success("Module deleted successfully.");
      document.getElementById(`module_delete_modal_${module._id}`).close();
      setDeleting(false);
    } catch (error) {
        console.log(error);
      setDeleting(false);
      toast.error("Error while deleting module.");
    }
  };

  return (
    <>
      <div
        onClick={() =>
          document
            .getElementById(`module_delete_modal_${module._id}`)
            .showModal()
        }
        className="bg-red-700 hover:bg-red-800 hover:cursor-pointer p-1 rounded-md"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 5.5L19.0982 12.0062M4.5 5.5L5.10461 15.5248C5.25945 18.0922 5.33688 19.3759 5.97868 20.299C6.296 20.7554 6.7048 21.1407 7.17905 21.4302C7.85035 21.84 8.68108 21.9631 10 22"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M20 15L13 21.9995M20 22L13 15.0005"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 5.5H3"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <dialog id={`module_delete_modal_${module._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <svg
            className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="mb-1 text-center text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this module?
          </p>
          <p className="text-sm mb-4 text-center font-bold">
            This module will be permanently deleted.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() =>
                document
                  .getElementById(`module_delete_modal_${module._id}`)
                  .close()
              }
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button>

            {deleting ? (
              <button
                disabled
                className="py-2 px-3 text-sm font-medium bg-red-700 text-white hover:bg-red-800 rounded-md"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                deleting...
              </button>
            ) : (
              <button
                onClick={() => handleModuleDelete(module._id)}
                className="py-2 px-3 text-sm font-medium bg-red-700 text-white hover:bg-red-800 rounded-md"
              >
                Yes, I'm sure
              </button>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModuleDelete;
