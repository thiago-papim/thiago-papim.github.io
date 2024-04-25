/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-lines */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from 'flowbite-react';
import Header from '../components/Header';
import { arrBackend, arrFrontend } from '../utils/ProjectsGithub';

export default function Projetos() {
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    localStorage.setItem('menuItem', 2);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      className="dark:bg-[url('./images/fundo.png')] dark:text-white h-[100%]
    bg-[url('./images/fundo-white.jpg')]
    min-h-screen"
    >
      <Header />
      <div className="w-[100%] flex flex-col items-center dark:opacity-70">
        <div className="w-[90%]">
          <Typography
            variant="overline"
            display="block"
            gutterBottom
            style={ { fontSize: '17px', textAlign: 'center' } }
          >
            Back-end
          </Typography>
          { arrBackend.map((project, i) => (
            <Accordion
              className="bg-black"
              key={ i }
              expanded={ expanded === `panel${i}` }
              onChange={ handleChange(`panel${i}`) }
            >
              <AccordionSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={ { width: '99%', flexShrink: 0, textAlign: 'center' } }>
                  { project.name }
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  { project.description }
                </Typography>
                <div className="flex justify-center mt-3">
                  <Button
                    variant="contained"
                    onClick={ () => {
                      window.open(project.url);
                    } }
                  >
                    Link do Repositório
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <div className="w-[90%]">
          <Typography
            variant="overline"
            display="block"
            gutterBottom
            style={ { fontSize: '17px', textAlign: 'center' } }
          >
            Front-end
          </Typography>
          { arrFrontend.map((project, i) => (
            <Accordion key={ i } expanded={ expanded === `panel${arrBackend.length + i}` } onChange={ handleChange(`panel${arrBackend.length + i}`) }>
              <AccordionSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={ { width: '99%', flexShrink: 0, textAlign: 'center' } }>
                  { project.name }
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  { project.description }
                </Typography>
                <div className="flex justify-center mt-3">
                  <Button
                    variant="contained"
                    onClick={ () => {
                      window.open(project.url);
                    } }
                  >
                    Link do Repositório
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}

        </div>
      </div>
    </div>
  );
}
