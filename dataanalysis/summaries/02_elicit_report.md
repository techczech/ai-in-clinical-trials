---
title: "Elicit Report: SITU/NDORMS Scenario Bank for AI Training"
source_file: "Elicit - Surveying Large Language Models in Clinical Trials - Report.md"
file_type: "markdown"
file_size_bytes: 24475
date_analyzed: "2026-01-30"
generator_tool: "Elicit (AI research assistant)"
key_theme: "Role-Based AI Implementation Scenarios for Clinical Trial Teams"
target_audience: "Oxford University SITU/NDORMS clinical trial staff"
---

# Comprehensive Summary: SITU/NDORMS Scenario Bank for AI Training

## 1. Document Overview

This is a comprehensive training document designed for the Surgical Intervention Trials Unit (SITU) and Nuffield Department of Orthopaedics, Rheumatology and Musculoskeletal Sciences (NDORMS) at the University of Oxford. It provides a **scenario-based framework** for integrating AI tools into clinical trial workflows, organized by role and task type.

**Core Purpose:** To provide realistic vignettes of clinical trial work "without AI" and then show how AI tools can augment each scenario, while embedding Oxford's institutional policies and UK regulatory context.

---

## 2. Institutional Policy Baselines (Oxford 2026)

The document explicitly bakes in three policy baselines:

### 2.1 Oxford AI Policy
*   Plan generative AI use as part of research method.
*   **Validate outputs** rigorously.
*   **Document substantive use** of AI.
*   Declare use appropriately in publications/submissions.
*   **Do NOT use AI to "edit" research-result images.**

### 2.2 Information Governance Baseline
*   **Minimum necessary** data principle.
*   Avoid patient-identifiable data unless explicitly approved.
*   Keep an audit trail of what was done and why.

### 2.3 UK CTIMP Change (2026)
*   Assumes terminology/process updates need to be reflected in SOPs, training, and submission checklists.

---

## 3. Role Map: What Staff Do Without AI

The document provides a detailed breakdown of clinical trial roles and their core responsibilities:

| Role                      | Key Responsibilities                                                                                   |
| :------------------------ | :----------------------------------------------------------------------------------------------------- |
| **Trial Manager**         | Set-up (timelines, budgets, site packs), Delivery (tracking, deviation management), Close-out (archiving) |
| **Principal Investigator**| Clinical leadership, Governance, Ethics/regulatory strategy, Safety oversight                         |
| **Research Physiotherapist** | Intervention delivery, Protocol fidelity, Outcome assessments (PROMs), AE triage                    |
| **Data Manager**          | CRF/EDC build, Validation rules, Data cleaning, Query management, Audit trails                        |
| **Trial Assistant**       | Screening logs, Visit scheduling, Document chasing, TMF filing                                         |
| **DPhil Student**         | Systematic reviews, Nested methods studies, Reproducible code, SAP/manuscript contributions           |

---

## 4. Scenario Bank: Detailed Trial Vignettes

The document contains **17 detailed scenario vignettes** organized into four phases. Each describes a realistic situation and its operational challenges.

### Phase A: Trial Design & Setup
| ID   | Scenario Title                                       | Core Challenge                                                                 |
| :--- | :--------------------------------------------------- | :----------------------------------------------------------------------------- |
| A1   | New trial idea becomes a fundable question           | Translating a PI's frustration into a feasible trial "shape"                   |
| A2   | Feasibility study planning                           | Focus on process measures, not statistics; operational deliverability          |
| A3   | Protocol drafting sprint                             | Document chaos (versions), aligning schedules with CRFs and consent            |
| A4   | Choosing primary and secondary outcomes              | Trade-offs between clinical meaning, measurability, and licensing/burden       |
| A5   | Surgical standardisation across sites                | Credentialing, checklists, balancing autonomy with trial integrity             |

### Phase B: Trial Delivery & Execution
| ID   | Scenario Title                                       | Core Challenge                                                                 |
| :--- | :--------------------------------------------------- | :----------------------------------------------------------------------------- |
| B1   | Fidelity drift at Site B                             | Subtle protocol deviations from local habits; retraining without blame         |
| B2   | Recruitment lag with strict eligibility              | Criteria interpreted differently; amendment/modification process               |
| B3   | Consent in a busy surgical pathway                   | Timing, delegation logs, PIS version control                                   |
| B4   | Adverse event spike with ambiguous causality         | Safety workflow, SAE forms, narrative discipline for external scrutiny         |
| B5   | Cross-over and contamination in pragmatic trials     | Documenting deviations for ITT vs. per-protocol analysis                       |

### Phase C: Data Management
| ID   | Scenario Title                                       | Core Challenge                                                                 |
| :--- | :--------------------------------------------------- | :----------------------------------------------------------------------------- |
| C1   | Database build and UAT cycle                         | EDC build, test trail, validating system before go-live                        |
| C2   | Query storm after first cleaning cycle               | Triaging critical vs. minor queries; protecting site relationships             |
| C3   | Imaging outcomes with blinded central review         | Anonymisation, traceability, ID linkage without breaking blinding              |
| C4   | PROM collection drops during remote follow-up        | Missingness patterns, reminder cadence, escalation rules                       |
| C5   | Monitoring visit finds TMF gaps                      | CAPA plans, remediation sprints, making the trial defensible                   |

### Phase D: Governance & Close-Out
| ID   | Scenario Title                                       | Core Challenge                                                                 |
| :--- | :--------------------------------------------------- | :----------------------------------------------------------------------------- |
| D1   | Ethics/regulatory submission packaging               | Internal consistency, trackers, alignment between protocol/consent/CRF         |
| D2   | Substantial change / modification mid-trial          | Impact assessment, version fatigue, proving sites implemented change           |
| D3   | Governance meeting packs (TMG/TSC/DMC)               | Turning operational mess into decision-focused narratives                      |
| D4   | Embedded qualitative acceptability study             | Topic guides, consent, coding, grounding claims in excerpts                    |
| D5   | Close-out and database lock                          | Final reconciliations, lock checklist, audit trail integrity                   |
| D6   | Writing final report/manuscript (CONSORT)            | Reconciling counts, reproducible tables, authorship coordination               |
| D7   | Audit/inspection readiness drill                     | Surfacing evidence, explaining processes, turning tacit practice explicit      |

---

## 5. AI Tool Patterns: How Scenarios Change With AI

The document maps specific AI tools to task types:

### 5.1 Default Safe-Use Pattern (Universal)
*   Use institutional ChatGPT for **drafting, structuring, summarising, checklisting**.
*   Keep **patient-identifiable** or unnecessary personal data out.
*   **Validate outputs**; **document substantive use**; keep an audit trail.

### 5.2 Tool-to-Task Mapping

| Pattern # | Task Type                              | Best-Fit Tools                       | Use Cases                                                                 |
| :-------- | :------------------------------------- | :----------------------------------- | :------------------------------------------------------------------------ |
| 1         | Protocol/SOP comprehension             | **NotebookLM**                       | Cross-document consistency checks, role-specific Q&A packs                |
| 2         | Regulatory change readiness            | **Deep Research**                    | Internal briefings, action checklists for SOP refresh                     |
| 3         | Recruitment troubleshooting            | **ChatGPT + Coding tools**           | Hypotheses from screening logs, site comms scripts, dashboard automation  |
| 4         | Data quality + query management        | **Coding tools + ChatGPT**           | Missingness heatmaps, rule checks, query drafts for sites                 |
| 5         | Meeting packs and governance           | **ChatGPT**                          | Decision-focused narratives, risk log updates, minutes/action logs        |
| 6         | Safety narratives and reconciliation   | **NotebookLM + ChatGPT**             | Grounded SOP answers, de-identified structured templates                  |
| 7         | Intervention fidelity (physio-focused) | **ChatGPT**                          | Fidelity checklists, micro-training scripts, plain-language messages      |
| 8         | Qualitative analysis acceleration      | **NotebookLM + Coding tools**        | Excerpt retrieval, topic modelling, excerpt-to-theme trace tables         |
| 9         | Writing support                        | **ChatGPT + NotebookLM**             | Reporting checklist restructuring, clarity edits, journal variants        |
| 10        | Onboarding and training                | **ChatGPT**                          | Role-specific "day 1" guides, protocol quizzes, Q&A scripts               |
| 11        | Reproducible analysis pipelines        | **Coding tools**                     | R/Python skeletons, Quarto reports, unit tests                            |

---

## 6. Role-Specific Mini-Exercises

The document provides concrete training exercises for each role:

*   **Trial Managers:** Convert issues list → risk log; generate recruitment/data-cleaning pack.
*   **Principal Investigators:** Use NotebookLM for protocol Q&A; draft benefit-risk summary from trial docs.
*   **Research Physiotherapists:** Produce retraining plan for fidelity drift + patient adherence messages.
*   **Data Managers:** Draft impact assessment for CRF change; generate test plan and UAT script.
*   **DPhil Students:** Restructure methods for CONSORT; generate reproducible tables from toy data.

---

## 7. Explicit "Don'ts" for Clinical Trials

*   **Don't** treat model output as authoritative for clinical/regulatory decisions.
*   **Don't** use generative AI to alter research-result images.
*   **Don't** let workflow changes outrun ethics/info-governance approvals.

---

## 8. Key Lessons for Website Development

*   **Structure by Role:** The website should provide role-based navigation (Trial Manager, PI, Data Manager, etc.) with tailored guidance.
*   **Scenario-Based Learning:** The vignette format is highly effective for training—consider interactive scenario walkthroughs.
*   **Tool Recommendations:** Clearly map tools (ChatGPT, NotebookLM, coding tools) to specific task types.
*   **Policy Integration:** Prominently display institutional policy baselines; these are non-negotiable constraints.
*   **"Don'ts" Section:** A clear, prominent section on what NOT to do is essential for risk mitigation.
