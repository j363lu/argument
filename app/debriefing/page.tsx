"use client"

import { Container } from "@mui/material";

function Debriefing() {
  return (
    <Container maxWidth="md">
      <h3 className='text-3xl font-semibold title'>University of Waterloo</h3>

      <p>Dear Participant,</p>

      <p>
        Thank you for participating in the first part of our study. We appreciate your contribution and look forward to your continued involvement in the second part of the study one week in the future. The second part will take three minutes of your time and you will receive $0.60 in addition to the $0.90 you have received today.
      </p>

      <p>
        Your confidentiality is our priority, and your identity will remain anonymous. Participation is voluntary, and you can withdraw at any time without consequence. You will receive a full debriefing after you complete the second part of our study.
      </p>

      <p>
        For any questions or concerns, contact Jordan Sheen at <a href="mailto: jsheen@uwaterloo.ca">jsheen@uwaterloo.ca</a>.
      </p>

      <p>Best regards,</p>

      <div>Jordan Sheen</div>
      <div>Student investigator</div>
      <div><a href="mailto: jsheen@uwaterloo.ca">jsheen@uwaterloo.ca</a></div>
    </Container>
  );
}

export default Debriefing;