---
title: "NotebookLM Lessons Learned Table: GenAI Implementation Findings"
source_file: "NotebookLM - Reports and Findings on GenAI Implementation Lessons Learned - Table 1.csv"
file_type: "csv"
file_size_bytes: 10366
date_analyzed: "2026-01-30"
generator_tool: "NotebookLM"
key_theme: "Chronological Findings with Positive and Negative Lessons"
date_range: "2024-01-01 to December 2025"
total_entries: 23
---

# Comprehensive Summary: NotebookLM Lessons Learned Table

## 1. Document Overview

This is a structured CSV table containing **23 entries** of research findings on GenAI implementation in clinical and research contexts. Each entry includes a date, a specific finding, positive lessons learned, negative lessons learned, and source citations.

**Core Value:** This is the most granular source of evidence, providing specific metrics and studies that can be cited on the website.

---

## 2. Key Findings Organized by Theme

### 2.1 Patient-Reported Outcomes & Validation

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| December 2025 | LLM-based pre-validation of PROMs achieved ICC > 0.90 using stateless simulation.           | Using *in silico* cohorts of synthetic profiles reduces ethical/logistical burdens.                  | Memory bias in AI agents must be controlled via **stateless simulation**.                              |

### 2.2 Faculty Adoption & Generational Divide

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| December 2025 | Moderate adoption for creative tasks: logo generation (38%), content formatting (34%).       | Younger/junior faculty find AI saves time, improves writing quality, boosts confidence.              | Generational divide: senior faculty concerned about privacy, plagiarism, skill erosion.                |

### 2.3 Clinical Event Extraction & Trial Matching

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| October 2025  | LLMs achieved F1=0.82 for CV event extraction; 0.68 for adjudication accuracy.               | Automated patient-trial matching: **7.9–12.4 min/patient**, **$0.15–$0.27/case**.                    | Output hallucinations, prompt sensitivity, challenges updating knowledge for rare diseases.            |

### 2.4 Consent Form Simplification

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| October 2025  | ChatGPT-4 simplified consent forms from **12.6 to 6.7 Flesch-Kincaid** reading level.         | Reducing jargon can lower dropout rates and improve informed decision-making.                        | Simplification risks omitting pertinent info or including incorrect data (potential patient harm).     |

### 2.5 Open-Source vs. Commercial Models

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 2025-10-16    | Open-source Llama3:8b achieved **75.8% SQL generation rate** vs. GPT-4's **45.3%**.          | Smaller, cost-effective models can outperform commercial ones; zero-shot > complex prompts.          | Hallucination rates of **21–50%**; unit conversion failures (e.g., hemoglobin).                        |

### 2.6 Grant Proposal Generation

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| September 2025| Only **10% of funders** currently accept/plan to accept AI-generated grant applications.     | AI can level the playing field; sharp, clear proposals help compete for federal grants.              | Ethical issues; danger of failing to tell the "human story"; repercussions if AI use not disclosed.   |

### 2.7 Synthetic Data Quality

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| August 2025   | GenAI can achieve up to **96% data quality scores** in synthetic medical datasets.            | Synthetic control arms accelerated Roche's Alecensa by **18 months**; privacy-preserving.            | Fidelity assessment challenges; ethical questions re: informed consent for historical training data.  |

### 2.8 Drug Discovery & Hypothesis Generation

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| July 2025     | LLMs can perform scientific synthesis, inference, and explanation directly from raw data.    | Exceptional NLU; enhances research efficiency; reduces development costs in drug discovery.          | Data governance issues, lack of model transparency, high manual screening failure rate.                |

### 2.9 FDA's "Elsa" AI Assistant

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| June 2025     | FDA's "Elsa" AI enables review tasks in **minutes** that previously took **three days**.      | Secure gov cloud (AWS GovCloud) + human-in-the-loop allows significant efficiency gains.             | FDA remains candid about hallucinations; tool use is **optional** for experts.                         |

### 2.10 Automated Clinical Trial Generation

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 2025-06-10    | AI-driven automated trial generation effectively augmented real-world datasets.              | Hybrid fine-tuning (synthetic + real data) yields best performance and generalization.               | Significant distributional gaps remain between real and synthetic data.                                |

### 2.11 SAS-to-R Code Conversion

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| May 2025      | Merck converted **78% of SAS ADaM templates** to R using GenAI, reducing effort by **66%**.   | Few-shot prompting (prior successful conversions) significantly improved accuracy.                   | Complex SAS macros failed due to lack of runtime info in prompts.                                      |

### 2.12 Pathology Report Extraction

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| March 2025    | GenAI achieved **99.61% accuracy** in extracting/structuring info from breast cancer pathology reports. | Automating extraction from free-text significantly reduces processing time.                          | Results limited to single institution/cancer type; needs external validation.                          |

### 2.13 Zero-Shot Statistical Replication

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| February 2025 | Zero-shot prompting with GPT-4o replicated statistical similarity in **12/13 parameters**.   | Zero-shot democratizes data access; no technical expertise/pre-training needed.                      | May fail to retain complex multivariate relationships without refinement.                              |

### 2.14 RCT Design Replication

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| January 2025  | GPT-4-Turbo achieved **72% overall accuracy** in replicating RCT designs (93% intervention, 88% recruitment, but 55% eligibility, 53% outcomes). | LLMs can enhance diversity/pragmatism in trial design, improving generalizability.                   | Discrepancies in eligibility/outcomes highlight need for expert oversight; hallucinations critical.    |

### 2.15 Drug-Drug Interaction Detection

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 2025-01-01    | GPT-4 under-detected pDDIs (80) vs. standard methods (280).                                  | Specific prompting for QTc interactions improved detection from 10% to ~23%.                         | Pharmacology errors (misinterpreting magnesium as antacids); output variability on repeated queries.  |

### 2.16 Equity & Fairness in Trial Matching

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 2025-01-01    | LLM trial matching accuracy decreased by **up to 10 points** for underrepresented populations. | EquityGuard framework reduced disparities by **28–32%** without sacrificing overall accuracy.        | Marginalized labels triggered mental health assessments 6–7x more than justified; high-income labels biased towards advanced imaging. |

### 2.17 Data Poisoning Vulnerability

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 2025-01-01    | Injecting **0.001% medical misinformation** into training data increased harmful completions by **4.8%**. | Mitigation using biomedical knowledge graphs achieved F1=85.7% for detecting poisoned responses.     | Standard evaluation frameworks fail to detect small-scale data poisoning attacks.                      |

### 2.18 ED Discharge Summaries

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 2024-09-04    | GPT-4 achieved error-free ED discharge summaries in only **33%** of cases (GPT-3.5: 10%).    | GPT-4 shows fewer problems; newer models show rudimentary emotional intelligence for sentiment.      | Hallucinations in **42%** of GPT-4 summaries; inaccuracies, omissions, misinterpretation of shorthand. |

### 2.19 Triage AI vs. Human Nurses

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| March 2024    | ChatGPT used **27–41x more words** than human nurses and responded **2–4x faster**, but tended towards "over-triage." | Maintains logical coherence/clarity; rapid digital assistant for first drafts.                       | Indecisiveness, suggested unnecessary tests, struggled to reconsider when new knowledge introduced.    |

### 2.20 Cornell Task Force on GenAI in Research

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| February 2024 | Task force established "duty of discretion" for sensitive data.                              | Efficiency/scale for annotating documents, generating infographic images.                            | Hallucinated citations, unintentional plagiarism, environmental costs (electricity, cooling water).   |

### 2.21 Diagnostic Accuracy for Abdominal Presentations

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 2024-01-01    | Best-performing LLMs lagged behind physicians by **16–25 percentage points**.                | Models excel in medical board exams and structured, synthetic diagnostic tasks.                      | Prompt fragility; inconsistent outputs on minor phrasing changes; struggles with temporally distributed clinical data. |

### 2.22 FHIR-GPT for Medication Standardization

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| 2024-01-01    | FHIR-GPT achieved **>90% exact-match rate** turning free-text medication mentions into HL7 FHIR resources. | Single LLMs with validation micro-services outperform rule-based/deep-learning ensembles; standardize at design time. | Direct JSON injection into EHR without FHIR conversion can lead to unsafe orders if mis-mapped.        |

### 2.23 Agentic AI in Decentralized Trials

| Date          | Finding                                                                                      | Positive Lesson                                                                                      | Negative Lesson                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| Not in source | Agentic AI eliminates operational bottlenecks; enables risk-based monitoring, fraud detection. | AI-enabled analytics reduce data delivery from weeks to hours; "Single Source of Truth" created.     | Implementation requires strategic considerations for autonomous agents and building trust via human oversight. |

---

## 3. Hallucination Rate Summary

| Context                          | Hallucination Rate / Error Rate                                                              |
| :------------------------------- | :------------------------------------------------------------------------------------------- |
| SQL Generation (multiple models) | **21–50%** hallucination rates recorded.                                                     |
| ED Discharge Summaries (GPT-4)   | Hallucinations in **42%** of summaries.                                                      |
| RCT Design Replication           | Eligibility (55% accuracy), Outcomes (53% accuracy) — significant gaps.                      |

---

## 4. Key Lessons for Website Development

*   **Cite Specific Metrics:** This table provides quantifiable evidence (F1 scores, percentages, time savings) that should be prominently cited.
*   **Balance with Caveats:** Every positive finding has a corresponding negative lesson—present them together for credibility.
*   **Highlight the Equity Issue:** The 10-point accuracy drop for underrepresented populations is a critical ethical point that must be addressed.
*   **Data Poisoning Warning:** The 0.001% misinformation finding is a stark security warning that should be in any "Risks" section.
*   **Chronological Timeline:** Consider a timeline visualization on the website showing the evolution of findings.
