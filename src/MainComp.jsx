// import React from 'react';
import Welcome from './Welcome';
import RegistrationForm from './RegistrationForm';
import InfoSection from './InfoSection';

const MainComp = () => {
  return (
    <main className="container mx-auto mt-8 p-4">
      <Welcome />
      <RegistrationForm />
      <InfoSection />
    </main>
  );
};

export default MainComp;
