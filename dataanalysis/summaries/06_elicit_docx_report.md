---
title: "Elicit Report: Surveying Large Language Models in Clinical Trials"
source_file: "Elicit - Surveying Large Language Models in Clinical Trials - Report.docx"
file_type: "docx (Word document)"
file_size_bytes: 27906
date_analyzed: "2026-01-30"
generator_tool: "Elicit (AI research assistant)"
key_theme: "Evidence Synthesis with Academic References"
---

# Comprehensive Summary: Elicit DOCX Report

## 1. Document Overview

This is the Word document version of the Elicit report, providing a literature survey on Large Language Models in clinical trials. The extracted content reveals it is a **systematic evidence review** with a strong focus on **model selection, performance metrics, and practical recommendations**.

**Note:** This appears to be a more comprehensive/different version than the markdown file, containing additional academic detail and references.

---

## 2. Key Findings: Model Selection and Configuration

### 2.1 Model Performance Hierarchy
*   **GPT-4** consistently outperformed **GPT-3.5** across studies.
*   **Domain-specific models** (OncoLLM, Fu-LLM, Synapsis LLM) achieved performance matching or exceeding general-purpose models and human experts in their specialized domains.

### 2.2 Fine-Tuning Impact
*   Fine-tuning improved sensitivity from **0.036 to 0.539** in decentralized trial classification.
*   Demonstrates the value of domain adaptation for specific use cases.

---

## 3. Disease Area and Data Quality Insights

| Factor                 | Observation                                                                                      |
| :--------------------- | :----------------------------------------------------------------------------------------------- |
| **Oncology Performance** | Generally reported high performance, potentially due to well-structured eligibility criteria (tumor staging, histology, biomarkers). |
| **Synthetic vs. Real Data** | Studies using synthetic patient profiles tended to report higher accuracy than those using real-world EHR data (more noise/ambiguity). |

---

## 4. Practical Recommendations Emerging from Evidence

The document synthesizes evidence into actionable implementation principles:

### 4.1 Proportional Rather Than Strict Eligibility
*   **Rationale:** LLMs struggle to perfectly satisfy all criteria simultaneously.
*   **Approach:** Use the **proportion of criteria met** to prioritize candidates for manual review.
*   **Evidence:** Achieved AUC of **0.82** in one implementation.

### 4.2 Human-in-the-Loop as Standard Practice
*   **Approach:** Physician-in-the-loop review.
*   **Outcome:** Achieved **recall of 1.0** with **precision of 0.71**.
*   **Efficiency:** Reduced criteria requiring physician review by approximately **90%**.
*   **Source:** Hamer et al.

### 4.3 RAG for Knowledge-Intensive Tasks
*   **Explanation:** Retrieval-Augmented Generation (RAG) augmentation significantly improves tasks requiring guideline adherence, accurate citations, or current clinical knowledge.
*   **Evidence:** Performance improvements of up to **40 percentage points** for clinical reasoning dimensions.

### 4.4 Domain-Specific Models for Specialized Tasks
*   **Observation:** Custom fine-tuned models demonstrated advantages.
*   **Examples:**
    *   **OncoLLM:** Matched physician performance.
    *   **Fu-LLM:** Outperformed both general-purpose LLMs and human adjudicators.
*   **Implication:** Investment in domain adaptation yields meaningful returns for high-volume applications.

---

## 5. Key Performance Metrics Cited

| Metric                                     | Value                                                                                      |
| :----------------------------------------- | :----------------------------------------------------------------------------------------- |
| Fine-tuning sensitivity improvement        | 0.036 → 0.539                                                                              |
| Proportional eligibility AUC               | 0.82                                                                                       |
| Human-in-the-loop recall                   | 1.0                                                                                        |
| Human-in-the-loop precision                | 0.71                                                                                       |
| Physician review reduction                 | ~90%                                                                                       |
| RAG improvement (clinical reasoning)       | Up to 40 percentage points                                                                 |

---

## 6. Academic References (Extensive)

The document provides a rich set of academic references:

| Author(s)                           | Title / Focus                                                                                      | Publication / Year         |
| :---------------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------- |
| Arti Devi et al.                    | Automating Clinical Trial Eligibility Screening: GPT vs. Human Expertise                          | Petra, 2024                |
| Samantha M. Lai et al.              | Proof-of-Concept LLM for Clinical Trial Screening in Surgical Oncology                            | medRxiv, 2024              |
| Brenda Adjei et al.                 | Design and Feasibility of Lay Clinical Trial Summaries Using LLMs                                 | JCO Oncology Practice, 2025|
| Jacob Beattie et al.                | Large Language Model Augmented Clinical Trial Screening                                           | medRxiv, 2024              |
| Christine Vecchio et al.            | LLM-Based System vs. Manual Review for Melanoma Trial Eligibility                                 | JCO, 2025                  |
| Cliff Wong et al.                   | Scaling Clinical Trial Matching Using LLMs: Oncology Case Study                                   | ML in Health Care, 2023    |
| D. Hamer et al.                     | Improving Patient Pre-Screening with LLMs (physician-in-the-loop)                                 | arXiv, 2023                |
| Devin L. Brown et al.               | GPT to Answer Questions and Facilitate a Large RCT                                                | JAHA, 2025                 |
| Dyke Ferber et al.                  | End-To-End Clinical Trial Matching with LLMs                                                      | arXiv, 2024                |
| Euibeom Shin et al.                 | LLMs for Clinical Trial Protocol Assessments                                                      | Clinical Pharmacol., 2025  |
| Qiao Jin et al.                     | Matching Patients to Clinical Trials with LLMs                                                    | Nature Comms, 2023         |
| Zhao Shi et al.                     | LLM for Clinical Outcome Adjudication from Telephone Follow-up                                    | Nature Comms, 2025         |

---

## 7. Key Lessons for Website Development

*   **Evidence-Based Recommendations:** This document provides the most rigorous academic evidence—use it to back up any claims on the website.
*   **RAG as Key Strategy:** Prominently feature RAG (Retrieval-Augmented Generation) as a best practice for knowledge-intensive tasks.
*   **90% Efficiency Gain:** The physician review reduction figure is highly compelling.
*   **Domain-Specific Models:** Highlight OncoLLM and Fu-LLM as examples of successful domain adaptation.
*   **Synthetic vs. Real Data Caveat:** Important context for interpreting performance claims.
