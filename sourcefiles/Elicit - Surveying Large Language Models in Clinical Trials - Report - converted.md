# Survey of the use of Large Language Models in clinical trials.

Large Language Models are increasingly applied across clinical trial processes---particularly patient screening, trial matching, data extraction, and document generation---demonstrating competitive accuracy with human reviewers and substantial efficiency gains, though persistent limitations including hallucinations, difficulty with strict multi-criteria eligibility, and temporal reasoning gaps necessitate human oversight rather than fully autonomous deployment.

## Abstract

Large Language Models are being applied across multiple clinical trial processes, with patient screening and trial matching representing the most frequently studied application among the 25 sources examined. Additional applications include clinical data extraction, protocol document generation, trial design assistance, outcome adjudication, and protocol deviation classification. GPT-4 variants are the most commonly evaluated models, consistently outperforming GPT-3.5 but at higher cost (\$0.15-\$0.27 vs \$0.02-\$0.03 per patient) and longer processing times. Domain-specific models such as OncoLLM, Fu-LLM, and Synapsis LLM demonstrate performance matching or exceeding general-purpose models and human experts in specialized tasks.

Performance varies substantially by task complexity and implementation approach, with criterion-level accuracy ranging from 72% to 97.9%. Retrieval-augmented generation substantially improves performance, increasing clinical reasoning scores from approximately 40% to 80% in protocol generation tasks. LLMs demonstrate competitive performance compared to human reviewers, with one system achieving 95.73% accuracy in 2.5 minutes versus 88-95% accuracy in 427-540 minutes for research nurses, and another reducing screening time by 42.6%. However, significant limitations persist: LLMs struggle to identify patients meeting all eligibility criteria simultaneously, hallucinations occur across applications, and temporal reasoning remains challenging. Consequently, all clinical decision support implementations emphasize that LLMs should complement rather than replace human review, with proportional eligibility scoring to prioritize candidates for manual review representing a practical deployment strategy.

## Paper search

We performed a semantic search across over 138 million academic papers from the Elicit search engine, which includes all of [Semantic Scholar](https://www.semanticscholar.org/) and [OpenAlex](https://openalex.org/).

We ran this query: \"Survey of the use of Large Language Models in clinical trials.\"

The search returned 500 total results from Elicit.

We retrieved 500 papers most relevant to the query for screening.

## Screening

We screened in sources based on their abstracts that met these criteria:

- **LLM Application in Clinical Trials**: Does this study describe the use of Large Language Models in any aspect of clinical trial conduct (including trial design, patient recruitment, data analysis, regulatory submissions, or trial monitoring)?
- **Human Clinical Trial Population**: Does this study involve human clinical trials (Phase I-IV) rather than other types of clinical research such as observational studies, case reports, or cross-sectional studies?
- **Study Design and Evidence Quality**: Is this study a primary research study, case study, pilot study, systematic review, or meta-analysis that contains original data or systematic analysis (rather than conference abstracts, editorials, commentaries, or opinion pieces)?
- **LLM Type and Specification**: Does this study report on commercially available LLMs (e.g., GPT models, Claude, Gemini) or custom-developed LLMs specifically for clinical trial applications?
- **Large Language Model Focus**: Does this study focus specifically on Large Language Models rather than general AI or machine learning applications without LLM components?
- **Practical Implementation Evidence**: Does this study demonstrate practical implementation or provide empirical data rather than presenting only theoretical or conceptual frameworks without evidence of actual use?
- **Clinical Trial-Specific Applications**: Are the LLMs in this study used for specific clinical trial applications rather than only general research tasks such as literature review or writing assistance?

We considered all screening questions together and made a holistic judgement about whether to screen in each paper.

## Data extraction

We asked a large language model to extract each data column below from each paper. We gave the model the extraction instructions shown below for each column.

- **LLM Application**:

<!-- -->

- Extract the specific application or use case of Large Language Models in clinical trials that was studied, including:

<!-- -->

- Primary purpose/function (e.g., data analysis, patient screening, document generation, trial matching, educational materials)
- Specific tasks performed by the LLM
- What clinical trial processes the LLM was intended to support or replace
- Target outputs or deliverables from the LLM application

<!-- -->

- **LLM Models**:

<!-- -->

- Extract details about the Large Language Models evaluated, including:

<!-- -->

- Specific LLM names and versions (e.g., GPT-4, GPT-3.5, Gemini Advanced)
- Number of different LLMs compared
- Model capabilities or specifications mentioned
- Any model modifications or fine-tuning applied

<!-- -->

- **Performance Results**:

<!-- -->

- Extract quantitative and qualitative performance outcomes for LLMs in clinical trial applications, including:

<!-- -->

- Accuracy, sensitivity, specificity, F1 scores, or other performance metrics
- Success rates or effectiveness measures
- Comparison results between different LLMs or against human experts/baselines
- Time savings or efficiency gains
- Cost metrics if reported
- Quality assessments or scoring results

<!-- -->

- **Implementation Methods**:

<!-- -->

- Extract technical and methodological details about how LLMs were implemented for clinical trial applications, including:

<!-- -->

- Prompting strategies used (e.g., chain-of-thought, structured output, self-discover)
- Data inputs provided to LLMs (e.g., EHR notes, trial protocols, patient data)
- Technical approaches (e.g., retrieval-augmented generation, zero-shot, few-shot learning)
- Workflow integration or human-in-the-loop processes
- Model configuration or parameter settings mentioned

<!-- -->

- **Clinical Context**:

<!-- -->

- Extract details about the clinical trial context and scope of the LLM application, including:

<!-- -->

- Disease areas or medical specialties studied
- Clinical trial phases (Phase I, II, III, etc.)
- Types of clinical trial data or documents involved
- Patient population characteristics if relevant
- Healthcare settings (academic medical centers, health networks, etc.)
- Sample sizes for trials or patients evaluated

<!-- -->

- **Limitations Identified**:

<!-- -->

- Extract challenges, limitations, and areas for improvement identified with LLM use in clinical trials, including:

<!-- -->

- Specific performance limitations or failure modes
- Accuracy issues, hallucinations, or inconsistencies noted
- Technical challenges (e.g., context limitations, model drift)
- Need for human oversight or review
- Barriers to implementation or scalability
- Recommendations for addressing identified limitations
- Areas where LLMs fell short compared to human experts

# Characteristics of Included Studies

This systematic review identified 25 sources examining applications of Large Language Models (LLMs) in clinical trials. The studies encompassed a range of applications, from patient screening and trial matching to document generation and data analysis. The majority of studies were published between 2023 and 2025, reflecting the rapid evolution of this field.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------
  Study                                 Full Text Retrieved?   Study Type       Primary LLM Application                      Disease Area
  ------------------------------------- ---------------------- ---------------- -------------------------------------------- --------------------------------
  B.Sc Jacob Beattie et al., 2024       Yes                    Primary study    Patient screening and trial matching         Head and neck cancer

  Dyke Ferber et al., 2024              No                     Primary study    End-to-end clinical trial matching           Oncology

  Ozan Unlu et al., 2024                No                     Primary study    Patient screening for clinical trials        Heart failure

  BA Samantha M. Lai et al., 2024       Yes                    Primary study    Trial screening and eligibility prediction   Pancreatic cancer

  Christine Vecchio et al., 2025        No                     Primary study    Clinical data abstraction for eligibility    Melanoma

  J. Beattie et al., 2025               No                     Primary study    Patient screening for clinical trials        Head and neck cancer

  Liyuan Jin et al., 2024               No                     Primary study    RCT design assistance                        Multiple (not specified)

  R. Tan et al., 2024                   No                     Primary study    Clinical trial screening                     Oncology

  Arti Devi et al., 2024                No                     Primary study    Patient eligibility screening                NSCLC

  Federica Corso et al., 2025           No                     Primary study    Data retrieval and extraction                Advanced lung cancer

  Devin L. Brown et al., 2025           No                     Primary study    Protocol question answering                  Stroke

  Zhao Shi et al., 2025                 No                     Primary study    Clinical outcome adjudication                Cardiovascular disease

  Cliff Wong et al., 2023               Yes                    Primary study    Clinical trial matching in oncology          Oncology

  R. Komandur Elayavilli et al., 2025   No                     Primary study    Clinical trial data analysis                 Small cell lung cancer

  Euibeom Shin et al., 2025             No                     Primary study    Protocol SAP and PK-PD review                Multiple (drugs, biologics)

  Qiao Jin et al., 2023                 Yes                    Primary study    Patient-to-trial matching                    Multiple (oncology pilot)

  D. Hamer et al., 2023                 Yes                    Primary study    Physician-assist pre-screening               Multiple (oncology, neurology)

  Nigel Markey et al., 2024             Yes                    Primary study    Protocol document generation                 14 diseases including TB

  Brenda Adjei et al., 2025             No                     Primary study    Lay clinical trial summary generation        Not specified

  Mingye Gao et al., 2024               No                     Primary study    Educational materials generation             Cancer

  Ramya Sri Baluguri et al., 2025       No                     Primary study    Clinical trial reporting                     Not specified

  K. Y. Huh et al., 2025                No                     Primary study    Analysis of decentralized trials             Multiple phases

  Peng Wu et al., 2025                  No                     Scoping review   Clinical decision-making and education       Digestive diseases

  S. Gupta et al., 2024                 Yes                    Primary study    Automated eligibility matching               Oncology (multiple)

  Min Zou et al., 2025                  Yes                    Primary study    Protocol deviation classification            Oncology (solid tumors)
  -----------------------------------------------------------------------------------------------------------------------------------------------------------

The included studies predominantly focused on oncology applications, with 14 studies examining cancer-related clinical trials. Other disease areas represented included cardiovascular disease, stroke, and digestive diseases. Several studies evaluated LLMs across multiple disease areas or did not specify a particular therapeutic focus.

# LLM Applications in Clinical Trials

The studies revealed six principal categories of LLM applications in clinical trials.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Application Category                   Number of Studies   Primary Tasks                                                                                                    Example Outputs
  -------------------------------------- ------------------- ---------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------
  Patient screening and trial matching   12                  Evaluating eligibility criteria against EHR data, identifying relevant trials, determining patient eligibility   Per-criterion eligibility determinations, ranked trial lists, match decisions with rationales

  Data extraction and retrieval          3                   Converting unstructured text to structured data, extracting clinical features from EHRs                          Structured data on staging, metastases, biomarkers, eligibility answers

  Document generation                    3                   Drafting protocol sections, creating lay summaries, generating educational materials                             Protocol endpoints and eligibility criteria, patient-friendly summaries

  Trial design and analysis              3                   Assisting RCT design, analyzing trial data, reviewing protocols                                                  Generated RCT designs, SAP evaluations

  Clinical outcome adjudication          1                   Preadjudication of death, hospitalization, medication use                                                        Automated outcome identification

  Protocol compliance and reporting      2                   Protocol deviation classification, trial reporting improvement                                                   Labeled PD datasets with explanations, compliant structured reports
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Patient screening and trial matching represented the most frequently studied application, with studies demonstrating that LLMs can assess complex eligibility criteria including disease stage, histology, prior treatments, and performance status. The TrialGPT system exemplified a comprehensive approach, incorporating retrieval, matching, and ranking modules to generate keywords for trial retrieval, predict criterion-level eligibility with explanations, and produce trial-level scores.

# Large Language Models Evaluated

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  LLM                        Studies Using   Model Type                Key Specifications
  -------------------------- --------------- ------------------------- ------------------------------------------------------------------------------------------------------------
  GPT-4/GPT-4o               14              Proprietary (OpenAI)      Higher accuracy but longer processing time, used via Azure OpenAI

  GPT-3.5/GPT-3.5-turbo      8               Proprietary (OpenAI)      Lower cost (\$0.02-\$0.03/patient), faster processing (1.4-3 min/patient)

  Llama 2/Llama 3            3               Open-source (Meta)        Available in 8B and 70B parameter versions, fine-tunable

  Claude 3.5/3.7             2               Proprietary (Anthropic)   Used via Amazon Bedrock, compared in adjudication tasks

  Gemini Advanced            2               Proprietary (Google)      Natural language understanding capabilities

  Custom fine-tuned models   4               Various                   OncoLLM outperformed GPT-3.5, Fu-LLM outperformed general-purpose LLMs, Synapsis LLM medically specialized

  Med42, Zephyr-7B           1               Various                   Enhanced with RAG
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

GPT-4 variants were the most commonly evaluated models, appearing in 14 studies. Direct comparisons between GPT-3.5 and GPT-4 consistently showed GPT-4 achieving higher accuracy but at increased computational cost and processing time. Domain-specific or fine-tuned models such as OncoLLM, Fu-LLM, and Synapsis LLM demonstrated performance advantages over general-purpose models in specialized clinical tasks.

# Performance Outcomes

## Patient Screening and Trial Matching Performance

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Study                             LLM             Accuracy                             Sensitivity           Specificity           AUC                Time per Patient   Cost per Patient
  --------------------------------- --------------- ------------------------------------ --------------------- --------------------- ------------------ ------------------ ------------------
  B.Sc Jacob Beattie et al., 2024   GPT-3.5         0.761 median (criterion-level)       0.80 (proportional)   0.76 (proportional)   0.87 (best)        1.4-3.0 min        \$0.02-\$0.03

  B.Sc Jacob Beattie et al., 2024   GPT-4           0.838 median (criterion-level)       0.88 (proportional)   0.72 (proportional)   0.82 (best)        7.9-12.4 min       \$0.15-\$0.27

  Dyke Ferber et al., 2024          GPT-4o          92.7% (refined)                      N/R                   N/R                   N/R                N/R                N/R

  Ozan Unlu et al., 2024            GPT-4 (RAG)     97.9-100%                            92.3%                 93.9%                 N/R                N/R                \$0.02-\$0.11

  BA Samantha M. Lai et al., 2024   GPT-4o          96.7% (criterion-level)              87.5-100%             73.3-100%             N/R                138 s median       \$0.67 median

  Christine Vecchio et al., 2025    Synapsis LLM    95.73%                               N/R                   N/R                   N/R                2.5 min            N/R

  R. Tan et al., 2024               GPT-4 (RAG)     95.18% (test), 80.00% (validation)   N/R                   N/R                   N/R                10.95 s mean       N/R

  Arti Devi et al., 2024            GPT-3.5-turbo   95-100%                              N/R                   N/R                   N/R                N/R                N/R

  Qiao Jin et al., 2023             GPT-4           87.3% (criterion-level)              N/R                   N/R                   0.80 (excluding)   N/R                N/R

  D. Hamer et al., 2023             InstructGPT     72% (screenability)                  0.50 (trial-level)    N/R                   N/R                N/R                N/R

  S. Gupta et al., 2024             OncoLLM         Matched MD performance               N/R                   N/R                   N/R                N/R                N/R
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Performance varied substantially across studies and tasks. At the criterion level, accuracy ranged from 72% for screenability identification to 97.9-100% for specific eligibility questions. RAG-enabled systems generally achieved higher accuracy, with RECTIFIER demonstrating 97.9-100% accuracy compared to 91.7-100% for human study staff. The Synapsis LLM achieved 95.73% accuracy compared to 95.11% for a melanoma-specialized nurse and 88.09% for an oncology-specialized nurse, while completing tasks in 2.5 minutes versus 427-540 minutes for human reviewers.

## Comparison with Human Performance

Several studies directly compared LLM performance to human experts:

  --------------------------------------------------------------------------------------------------------------------------------
  Study                            LLM Performance                  Human Performance             Task
  -------------------------------- -------------------------------- ----------------------------- --------------------------------
  Ozan Unlu et al., 2024           97.9% accuracy, MCC 0.924        91.7% accuracy, MCC 0.721     Heart failure eligibility

  Christine Vecchio et al., 2025   95.73% accuracy in 2.5 min       88.09-95.11% in 427-540 min   Melanoma eligibility questions

  Dyke Ferber et al., 2024         92.7% accuracy                   Outperformed qualified MDs    Trial matching

  Qiao Jin et al., 2023            87.3% accuracy                   88.7-90.0% accuracy           Criterion-level matching

  S. Gupta et al., 2024            OncoLLM matched MD performance   Qualified medical doctors     Clinical trial matching

  Zhao Shi et al., 2025            Fu-LLM outperformed humans       Human adjudicators            Outcome adjudication
  --------------------------------------------------------------------------------------------------------------------------------

LLMs demonstrated competitive or superior performance compared to human reviewers across multiple studies. However, human oversight remained essential due to the potential for hallucinations and the need for clinical judgment in complex cases.

## Efficiency and Cost Metrics

Time and cost savings represented significant advantages of LLM-based approaches:

  ------------------------------------------------------------------------------------------------------------------------------------------------
  Study                             Time Savings                           Cost Metrics                Efficiency Gains
  --------------------------------- -------------------------------------- --------------------------- -------------------------------------------
  B.Sc Jacob Beattie et al., 2024   1.4-12.4 min vs 30-45 min manual       \$0.02-\$0.27 per patient   Substantial reduction vs manual screening

  Qiao Jin et al., 2023             42.6% reduction in screening time      N/R                         Short cases \~41%, long cases \~43.5%

  D. Hamer et al., 2023             \~90% reduction in criteria to check   N/R                         4,135 criteria reduced to 328

  Christine Vecchio et al., 2025    2.5 min vs 427-540 min                 N/R                         \>99% time reduction

  Min Zou et al., 2025              Minutes vs months manual analysis      N/R                         \~2 min for 309 PDs vs 1.5 days expert
  ------------------------------------------------------------------------------------------------------------------------------------------------

The TrialGPT system demonstrated a 42.6% average reduction in screening time in a user study. Cost ranged from \$0.02 per patient for GPT-3.5 with combined-question approaches to \$0.67 median for comprehensive GPT-4o screening.

## Other Application Performance

  --------------------------------------------------------------------------------------------------------------------------------------------------------------
  Application            Study                         Key Performance Metrics
  ---------------------- ----------------------------- ---------------------------------------------------------------------------------------------------------
  RCT design             Liyuan Jin et al., 2024       72% overall accuracy; 88% recruitment, 93% intervention, 55% eligibility criteria, 53% outcomes

  Protocol generation    Nigel Markey et al., 2024     Off-the-shelf: \>80% content relevance, \~40% clinical logic; RAG-enhanced: \~80% across all dimensions

  Data extraction        Federica Corso et al., 2025   78-96% accuracy across features (PD-L1 78%, staging 96%)

  Protocol questions     Devin L. Brown et al., 2025   75% questions answered; 2% not helpful, 1% misleading

  Outcome adjudication   Zhao Shi et al., 2025         Outperformed GPT-3.5, GPT-4o, DeepSeek, Claude, Gemini, and human adjudicators

  PD classification      Min Zou et al., 2025          85.44% recall, 49.44% precision; flagged \>80% relevant PDs
  --------------------------------------------------------------------------------------------------------------------------------------------------------------

Performance in non-screening applications varied by task complexity. RCT design assistance showed high accuracy for recruitment (88%) and intervention (93%) components but lower accuracy for eligibility criteria (55%) and outcomes measurement (53%). Protocol document generation benefited substantially from retrieval-augmented generation, which improved clinical thinking and logic scores from approximately 40% to 80%.

# Implementation Methods

## Prompting Strategies

  -------------------------------------------------------------------------------------------------------------------------------------------
  Strategy            Studies Using   Description                                       Performance Impact
  ------------------- --------------- ------------------------------------------------- -----------------------------------------------------
  Structured Output   4               JSON/yes-no fields for machine-readable outputs   Enables automated downstream processing

  Chain-of-Thought    5               Reasoning before constrained output               Improves transparency and explainability

  Self-Discover       2               Model selects reasoning modules autonomously      Highest Youden Index with GPT-4 (0.729)

  Zero-shot           8               No task-specific examples provided                Effective for structured tasks with clear prompts

  Few-shot            6               1-3 examples provided in context                  Improved biomarker extraction and logic structuring
  -------------------------------------------------------------------------------------------------------------------------------------------

Multiple prompting strategies were evaluated, with chain-of-thought approaches frequently employed to enhance transparency and enable physician review of reasoning. The Self-Discover approach, where the model autonomously constructs its reasoning structure, achieved the highest Youden Index (0.729) with GPT-4 in one study, though it required expert guidance with GPT-3.5.

## Technical Approaches

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Approach                               Studies Using   Key Features                                             Benefits
  -------------------------------------- --------------- -------------------------------------------------------- -----------------------------------------------------------------------------------------------------
  Retrieval-Augmented Generation (RAG)   8               Vector database retrieval combined with LLM generation   Improved accuracy from \~40% to \~80% for clinical logic; grounded outputs in authoritative sources

  Fine-tuning                            4               Task-specific model training                             OncoLLM outperformed GPT-3.5; sensitivity improved from 0.036 to 0.539

  Ensemble methods                       2               Multiple LLM runs with majority voting                   Reduced hallucinations

  Human-in-the-loop                      16              Expert review of LLM outputs                             Maintained clinical safety and achieved recall of 1.0
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

RAG emerged as a critical enhancement, with one study demonstrating that augmenting GPT-4 with regulatory guidance documents and ClinicalTrials.gov data improved clinical thinking and logic scores from approximately 40% to 80%. The majority of studies (16 of 25) implemented human-in-the-loop workflows, positioning LLMs as decision support tools rather than autonomous systems.

## Data Inputs

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Data Type                       Studies Using        Processing Approach
  ------------------------------- -------------------- -------------------------------------------------------------------------------------------------------------
  Unstructured EHR notes          12                   Progress notes, pathology reports, imaging reports processed via RAG or direct prompting

  Trial eligibility criteria      15                   Retrieved from ClinicalTrials.gov via API; parsed into inclusion/exclusion; decomposed into binary criteria

  Structured EHR data             6                    Demographics, labs, vitals combined with unstructured notes

  Clinical protocols              5                    SAPs, research protocols, PD management records

  Telephone interview vignettes   1                    Follow-up interview transcripts for outcome adjudication
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Limitations and Challenges

## Performance Limitations

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Limitation Type              Studies Reporting    Specific Findings
  ---------------------------- -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  Strict eligibility failure   4                    LLMs struggle to identify patients meeting all criteria; even 95% per-criterion accuracy would miss nearly half of eligible patients

  Hallucinations               8                    PD-L1 misclassification (91.3% of missing information due to hallucinations); inventing low hemoglobin values; guideline noncompliance in protocol generation

  Temporal reasoning gaps      3                    Difficulty determining timing of prior malignancy; inability to separate historical vs new diagnoses

  Reasoning errors             5                    83% of misclassifications due to incorrect understanding; 30.7% of errors from incorrect reasoning

  Prompt sensitivity           4                    Minor prompt phrasing changes greatly affected outputs; GPT-3.5 required structured expert guidance
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The most consistent limitation was difficulty achieving strict eligibility across all criteria simultaneously. Studies recommended using proportional eligibility scores to triage candidates rather than binary strict determinations.

## Technical Challenges

  ---------------------------------------------------------------------------------------------------------------------------------------------------
  Challenge                        Studies Reporting    Impact and Mitigation
  -------------------------------- -------------------- ---------------------------------------------------------------------------------------------
  Context length limitations       3                    Full longitudinal EMRs exceed context windows; required retrieval of most relevant passages

  Model drift                      2                    Variability in results across model versions; consistent versions crucial for reliability

  Processing time/cost tradeoffs   4                    GPT-4 7.9-12.4 min and \$0.15-\$0.27 vs GPT-3.5 1.4-3 min and \$0.02-\$0.03

  PHI/privacy restrictions         2                    Restrictions prevented applying LLMs to identifiable records; required de-identification

  Non-standardized data            2                    High variability in PD descriptions across sites; inconsistent EHR formats
  ---------------------------------------------------------------------------------------------------------------------------------------------------

## Human Oversight Requirements

All studies implementing clinical decision support applications emphasized the necessity of human oversight. Specific recommendations included:

- Final clinician review for all eligibility determinations
- Expert validation of LLM outputs to ensure annotation and model trustworthiness
- Physician-in-the-loop review of all identified dropout criteria
- Quality check steps to address discrepancies
- Integration of LLM outputs with clinical data dashboards for expert review

# Synthesis

## Reconciling Performance Heterogeneity

Performance metrics varied substantially across studies, with criterion-level accuracy ranging from 72% to 97.9%. This heterogeneity can be explained by several factors:

**Task Complexity and Granularity**: Studies measuring screenability identification (determining whether a criterion can be assessed from available data) achieved lower accuracy (72%) than those measuring direct criterion matching against pre-processed data (97.9%). The RECTIFIER system\'s higher accuracy reflected its focus on 13 specific target criteria with well-defined questions, while the Hamer et al. study evaluated 4,135 diverse criteria across 146 trials. Similarly, RCT design assistance showed high accuracy for straightforward components (recruitment 88%, intervention 93%) but lower accuracy for complex elements requiring nuanced clinical judgment (eligibility criteria 55%, outcomes measurement 53%).

**Implementation Approach**: RAG-enabled systems consistently outperformed base LLMs. Off-the-shelf GPT-4 achieved only \~40% for clinical thinking and logic in protocol generation, while RAG-augmented GPT-4 achieved \~80%. This pattern suggests that grounding LLM outputs in authoritative sources substantially improves performance for tasks requiring domain-specific knowledge and guideline compliance.

**Model Selection and Configuration**: GPT-4 consistently outperformed GPT-3.5 across studies, while domain-specific models (OncoLLM, Fu-LLM, Synapsis LLM) achieved performance matching or exceeding general-purpose models and human experts in their specialized domains. Fine-tuning improved sensitivity from 0.036 to 0.539 in decentralized trial classification, demonstrating the value of domain adaptation.

**Disease Area and Data Quality**: Oncology studies generally reported high performance, potentially reflecting the well-structured nature of oncology trial eligibility criteria (tumor staging, histology, biomarkers). Studies using synthetic patient profiles tended to report higher accuracy than those using real-world EHR data, which contained more noise and ambiguity.

## Practical Recommendations Emerging from Evidence

The evidence supports several implementation principles:

**Proportional Rather Than Strict Eligibility**: Given that LLMs struggle to perfectly satisfy all criteria simultaneously, using the proportion of criteria met to prioritize candidates for manual review represents a more practical deployment strategy, achieving AUC of 0.82 in one implementation.

**Human-in-the-Loop as Standard Practice**: The physician-in-the-loop approach demonstrated in Hamer et al. achieved recall of 1.0 with precision of 0.71 while reducing criteria requiring physician review by approximately 90%, suggesting this hybrid approach optimizes both safety and efficiency.

**RAG for Knowledge-Intensive Tasks**: Tasks requiring adherence to guidelines, accurate citations, or current clinical knowledge benefit substantially from RAG augmentation, with performance improvements of up to 40 percentage points for clinical reasoning dimensions.

**Domain-Specific Models for Specialized Tasks**: Custom fine-tuned models demonstrated advantages in specialized applications, with OncoLLM matching physician performance and Fu-LLM outperforming both general-purpose LLMs and human adjudicators, suggesting investment in domain adaptation yields meaningful returns for high-volume applications.

# References

Arti Devi, Shashank Uttrani, Aryansh Singla, Sarthak Jha, Nataraj Dasgupta, Sayee Natarajan, Rajeshwari S. Punekar, Larry A. Pickett, and Varun Dutt. "[Automating Clinical Trial Eligibility Screening: Quantitative Analysis of GPT Models Versus Human Expertise](https://doi.org/10.1145/3652037.3663922)." *Petra*, 2024.

BA Samantha M. Lai, BA Alysala M. Malik, MD Tejas S. Sathe, MD Caitlin J. Silvestri, MD Gulam A. Manji, and PhD Michael D. Kluger. "[A Proof-of-Concept Large Language Model Application to Support Clinical Trial Screening in Surgical Oncology](https://doi.org/10.1101/2024.09.20.24314053)." *medRxiv*, 2024.

Brenda Adjei, Tanna L. Nelson, Umit Topaloglu, and JamesL Gulley. "[Design and Feasibility of Lay Clinical Trial Summaries Using Large Language Models.](https://doi.org/10.1200/op.2025.21.10_suppl.621)" *JCO Oncology Practice*, 2025.

B.Sc Jacob Beattie, M. S. Dylan Owens, M. D. P. Ann Marie Navar, M. D. Luiza Giuliani Schmitt, Kimberly Taing, Sarah Neufeld, M. D. Daniel Yang, et al. "[Large Language Model Augmented Clinical Trial Screening](https://doi.org/10.1101/2024.08.27.24312646)." *medRxiv*, 2024.

Christine Vecchio, Stephanie Braley, L. Kennedy, James Isaacs, T. Truong, Taylor Kuhn, Weiqi Sun, et al. "[Analysis of a Large Language Model-Based System Versus Manual Review in Clinical Data Abstraction and Deduction from Real-World Medical Records of Patients with Melanoma for Clinical Trial Eligibility Assessment.](https://doi.org/10.1200/jco.2025.43.16_suppl.1571)" *Journal of Clinical Oncology*, 2025.

Cliff Wong, Sheng Zhang, Yu Gu, C. Moung, Jacob Abel, N. Usuyama, R. Weerasinghe, et al. "[Scaling Clinical Trial Matching Using Large Language Models: A Case Study in Oncology](https://doi.org/10.48550/arXiv.2308.02180)." *Machine Learning in Health Care*, 2023.

D. Hamer, P. Schoor, T. Polak, and Daniel Kapitan. "[Improving Patient Pre-Screening for Clinical Trials: Assisting Physicians with Large Language Models](https://doi.org/10.48550/arXiv.2304.07396)." *arXiv.org*, 2023.

Devin L. Brown, Kayla Novitski, Joelle B Sickler, Rebecca M Hankla, Faria Khattak, Emily Philpot, Valerie Durkalski-Mauldin, et al. "[Use of a Generative Pretrained Transformer to Answer Questions and Facilitate a Large Randomized Controlled Trial.](https://doi.org/10.1161/JAHA.125.043333)" *Journal of the American Heart Association : Cardiovascular and Cerebrovascular Disease*, 2025.

Dyke Ferber, Lars Hilgers, I. Wiest, Marie-Elisabeth Leßmann, J. Clusmann, P. Neidlinger, Jiefu Zhu, et al. "[End-To-End Clinical Trial Matching with Large Language Models](https://doi.org/10.48550/arXiv.2407.13463)." *arXiv.org*, 2024.

Euibeom Shin, Amruta Gajanan Bhat, and Murali Ramanathan. "[Large Language Models for Clinical Trial Protocol Assessments.](https://doi.org/10.1002/cpt.70096)" *Clinical Pharmacology and Therapy*, 2025.

Federica Corso, L. Mazzeo, V. Peppoloni, G. Leone, Vanja Miscovic, I. Wiest, Cecilia Silvestri, et al. "[Aiding Data Retrieval in Clinical Trials with Large Language Models: The APOLLO 11 Consortium in Advanced Lung Cancer Patients.](https://doi.org/10.1200/jco.2025.43.16_suppl.e23161)" *Journal of Clinical Oncology*, 2025.

J. Beattie, Dylan Owens, A. Navar, Luiza Giuliani Schmitt, Kimberly Taing, Sarah Neufeld, Daniel Yang, et al. "[ChatGPT Augmented Clinical Trial Screening](https://doi.org/10.1088/3049-477X/adbd47)." *Machine Learning: Health*, 2025.

K. Y. Huh, Ildae Song, Yoonjin Kim, Jiyeon Park, Hyunwook Ryu, JaeEun Koh, Kyung-Sang Yu, K. Kim, and SeungHwan Lee. "[Exploration of Using an Open‐Source Large Language Model for Analyzing Trial Information: A Case Study of Clinical Trials With Decentralized Elements](https://doi.org/10.1111/cts.70183)." *Clinical and Translational Science*, 2025.

Liyuan Jin, J. Ong, Kabilan Elangovan, Y. Ke, Alexandra Pyle, D. Ting, and Nan Liu. "[Large Language Models in Randomized Controlled Trials Design: Observational Study](https://doi.org/10.2196/67469)." *Journal of Medical Internet Research*, 2024.

Min Zou, Leszek Popko, and Michelle Gaudio. "[Using Large Language Models for Advanced and Flexible Labelling of Protocol Deviations in Clinical Development](https://doi.org/10.1007/s43441-025-00785-z)." *Therapeutic Innovation and Regulatory Science*, 2025.

Mingye Gao, Aman Varshney, Shan Chen, Vikram Goddla, Jack Gallifant, Patrick F Doyle, Claire Novack, et al. "[The Use of Large Language Models to Enhance Cancer Clinical Trial Educational Materials](https://doi.org/10.48550/arXiv.2412.01955)." *JNCI Cancer Spectrum*, 2024.

Nigel Markey, Ilyass El-Mansouri, Gaëtan Rensonnet, Casper van Langen, and Christoph Meier. "[From RAGs to Riches: Utilizing Large Language Models to Write Documents for Clinical Trials](https://doi.org/10.1177/17407745251320806)." *Clinical Trials*, 2024.

Ozan Unlu, Jiyeon Shin, Charlotte J. Mailly, Michael Oates, Michela R. Tucci, Matthew Varugheese, K. Wagholikar, et al. "[Retrieval-Augmented Generation--Enabled GPT-4 for Clinical Trial Screening](https://doi.org/10.1056/aioa2400181)." *NEJM AI*, 2024.

Peng Wu, Fuxiao Li, Yuanxi Jia, Jiaqian Yin, Yubing Shen, Yanxiao Gao, Ying Li, Feng Sha, Zhirong Yang, and Jinling Tang. "[Randomized Controlled Trials Evaluating Large Language Models in Digestive Diseases: A Scoping Review](https://doi.org/10.1016/j.gande.2025.09.003)." *Gastroenterology &Amp; Endoscopy*, 2025.

Qiao Jin, Zifeng Wang, C. Floudas, Jimeng Sun, and Zhiyong Lu. "[Matching Patients to Clinical Trials with Large Language Models](https://doi.org/10.1038/s41467-024-53081-z)." *Nature Communications*, 2023.

R. Komandur Elayavilli, J. McDunn, N. Nair, B. Fall, A. Dicker, and S. Khozin. "[The Rise of the Large Language Models (LLMs): Can They Truly Match Clinical and Data Science Experts in Clinical Trial Data Analysis?](https://doi.org/10.1101/2025.02.05.25321607)" *medRxiv*, 2025.

R. Tan, Si Xian Ho, Shiyun Vivianna Fequira Oo, S. Chua, M. Zaw, and D. S. Tan. "[Retrieval-Augmented Large Language Models for Clinical Trial Screening.](https://doi.org/10.1200/jco.2024.42.16_suppl.e13611)" *Journal of Clinical Oncology*, 2024.

Ramya Sri Baluguri, and Nicholas Anderson. "[22 Advancing Clinical Trial Reporting and AI Integration: Optimizing Protocol Data Extraction Using LLMs and Regulatory Best Practices](https://doi.org/10.1017/cts.2024.713)." *Journal of Clinical and Translational Science*, 2025.

S. Gupta, Aditya Basu, Mauro Nievas, Jerrin Thomas, Nathan Wolfrath, A. Ramamurthi, Bradley Taylor, et al. "[PRISM: Patient Records Interpretation for Semantic Clinical Trial Matching System Using Large Language Models](https://doi.org/10.1038/s41746-024-01274-7)." *Npj Digit. Medicine*, 2024.

Zhao Shi, Bingqian Wu, Bin Hu, Jian Zhong, Zezhong Li, F. Zhang, Zijian Chen, et al. "[A Large Language Model for Clinical Outcome Adjudication from Telephone Follow-up Interviews: A Secondary Analysis of a Multicenter Randomized Clinical Trial.](https://doi.org/10.1038/s41467-025-66910-6)" *Nature Communications*, 2025.
