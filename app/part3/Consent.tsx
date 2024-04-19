"use client"

// This component renders the consent page before the survey begins
import React, { useState } from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import { Container } from '@mui/material';
import NavigationButton from '../components/NavigationButton';

function Consent() {
  const [consent, setConsent] = useState("0");

  // triggered when consent changes
  const handleConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsent(event.target.value);
  }

  return (
    <div>
      <Container maxWidth="md">
        <h3 className='text-3xl font-semibold title'>Information and Consent Letter - MTurk</h3>

        <p><strong>* Please read this consent form and select the applicable choice.</strong></p>

        <p><strong>Title of Project:</strong> Attitudes towards social issues</p>

        <p><strong>Student Investigator:</strong></p>
        <p>Jordan Sheen</p>
        <ul className='list-disc pl-5'>
          <li>University of Waterloo, Waterloo, Ontario, Canada (Psychology)</li>
          <li><a href="mailto: jsheen@uwaterloo.ca">jsheen@uwaterloo.ca</a></li>
        </ul>
      </Container>

      <Container maxWidth="md">
        <p>
          This letter will explain what the study is about, possible risks and benefits, and your rights as a
          research participant. If you are concerned about or do not understand something in the letter,
          please ask one of the investigators prior to consenting to the study. You are invited to participate in a study investigating prosocial behaviours.
        </p>

        <br />

        <strong>
          <p>I. Your Responsibilities as a Participant:</p>
          <p>What This Study Involves</p>
        </strong>

        <p>
          This study is seeking to investigate what persuasive techniques work best long term. This study is being conducted by a team of researchers, primarily working with Sam Johnson. This study takes place online. You will first be asked to state your opinion on kidney markets and then engage with an AI. You will then be asked to complete a questionnaire. We value your honest participation. The entire study will last approximately 30 seconds
        </p>

        <br />

        <strong>
          <p>II. Your Rights as a Participant:</p>
          <p>Participation and Remuneration</p>
        </strong>

        <p>
          Your participation in this study is voluntary. Our current estimate for the length of this study is less than one minutes and you will receive $0.30 . You may decline to answer any question that you do not wish to answer by leaving them blank, and you can withdraw your participation at any time by not submitting responses without penalty and or loss of credit. To receive credit, please proceed to the end of the questionnaire.
        </p>

        <strong><p>Personal Benefits of the Study</p></strong>

        <p>
          Participating in this study will not provide any direct personal benefits.
        </p>

        <strong><p>Risks to Participation in the Study</p></strong>

        <p>
          There are no known or anticipated risks with participating in this study
        </p>

        <strong><p>Confidentiality</p></strong>

        <p>
          You will be completing the study by an online survey operated by Qualtrics. Qualtrics has implemented technical, administrative, and physical safeguards to protect the information provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet transmission is ever fully secure or error free. Please Note: We do not collect or use internet protocol (IP) addresses or other information which could link your participation to your computer or electronic device. The data collected from this study will be anonymously collected via Qualtrics, maintained without any identifying information, and stored on secure University of Waterloo servers. The data will be electronically archived after completion of the study and maintained for at least 7 years and then erased. Data related to your participation may be submitted to an open access repository or journal (i.e., the data may be publicly available). Data will be completely anonymous from the beginning of the study and will be presented in aggregate form in publications. This process is integral to the research process as it allows other researchers to verify results and avoid duplicating research. Other individuals may access these data by accessing the open access repository. Although the anonymized dataset may be shared publicly, your identity will always remain confidential.
        </p>

        <strong><p>Research Ethics Clearance</p></strong>

        <p>
          This study has been reviewed and received ethics clearance through a University of Waterloo Research Ethics Board (ORE #46093). If you have questions for the Board, contact the Office of Research Ethics, toll-free at 1-833-643-2379 (Canada and USA), 1- 519-888-4440, or reb@uwaterloo.ca.
        </p>

        <strong><p>Questions?</p></strong>

        <p>
          If you have any questions related to this study or would like additional information 
          to help assist you in reaching a decision about participation, please contact the DICE lab at 
          dicelab@uwaterloo.ca 
        </p>
      </Container>

      <br/>

      <Container maxWidth="md">
        <strong><p>Consent to Participate</p></strong>

        <p>
          By providing your consent, you are not waiving your legal rights or releasing the investigator(s)
          or involved institution(s) from their legal and professional responsibilities.
        </p>

        <FormControl>
          {/* Radio buttons */}
          <RadioGroup
            name="consent"
            onChange={handleConsentChange}
          >
            <FormControlLabel 
              value={1} control={<Radio />} 
              label="Yes, I consent to participate in this study." />
            <FormControlLabel 
              value={0} control={<Radio />} 
              label="No, I do not consent (You will not be able to participate in this study)" />
          </RadioGroup>

        </FormControl>

      </Container>

      <NavigationButton disableNext={consent === "0"} part3={true} />

    </div>
  );
}

export default Consent;