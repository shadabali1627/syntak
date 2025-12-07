export interface SyntakKnowledge {
    id: string;
    category: string;
    content: string;
}

export const syntakData: SyntakKnowledge[] = [
    // ==========================================
    // COMPANY OVERVIEW & IDENTITY
    // ==========================================
    {
        id: 'company-info',
        category: 'Company Info',
        content: 'Syntak is a premium digital agency specialized in building scalable web platforms and AI-driven automation. We blend cutting-edge technology with high-end design to deliver exceptional digital experiences. Our mission is to empower businesses with future-proof digital infrastructure.'
    },
    {
        id: 'values',
        category: 'Company Info',
        content: 'Our Core Values: 1. Transparency: We build in the open with clear communication. 2. Performance-First: Speed is a feature, not an afterthought. 3. User-Centricity: We design for the people who actually use the product. 4. Innovation: We constantly explore new tech (AI, Web3) to give clients an edge.'
    },
    {
        id: 'location',
        category: 'Company Info',
        content: 'Location: We are a remote-first agency with a distributed team of experts globally, ensuring 24/7 coverage for critical projects. Headquartered digitally, present everywhere.'
    },
    {
        id: 'team-structure',
        category: 'Company Info',
        content: 'Our Team Structure: Every project is assigned a dedicated squad including a Project Manager, a Lead Developer, a UI/UX Designer, and a QA Specialist. For AI projects, we include an AI Engineer and a Data Architect.'
    },

    // ==========================================
    // EXTENDED SERVICES: WEB & APP DEVELOPMENT
    // ==========================================
    {
        id: 'services-web-dev',
        category: 'Services',
        content: 'Web Development: We build robust, scalable applications using Next.js 14, React Server Components (RSC), and TypeScript. We leverage Server Actions for seamless data mutations and edge caching for global performance. We prioritize Accessibility (a11y) and Core Web Vitals scores.'
    },
    {
        id: 'services-cms',
        category: 'Services',
        content: 'CMS Integration: We specialize in Sanity Studio v3. We build custom schemas, real-time preview environments, and structured content lakes. This "Compose" approach allows marketing teams to build landing pages dynamically without developer intervention, speeding up campaign launches.'
    },
    {
        id: 'services-ecommerce',
        category: 'Services',
        content: 'Headless E-commerce: We build headless solutions using Shopify Hydrogen or Next.js Commerce. By decoupling the frontend from the backend, we achieve sub-second page loads, higher conversion rates, and the flexibility to create completely custom product configurators and checkout flows.'
    },
    {
        id: 'services-saas-dev',
        category: 'Services',
        content: 'SaaS Development: We build multi-tenant SaaS platforms from scratch. We handle complex organization management, role-based access control (RBAC), subscription billing with Stripe, and usage-based metering. We also build developer-friendly APIs and webhooks for your platform.'
    },
    {
        id: 'services-mobile-apps',
        category: 'Services',
        content: 'Cross-Platform Mobile Apps: We use React Native (Expo) to build high-quality mobile apps for iOS and Android from a single codebase. This ensures feature parity across platforms and significantly reduces maintenance costs compared to native development.'
    },

    // ==========================================
    // EXTENDED SERVICES: AI & AUTOMATION
    // ==========================================
    {
        id: 'services-rag-chatbot',
        category: 'Services',
        content: 'RAG Chatbots (Retrieval-Augmented Generation): We build custom chatbots that "know" your business. We ingest your PDFs, Notion docs, Zendesk history, and website content into a vector database (Pinecone/Milvus). When a user asks a question, the AI retrieves not just an answer, but the specific source material, ensuring 99% accuracy and eliminating hallucinations.'
    },
    {
        id: 'services-n8n-automation',
        category: 'Services',
        content: 'n8n & Workflow Automation: We design complex, self-hosted workflow automations using n8n. We connect disparate apps (e.g., Slack, Airtable, Gmail, Stripe) to eliminate manual data entry. Examples: Automated lead qualification, invoice generation/sending, employee onboarding pipelines, and social media scheduling.'
    },
    {
        id: 'services-ai-integrations',
        category: 'Services',
        content: 'Internal AI Tools: We integrate state-of-the-art LLMs (GPT-4o, Gemini 1.5 Pro, Claude 3.5 Sonnet) directly into your internal tools. This includes features like automated content generation for blogs, sentiment analysis of customer feedback, and intelligent data extraction from scanned invoices or contracts.'
    },
    {
        id: 'services-voice-ai',
        category: 'Services',
        content: 'Voice AI Agents: We build conversational voice AI for phone support using Vapi or Bland AI. These agents can handle inbound calls for appointments, outbound calls for lead qualification, and can navigate complex IVR menus with near-human latency.'
    },

    // ==========================================
    // CUSTOMER SUPPORT SOLUTIONS
    // ==========================================
    {
        id: 'solutions-cs-automation',
        category: 'Solutions',
        content: 'AI Customer Support Automation: We transform your customer service with intelligent agents. Our AI agents handle up to 80% of Level 1 inquiries (order status, refunds, FAQs) instantly, 24/7. They speak 95+ languages and can be trained to adopt your brand voice (friendly, formal, empathetic).'
    },
    {
        id: 'solutions-human-handover',
        category: 'Solutions',
        content: 'Smart Human Handover: We implement "Human-in-the-Loop" systems. The AI detects frustration via sentiment analysis or complex queries and seamlessly transfers the chat history to a human agent in Zendesk, Intercom, or Slack, ensuring customers never feel trapped by a bot.'
    },
    {
        id: 'solutions-omnichannel',
        category: 'Solutions',
        content: 'Omnichannel Deployment: We deploy your AI support agent across all channels: Web Chat, WhatsApp, Messenger, and Email. A single "brain" manages conversations everywhere, maintaining context. If a user starts on web and moves to WhatsApp, the context follows them.'
    },

    // ==========================================
    // INDUSTRY VERTICALS
    // ==========================================
    {
        id: 'industry-fintech',
        category: 'Industries',
        content: 'Fintech: For financial services, we focus on data security (SOC2 compliance), real-time dashboards, and fraud detection workflows. We build secure KYB/KYC onboarding flows and integrate with banking APIs like Plaid.'
    },
    {
        id: 'industry-healthcare',
        category: 'Industries',
        content: 'Healthcare: We build HIPAA-compliant patient portals and telemedicine apps. We ensure all data is encrypted at rest and in transit. We specialize in integrations with EHR systems like Epic and Cerner using HL7/FHIR standards.'
    },
    {
        id: 'industry-real-estate',
        category: 'Industries',
        content: 'Real Estate: We build property listing platforms with advanced map search (Mapbox), virtual tour integrations (Matterport), and automated scheduling for viewings. Our AI bots can qualify renters/buyers before connecting them to an agent.'
    },
    {
        id: 'industry-education',
        category: 'Industries',
        content: 'EdTech: We create Learning Management Systems (LMS) with video streaming, interactive quizzes, and progress tracking. We integrate detailed analytics to help educators understand student engagement.'
    },

    // ==========================================
    // TECHNOLOGY DEEP DIVES (WHY WE CHOOSE X)
    // ==========================================
    {
        id: 'tech-nextjs',
        category: 'Technology',
        content: 'Why Next.js? Next.js is the React framework for production. It offers Hybrid Rendering (Server vs Client), which is crucial for SEO and performance. Its App Router allows us to fetch data in parallel, significantly reducing load times compared to traditional SPAs.'
    },
    {
        id: 'tech-sanity',
        category: 'Technology',
        content: 'Why Sanity? Sanity is more than a CMS; it is a composable content cloud. Its "Content Lake" acts as a single source of truth for your website, app, and marketing materials. Its real-time API capabilities mean your users always see the freshest content without wait.'
    },
    {
        id: 'tech-supabase',
        category: 'Technology',
        content: 'Why Supabase? Supabase is an open-source Firebase alternative built on top of Postgres. It gives us the reliability of an SQL database with the ease of real-time subscriptions, massive file storage, and enterprise-grade authentication out of the box.'
    },
    {
        id: 'tech-vector-db',
        category: 'Technology',
        content: 'Why Vector Databases? Traditional search looks for exact keywords. Vector databases (like Pinecone) understand *meaning*. They store text as mathematical numbers (vectors). This allows our AI to find "how to fix login" even if the user searches "I can not sign in".'
    },

    // ==========================================
    // SECURITY & COMPLIANCE
    // ==========================================
    {
        id: 'security-data',
        category: 'Security',
        content: 'Data Security: We follow the principle of least privilege. We never hardcode API keys. We use environment variables and secret managers. All databases are protected by Row Level Security (RLS) policies to ensure users can only access their own data.'
    },
    {
        id: 'security-encryption',
        category: 'Security',
        content: 'Encryption: We enforce HTTPS via TLS 1.3 for all web traffic. Sensitive data at rest (in the database) is encrypted using AES-256 standards. We also implement secure cookie policies (HttpOnly, Secure, SameSite) to prevent XSS/CSRF attacks.'
    },
    {
        id: 'security-privacy',
        category: 'Security',
        content: 'Privacy: We design systems to be GDPR and CCPA friendly. We implement easy "Delete My Data" workflows for users and ensure that cookie consent banners are compliant with local regulations.'
    },

    // ==========================================
    // INTEGRATION LIBRARY
    // ==========================================
    {
        id: 'integrations-crm',
        category: 'Integrations',
        content: 'CRM Integrations: We connect your site to HubSpot, Salesforce, Pipedrive, or Zoho. We ensure two-way sync: web form submissions create leads in CRM, and CRM status updates can trigger emails or web personalization.'
    },
    {
        id: 'integrations-payment',
        category: 'Integrations',
        content: 'Payment Gateways: Beyond Stripe, we have experience integrating PayPal, Razorpay, Lemon Squeezy, and Paddle (for managing global tax compliance).'
    },
    {
        id: 'integrations-marketing',
        category: 'Integrations',
        content: 'Marketing Tools: We integrate with Mailchimp, Klaviyo, Resend, and Postmark for transactional and marketing emails. We can set up complex drip campaigns triggered by user actions on the website.'
    },

    // ==========================================
    // PRICING TIERS
    // ==========================================
    {
        id: 'pricing-starter',
        category: 'Pricing',
        content: 'Starter Package ($2k - $5k): Best for marketing sites and portfolios. Includes: Next.js setup, Sanity CMS integration, responsive design, contact form, and basic SEO. Typical timeline: 2-4 weeks.'
    },
    {
        id: 'pricing-pro',
        category: 'Pricing',
        content: 'Pro Package ($8k - $15k): Best for growing businesses and membership sites. Includes: User authentication (Clerk), database integration (Supabase), blog/resource center, advanced animations, and dashboard analytics. Typical timeline: 4-8 weeks.'
    },
    {
        id: 'pricing-enterprise',
        category: 'Pricing',
        content: 'Enterprise Package ($25k+): For large-scale SaaS platforms and complex tools. Includes: Multi-tenant architecture, custom microservices, dedicated SLA, load balancing, extensive testing suites, and custom AI model training. Timeline: 3+ months.'
    },
    {
        id: 'pricing-retainer',
        category: 'Pricing',
        content: 'Growth Retainer ($1,500/mo): Includes 20 hours of development time per month for A/B testing, feature iteration, and landing page creation. Priority support included.'
    },

    // ==========================================
    // DEVELOPMENT PROCESS
    // ==========================================
    {
        id: 'process-discovery',
        category: 'Process',
        content: 'Phase 1: Discovery. We start with a deep dive into your business goals. We define user personas, technical requirements, and success metrics. We can also perform a paid technical audit of your existing stack. Output: Product Requirements Document (PRD).'
    },
    {
        id: 'process-design',
        category: 'Process',
        content: 'Phase 2: Design. We create wireframes and high-fidelity mockups in Figma. We iterate on the visual identity until it matches your brand perfectly. You get a clickable prototype to approve before code is written. We focus on Atomic Design principles for reusability.'
    },
    {
        id: 'process-dev',
        category: 'Process',
        content: 'Phase 3: Development. We work in agile sprints (usually 2 weeks). You get access to a persistent staging environment to see real progress. We write clean, documented code and set up CI/CD pipelines for automated testing and deployment.'
    },
    {
        id: 'process-launch',
        category: 'Process',
        content: 'Phase 4: Launch & Support. We perform a rigorous 50-point pre-launch checklist (SEO, performance, security, accessibility). After launch, we provide 30 days of complimentary bug-fix support to address any immediate issues.'
    },

    // ==========================================
    // SYNTAK SUPPORT POLICIES
    // ==========================================
    {
        id: 'support-sla',
        category: 'Support',
        content: 'Our Support SLAs: We offer tiered support for our clients. Standard included support has a 24-hour response time via email. Premium Retainer clients get a dedicated Slack channel and < 4-hour response time for critical issues.'
    },
    {
        id: 'support-channels',
        category: 'Support',
        content: 'Client Support Channels: We prioritize clear communication. We use dedicated Slack Connect channels for real-time collaboration with your team. Bugs and feature requests are tracked transparently in Linear or Jira, giving you full visibility into our work board.'
    },
    {
        id: 'support-scope',
        category: 'Support',
        content: 'Maintenance Scope: Our maintenance packages cover server uptime monitoring, security patching, API integrity checks, and fixing regression bugs. New feature development is scoped and billed separately at our hourly rate or as part of a retainer.'
    },

    // ==========================================
    // CASE STUDIES (REAL WORLD EXAMPLES)
    // ==========================================
    {
        id: 'case-study-fintech',
        category: 'Case Study',
        content: 'Case Study: NeoBank Dashboard. Problem: Client had a slow legacy portal. Solution: We rebuilt the frontend in Next.js with SWR for real-time data fetching. Result: 60% faster load times, 30% increase in user retention, and fully SOC2 compliant architecture.'
    },
    {
        id: 'case-study-ecommerce',
        category: 'Case Study',
        content: 'Case Study: Luxury Fashion Brand. Problem: Shopify theme was too rigid for custom 3D product viewer. Solution: Migrated to Headless Shopify using Hydrogen. Implemented Three.js for 3D rendering. Result: 200% increase in time-on-page and 15% increase in conversion rate.'
    },
    {
        id: 'case-study-logistics',
        category: 'Case Study',
        content: 'Case Study: Logistics Automation. Problem: Manual data entry was causing 50 hours of lost time per week. Solution: Built an n8n workflow connecting Email, OCR (scan invoices), and AirTable. Result: 100% automation of invoice processing, saving the client $60k/year in labor.'
    },
    {
        id: 'case-study-healthcare',
        category: 'Case Study',
        content: 'Case Study: Telehealth Scheduler. Problem: Double-booking of doctors due to sync issues. Solution: Built a custom booking engine with Postgres Row Locking to prevent race conditions. Result: Zero double bookings in 12 months, patient satisfaction score up by 40%.'
    },

    // ==========================================
    // GLOSSARY OF DIGITAL TERMS
    // ==========================================
    {
        id: 'term-headless',
        category: 'Glossary',
        content: 'What is Headless? Headless means separating the frontend (what users see) from the backend (where content lives). This allows us to use modern, fast frameworks like React for the frontend while keeping your preferred CMS tools.'
    },
    {
        id: 'term-api',
        category: 'Glossary',
        content: 'What is an API? An API (Application Programming Interface) is a bridge that allows two software programs to talk to each other. For example, your website talking to Stripe to process a payment.'
    },
    {
        id: 'term-ci-cd',
        category: 'Glossary',
        content: 'What is CI/CD? Continuous Integration/Continuous Deployment. It is a set of automated practices that test and deploy code changes. It ensures that we don\'t break your site when adding new features.'
    },
    {
        id: 'term-latency',
        category: 'Glossary',
        content: 'What is Latency? Latency is the delay before a transfer of data begins following an instruction. Low latency means your website feels "snappy" and instant.'
    },

    // ==========================================
    // CLIENT ONBOARDING GUIDE
    // ==========================================
    {
        id: 'onboarding-assets',
        category: 'Onboarding',
        content: 'Client Onboarding: What we need from you. 1. Brand Guidelines (Logo, Fonts, Colors). 2. Access to existing domain/hosting (if applicable). 3. Content basics (Copy, Images). 4. Key stakeholders contacts.'
    },
    {
        id: 'onboarding-tools',
        category: 'Onboarding',
        content: 'Client Onboarding: Tools we use. Communication: Slack/Email. Project Management: Linear/Trello. Design: Figma. Documentation: Wiki/Notion. Video calls: Google Meet/Zoom.'
    },

    // ==========================================
    // TECH STACK SUMMARY
    // ==========================================
    {
        id: 'tech-stack',
        category: 'Tech Stack',
        content: 'Our Core Stack: Frontend: Next.js 14, React, Tailwind CSS, Framer Motion. Backend: Node.js, Supabase, Postgres. AI/Automation: n8n, LangChain, OpenAI/Gemini APIs, Pinecone. CMS: Sanity. Auth: Clerk. Hosting: Vercel. Payment: Stripe. Testing: Playwright.'
    },

    // ==========================================
    // FAQs
    // ==========================================
    {
        id: 'faq-timeline',
        category: 'FAQ',
        content: 'How long does a project take? On average, a standard marketing website takes 4-6 weeks. Custom E-commerce implementations take 6-10 weeks. Complex SaaS applications typically take 12-16 weeks depending on the feature scope.'
    },
    {
        id: 'faq-maintenance',
        category: 'FAQ',
        content: 'Do you offer maintenance? Yes, we offer monthly retainer packages starting at $500/mo. This includes security updates, dependency upgrades, content edits, and performance monitoring. We also provide "On-Demand" maintenance blocks.'
    },
    {
        id: 'faq-refunds',
        category: 'FAQ',
        content: 'What is your payment structure? We typically operate on a milestone basis. 50% deposit to book the team. 25% upon design approval. 25% upon final launch. For larger projects, we can break this down into monthly sprints.'
    },
    {
        id: 'faq-ownership',
        category: 'FAQ',
        content: 'Who owns the code? You do. Upon final payment, full intellectual property (IP) rights and code repository access are transferred to your organization. We do not lock you into proprietary platforms.'
    },
    {
        id: 'faq-scalability',
        category: 'FAQ',
        content: 'Will my site scale? Yes. We architect for scale from day one. Using serverless technologies like Vercel and Supabase allows your application to handle traffic spikes (e.g., from Shark Tank or viral posts) without crashing.'
    },
    {
        id: 'faq-hosting',
        category: 'FAQ',
        content: 'Where do you host? We primarily use Vercel for frontend hosting due to its global edge network. For databases, we use Supabase (AWS based). For CMS, we use Sanity (Google Cloud based). We can also deploy to your custom AWS/Azure infrastructure if required.'
    },
    {
        id: 'faq-seo-guarantee',
        category: 'FAQ',
        content: 'Do you guarantee #1 on Google? No agency can guarantee a #1 ranking. However, we guarantee that we build your site with perfect Technical SEO foundation (100/100 Lighthouse score), giving you the best possible chance to rank high.'
    },

    // ==========================================
    // CONTACT INFORMATION
    // ==========================================
    {
        id: 'contact',
        category: 'Contact',
        content: 'Contact Us: \nEmail: shadabali1627@gmail.com\nPhone: +92 3309862595\nOffice Hours: Mon-Fri, 9am - 6pm EST.\nReach out to start your project. Our team typically responds within 24 hours.'
    }
];
