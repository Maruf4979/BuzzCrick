// import React from 'react';
import { motion } from 'framer-motion';

const FormStep2 = ({ formData, handleInputChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        placeholder="Age"
        className="w-full p-2 border rounded "
        required
      />
      <select
        name="experience"
        value={formData.experience}
        onChange={handleInputChange}
        className="w-full p-2 border rounded mt-4 color-white"
        required
      >
        <option value="">Select Experience Level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </motion.div>
  );
};

export default FormStep2;