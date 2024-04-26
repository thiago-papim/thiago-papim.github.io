/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Button, ButtonGroup, Collapse } from '@mui/material';
import { arrBackend, arrFrontend } from '../utils/ArrProjetos';

function Projetos() {
  const [modo, setModo] = useState(false);
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const maxLength = 100;

  const truncateText = (text) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <div className="flex w-full items-center font-[Poppins] mt-10 flex-col text-white justify-center">
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button onClick={ () => setModo(false) }>Front-End</Button>
        <Button onClick={ () => setModo(true) }>Back-end</Button>
      </ButtonGroup>
      <div className="flex flex-wrap justify-center mt-5">
        {modo ? (
          arrBackend.map((e, i) => (
            <div
              className="flex flex-col justify-between items-center m-2 p-2 text-center lg:w-[400px] md:w-[300px] w-[85%]"
              style={ { boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)' } }
              key={ i }
            >
              <p className="py-5 text-[#64b5f6]">{e.name}</p>
              <Collapse in={ expandedIndex === i }>
                <p>{e.description}</p>
              </Collapse>
              {e.description.length > maxLength ? (
                <>
                  {expandedIndex === i ? '' : <p>{truncateText(e.description)}</p>}
                  <Button
                    onClick={ () => handleExpandClick(i) }
                    style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
                  >
                    {expandedIndex === i ? 'Recolher' : 'Expandir'}
                  </Button>
                </>
              ) : (
                <p>{e.description}</p>
              )}
              <button
                style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
                className="transition duration-700 border-[#64b5f6] bg-[#201c24] border-2 h-10 text-[#64b5f6] px-4 rounded-3xl
          hover:text-black hover:bg-[#64b5f6] my-2 w-[200px]"
              >
                Ver código
              </button>
            </div>
          ))
        ) : (
          arrFrontend.map((e, i) => (
            <div
              className="flex flex-col justify-between items-center m-2 p-2 text-center lg:w-[400px] md:w-[300px] w-[85%]"
              style={ { boxShadow: '0 0 20px rgba(0, 0, 0, 0.9)' } }
              key={ i }
            >
              <p className="py-5 text-[#64b5f6]">{e.name}</p>
              <Collapse in={ expandedIndex === i }>
                <p>{e.description}</p>
              </Collapse>
              {e.description.length > maxLength ? (
                <>
                  {expandedIndex === i ? '' : <p>{truncateText(e.description)}</p>}
                  <Button
                    onClick={ () => handleExpandClick(i) }
                    style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
                  >
                    {expandedIndex === i ? 'Recolher' : 'Expandir'}
                  </Button>
                </>
              ) : (
                <p>{e.description}</p>
              )}
              <button
                style={ { fontFamily: 'Poppins, sans-serif', fontWeight: 500 } }
                className="transition duration-700 border-[#64b5f6] bg-[#201c24] border-2 h-10 text-[#64b5f6] px-4 rounded-3xl
          hover:text-black hover:bg-[#64b5f6] my-2 w-[200px]"
              >
                Ver código
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Projetos;
