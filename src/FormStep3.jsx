// import React from 'react';
import { color, motion } from 'framer-motion';

const FormStep3 = ({ formData, handleInputChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <select
        name="preferredFormat"
        value={formData.preferredFormat}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Preferred Cricket Format</option>
        <option value="t20" style={{color:"white"}}>T20</option>
        <option value="odi" style={{color:"white"}}>ODI</option>
        <option value="test" style={{color:"white"}}>Test</option>
      </select>
    </motion.div>
  );
};

export default FormStep3;