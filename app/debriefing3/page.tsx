"use client"

import { Container } from "@mui/material";

function Debriefing() {
  return (
    <Container maxWidth="md">
      <h3 className='text-3xl font-semibold title'>Debriefing Letter</h3>
      <p>University of Waterloo</p>

      <p>Dear Participant,</p>

      <p>
      Thank you for participating in the third part of our study. We appreciate your contribution and look forward to your continued involvement in the fourth part of the study six weeks from now. The fourth part will take less than a minute of your time and you will receive $0.30 in addition to the $0.30 you have received today.      </p>

      <p>
      Your confidentiality is our priority, and your identity will remain anonymous. Participation is voluntary, and you can withdraw at any time without consequence. You will receive a full debriefing after you complete the second part of our study. 
      </p>

      <p>
      For any questions or concerns, contact Jordan Sheen at jsheen@uwaterloo.ca.
      </p>

      <div>Best regards,</div>

      <div>Jordan Sheen</div>
      <div>Student investigator</div>
      <div>jsheen@uwaterloo.ca</div>
    </Container>
  );
}

export default Debriefing;