import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    experience: '',
    preferredFormat: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    setFormData({
      name: '',
      email: '',
      age: '',
      experience: '',
      preferredFormat: '',
    });
    setCurrentStep(1);
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    // <motion.div>
    <section className="bg-gray rounded-lg shadow-lg p-6 mb-12">
      <h3 className="text-2xl font-semibold mb-4">Register for Tournaments</h3>
      <form onSubmit={handleSubmit} className="space-y-4 color-white">
        {currentStep === 1 && (
          <FormStep1 formData={formData} handleInputChange={handleInputChange}  />
        )}
        {currentStep === 2 && (
          <FormStep2 formData={formData} handleInputChange={handleInputChange} />
        )}
        {currentStep === 3 && (
          <FormStep3 formData={formData} handleInputChange={handleInputChange} />
        )}
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center"
            >
              <ChevronLeft className="mr-2" /> Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center ml-auto"
            >
              Next <ChevronRight className="ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center ml-auto"
            >
              Submit <CheckCircle className="ml-2" />
            </button>
          )}
        </div>
      </form>
    </section>
    // </motion.div>
  );
};

export default RegistrationForm;