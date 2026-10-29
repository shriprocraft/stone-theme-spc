// Legal page content. Text is copied verbatim from the source documents —
// do not rewrite, summarize, shorten, expand, or remove any clause here.
// `**bold**` spans are the source's own emphasis markup, rendered as
// <strong> by the shared LegalPage renderer — this changes no wording.

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "contact" };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

export const termsAndConditions: LegalDocument = {
  title: "Terms & Conditions",
  effectiveDate: "August 1, 2026",
  intro: [
    'Welcome to **Shri Pro Craft** ("Shri Pro Craft", "Company", "we", "our", or "us"). These Terms & Conditions govern your access to and use of our website, products, and services. By accessing our website or engaging our services, you agree to comply with these Terms & Conditions. If you do not agree with these terms, please discontinue the use of our website and services.',
  ],
  sections: [
    {
      heading: "1. Our Services",
      blocks: [
        { kind: "p", text: "Shri Pro Craft is a digital marketing and technology solutions agency providing services including, but not limited to:" },
        {
          kind: "list",
          items: [
            "Performance Marketing",
            "Google Ads Management",
            "Meta (Facebook & Instagram) Advertising",
            "Search Engine Optimization (SEO)",
            "Website Design & Development",
            "Landing Page Development",
            "Branding & Creative Design",
            "Marketing Automation",
            "CRM Implementation",
            "Email Marketing",
            "Lead Generation",
            "Conversion Rate Optimization (CRO)",
            "Analytics & Reporting",
            "Digital Consulting",
          ],
        },
        { kind: "p", text: "The scope, timeline, pricing, and deliverables for each project will be outlined separately in a proposal, quotation, agreement, or invoice." },
      ],
    },
    {
      heading: "2. Client Responsibilities",
      blocks: [
        { kind: "p", text: "To ensure successful project delivery, clients agree to:" },
        {
          kind: "list",
          items: [
            "Provide accurate and complete information.",
            "Provide timely access to required accounts, platforms, and project assets.",
            "Review and approve deliverables within a reasonable timeframe.",
            "Ensure they have the legal rights to any content, images, logos, trademarks, or materials shared with us.",
            "Cooperate throughout the project to avoid unnecessary delays.",
          ],
        },
        { kind: "p", text: "Failure to provide the required information or approvals may impact project timelines." },
      ],
    },
    {
      heading: "3. Payments",
      blocks: [
        { kind: "p", text: "All pricing and payment terms will be communicated through official quotations or invoices." },
        { kind: "p", text: "Unless otherwise agreed in writing:" },
        {
          kind: "list",
          items: [
            "Payments must be made within the agreed due date.",
            "Late payments may result in suspension of ongoing work.",
            "All completed work and services are non-refundable.",
            "Any applicable taxes, duties, or government charges are the responsibility of the client unless stated otherwise.",
          ],
        },
      ],
    },
    {
      heading: "4. Intellectual Property",
      blocks: [
        { kind: "p", text: "All trademarks, logos, brand assets, and content supplied by the client remain the property of the client." },
        { kind: "p", text: "Shri Pro Craft retains ownership of its proprietary methodologies, frameworks, templates, software, automation workflows, strategies, and internal processes unless otherwise agreed in writing." },
        { kind: "p", text: "Ownership of final approved deliverables transfers to the client upon full payment, excluding any third-party licensed assets, fonts, software, or tools." },
      ],
    },
    {
      heading: "5. Confidentiality",
      blocks: [
        { kind: "p", text: "Both Shri Pro Craft and the client agree to maintain the confidentiality of all non-public business information shared during the course of a project." },
        { kind: "p", text: "Confidential information will not be disclosed to third parties except where required by law or with prior written consent." },
      ],
    },
    {
      heading: "6. Third-Party Platforms",
      blocks: [
        { kind: "p", text: "Our services may involve the use of third-party platforms including Google, Meta, LinkedIn, Microsoft, hosting providers, payment gateways, CRM systems, email marketing platforms, and other external services." },
        { kind: "p", text: "Shri Pro Craft is not responsible for:" },
        {
          kind: "list",
          items: [
            "Platform outages or downtime.",
            "Policy or algorithm changes.",
            "Account suspensions or restrictions imposed by third parties.",
            "Changes in pricing or features introduced by third-party providers.",
          ],
        },
        { kind: "p", text: "Clients are responsible for complying with the terms and policies of such platforms." },
      ],
    },
    {
      heading: "7. Limitation of Liability",
      blocks: [
        { kind: "p", text: "While we strive to deliver high-quality services and measurable results, Shri Pro Craft does not guarantee specific rankings, advertising performance, lead volumes, sales, or business outcomes unless expressly agreed in writing." },
        { kind: "p", text: "To the fullest extent permitted by law, Shri Pro Craft shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from the use of our website or services." },
        { kind: "p", text: "Our total liability for any claim relating to our services shall not exceed the amount paid by the client for the specific service giving rise to the claim." },
      ],
    },
    {
      heading: "8. Website Usage",
      blocks: [
        { kind: "p", text: "Users agree not to:" },
        {
          kind: "list",
          items: [
            "Attempt unauthorized access to our systems.",
            "Upload malicious software or harmful code.",
            "Copy, reproduce, or distribute website content without prior written permission.",
            "Use our website for any unlawful or fraudulent purpose.",
            "Interfere with the security or proper functioning of our website.",
          ],
        },
        { kind: "p", text: "We reserve the right to restrict or terminate access to users who violate these Terms." },
      ],
    },
    {
      heading: "9. Termination",
      blocks: [
        { kind: "p", text: "Either party may terminate a project or service agreement in accordance with the agreed contractual terms." },
        { kind: "p", text: "Termination does not affect any outstanding payment obligations for services already rendered." },
      ],
    },
    {
      heading: "10. Privacy",
      blocks: [
        { kind: "p", text: "Your use of our website is also governed by our Privacy Policy. By using our website or services, you acknowledge that you have read and understood our Privacy Policy." },
      ],
    },
    {
      heading: "11. Changes to These Terms",
      blocks: [
        { kind: "p", text: "Shri Pro Craft reserves the right to update or modify these Terms & Conditions at any time. Any changes will become effective upon publication on this page. Continued use of our website or services after such changes constitutes acceptance of the revised Terms." },
      ],
    },
    {
      heading: "12. Governing Law",
      blocks: [
        { kind: "p", text: "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India." },
        { kind: "p", text: "Any disputes arising out of or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the competent courts in Tamil Nadu, India." },
      ],
    },
    {
      heading: "13. Contact Us",
      blocks: [
        { kind: "p", text: "If you have any questions regarding these Terms & Conditions, please contact us:" },
        { kind: "contact" },
        { kind: "p", text: "We are committed to providing professional, transparent, and reliable services while maintaining fair business practices and strong client relationships." },
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  effectiveDate: "August 1, 2026",
  intro: [
    'Welcome to **Shri Pro Craft** ("Shri Pro Craft", "Company", "we", "our", or "us"). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, store, and safeguard your information when you visit our website, contact us, or use any of our services.',
    "By accessing our website or engaging with our services, you acknowledge that you have read and understood this Privacy Policy.",
  ],
  sections: [
    {
      heading: "1. Who We Are",
      blocks: [
        { kind: "p", text: "Shri Pro Craft is a digital growth agency specializing in performance marketing, search engine optimization (SEO), website design and development, paid advertising, branding, marketing automation, CRM implementation, lead generation, and digital consulting. As part of providing these services, we may collect and process certain information to deliver a secure and efficient experience." },
      ],
    },
    {
      heading: "2. Information We Collect",
      blocks: [
        { kind: "p", text: "We may collect the following categories of information:" },
        { kind: "subheading", text: "Personal Information" },
        {
          kind: "list",
          items: [
            "Full Name",
            "Email Address",
            "Mobile Number",
            "Company Name",
            "Job Title",
            "Business Address",
            "Billing Information (where applicable)",
          ],
        },
        { kind: "subheading", text: "Information You Provide" },
        { kind: "p", text: "When you:" },
        {
          kind: "list",
          items: [
            "Submit a contact form",
            "Request a quotation",
            "Book a consultation",
            "Subscribe to newsletters",
            "Download resources",
            "Communicate with us through email, phone, WhatsApp, or social media",
          ],
        },
        { kind: "subheading", text: "Technical Information" },
        { kind: "p", text: "We automatically collect certain technical information including:" },
        {
          kind: "list",
          items: [
            "IP Address",
            "Browser Type",
            "Device Information",
            "Operating System",
            "Website Pages Visited",
            "Date and Time of Visit",
            "Referral Source",
            "Cookies and Analytics Data",
          ],
        },
      ],
    },
    {
      heading: "3. How We Use Your Information",
      blocks: [
        { kind: "p", text: "We use your information to:" },
        {
          kind: "list",
          items: [
            "Respond to enquiries and provide customer support.",
            "Deliver our digital marketing and consulting services.",
            "Manage projects and communicate with clients.",
            "Create proposals, quotations, and invoices.",
            "Improve our website and user experience.",
            "Measure website performance and marketing effectiveness.",
            "Send service updates and business communications.",
            "Comply with legal and regulatory obligations.",
            "Protect our website against fraud, misuse, or unauthorized access.",
          ],
        },
        { kind: "p", text: "We only use personal information for legitimate business purposes and in accordance with applicable laws." },
      ],
    },
    {
      heading: "4. Cookies & Tracking Technologies",
      blocks: [
        { kind: "p", text: "Our website may use cookies and similar technologies to improve functionality and user experience." },
        { kind: "p", text: "Cookies help us:" },
        {
          kind: "list",
          items: [
            "Remember user preferences",
            "Understand website traffic",
            "Improve website performance",
            "Measure advertising campaigns",
            "Enhance website security",
          ],
        },
        { kind: "p", text: "You may disable cookies through your browser settings; however, some features of the website may not function properly." },
      ],
    },
    {
      heading: "5. Analytics & Advertising Platforms",
      blocks: [
        { kind: "p", text: "To improve our services and marketing performance, we may use trusted third-party tools, including but not limited to:" },
        {
          kind: "list",
          items: [
            "Google Analytics",
            "Google Ads",
            "Google Tag Manager",
            "Meta Pixel",
            "LinkedIn Insight Tag",
            "Microsoft Clarity",
            "Search Console",
            "Email Marketing Platforms",
            "CRM & Marketing Automation Platforms",
          ],
        },
        { kind: "p", text: "These platforms may collect information according to their respective privacy policies." },
      ],
    },
    {
      heading: "6. How We Share Information",
      blocks: [
        { kind: "p", text: "We value your privacy and **do not sell, rent, or trade** your personal information." },
        { kind: "p", text: "Your information may only be shared:" },
        {
          kind: "list",
          items: [
            "With trusted service providers assisting in our business operations.",
            "With payment processors for secure transactions.",
            "With hosting and cloud infrastructure providers.",
            "When required by applicable law, legal proceedings, or governmental authorities.",
            "To protect our legal rights, business interests, or users.",
          ],
        },
        { kind: "p", text: "All third-party providers are expected to maintain appropriate security and confidentiality standards." },
      ],
    },
    {
      heading: "7. Data Security",
      blocks: [
        { kind: "p", text: "We implement reasonable administrative, technical, and organizational security measures to protect your information against unauthorized access, disclosure, alteration, or destruction." },
        { kind: "p", text: "While we continuously work to safeguard your information, no online transmission or storage method can be guaranteed to be completely secure." },
      ],
    },
    {
      heading: "8. Data Retention",
      blocks: [
        { kind: "p", text: "We retain personal information only for as long as necessary to:" },
        {
          kind: "list",
          items: [
            "Deliver our services.",
            "Maintain client relationships.",
            "Comply with legal, accounting, and tax requirements.",
            "Resolve disputes.",
            "Enforce our agreements.",
          ],
        },
        { kind: "p", text: "When information is no longer required, it is securely deleted or anonymized where appropriate." },
      ],
    },
    {
      heading: "9. Your Rights",
      blocks: [
        { kind: "p", text: "Subject to applicable laws, you may have the right to:" },
        {
          kind: "list",
          items: [
            "Request access to your personal information.",
            "Request correction of inaccurate information.",
            "Request deletion of your information.",
            "Withdraw consent where processing is based on consent.",
            "Request information regarding how your data is processed.",
          ],
        },
        { kind: "p", text: "Requests may be submitted using the contact information provided below." },
      ],
    },
    {
      heading: "10. Third-Party Websites",
      blocks: [
        { kind: "p", text: "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, security, or content of external websites. We encourage users to review the privacy policies of any third-party websites they visit." },
      ],
    },
    {
      heading: "11. Children's Privacy",
      blocks: [
        { kind: "p", text: "Our website and services are intended for businesses and individuals who are at least 18 years of age. We do not knowingly collect personal information from children." },
      ],
    },
    {
      heading: "12. Changes to This Privacy Policy",
      blocks: [
        { kind: "p", text: "We may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, or technology. The updated version will be posted on this page along with the revised Effective Date." },
        { kind: "p", text: "Your continued use of our website after any changes constitutes acceptance of the updated Privacy Policy." },
      ],
    },
    {
      heading: "13. Contact Us",
      blocks: [
        { kind: "p", text: "If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please contact us:" },
        { kind: "contact" },
        { kind: "p", text: "We are committed to addressing privacy-related enquiries promptly and professionally." },
      ],
    },
  ],
};
