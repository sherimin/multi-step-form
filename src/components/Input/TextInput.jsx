import React from "react";
import { motion } from "framer-motion";

const TextInput = ({ label, placeholder, error, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between mb-2 text-md">
        <div className="flex text-primary-blue-950">{label}</div>
        {error && (
          <motion.p
            className="text-red-500 font-bold"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {error.message}
          </motion.p>
        )}
      </div>

      <input
        className={`flex w-full border-[1px]  rounded-md outline-primary-purple-600 p-2 ${
          error ? "border-primary-red-500" : "border-neutral-grey-500"
        }`}
        type="string"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
