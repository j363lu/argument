"use client"

import { Container } from "@mui/material";

function Debriefing() {
  return (
    <Container maxWidth="md">
      <h3 className='text-3xl font-semibold title'>Debriefing Letter</h3>
      <p>University of Waterloo</p>

      <div>Jordan Sheen: <a href="mailto: jsheen@uwaterloo.ca">jsheen@uwaterloo.ca</a></div>

      <div>Hadley Perkins: <a href="mailto: hperkins@uwaterloo.ca">hperkins@uwaterloo.ca</a></div>

      <div>Samuel Johnson: <a href="mailto: samuel.johnson@uwaterloo.ca">samuel.johnson@uwaterloo.ca</a></div>

      <p>Dear Participant,</p>

      <p>
        I would like to thank you for your completion of this study. The following lists the psychological research and theory that created the foundation of our experiment and will provide you with further information about our research goals.
      </p>

      <p>
        We sought to investigate if exposure to vignettes would lead to short and long-term persuasion of a topic. Likewise, we considered the persuasive power of different arguments on short- and long-term shifts in attitude. We selected the topics of kidney market legalization and free trade as many are opposed to it, while a majority of economists are in favor of it. We also assessed ratings of one’s need of cognition and political orientation.
      </p>

      <p>
      Our hypotheses are as follows:
        <ol className='pl-5'>
          <li>1. Participants will be more in favor of kidney market legalization or free trade in the short term.</li>
          <li>2. Participants will be more in favor of kidney market legalization or free trade in the long term.</li>
          <li>3. Individuals will experience a higher level of persuasion the more vivid their memory of the event is.</li>
          <li>4. Individuals will experience a higher level of persuasion the more accurate their memory of the event is.</li>
        </ol>
      </p>

      <p>
        The experiment included twelve (2x2x3) conditions. Participants were divided into either liberal or conservative after their initial questionnaire. After being split by political orientation half the participants had to argue about kidney markets half had to talk about free trade. Each condition was split again were a third of participants was being persuaded by their political in-group, another third was being persuaded by telling them that their opinions were similar to their political outgroup, and the last third had to simply write about how they felt towards kidney markets or free trade.
      </p>

      <p>
      This study has been reviewed and received ethics clearance through a University of Waterloo Research Ethics Committee (ORE# 46093). If you have questions for the committee, contact the Office of Research Ethics, toll-free at 1-833-643-2379 (Canada and USA), 1-519-888-4440, or <a href="mailto: reb@uwaterloo.ca">reb@uwaterloo.ca</a>.
      </p>

      <p>
      Your identity will remain confidential. Furthermore, as our hypotheses are reliant upon the average of group responses, you will not be identified as an individual in the written research reports. The data, deidentified and anonymized, will be retained for at least 7 years following publication of the research, then undergo permanent deletion. The data will be securely stored and only researchers associated with the experiment are permitted access.
      </p>

      <p>
      De-identified data related to your participation will be submitted to an open access repository (OSF) or journal (i.e., the data could be publicly available). These data will be deidentified/anonymized prior to submission and will be presented in aggregate form in publications. This process is integral to the research process as it allows other researchers to verify results and avoid duplicating research. Other individuals could access these data through the open access repository. Although the dataset without identifiers may be shared publicly, your identity will remain confidential.
      </p>

      <p>
      For questions, please contact the researcher at <a href="mailto: jsheen@uwaterloo.ca">jsheen@uwaterloo.ca</a>.
      </p>

      <p>
      Please recall that data pertaining to you as an individual participant will remain confidential. Once all the data are collected and analyzed for this project, the researchers plan to share their findings with the research community through seminars, conferences, presentations, and journal articles. If you are interested in receiving additional information about our experiment&apos;s results or would like a summary of the findings, please provide your email address, and when the study is complete, we will forward additional information. Please contact the researchers with questions or concerns about the experiment.
      </p>

      <div>Student investigator</div>

      <div>Jordan Sheen</div>
      <div>University of Waterloo</div>
      <div>Department of Psychology</div>
      <div><a href="mailto: jsheen@uwaterloo.ca">jsheen@uwaterloo.ca</a></div>
    </Container>
  );
}

export default Debriefing;