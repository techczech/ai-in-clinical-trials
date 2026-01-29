# SITU/NDORMS (Oxford 2026) – Scenario Bank for AI Training

## **Oxford 2026 constraints to bake in**
- **Oxford policy baseline:** plan generative AI use as part of method; **validate outputs**; **document substantive use**; declare use appropriately; **do not use AI to “edit” research-result images**.
- **Info governance baseline:** **minimum necessary**; avoid patient-identifiable data unless explicitly approved; keep an audit trail of what was done and why.
- **UK CTIMP change (2026):** assume terminology/process updates need to be reflected in SOPs, training, and submission checklists.

---

## **Role map (what they do without AI)**

### **Trial manager**
- **Set-up:** operationalise protocol; timelines; budgets; site packs; comms cadence (TMG/TSC/DMC); risk log; monitoring plan logistics; vendor coordination.
- **Delivery:** site activation; recruitment tracking; deviation management; version control; training coordination; TMF completeness checks; escalation routes.
- **Close-out:** database lock coordination; report inputs; archiving plan; lessons learned.

### **Principal investigator (CI/PI)**
- **Clinical leadership:** refine question; intervention standardisation; feasibility judgement; engagement of surgeons/clinicians; publication strategy; author sign-off.
- **Governance:** ethics/regulatory strategy; sponsor liaison; safety oversight decisions; escalation decisions.

### **Research physiotherapist**
- **Intervention delivery:** rehab protocol fidelity; staff training; participant adherence support; outcome assessments (PROMs/functional measures); AE triage to clinical team; documentation.
- **Implementation:** site-level troubleshooting; schedule management; protocol feedback and refinements.

### **Data manager**
- **Build:** CRF design; EDC build; validation rules/edit checks; user roles; data dictionary; coding conventions.
- **Run:** data cleaning cycles; query management; reconciliation (AE/SAE, labs, imaging); exports; audit trail and access controls.

### **Trial assistant**
- **Operations:** screening logs; visit scheduling; document chasing; site comms; training completion tracking; TMF filing; kit shipping; minutes and action logs.

### **DPhil student**
- **Research layer:** systematic review updates; nested methods studies; qual sub-studies; pilot analyses; reproducible code and reports; SAP/manuscript contributions.

---

## **Scenario bank (without AI) – realistic vignettes**

Below, each scenario is written as a **short, concrete vignette** describing what *actually happens* in a unit like SITU when a trial is being designed and run.

### **A1. New trial idea becomes a fundable question**
A PI comes out of clinic with a recurring frustration: patients are getting a common procedure, but outcomes vary wildly and nobody is sure whether the variation is due to technique, rehab, patient selection, or just noise. They email the core group with a one-page sketch (“Could we compare pathway A vs pathway B across multiple sites?”) and ask for an initial reality check.

The trial manager pulls together a quick planning call: what the pathway would look like in practice, which sites could deliver it, and where the likely bottlenecks are (surgeon buy-in, theatre time, rehab capacity, follow-up). A DPhil student quietly starts a scoping sweep: what trials already exist, what outcomes people use, and where evidence gaps are. By the end of the week, there’s a rough “shape” of a trial: target population, comparator, candidate primary outcome, and the first list of feasibility unknowns.

### **A2. Feasibility study planning (before a full RCT)**
The group agrees the main risk is not the statistics—it’s whether the pathway is deliverable and whether sites can recruit consistently. The trial manager drafts a feasibility plan that focuses on process measures (screened → eligible → consented → treated) and operational pain points (timing of consent, surgeon availability, rehab appointment capacity).

The data manager builds a minimal CRF set and a screening log that captures *why* people fail eligibility. The physio runs a “deliverability walk-through” at a pilot site: can the intervention be delivered on schedule, are staff trained, do patients understand the exercises, and what fidelity checks are realistic? The output is a feasibility protocol that reads like an operations manual: what must happen, who does it, and what “success” looks like.

### **A3. Protocol drafting sprint (multi-author, multi-version)**
A shared folder fills up with versions: protocol v0.7, v0.8, then “FINAL_final_reallyfinal”. The trial manager sets a drafting cadence and tries to stop document chaos: version naming, a change log, and a single source of truth for the visit schedule. Meanwhile the PI iterates the clinical and safety sections, often changing small wording that has big operational consequences (e.g., “within 7 days” vs “within 14 days”).

The DPhil student is the one who keeps the methods coherent: aligning outcomes to timepoints, ensuring terminology is consistent, and inserting evidence for the rationale. A lot of time is spent on invisible glue work: making sure the schedule of assessments matches the CRFs, that the consent pathway matches how surgical clinics actually work, and that every “shall” in the protocol corresponds to a real person and a real task.

### **A4. Choosing primary and secondary outcomes for a surgical + rehab pathway trial**
The PI and physio have strong views on what matters clinically; the statistician wants outcomes that are measurable and robust. In practice, the conversation turns into trade-offs: the “perfect” outcome is hard to collect, the easiest outcome is not meaningful enough, and some instruments are licensed or burdensome.

The DPhil student brings a short evidence note: what instruments have been used, which have good responsiveness, typical follow-up windows, and what missingness looks like. The data manager translates the choice into reality: fields, coding, and how it will appear in the EDC. The end result is not just a choice of outcome—it’s a collection plan, a fallback plan for missing data, and a statement of what counts as a clinically important difference.

### **A5. Surgical standardisation across sites (variation and credentialing)**
A surgical intervention is rarely a single “thing”; it’s a bundle of steps with acceptable variation. The PI convenes surgeons to define what must be standardised (key steps, devices, positioning) and what can vary without undermining the comparison. Someone suggests video recording; someone else points out the practical and governance complications.

The trial manager turns clinical agreement into operational artefacts: a surgeon checklist, a credentialing log, training slides, and a short competency sign-off process. What looks like “just a checklist” becomes a negotiation between professional autonomy and trial integrity. The work is mostly relational: getting buy-in early, making it easy to comply, and setting up a way to detect drift before it becomes a data-quality crisis.

---

### **B1. Fidelity drift at Site B (rehab delivery stops matching the protocol)**
Three months in, the physio notices subtle changes: patients at one site are being progressed faster, some exercises are swapped, and documentation is inconsistent. It’s not malicious—just local habits and staffing constraints. The physio phones the site team, listens to the reality on the ground, and compares what they’re doing to what the protocol actually requires.

The trial manager logs the issue as a deviation trend, not a single incident: it goes into the risk log with an owner and a mitigation plan. The physio designs a retraining session and a simplified fidelity checklist that fits into the clinic’s workflow. The goal is not perfection; it’s getting back to “good enough” consistency and ensuring the trial can defend the intervention description later.

### **B2. Recruitment lag with strict eligibility criteria**
The weekly recruitment report shows a pattern: one site is fine, two are slow, and one is almost at zero. The trial assistant’s screening logs reveal that many potential participants are being excluded for a criterion that sounded sensible on paper but is rare in real clinic flow (or is interpreted differently by clinicians).

The trial manager runs a recruitment troubleshooting call: each site walks through their last ten screened patients and explains where the process breaks. The PI decides whether the criterion is essential to the scientific question or whether it can be modified without undermining safety or interpretability. If change is needed, the team starts the amendment/modification process: updating protocol, PIS/consent, CRFs, training materials, and the site briefings—plus a plan for re-consent if required.

### **B3. Consent in a busy surgical pathway (timing, delegation, version control)**
In surgery, “the right moment” for consent is hard to pin down: patients are anxious, clinics run late, and staff rotate. The trial assistant tries to line up consent windows with actual clinic timetables, coordinating with secretaries and nursing teams. A common failure mode is that patients receive the wrong version of the PIS or don’t have enough time to consider it.

The PI checks that delegation logs match reality: who is allowed to consent, who is trained, and what evidence exists. When a protocol update happens, the trial manager has to ensure the consent ecosystem updates in sync—new PIS, new consent form, new site instruction, and clear rules for whether existing participants need re-consent. The “paperwork” is actually a safety and auditability backbone.

### **B4. Adverse event spike with ambiguous causality**
A cluster of post-op complications appears within a short period. Clinically, these events might be expected background risk—or might be related to the intervention pathway. The PI reviews cases with clinical colleagues, focusing on seriousness, expectedness, relatedness, and whether reporting thresholds are met.

Operationally, the trial manager triggers the safety workflow: making sure SAE forms are complete, timelines are met, and the right committees (and sponsor) are informed. The data manager reconciles what’s in EDC with source documentation and any hospital reporting systems. A big part of the work is narrative discipline: making sure each case is described consistently, with dates and facts aligned, because safety narratives often become the first thing an external reviewer scrutinises.

### **B5. Cross-over and contamination in pragmatic trials**
A surgeon decides mid-list that a participant allocated to pathway A should really get pathway B, “for clinical reasons.” Another participant receives extra rehab sessions because a local physio team thinks it’s best practice. These decisions can be entirely reasonable clinically, but they create analytical headaches.

The trial manager documents cross-overs and deviations with enough detail to support later analysis (what changed, why, when, and what was done). The PI provides clinical justification and ensures decisions are properly recorded. The DPhil student works with the statistician on how cross-over will be handled (e.g., intention-to-treat vs per-protocol, sensitivity analyses) and what additional metadata is needed to make those analyses credible.

---

### **C1. Database build and UAT cycle (EDC becomes real)**
The data manager builds the database with the protocol open in one window and CRF drafts in another, creating edit checks that reflect real clinical logic. The first build is never right: fields are missing, labels are unclear, and the visit schedule doesn’t match what sites can actually do. The trial manager organises UAT by recruiting a few site staff to enter “test patients” using realistic scenarios.

UAT produces a messy issue log: confusing branching logic, impossible dates, missing options, and validation rules that block legitimate data. The data manager patches, retests, and documents changes. The real output is a stable EDC build plus a test trail that shows the system was validated and that the team understands how data will flow from clinic to analysis.

### **C2. Query storm after first cleaning cycle**
After the first month of data entry, the data manager runs cleaning checks and hundreds of queries appear: missing dates, inconsistent measurements, and fields entered in the wrong visit. Sites feel overwhelmed; they reply slowly; some answers are vague. The risk is that the trial becomes a constant “email chase” rather than a controlled process.

The data manager triages: what’s critical for safety and primary outcome vs what can wait. The trial assistant helps chase and file evidence, but the trial manager has to protect relationships—queries need to be clear, respectful, and grouped sensibly. Over time, the query storm usually reveals a deeper cause: unclear CRF design, training gaps, or site workflow mismatches that need targeted remediation.

### **C3. Imaging outcomes with blinded central review**
If imaging is involved, blinding and traceability become a parallel project. The trial manager sets up a pipeline: how images are captured, anonymised, labelled, transferred, and stored; who has access; and how a central reviewer records scores. Small mistakes (wrong IDs, missing sequences) can destroy data usability.

The data manager builds the linkage structure so that imaging IDs map to participants without revealing allocation or breaking blinding. They also ensure audit trails: when was an image received, who accessed it, what was scored, and what changed. The biggest hidden effort is coordination: aligning local radiology workflows with trial needs and making the process reliable across multiple sites.

### **C4. PROM collection drops during remote follow-up**
Follow-up is where trials quietly lose data. Participants stop answering, emails bounce, and some people don’t understand why their questionnaire matters. The physio often becomes the “translator” between participant experience and trial requirements: they adjust messaging, clarify the purpose, and suggest practical ways to reduce burden.

The trial assistant runs a reminder cadence and tracks missingness, but they also need escalation rules: when to phone, when to offer alternative completion modes, and when to record a refusal. The trial manager watches missingness by site and timepoint, because once missingness is systematic, it can bias outcomes and undermine credibility.

### **C5. Monitoring visit finds TMF gaps**
A monitor arrives and asks for evidence: training records, delegation logs, consent forms, amendments, and key correspondence. The TMF is usually “mostly fine” but with sharp edges—documents filed in the wrong place, missing signatures, outdated versions, or approvals that live only in someone’s email.

The trial manager creates a CAPA plan and assigns a remediation sprint: the trial assistant backfiles documents, indexes folders, and runs basic QC checks. The PI may be pulled in for missing signatures or clarifications. The value of monitoring is not punishment; it is forcing the team to make the trial defensible under external scrutiny.

---

### **D1. Ethics/regulatory submission packaging (UK)**
Even when the science is strong, submissions fail on packaging and internal consistency. The trial manager assembles the bundle: protocol, PIS/consent, investigator brochure (if relevant), recruitment materials, data management plan elements, and supporting documents. They maintain trackers: what’s complete, what’s awaiting sign-off, and what changes trigger cascading updates.

The PI reviews for clinical accuracy and ethical coherence—especially risk/benefit framing, safety reporting, and participant burden. When questions come back, the team often discovers hidden inconsistencies: the protocol says one thing, the consent form implies another, and the CRF captures something else. Most of the work is about alignment and traceability.

### **D2. Substantial change / modification mid-trial**
A change request arrives: new safety information, a revised intervention manual, or an operational change needed to keep recruitment alive. The trial manager starts with an impact assessment: which documents change, which sites need retraining, whether participants need re-consent, and what the timeline is to implement without disrupting recruitment.

The PI signs off on scientific and ethical justification. The data manager updates the EDC and ensures change control is documented. This is where trials experience “version fatigue”: every update ripples through site packs, training records, delegation logs, and communications—so the team has to be disciplined about when to change, how to communicate, and how to prove sites implemented the change.

### **D3. Governance meeting packs (TMG/TSC/DMC)**
Before governance meetings, the trial manager spends days turning operational mess into a clear picture: recruitment, retention, protocol deviations, TMF status, and financial burn. The data manager contributes data quality metrics and flags: missingness trends, unresolved queries, and any signals that might affect the primary outcome’s interpretability.

The PI scans for decision points: whether safety concerns require action, whether recruitment strategy changes are warranted, and whether protocol interpretations need clarification across sites. Good packs do not just report; they force decisions and record them in a way that can be audited later.

### **D4. Embedded qualitative acceptability study**
A qualitative strand begins because numbers alone won’t explain why the intervention works (or doesn’t). The DPhil student drafts topic guides, coordinates sampling, and conducts interviews—often juggling clinical schedules and participant availability. They also manage consent, recording, transcription logistics, and data storage governance.

Analysis is iterative: initial coding, refinement of themes, and constant checking that claims are grounded in excerpts. The trial manager ensures the qual strand stays aligned with the main trial governance (e.g., how disclosures are handled, what happens if a participant reveals a safety issue) and that outputs feed back into trial interpretation rather than becoming a disconnected side project.

### **D5. Close-out and database lock**
As recruitment ends, the trial shifts into disciplined closure. The data manager runs final reconciliations: AE/SAE, withdrawals, primary outcome completeness, and resolution of critical queries. They prepare a lock checklist and make sure the audit trail is in order—because once locked, changes are heavily controlled.

The trial manager coordinates close-out visits and archiving plans and checks that the TMF tells a coherent story from first approval to last follow-up. The PI signs off key steps and prepares for dissemination. The stress point is that close-out is less visible than recruitment, but errors here are expensive and hard to fix later.

### **D6. Writing final report/manuscript (CONSORT and beyond)**
Writing starts with a scramble for definitive numbers: final recruitment, withdrawals, deviations, and the flow diagram. The trial manager often becomes the keeper of “counts with provenance,” reconciling site totals with database totals. The DPhil student drafts methods and results, ensuring alignment with the SAP and that tables/figures can be regenerated reproducibly.

The PI focuses on interpretation: what the findings mean in practice, what limitations matter, and how to frame the intervention in clinically honest terms. Authorship coordination becomes a project: chasing co-author comments, managing versions, resolving contradictions, and making sure the final narrative is consistent with the trial’s documented decisions.

### **D7. Audit/inspection readiness drill**
A readiness drill is staged like an inspection: “Show me evidence of training,” “Show me delegation and oversight,” “Show me how you managed a serious adverse event,” “Show me your change control.” The trial manager and data manager practise pulling documents quickly and explaining processes coherently.

The drill surfaces predictable weak points: evidence trapped in emails, ambiguous responsibilities, inconsistent filing, or unclear rationale for decisions. The value is operational learning: turning tacit practice into explicit, defensible process—so that if scrutiny arrives unexpectedly, the trial can demonstrate control and integrity.

---

## **How these scenarios change with AI support (tool patterns)**n

### **0. Default safe-use pattern (applies to everything)**
- Use institutional ChatGPT for **drafting, structuring, summarising, checklisting**.
- Keep **patient-identifiable** or unnecessary personal data out unless explicitly approved.
- **Validate outputs**; **document substantive use**; keep an audit trail.

### **1. Protocol/SOP comprehension at speed (NotebookLM best-fit)**
- Load: protocol, MOP, SOPs, SAP outline, monitoring plan, CRFs, training slides.
- Use: **cross-document consistency checks** (visit schedule vs CRFs vs PIS), role-specific Q&A packs.

### **2. Regulatory change readiness (Deep Research best-fit)**
- Use Deep Research to produce an internal briefing + action checklist for SOP refresh and submissions.

### **3. Recruitment troubleshooting (ChatGPT + coding tools)**
- ChatGPT: hypotheses from screening log patterns; draft site comms/call scripts.
- Coding: parse logs; flag outliers; automate dashboards and CONSORT counts.

### **4. Data quality + query management (coding tools + ChatGPT)**
- Coding: missingness heatmaps; rule checks; duplicate detection; automated query lists.
- ChatGPT: explain issues for sites; draft cleaning plans; prioritisation rubric.

### **5. Meeting packs and governance (ChatGPT)**
- Turn KPI tables into **decision-focused narratives**; produce risk log updates; draft minutes/action logs.

### **6. Safety narratives and reconciliation (NotebookLM + ChatGPT)**
- NotebookLM: ground answers in SOP workflow.
- ChatGPT: first-pass templates for de-identified structured facts; reconciliation checklists.

### **7. Intervention fidelity (physio-focused) (ChatGPT)**
- Generate fidelity checklists; micro-training scripts; participant adherence messages in plain language.

### **8. Qualitative analysis acceleration (NotebookLM + coding tools)**
- NotebookLM: retrieve evidence excerpts from uploaded transcripts (policy permitting).
- Coding: exploratory topic modelling; excerpt-to-theme trace tables.

### **9. Writing support (ChatGPT + NotebookLM)**
- NotebookLM: keep writing grounded in supplied sources.
- ChatGPT: restructure for reporting checklists; clarity edits; journal variants.

### **10. Onboarding and training at scale (ChatGPT)**
- Role-specific “day 1” guides; protocol quizzes; interactive Q&A scripts.

### **11. Reproducible analysis pipelines (coding tools)**
- Generate R/Python skeletons; Quarto/R Markdown reports; unit tests for transforms; consistent table/figure generation.

---

## **Concrete mini-exercises for your session**

### **Trial managers**
- Convert a messy issues list into a **risk log** (mitigation, owner, due date), then human-review.
- Generate a **weekly recruitment and data-cleaning pack** from a sample dataset (dashboard + narrative).

### **Principal investigators**
- Use NotebookLM to answer: “Where in the protocol is X defined?” then draft a site clarification note.
- Draft a **benefit–risk summary** grounded only in supplied trial documents.

### **Research physiotherapists**
- Produce a **retraining plan** for fidelity drift + participant adherence message set.

### **Data managers**
- Draft an **impact assessment** for a CRF change request; generate a test plan and UAT script.

### **DPhil students**
- Restructure methods to match a reporting checklist; generate reproducible tables/figures from toy data.

---

## **Explicit ‘don’ts’ (clinical trials)**
- Don’t treat model output as authoritative for clinical/regulatory decisions.
- Don’t use generative AI to alter research-result images.
- Don’t let workflow changes outrun ethics/info-governance approvals.

