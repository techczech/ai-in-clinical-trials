export const researchData = {
  summary: {
    title: "Generative AI in Clinical Trials: High Potential, Early Evidence, Significant Caveats",
    description: "Generative AI appears highly useful for making clinical trials faster, cheaper, and more inclusive, but current evidence is mostly early-stage, with few prospective, regulated deployments.",
    keyPoints: [
      {
        area: "Trial design and administration",
        details: "LLMs can draft protocol sections, informed consent forms, and study reports. Regulators could use past protocols to flag design flaws and optimize eligibility criteria."
      },
      {
        area: "Recruitment, eligibility, and personalization",
        details: "AI (like TrialGPT) can match patients to trials with ~87% accuracy and >90% recall, reducing screening time by ~40%."
      },
      {
        area: "Simulation, digital twins, and synthetic data",
        details: "Generative models can simulate placebo arms and patient trajectories, reducing sample sizes and shortening trials."
      },
      {
        area: "Risk, monitoring, and HTA",
        details: "Support for trial-risk prediction, adaptive designs, and streamlining health technology assessment evidence synthesis."
      }
    ]
  },
  roles: [
    {
      id: "trial-manager",
      name: "Trial Manager",
      description: "Operationalises protocol, manages timelines, budgets, and site packs. Coordinates TMG/TSC/DMC and risk logs.",
      tasks: ["Set-up", "Delivery", "Close-out"]
    },
    {
      id: "pi",
      name: "Principal Investigator (CI/PI)",
      description: "Provides clinical leadership, refines research questions, and oversees ethics and regulatory strategy.",
      tasks: ["Clinical leadership", "Governance"]
    },
    {
      id: "physio",
      name: "Research Physiotherapist",
      description: "Delivers interventions, ensures protocol fidelity, and manages participant adherence and functional measures.",
      tasks: ["Intervention delivery", "Implementation"]
    },
    {
      id: "data-manager",
      name: "Data Manager",
      description: "Designs CRFs, builds EDC systems, manages data cleaning cycles, and ensures audit trail integrity.",
      tasks: ["Build", "Run"]
    },
    {
      id: "trial-assistant",
      name: "Trial Assistant",
      description: "Handles screening logs, visit scheduling, document chasing, TMF filing, and kit shipping.",
      tasks: ["Operations"]
    },
    {
      id: "dphil",
      name: "DPhil Student",
      description: "Conducts systematic reviews, nested methods studies, and qualitative sub-studies. Contributes to manuscripts.",
      tasks: ["Research layer"]
    }
  ],
  scenarios: [
    {
      category: "Design",
      title: "A1. New trial idea becomes a fundable question",
      vignette: "A PI comes out of clinic with a recurring frustration: patients are getting a common procedure, but outcomes vary wildly. They email the core group for a reality check. The TM pulls together a planning call while a DPhil student starts a scoping sweep.",
      roles: ["pi", "trial-manager", "dphil"]
    },
    {
      category: "Feasibility",
      title: "A2. Feasibility study planning",
      vignette: "The group agrees the main risk is deliverability. TM drafts a feasibility plan focusing on process measures. Data manager builds minimal CRFs to capture why people fail eligibility.",
      roles: ["trial-manager", "data-manager"]
    },
    {
      category: "Logistics",
      title: "B2. Recruitment lag with strict eligibility criteria",
      vignette: "Weekly reports show slow recruitment. Trial assistant's logs reveal that a criterion sounds sensible on paper but is rare in real clinic flow. PI decides if the criterion can be modified.",
      roles: ["trial-assistant", "pi", "trial-manager"]
    },
    {
      category: "Quality",
      title: "C2. Query storm after first cleaning cycle",
      vignette: "Hundreds of queries appear after the first month. Sites feel overwhelmed. Data manager triages critical vs minor queries while protecting relationships.",
      roles: ["data-manager", "trial-manager"]
    }
  ],
  aiPatterns: [
    {
      tool: "NotebookLM",
      pattern: "Protocol/SOP comprehension at speed",
      useCase: "Load protocol, MOP, SOPs. Use for cross-document consistency checks and role-specific Q&A packs."
    },
    {
      tool: "ChatGPT Deep Research",
      pattern: "Regulatory change readiness",
      useCase: "Produce internal briefings and action checklists for SOP refresh and submissions based on latest regulations."
    },
    {
      tool: "ChatGPT + Coding",
      pattern: "Recruitment troubleshooting",
      useCase: "Parse logs to flag outliers and automate dashboards; draft site comms/call scripts based on screening log patterns."
    }
  ],
  tools: [
    { name: "Consensus", role: "AI-powered search engine for research papers", link: "https://consensus.app" },
    { name: "Elicit", role: "Research assistant for literature review and reports", link: "https://elicit.com" },
    { name: "ChatGPT (GPT-5.2)", role: "Large language model for drafting, analysis, and coding", link: "https://chatgpt.com" },
    { name: "NotebookLM", role: "Source-grounded AI for document synthesis", link: "https://notebooklm.google.com" },
    { name: "Antigravity", role: "Agentic AI coding assistant and data analyst", link: "https://github.com/google-deepmind/antigravity" }
  ],
  techStack: [
    { name: "Antigravity", description: "AI Agent for analysis and development", type: "AI" },
    { name: "Cloudflare Pages", description: "Hosting platform", type: "Hosting" },
    { name: "GitHub", description: "Source control repository", type: "VCS" }
  ]
};
