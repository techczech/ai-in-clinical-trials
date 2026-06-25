# Process Notes
## Deep Research / Search Queries
### Tools used
- Consensus
- Elicit
- ChatGPT
- NotebookLM

### Consensus
- Done on 28 January 2026
- Prompt: How useful is generative AI in the context of clinical trials?
- Pro search using free account
- Link to shared results: https://consensus.app/search/generative-ai-clinical-trials/FG_gpejsRui5nJ7Lp0kLQw/

### Elicit
- Done on 28 January 2026
- Subscription
- Research report workflow
- Prompt: Survey of the use of Large Language Models in clinical trials.
- Link to shared results: https://elicit.com/review/5538287b-d2b2-45c7-b29b-84b9462fece2
- See exported word file in sourcefiles

### ChatGPT Deep Research
- Pro subscription
- Done on 28 January 2026
- Prompt 1:
    research the Internet for relevant case studies for each section  - do not make any assumptions about what might be relevant only describe what people reported - look at social media, blogs, news articles, publications, etc.
- Prompt 2 (followup):
    research the Internet for relevant case studies for each section  - do not make any assumptions about what might be relevant only describe what people reported - look at social media, blogs, news articles, publications, etc.
- Link to shared results: https://chatgpt.com/s/dr_697b1269229c8191a6a1daf93dbb85ea
- File with full text in sourcefiles

### NotebookLM Deep Research
- Done on 28 January 2026
- Used Pro subscription
- Link to shared notebook https://notebooklm.google.com/notebook/5437f419-a79b-4088-b808-84ab44e48b01
- Used Deep Research
- Files in sourcefiles
    - CSV made with prompt: "Create a table of dates of report and the finding with a column of positive and negative lessons learned."
    - Mindmap image generated in Studio
    - Video overview without custom prompt
    - Briefing document without custom prompt

## Other source materials
### ChatGPT generated list of scenarios
- Done on 28 January 2026
- Prompt:
    I'm going to do training for this group tomorrow about the use of AI. Write as many scenarios as possible about the research and the roles, and what sort of tasks these people perform that I could use first without AI—just what they do, how they gather data, analyze, organize, and what tasks each of the people mentioned perform in various scenarios. Outline some realistic scenarios for all of these. Then, suggest how they could use ChatGPT, as well as other tools such as Notebook LM, Deep Research, and coding tools to support their work. Make sure it's relevant for the context of Oxford in 2026.  Surgical Intervention Trials Unit, NDORMS The group is responsible for running clinical trials and comprises trial managers, principal investigators, research physiotherapists, data managers, trial assistants and DPhil students. 
- Follow up prompt:
    not detailed enaough - dor each scenario write a 2-3 vignette of what actullya happens not terse but descriptive for osmeone like me
- Scenario file in source files
- Model used: GPT-5.2 Thinking, Standard thinking time

## Building this website
- Use Google Antigravity
- Set up repository folder and opaned in Antigravity
- Set up subfolders for process notess and sourcefiles and downloaded/copied files
- Started taking process notes in Markdown
- Used Macwhisper to dictate the intial prompt to Antigravity 
- Executed prompt using Gemini 3 Flash in Planning mode
- Initial prompt
    > I want to build a website that will present the results of my research into the possible uses of generative AI in clinical trials. It will need to present the results in an easily digestible way in various formats. For example, some of the results should be searchable and easily browsable in different ways. At the same time, this website is intended to illustrate the process of me using various tools to find the results, so we also need to have a page listing the other tools used.
    >
    > I have been keeping process notes that also need to be reflected there. Finally, the website needs to record the fact that we're using Antigravity, hosting it on Cloudflare, and keeping the source files on GitHub. It will need to include all the relevant links.
    >
    > You will build me a first version of this website using the source files and the process notes as resources. Do not make any changes to the process notes or the source files. Create a folder structure as needed. Initialize an agents.md file with these instructions to make it clear that this is what the website is: a website that is both an illustration of how research is done with AI and a presentation of the results of this particular research. We will be using Antigravity to help analyze the results on the computer and also to build the presentation website, so it will function in two ways for us.
    >
    > Before you do anything else, commit the existing files in here into an initial commit into the git repo. 

- Follow up prompts:
    > refactor the site to keep all the pages and content that are displayed on the website in a pages folder with the conent being in easily editable markdown files.

    > change process page to reflect the process actually described - do not invent categories - just describe what ahppened - incl. prompt and links mentioned and what they generated and how they link to the website - be detailed and precise  - ask me questions if you are not sure

## List of tools used
- Consensus
- Elicit
- ChatGPT
- NotebookLM
- Antigravity
- Cloudflare
- GitHub