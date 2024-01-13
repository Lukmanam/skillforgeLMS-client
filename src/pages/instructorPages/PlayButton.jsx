import React from "react";
import ReactPlayer from "react-player";

     

const PlayButton = ({ module }) => {
  return (
    <>
      <div
        onClick={() =>
          document.getElementById(`video_play_modal_${module._id}`).showModal()
        }
        className="bg-teal-400 hover:bg-teal-500 hover:cursor-pointer p-1 rounded-md mr-2"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <dialog id={`video_play_modal_${module?._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* React Player */}
          <div className="player-wrapper">
            <ReactPlayer
              url={module?.video_url}
              controls={true}
              width="100%"
              height="100%"
              className="react-player"
            />
          </div>
        </div>
      </dialog>
    </>
  );
};
   

export default PlayButton
