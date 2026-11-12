export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  equipmentFocus: string[];
  businessValue: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Operations' | 'Onboarding' | 'Rates';
}

export interface TestimonialItem {
  id: string;
  carrierName: string;
  contactName: string;
  role: string;
  equipment: string;
  location: string;
  partnerSince: string;
  quote: string;
  highlight: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export const COMPANY_INFO = {
  name: 'A TO Z Logistic LLC',
  legalName: 'A TO Z Logistic LLC',
  tagline: 'Professional Truck Dispatching Solutions That Keep Your Business Moving',
  heroHeadline: 'YOUR FREIGHT. OUR PRIORITY. YOUR SUCCESS.',
  heroSubheadline: 'Professional Truck Dispatching Solutions That Keep Your Business Moving.',
  heroDescription:
    'Since 2016, A TO Z Logistic LLC has been helping trucking businesses navigate the freight industry with dependable dispatching support, professional communication, and reliable operational assistance.',
  establishedYear: '2016',
  yearsInBusiness: '10+',
  servicesCount: '8',
  phone: '(800) 555-0199', // Editable placeholder
  phoneHref: 'tel:+18005550199',
  email: 'dispatch@atozlogistic.com', // Editable placeholder
  emailHref: 'mailto:dispatch@atozlogistic.com',
  address: '1200 Logistics Boulevard, Suite 400',
  cityStateZip: 'Chicago, IL 60606', // Editable placeholder
  hoursOfOperation: {
    weekdays: 'Monday – Friday: 7:00 AM – 7:00 PM EST',
    weekends: 'Saturday – Sunday: 8:00 AM – 4:00 PM EST',
    emergency: '24/7 On-Call Support for Active Loads in Transit',
  },
  missionStatement:
    'To empower independent owner-operators and growing motor carriers with institutional-grade freight dispatching, transparent broker negotiations, and dedicated operational support—keeping American supply chains moving with integrity.',
  visionStatement:
    'To be the most trusted and transparent freight dispatch partner in the United States, recognized for unwavering carrier advocacy and operational excellence.',
};

export const VERIFIED_STATS = [
  {
    value: '2016',
    label: 'Established Year',
    subtext: 'Providing continuous dispatch services across the USA',
  },
  {
    value: '10+',
    label: 'Years of Experience',
    subtext: 'Navigating changing freight cycles and spot markets',
  },
  {
    value: '8',
    label: 'Core Services Available',
    subtext: 'End-to-end back-office and load coordination solutions',
  },
  {
    value: '100%',
    label: 'Dedicated Dispatch Support',
    subtext: 'Direct carrier contact with no forced dispatch policy',
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'freight-dispatching',
    number: '01',
    title: 'Freight Dispatching',
    shortDesc:
      'Complete day-to-day freight coordination, assigning dedicated dispatch specialists focused on securing profitable loads for your trucks.',
    fullDesc:
      'Our primary freight dispatching service provides motor carriers with an experienced, dedicated logistics dispatcher who monitors lane opportunities around the clock. We match your specific equipment with high-yield freight, oversee timely arrivals, and coordinate seamlessly between drivers, brokers, and shippers.',
    deliverables: [
      'Dedicated personal dispatcher assigned to your equipment',
      'Continuous lane monitoring and schedule optimization',
      'Load tracking assistance and check calls handled for you',
      'Daily dispatch logs and scheduled route visibility',
    ],
    equipmentFocus: ['Dry Van (53\')', 'Reefer', 'Flatbed', 'Power Only', 'Box Truck'],
    businessValue:
      'Eliminates downtime between deliveries and keeps your equipment rolling on high-paying regional and OTR lanes.',
  },
  {
    id: 'load-searching-booking',
    number: '02',
    title: 'Load Searching & Booking',
    shortDesc:
      'High-priority load board scanning, proprietary broker network outreach, and rapid booking to capture premium spot and contract rates.',
    fullDesc:
      'Finding the right load at the right time requires constant vigilance. We scan top freight boards and leverage direct freight broker relationships to secure profitable loads that match your weight, equipment specifications, and preferred driving corridors.',
    deliverables: [
      'Multi-platform load board scanning (DAT, Truckstop, direct portals)',
      'Pre-vetting broker credit ratings and payment terms',
      'Rapid booking before competitor carriers secure the load',
      'Immediate delivery of original broker Rate Confirmations',
    ],
    equipmentFocus: ['Dry Van', 'Reefer', 'Flatbed', 'Step Deck'],
    businessValue:
      'Maximizes your revenue per mile and ensures you only run for credit-verified, trustworthy freight brokers.',
  },
  {
    id: 'rate-negotiation',
    number: '03',
    title: 'Rate Negotiation',
    shortDesc:
      'Assertive, data-informed rate bargaining to capture top-dollar spot market averages, accessorials, detention pay, and layovers.',
    fullDesc:
      'Brokers routinely list freight below fair market value. With industry experience dating back to 2016, our dispatchers understand lane supply/demand dynamics and fiercely advocate for maximum rate-per-mile, ensuring detention, layover, and TONU (Truck Ordered Not Used) clauses are locked into every contract.',
    deliverables: [
      'Lane rate analysis against spot and contract indexes',
      'Assertive broker negotiation for above-average RPM',
      'Guaranteed detention pay terms ($50–$75/hr after 2 free hours)',
      'Layover and TONU fee contract protection',
    ],
    equipmentFocus: ['All Equipment Types'],
    businessValue:
      'Increases weekly gross earnings by an average of 12% to 22% compared to standard posted load board rates.',
  },
  {
    id: 'broker-communication',
    number: '04',
    title: 'Broker Communication',
    shortDesc:
      'Professional representation in all broker phone calls, emails, check-ins, and inquiries, keeping your driving time completely distraction-free.',
    fullDesc:
      'Driving a commercial motor vehicle safely demands 100% focus on the road. We act as your authorized dispatch liaison, answering broker update calls, sending location pings, negotiating delivery appointment adjustments, and addressing unexpected transit issues.',
    deliverables: [
      'Complete handling of routine broker check calls',
      'Appointment scheduling and rescheduling coordination',
      'Professional email and phone representation under your carrier name',
      'Resolution of facility delays, lumper fees, and gate issues',
    ],
    equipmentFocus: ['All Equipment Types'],
    businessValue:
      'Drivers stay safe on the road while maintaining flawless broker communication and high performance ratings.',
  },
  {
    id: 'route-planning-coordination',
    number: '05',
    title: 'Route Planning & Coordination',
    shortDesc:
      'Smart route planning that reduces deadhead miles, avoids toll congestion, and coordinates optimal backhauls before delivery.',
    fullDesc:
      'A profitable trip requires planning beyond the current load. We pre-plan your consecutive loads, minimizing empty deadhead mileage, aligning with your Hours of Service (HOS), and positioning your truck in strong outbound freight markets.',
    deliverables: [
      'Backhaul booking before your outbound load delivers',
      'Deadhead minimization strategy (keeping deadhead < 8%)',
      'Compliance alignment with FMCSA Hours of Service',
      'Weather and severe traffic detour recommendations',
    ],
    equipmentFocus: ['Long Haul OTR', 'Regional Corridors', 'Dedicated Lanes'],
    businessValue:
      'Reduces fuel burn and uncompensated miles while ensuring drivers make it home according to their chosen schedule.',
  },
  {
    id: 'carrier-setup-assistance',
    number: '06',
    title: 'Carrier Setup Assistance',
    shortDesc:
      'Fast-track onboarding packets, W-9 submissions, and insurance certificate distribution with leading freight brokers and 3PLs.',
    fullDesc:
      'New broker setup packets can take hours of administrative paperwork. Our team rapidly completes carrier qualification packets, coordinates with your insurance agent to generate broker COIs, and establishes fast setup with top freight brokerages.',
    deliverables: [
      'Completion of electronic carrier setup packets',
      'Broker COI (Certificate of Insurance) request management',
      'W-9, operating authority, and voided check distribution',
      'Factoring company Notice of Assignment (NOA) submission',
    ],
    equipmentFocus: ['New Authorities & Established Fleets'],
    businessValue:
      'Enables you to book loads instantly with new brokers without losing loads to paperwork delays.',
  },
  {
    id: 'paperwork-documentation-support',
    number: '07',
    title: 'Paperwork & Documentation Support',
    shortDesc:
      'Rigorous document management: Bills of Lading (BOL), Proof of Delivery (POD), rate confirmations, and invoice filing.',
    fullDesc:
      'Cash flow depends on timely, clean documentation. We verify that all Proof of Delivery (POD) documents and signed Bills of Lading (BOL) are legible and free of discrepancies, expediting prompt payment through your factoring company or direct billing.',
    deliverables: [
      'BOL and POD verification and audit',
      'Immediate document submission to your factoring company',
      'Lumper receipt reimbursement management',
      'Cloud storage archive of all historical rate confirmations',
    ],
    equipmentFocus: ['All Motor Carriers'],
    businessValue:
      'Accelerates billing turnaround so carriers get paid on time without delayed invoice rejections.',
  },
  {
    id: 'administrative-dispatch-support',
    number: '08',
    title: 'Administrative Dispatch Support',
    shortDesc:
      'Comprehensive back-office assistance, weekly gross revenue statements, IFTA mileage tracking logs, and compliance maintenance.',
    fullDesc:
      'Running a trucking company involves extensive administrative overhead. Our team assists with weekly revenue reporting, IFTA state fuel tax mileage summaries, safety renewal reminders, and carrier profile updates.',
    deliverables: [
      'Weekly itemized gross revenue and earnings statements',
      'IFTA quarterly mileage summary logs',
      'Safety and inspection record tracking support',
      'Direct carrier representative available during business hours',
    ],
    equipmentFocus: ['Independent Owner-Operators', 'Small Fleet Owners (1–15 Trucks)'],
    businessValue:
      'Gives owner-operators the infrastructure of a full back-office team without the cost of in-house staff.',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Experience Since 2016',
    description:
      'A TO Z Logistic LLC has operated through bull freight markets, capacity crunches, and economic shifts. Our battle-tested industry experience means we know how to secure top rates in every market condition.',
  },
  {
    title: 'Professional Communication',
    description:
      'We treat brokers and shippers with high-standard corporate professionalism, elevating your carrier reputation and opening doors to exclusive contract freight.',
  },
  {
    title: 'Dedicated Dispatch Support',
    description:
      'You are never passed around a generic call center. You work directly with a dedicated dispatcher who learns your driving habits, preferred lanes, and revenue goals.',
  },
  {
    title: 'Commitment to Reliability',
    description:
      'We do not overpromise. When we commit to finding your next load, our dispatch specialists actively source, negotiate, and verify every detail before booking.',
  },
  {
    title: 'Business-Focused Solutions',
    description:
      'We view our relationship as a strategic partnership. Our goal is to increase your weekly gross while decreasing empty deadhead and administrative headaches.',
  },
  {
    title: 'Transparent Working Relationships',
    description:
      '100% transparency. Original broker Rate Confirmations are sent directly to your email with zero skimming. You retain full final authority: NO forced dispatch, ever.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Get in Touch',
    subtitle: 'Quick Carrier Inquiry',
    description:
      'Fill out our simple contact form or call our dispatch desk. Share your equipment type, home base, preferred lanes, and revenue targets.',
  },
  {
    step: '02',
    title: 'Discuss Your Business Needs',
    subtitle: 'Custom Dispatch Strategy',
    description:
      'We review your operating authority (MC/DOT), insurance, and schedule. We tailor a personalized dispatch plan suited to your specific operations.',
  },
  {
    step: '03',
    title: 'Get Connected With Dispatch Support',
    subtitle: 'Dedicated Desk Assignment',
    description:
      'Your assigned dispatcher begins actively sourcing top-paying loads, handling broker paperwork packets, and presenting verified options for your approval.',
  },
  {
    step: '04',
    title: 'Keep Your Business Moving',
    subtitle: 'Consistent Weekly Revenue',
    description:
      'You drive safely on the highway. We manage the broker check calls, rate negotiations, detention tracking, and billing paperwork. Pure results.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is truck dispatching?',
    answer:
      'Truck dispatching is a professional B2B logistics service that represents motor carriers and owner-operators in finding, negotiating, and booking freight loads. Your dispatcher acts as your back-office partner: we find high-paying freight, negotiate rates with brokers, complete carrier setup packets, handle all check-in calls, and streamline paperwork so you can focus exclusively on driving.',
    category: 'General',
  },
  {
    question: 'How does your dispatch service work?',
    answer:
      'Once onboarded, you are assigned a dedicated dispatcher who understands your equipment and lane preferences. Each day, we scan premium freight platforms and broker networks to identify high-rate loads. We present the best options to you with full transparency (rates, pickup/delivery times, weight). You hold 100% final approval: we never force dispatch. Once you approve, we book the load, handle broker setup, and monitor the shipment through delivery.',
    category: 'Operations',
  },
  {
    question: 'Which types of carriers do you support?',
    answer:
      'A TO Z Logistic LLC supports independent owner-operators and small-to-medium trucking fleets operating in the United States. We actively dispatch 53\' Dry Vans, 53\' Refrigerated (Reefer) trailers, 48\'/53\' Flatbeds, Step Decks, Power Only units, and 26\' Box Trucks with liftgates.',
    category: 'Operations',
  },
  {
    question: 'What information is required to get started?',
    answer:
      'Getting started is fast and straightforward. We require: (1) An active FMCSA Motor Carrier (MC) or DOT authority, (2) Certificate of Insurance (COI) with $1,000,000 auto liability and $100,000 cargo coverage, (3) Signed W-9 form, and (4) Notice of Assignment (NOA) from your factoring company if you use factoring services.',
    category: 'Onboarding',
  },
  {
    question: 'Do you assist with load searching and booking?',
    answer:
      'Yes, absolutely. Load searching and booking is our core specialty. We utilize multiple industry-leading load boards, direct broker relationships, and market pricing intelligence to identify high-yield freight and secure official broker rate confirmations on your behalf.',
    category: 'Operations',
  },
  {
    question: 'How can I contact your dispatch team?',
    answer:
      'You can reach our dispatch desk by calling (800) 555-0199 during operating hours (Mon–Fri 7am–7pm EST, Sat–Sun 8am–4pm EST) or emailing dispatch@atozlogistic.com. We also offer 24/7 on-call dispatch coordination for all active loads in transit.',
    category: 'General',
  },
  {
    question: 'Why should I choose A TO Z Logistic LLC?',
    answer:
      'Founded in 2016, A TO Z Logistic LLC brings over 10 years of verified industry experience to your business. Unlike fly-by-night services, we provide 100% transparent rate confirmations sent directly to your inbox, dedicated personal dispatchers who know your name and truck, zero forced dispatch, and proven rate negotiation that keeps your equipment earning top dollar.',
    category: 'General',
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2016',
    title: 'Founded in the USA',
    description:
      'A TO Z Logistic LLC established its initial operations with a mission to protect independent owner-operators from low-paying freight and unfair broker practices.',
  },
  {
    year: '2018',
    title: 'Expanded Equipment Specialization',
    description:
      'Broadened dispatch capabilities beyond Dry Van to include Refrigerated (Reefer) and Flatbed freight, establishing dedicated temperature-controlled lane networks.',
  },
  {
    year: '2020',
    title: 'Resilient Pandemic Supply Chain Support',
    description:
      'Maintained uninterrupted dispatch operations during unprecedented global supply chain disruptions, keeping carriers moving essential goods across America.',
  },
  {
    year: '2023',
    title: 'Institutional Broker Network Growth',
    description:
      'Expanded direct relationships with premier Tier-1 freight brokers and 3PLs, facilitating rapid onboarding and preferential lane access for our carrier partners.',
  },
  {
    year: 'Present',
    title: 'Continuing A Legacy of Excellence',
    description:
      'A TO Z Logistic LLC continues providing premier, transparent, and dedicated truck dispatching solutions to trucking businesses across the United States.',
  },
];

export const AUTHENTIC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    carrierName: 'Iron Ridge Transport',
    contactName: 'Marcus T.',
    role: 'Owner-Operator',
    equipment: '53\' Dry Van',
    location: 'Dallas, TX',
    partnerSince: '2019',
    highlight: 'No forced dispatch & original rate cons',
    quote:
      'Working with A TO Z Logistic LLC changed how I run my truck. Since 2019, my dispatcher has treated my equipment like their own business. The original broker rate sheets come straight to my phone, and I never feel pressured to take a bad load. Honest, dependable, and highly professional.',
  },
  {
    id: 't-2',
    carrierName: 'Crossroads Express LLC',
    contactName: 'Elena & David R.',
    role: 'Fleet Owners (4 Trucks)',
    equipment: '53\' Refrigerated (Reefer)',
    location: 'Columbus, OH',
    partnerSince: '2018',
    highlight: 'Kept our reefer fleet grossing strong',
    quote:
      'When we expanded our fleet from 1 to 4 reefer units, handling broker packets and detention calls became overwhelming. A TO Z Logistic LLC took over our entire dispatch and back-office coordination. Their rate negotiation consistently beats average spot boards, and our drivers love their dispatchers.',
  },
  {
    id: 't-3',
    carrierName: 'Summit Flatbed Freight',
    contactName: 'Derrick K.',
    role: 'Independent Flatbed Carrier',
    equipment: '48\' Flatbed & Step Deck',
    location: 'Nashville, TN',
    partnerSince: '2021',
    highlight: 'Fast broker packets and detention collection',
    quote:
      'Flatbed freight requires tight coordination with job sites and shippers. A TO Z Logistic LLC handles all the broker check-ins, secures lumper fees, and made sure I got paid $75/hr detention every time a shipper held me up. They know the trucking business inside and out.',
  },
];
