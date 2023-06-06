import React, { useState } from 'react';
import Frontend from './Frontend';

function Projetos() {
  const [project, setProject] = useState('frontend');
  return (
    <div className="lg:w-4/5 fontHeader flex flex-col items-center">
      <h1
        className="lg:text-6xl text-4xl text-center pb-6 dark:text-white"
      >
        Projetos
      </h1>
      <div className="flex w-4/5">
        <button
          className="btnHeader mx-8 fontHeader"
          onClick={ () => { setProject('frontend'); } }
        >
          <p className="text-xl">
            Front-end
          </p>
        </button>
        <button
          className="btnHeader mx-4 fontHeader"
          onClick={ () => { setProject('backend'); } }
        >
          <p className="text-xl">
            Back-end
          </p>
        </button>
      </div>
      { project === 'frontend'
        ? (
          <h1
            className="lg:text-4xl text-3xl pt-4 border-b-4 border-b-gray-400
             dark:text-white"
          >
            Front-end

          </h1>)
        : (
          <h1
            className="lg:text-4xl text-3xl pt-4 border-b-4 border-b-gray-400
             dark:text-white"
          >
            Back-end

          </h1>
        )}
      <div className="flex w-full h-full">
        { project === 'frontend' ? <Frontend /> : '' }
      </div>
    </div>
  );
}

export default Projetos;
