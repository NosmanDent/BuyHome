import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function SignInModal({ text, handleClick }) {
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const handleCardClickRemove = () => {
    showRemoveModal(true);
  };

  return (
    <div className="flex flex-row items-center justify-between w-full py-4 px-8 bg-yellow-600 text-white fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
      You are yet to sign in
      <AiOutlineClose />
    </div>
  );
}

export default SignInModal;
