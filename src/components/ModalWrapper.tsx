import React from "react";
import { GoX } from "react-icons/go";

const ModalWrapper: React.FC<{
  onClose: () => void;
  children: React.ReactNode;
}> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <GoX className="text-lg" />
          </button>
        </div>
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
