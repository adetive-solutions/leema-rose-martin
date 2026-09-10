import { Initiative, Award, LeadershipRole, MetricItem } from '../types';

export const METRICS: MetricItem[] = [
  {
    id: 'relief',
    targetNumber: 11,
    prefix: '₹',
    suffix: ' Cr+',
    label: 'COVID-19 & Crisis Relief',
    sublabel: 'Mobilized directly for oxygen, food supplies & hospital equipment',
    iconName: 'HeartHandshake',
  },
  {
    id: 'seeds',
    targetNumber: 34,
    prefix: '',
    suffix: ' Lakh+',
    label: 'Seed Balls Dispersed',
    sublabel: 'World Record ecological restoration movement in Ramanathapuram',
    iconName: 'Sprout',
  },
  {
    id: 'women',
    targetNumber: 1600,
    prefix: '',
    suffix: '+',
    label: 'Rural Women Empowered',
    sublabel: 'Vocational training via Project Threlaksha & Sencholai Traders',
    iconName: 'Users',
  },
  {
    id: 'health',
    targetNumber: 360,
    prefix: '',
    suffix: '+',
    label: 'Critical Surgeries Funded',
    sublabel: 'Life-saving interventions & free dialysis sessions provided',
    iconName: 'Activity',
  },
  {
    id: 'school',
    targetNumber: 7,
    prefix: '₹',
    suffix: ' Cr',
    label: 'Model School Infrastructure',
    sublabel: 'Modernized Kavundampalayam Corporation Middle School with smart labs',
    iconName: 'GraduationCap',
  },
  {
    id: 'emergency-fund',
    targetNumber: 55,
    prefix: '$',
    suffix: 'M+',
    label: 'Foundation-Wide Emergency Fund',
    sublabel: 'Accumulated by Martin Foundation for 1,000+ students & 20+ crisis-response initiatives',
    iconName: 'ShieldAlert',
  },
];

export const INITIATIVES: Initiative[] = [
  {
    id: 'kavundampalayam-school',
    title: 'Model Smart School Transformation',
    category: 'education',
    categoryLabel: 'Education',
    description: 'A transformative ₹7 Crore infrastructure initiative revitalizing the Corporation Middle School in Kavundampalayam, Coimbatore.',
    detailedContent: 'Dr. Leema Martin recognized that quality infrastructure is fundamental to closing the educational divide. The Martin Foundation funded comprehensive renovations, installing high-tech smart classrooms, state-of-the-art computer and science laboratories, modernized sanitary facilities, and a digital library empowering hundreds of underprivileged students every academic year.',
    metric: '₹7 Crore',
    metricLabel: 'Infrastructure Investment',
    location: 'Kavundampalayam, Coimbatore',
    iconName: 'School',
    highlights: [
      'Digital smart classrooms with interactive projection',
      'Advanced science and computer innovation labs',
      'Child-safe sanitation facilities and clean drinking RO systems',
      'Over 600 children benefiting annually with zero tuition fees'
    ]
  },
  {
    id: 'scholarship-fund',
    title: 'Higher Education Scholarship Grants',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Providing direct collegiate and vocational scholarships totaling over ₹2.5 Crores to meritorious, socio-economically disadvantaged youth.',
    detailedContent: 'Through the Martin Charitable Trust, continuous scholarship programs support students pursuing engineering, medicine, arts, and professional degrees who would otherwise drop out due to economic hardships. Special focus is directed towards first-generation learners and rural female students.',
    metric: '₹2.5+ Cr',
    metricLabel: 'Scholarships Disbursed',
    location: 'Tamil Nadu & Puducherry',
    iconName: 'GraduationCap',
    highlights: [
      'Direct fee coverage for collegiate education',
      'Mentorship and skill-development workshops',
      'Special preference for single-parent and rural student households'
    ]
  },
  {
    id: 'chemman-academy',
    title: 'Chemman Academy Skill Center',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Establishing an academy in Sivagangai to prepare rural aspirants for national competitive examinations and digital job roles.',
    detailedContent: 'Located in Sivagangai District, Chemman Academy provides high-caliber coaching for civil services, TNPSC, banking, and defense exams alongside foundational IT skills and communicative English training, free of cost to local youth.',
    metric: '1,200+',
    metricLabel: 'Aspirants Trained',
    location: 'Sivagangai District',
    iconName: 'BookOpen',
    highlights: [
      'Civil services and banking exam coaching',
      'Dedicated computer lab and high-speed internet',
      'Guest lectures by retired bureaucrats and academic scholars'
    ]
  },
  {
    id: 'dharma-dialysis',
    title: 'Dharma Free Dialysis & Critical Care',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    description: 'Dedicated financial and clinical backing for end-stage renal patients and over 360 life-saving critical medical procedures.',
    detailedContent: 'The Dharma Dialysis Initiative mitigates the catastrophic financial burden of renal failure by offering free and heavily subsidized hemodialysis sessions. Additionally, Dr. Leema Martin has directly underwritten open-heart surgeries, neurosurgeries, and oncology procedures for indigent families across southern India.',
    metric: '360+',
    metricLabel: 'Major Surgeries Sponsored',
    location: 'Coimbatore & Regional Hospitals',
    iconName: 'HeartPulse',
    highlights: [
      'Routine zero-cost dialysis sessions for chronic kidney disease patients',
      'Comprehensive surgical and post-operative medical coverage',
      'Aatharuvu initiative supplying cancer care kits for pediatric patients'
    ]
  },
  {
    id: 'covid-relief',
    title: 'COVID-19 Humanitarian Frontline Relief',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    description: 'Mobilized ₹11+ Crores during pandemic peaks to deploy oxygen concentrators, hospital beds, safety equipment, and food parcels.',
    detailedContent: 'During the severe pandemic waves, Leema Rose Martin directed emergency response fleets distributing hundreds of high-flow oxygen concentrators to government and rural healthcare centers, stocking critical medicine banks, and supplying daily hot meals and ration kits to daily-wage workers.',
    metric: '₹11+ Cr',
    metricLabel: 'Pandemic Aid Deployed',
    location: 'Pan-Tamil Nadu',
    iconName: 'ShieldAlert',
    highlights: [
      'Hundreds of clinical oxygen concentrators donated to government clinics',
      '50,000+ dry ration and nutrition parcels delivered to lockdown families',
      'Polio & mass vaccination drives in rural clusters'
    ]
  },
  {
    id: 'seed-ball-festival',
    title: '34-Lakh Seed Ball World Record Event',
    category: 'environment',
    categoryLabel: 'Environment',
    description: 'Conceived and executed the landmark Ramanathapuram greening drive mobilizing 2,500 youth volunteers across a 72-hour world record event.',
    detailedContent: 'To combat deforestation and drought vulnerability in Ramanathapuram, Leema Martin orchestrated a mammoth eco-restoration festival at the National Academy School. Over 2,500 participants, including students from the National Academy and Ramanathapuram District Government Schools, crafted and strategically dispersed 34,00,000 native tree seed balls across scrublands, riverbanks, and degraded terrains over 72 hours (21–23 January 2020).',
    metric: '34,00,000',
    metricLabel: 'Native Seeds Dispersed',
    location: 'Ramanathapuram District',
    iconName: 'Trees',
    highlights: [
      'Selection of climate-resilient native species (neem, tamarind, banyan)',
      '2,500 active youth and college volunteers mobilized',
      'Recognized as a World Record eco-restoration event'
    ]
  },
  {
    id: 'threlaksha-sencholai',
    title: 'Project Threlaksha & Sencholai Livelihoods',
    category: 'empowerment',
    categoryLabel: 'Empowerment',
    description: 'Empowering 1,600+ rural women with vocational certifications, micro-business loans, and self-help group market channels.',
    detailedContent: 'Through Project Threlaksha and Sencholai Traders, rural women receive structured training in tailoring, organic food production, handicrafts, and digital billing. Graduates are assisted with micro-credit capital and market linkage to achieve long-term economic autonomy.',
    metric: '1,600+',
    metricLabel: 'Rural Women Certified',
    location: 'Tamil Nadu Rural Districts',
    iconName: 'Sparkles',
    highlights: [
      'Tailoring, value-added agro-processing & crafts training',
      'Access to interest-free micro-equipment financing',
      'Partnership with Coimbatore District Christian Women Aid Society'
    ]
  },
  {
    id: 'coimbatore-fiber-network',
    title: 'Digital Optic Fibre Civic Connectivity',
    category: 'infrastructure',
    categoryLabel: 'Civic Infrastructure',
    description: 'Donated ₹7.07 Crores to develop city-wide digital optic fibre infrastructure enabling modern municipal governance and public connectivity.',
    detailedContent: 'A forward-looking contribution to modern urban governance, this ₹7,07,82,536 grant catalyzed digital communications, smart traffic integration, and enhanced emergency response dispatching across Coimbatore municipality.',
    metric: '₹7.07 Cr',
    metricLabel: 'Civic Connectivity Grant',
    location: 'Coimbatore Municipal Corporation',
    iconName: 'Network',
    highlights: [
      'Next-generation optical fibre backbone for urban services',
      'Enhanced municipal emergency dispatch interconnectivity',
      'Free accessibility tricycles donated for differently-abled citizens'
    ]
  },
  {
    id: 'multi-state-disaster-relief',
    title: 'Multi-State Disaster Relief Fund',
    category: 'healthcare',
    categoryLabel: 'Disaster Relief',
    description: 'Directed ₹8+ Crore in emergency aid to Chief Ministers’ Relief Funds across three states following Cyclone Gaja, the Wayanad landslide, and Assam floods.',
    detailedContent: 'As part of the Martin Foundation’s Emergency Fund, Dr. Leema Martin has personally delivered large-scale disaster relief grants to state governments during the nation’s most severe crises, ensuring rapid resource deployment to displaced and vulnerable families.',
    metric: '₹8+ Cr',
    metricLabel: 'Multi-State Disaster Relief',
    location: 'Tamil Nadu, Kerala & Assam',
    iconName: 'ShieldAlert',
    highlights: [
      '₹5 Crore delivered to Tamil Nadu CM Edappadi K. Palaniswami for Cyclone Gaja relief in Nagapattinam, Cuddalore & Thanjavur',
      '₹2 Crore contributed toward Wayanad landslide rehabilitation in Kerala',
      '₹1 Crore donated to the Assam CM Relief Fund for flood-affected families'
    ]
  },
  {
    id: 'food-flood-relief',
    title: 'Food & Flood Relief Program',
    category: 'healthcare',
    categoryLabel: 'Food & Flood Relief',
    description: '₹50 Lakh mobilized for 2023 flood relief materials in Tuticorin and Tirunelveli, alongside recurring free meal drives for the homeless and elderly across Coimbatore.',
    detailedContent: 'The Martin Foundation’s Food Relief Program organizes regular meal and buttermilk distribution for beggars, the homeless, and elderly residents, extending to remote villages, and mobilizes rapid material aid during flood emergencies.',
    metric: '₹50 Lakh',
    metricLabel: 'Flood Relief Materials',
    location: 'Tuticorin & Tirunelveli',
    iconName: 'ShieldAlert',
    highlights: [
      '₹15 Lakh + ₹35 Lakh contributed for 2023 Tuticorin & Tirunelveli flood relief materials',
      'Free meals and buttermilk distributed across four Coimbatore locations',
      'Ongoing food camps extended to remote villages and elderly residents'
    ]
  },
  {
    id: 'thiruvadanai-valparai-schools',
    title: 'Government School Infrastructure Grants',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Over ₹4.3 Crore contributed to expand Government Higher Secondary Schools in Thiruvadanai and Valparai with new classrooms, courtyards, and sanitation blocks.',
    detailedContent: 'Under the Martin Foundation’s Educational Help program, direct infrastructure grants modernize government schools that serve the majority of India’s student population, alongside sponsorship of individual students nationwide.',
    metric: '₹4.3+ Cr',
    metricLabel: 'School Infrastructure Grants',
    location: 'Thiruvadanai & Valparai',
    iconName: 'School',
    highlights: [
      '₹1.6 Crore to Thiruvadanai Government Boys Higher Secondary School',
      '₹2 Crore to Thiruvadanai Government Girls Higher Secondary School for courtyard, cycle shed & classrooms',
      '₹68 Lakh pledged to Valparai Government Higher Secondary School',
      '500 government school students sponsored foundation-wide'
    ]
  },
  {
    id: 'femto-satellite-guinness-record',
    title: 'Guinness World Record: Femto Satellite CSR Initiative',
    category: 'education',
    categoryLabel: 'Innovation & STEM',
    description: 'Backed the Guinness World Record-setting CSR initiative building 100 student-made Femto Satellites with the Dr. APJ Abdul Kalam International Foundation.',
    detailedContent: 'A landmark STEM education partnership, this initiative engaged student teams nationwide in designing and launching 100 miniature Femto Satellites, officially certified as a Guinness World Record for CSR-driven education.',
    metric: 'Guinness World Record',
    metricLabel: 'STEM CSR Milestone',
    location: 'Pan-India',
    iconName: 'Sparkles',
    highlights: [
      'Partnership with Dr. APJ Abdul Kalam International Foundation',
      '100 Femto Satellites built and launched by student teams',
      'Officially certified as a Guinness World Record for CSR-driven STEM education'
    ]
  },
  {
    id: 'bharat-sports-trust',
    title: 'Bharat Sports Trust & Inclusive Athletics',
    category: 'empowerment',
    categoryLabel: 'Sports & Inclusion',
    description: '₹10 Lakh donated to Bharat Sports Trust, building on the South Zone Wheelchair Basketball Championship to expand equitable access to sport.',
    detailedContent: 'The Martin Foundation’s Sports Fund bridges inequalities in athletics by funding training and competition access regardless of economic background, with a dedicated focus on para-athletics.',
    metric: '₹10 Lakh',
    metricLabel: 'Sports Fund Grant',
    location: 'Coimbatore & Chennai',
    iconName: 'Sparkles',
    highlights: [
      'Supports athletes with disabilities via wheelchair basketball and para-sports programs',
      'Builds on the South Zone Wheelchair Basketball Championship legacy',
      'Extends the Sports Fund’s mission of equal access regardless of economic background'
    ]
  }
];

export const FOUNDATION_OVERVIEW = {
  missionQuote: 'We are a nonprofit fighting poverty, disease, and inequity in India.',
  philosophyQuote: 'India won’t get better by itself. We must set big goals and hold ourselves accountable every step of the way.',
  founder: {
    name: 'Santiago Martin',
    title: 'Founder & Chairman, Martin Group of Companies',
    bio: 'Beginning his entrepreneurial journey at age 13, Santiago Martin built the Martin Group into a diversified enterprise spanning lottery, real estate, media, textiles, hospitality, healthcare, and technology, with an average annual growth of roughly 109%. Honored with a Gold Medal for Excellence in Business (Geneva, 2004), the Best Lottery Professional Award (2000), honorary doctorates from institutions in New York, Italy and Maryland, and a Papal blessing from Pope Benedict XVI, he founded Martin Foundation to channel enterprise success into large-scale humanitarian relief across India.'
  },
  coDirector: {
    name: 'Jose Charles Martin',
    title: 'Director, Martin Foundation',
    note: 'Eldest son of Santiago and Dr. Leema Rose Martin, jointly steering the foundation’s grantmaking alongside his mother.'
  },
  programs: [
    { name: 'Healthcare Support', desc: 'Medical relief, oxygen concentrators & pandemic response for under-resourced hospitals.' },
    { name: 'Food Relief Program', desc: 'Free meals, buttermilk drives & flood-relief material distribution for the homeless and elderly.' },
    { name: 'Emergency Fund', desc: '$55M+ accumulated for disaster response, reaching 1,000+ students across 20+ initiatives.' },
    { name: 'Educational Help', desc: 'Government school infrastructure grants and direct student sponsorships nationwide.' },
    { name: 'Sports Fund', desc: 'Equal access to training and competition, including para-athletics and wheelchair basketball.' }
  ]
};

export const NEWS_HIGHLIGHTS = [
  {
    date: 'March 2025',
    title: 'Partnership with HelpAge India for Elderly Welfare',
    summary: '₹8.29 lakh contributed to HelpAge India to support elderly welfare initiatives across Tamil Nadu.'
  },
  {
    date: 'February 2025',
    title: '₹200 Crore CSR Commitment Highlighted at International CSR Conference',
    summary: 'Martin Foundation showcased its cumulative ₹200 crore corporate social responsibility contribution at the 19th International CSR Conference.'
  },
  {
    date: 'January 2025',
    title: '₹5 Crore Relief for 70,000 Cyclone Fengal-Affected Families',
    summary: 'Relief packs distributed across Puducherry, Viluppuram, and Cuddalore for families affected by Cyclone Fengal.'
  },
  {
    date: 'February 2025',
    title: 'Renewed Commitment to "Namma School Namma Ooru Palli"',
    summary: 'Partnership renewed with the statewide initiative strengthening Tamil Nadu’s government school ecosystem.'
  },
  {
    date: 'May 2024',
    title: 'Inclusive Fitness for Women with Disabilities',
    summary: '₹44.2 lakh funded a disability-adapted gymnasium at a shelter for women with disabilities.'
  },
  {
    date: 'July 2024',
    title: 'Mission RHUMI-2024: India’s First Reusable Hybrid Rocket',
    summary: 'Martin Group backed Space Zone India’s launch of India’s first reusable hybrid rocket, advancing low-cost space research.'
  },
  {
    date: 'February 2023',
    title: 'AKSSLV Student Satellite Launch Vehicle',
    summary: 'Partnered with Dr. APJ Abdul Kalam International Foundation and Space Zone India on a successful student-built satellite launch vehicle project.'
  },
  {
    date: 'May 2024',
    title: 'Free Cardiac Screening for Tribal Communities in Valparai',
    summary: '₹5 lakh funded free cardiac profile tests for tribal populations in the Valparai hill region.'
  }
];

export const AWARDS: Award[] = [
  {
    year: '2020',
    title: 'Arch Klumph Society (AKS) Induction',
    organization: 'Rotary International Foundation',
    location: 'Evanston, Illinois, USA',
    description: 'Conferred with highest global honors as the First Women AKS Member of Rotary District 3201 for sustained multi-million humanitarian commitments.',
    badgeType: 'rotary'
  },
  {
    year: '2020',
    title: "Governor's Recognition Award",
    organization: 'Rotary International District 3201',
    location: 'Coimbatore, India',
    description: 'Presented in recognition of outstanding governance, district water rejuvenation programs, and rural healthcare mobilization.',
    badgeType: 'rotary'
  },
  {
    year: '2019',
    title: 'Pride of Coimbatore Award',
    organization: 'Coimbatore Civic Federation & Media',
    location: 'Coimbatore, India',
    description: 'Awarded to celebrate prominent civic transformation, public infrastructure grants, and community healthcare initiatives.',
    badgeType: 'civic'
  },
  {
    year: '2019',
    title: 'Lifetime Achievement Award',
    organization: 'World Women Foundation & Thamarai Trust',
    location: 'Chennai, India',
    description: 'Conferred for decades of unwavering dedication towards elevating underprivileged women, girl child education, and economic independence.',
    badgeType: 'humanitarian'
  },
  {
    year: '2018–2019',
    title: 'Major Donor Level III Recognition',
    organization: 'The Rotary Foundation',
    location: 'Rotary District 3201',
    description: 'Bestowed for significant continuous endowment funding targeted at healthcare, maternal wellness, and literacy.',
    badgeType: 'rotary'
  },
  {
    year: '2018',
    title: 'Bharat Ratna Mother Teresa Excellence Award',
    organization: 'National Humanitarian Council of India',
    location: 'New Delhi, India',
    description: 'Bestowed for extraordinary selfless service to indigent patients, free dialysis care, and orphan welfare.',
    badgeType: 'humanitarian'
  },
  {
    year: '2018',
    title: 'Seva Ratna Award',
    organization: 'All India Social Welfare Assembly',
    location: 'Bangalore, India',
    description: 'Honored for spearheading extensive social empowerment drives, rural water conservation, and minority community aid.',
    badgeType: 'humanitarian'
  },
  {
    year: '2018',
    title: 'Icon of Service Award',
    organization: 'Rotary Club of Coimbatore Aakruthi',
    location: 'Coimbatore, India',
    description: 'Commemorating landmark presidential service, girl child educational funds, and mass polio eradication drives.',
    badgeType: 'rotary'
  },
  {
    year: '2018',
    title: 'Tamil Achievers Award',
    organization: 'Global Tamil Forum & Cultural Society',
    location: 'Chennai, India',
    description: 'Celebrating high-impact social entrepreneurship and outstanding contributions to Tamil literature, youth welfare, and education.',
    badgeType: 'civic'
  },
  {
    year: '2016',
    title: 'First Women Major Donor Award',
    organization: 'Rotary Club of Coimbatore Aakruthi',
    location: 'Rotary District 3201',
    description: 'Recognized as the pioneer woman philanthropist leading Rotary’s major endowment giving for healthcare.',
    badgeType: 'rotary'
  },
  {
    year: '2016',
    title: 'Best Women Entrepreneur Award',
    organization: 'Chamber of Commerce & Industry',
    location: 'Chennai, India',
    description: 'Acknowledged for exemplary enterprise direction as Director of the Martin Group of Companies.',
    badgeType: 'civic'
  },
  {
    year: '2015',
    title: 'Distinguished Service in Homoeopathy Medicine',
    organization: 'International Homoeopathic Congress',
    location: 'Berlin, Germany',
    description: 'Acknowledged internationally for pioneering institutions offering free alternative medicine clinics and holistic healthcare education.',
    badgeType: 'international'
  },
  {
    year: '2015',
    title: 'Excellence Achievement Award for Human Rights',
    organization: 'Sri Lankan Human Rights Organization',
    location: 'Colombo, Sri Lanka',
    description: 'Commended for cross-border advocacy, rural disaster rehabilitation, and defense of vulnerable women and children.',
    badgeType: 'international'
  },
  {
    year: '2014',
    title: 'Doctorate in Social Works (Honoris Causa)',
    organization: 'Academy of Universal Global Peace',
    location: 'India',
    description: 'Conferred in recognition of lifelong commitment to poverty reduction, educational parity, and inclusive community welfare.',
    badgeType: 'academic'
  },
  {
    year: '2022',
    title: 'Pinnacle Women Leader & Entrepreneur Award',
    organization: 'Federation of Indian Industry',
    location: 'Chennai, India',
    description: 'Recognized for exemplary leadership as Director of the Martin Group of Companies and championing women in business.',
    badgeType: 'civic'
  },
  {
    year: '2010',
    title: 'Doctor of Letters (D.Litt.) for Entrepreneurship',
    organization: 'International Tamil University',
    location: 'Maryland, USA',
    description: 'Honored for brilliant entrepreneurship, community upliftment, and sustainable social enterprise models.',
    badgeType: 'academic'
  },
  {
    year: '2010',
    title: 'Honorary Doctorate of Humanity Science',
    organization: 'Yorker International University',
    location: 'Florence, Italy',
    description: 'Conferred for international humanitarian deeds and promoting equitable public health systems.',
    badgeType: 'academic'
  },
  {
    year: '2009',
    title: 'Thiruvalluvar Award',
    organization: 'Tamil Cultural & Social Assembly',
    location: 'Tamil Nadu, India',
    description: 'Awarded for upholding the classical ethical ideals of Thiruvalluvar in public life, charity, and social justice.',
    badgeType: 'civic'
  }
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    role: 'Managing Trustee',
    organization: 'Martin Charitable Trust & Martin Foundation',
    tenure: '2000 – Present',
    focus: 'Directing philanthropic grantmaking, school modernizations, emergency relief, and environmental preservation.',
    category: 'trust'
  },
  {
    role: 'Director',
    organization: 'Martin Group of Companies',
    tenure: 'Active',
    focus: 'Strategic guidance across enterprise operations, CSR allocations, and sustainable business governance.',
    category: 'trust'
  },
  {
    role: 'Secretary & Correspondent',
    organization: 'Martin Homoeopathy Medical College & Hospital',
    tenure: 'Active',
    focus: 'Administering medical degree curriculum, free outpatient clinics, and alternative medicine clinical research.',
    category: 'healthcare'
  },
  {
    role: 'President',
    organization: 'AYUSH Private Medical College Association',
    tenure: 'Active',
    focus: 'Advancing educational standards and government accreditation for Ayurveda, Yoga, Unani, Siddha, and Homoeopathy colleges.',
    category: 'healthcare'
  },
  {
    role: 'Past President',
    organization: 'Rotary Club of Coimbatore AAKRUTHI',
    tenure: '2016 – 2017',
    focus: 'Leading high-impact community drives including polio vaccination camps and girl child education endowments.',
    category: 'rotary'
  },
  {
    role: "Governor's Group Representative (GGR)",
    organization: 'Rotary District 3201',
    tenure: '2020 – 2021',
    focus: 'Coordinating district-wide service projects, water body rejuvenation, and AKS donor engagements.',
    category: 'rotary'
  },
  {
    role: 'President, Women’s Wing',
    organization: 'All India Catholic Union (AICU)',
    tenure: 'Active',
    focus: 'Spearheading welfare programs, legal counseling, and economic resilience for minority women across India.',
    category: 'advocacy'
  },
  {
    role: 'Joint General Secretary',
    organization: 'Indian Jananayaga Katchi (IJK) / Public Service',
    tenure: 'Active Advocate',
    focus: 'Public interest governance, educational reform advocacy, and civic infrastructure enhancement.',
    category: 'advocacy'
  }
];

export const OFFICE_LOCATIONS = [
  {
    city: 'Coimbatore Headquarters',
    address: '54, Mettupalayam Road, G.N. Mill Post, Coimbatore - 641029, Tamil Nadu, India',
    phones: ['0422 2647657', '0422 2645262'],
    email: 'leemamartin2000@gmail.com',
    type: 'Primary Executive & Trust Office',
    badge: 'Head Office'
  },
  {
    city: 'Chennai Trust Office',
    address: 'New 126, 127, 3rd Floor, Triplicane High Road, Triplicane, Chennai - 600005, Tamil Nadu, India',
    phones: ['086670 15688'],
    email: 'martincharitabletrust2000@gmail.com',
    type: 'Regional Foundation Center',
    badge: 'Liaison & Outreach'
  }
];

export const BIOGRAPHY_DETAILS = {
  fullName: 'Dr. Leema Rose Martin',
  birthYear: '1967',
  birthPlace: 'Devakottai, Ramanathapuram District, Tamil Nadu, India',
  parents: 'Mr. S. Philip and Mrs. P. Arulmary',
  spouse: 'Mr. Santiago Martin (Chairman, Martin Group of Companies)',
  family: {
    sons: ['Jose Charles Martin (m. Sindhu Shree)', 'Jose Daison Martin'],
    daughter: 'Daughter'
  },
  education: [
    {
      degree: 'Bachelor of Business Administration (BBA)',
      institution: 'Tamil Nadu Open University',
      year: 'Graduated',
      note: 'Focus on strategic organization, enterprise economics, and governance.'
    },
    {
      degree: 'Doctor of Letters (D.Litt.) Honoris Causa',
      institution: 'International Tamil University, Maryland, USA',
      year: '2010',
      note: 'Conferred for Brilliant Entrepreneurship and Social Empowerment.'
    },
    {
      degree: 'Honorary Doctorate of Humanity Science',
      institution: 'Yorker International University, Florence, Italy',
      year: '2010',
      note: 'Conferred for international humanitarian and community healthcare deeds.'
    },
    {
      degree: 'Degree of Doctorate of Social Works',
      institution: 'Academy of Universal Global Peace',
      year: '2014',
      note: 'Bestowed for grassroots eradication of poverty, rural education, and healthcare access.'
    }
  ],
  pillars: [
    {
      title: 'Educational Dignity',
      desc: 'Ensuring world-class infrastructure for government schools and providing multi-crore scholarships so no meritorious student drops out.'
    },
    {
      title: 'Accessible Universal Health',
      desc: 'Free chronic dialysis centers, critical surgical sponsorships, and continuous COVID-19 pandemic frontline relief.'
    },
    {
      title: 'Ecological Regeneration',
      desc: 'Pioneering large-scale reforestation drives such as the 34 Lakh Seed Ball World Record event in Ramanathapuram and lake restorations.'
    },
    {
      title: 'Women’s Financial Autonomy',
      desc: 'Enabling rural women through Project Threlaksha & Sencholai Traders with vocational skills, capital access, and micro-enterprises.'
    }
  ]
};

export const GALLERY_ITEMS: import('../types').GalleryItem[] = [
  {
    id: 'gal-rotary-nepal',
    title: 'Rotary Joint Meeting with Kakarvitta, Nepal',
    category: 'rotary',
    categoryLabel: 'Rotary & Global Honors',
    location: 'Kakarbhitta, Jhapa District, Nepal',
    date: 'May 2025',
    description: 'RCC Aakruthi organized a joint club meeting with the Rotary Club of Kakarvitta, strengthening international fellowship. The event featured a ceremonial flag exchange, and dresses were sponsored and distributed to underprivileged individuals in the local community.',
    imageUrl: '/images/leemamartin/gallery/rotary-1.jpg',
    tags: ['Rotary International', 'Nepal', 'Service Above Self']
  },
  {
    id: 'gal-rotary-beach-cleanup',
    title: "International Women's Day Beach Cleanup Drive",
    category: 'rotary',
    categoryLabel: 'Rotary & Global Honors',
    location: 'Marina Beach, Chennai',
    date: 'March 2025',
    description: "On the occasion of International Women's Day, a beach cleanup drive was jointly led with the Environmentalist Foundation of India (E.F.I) and Arise Investment & Capital Pvt. Ltd. to create positive environmental impact.",
    imageUrl: '/images/leemamartin/gallery/rotary-2.jpg',
    tags: ['International Women\'s Day', 'Beach Cleanup', 'Environment']
  },
  {
    id: 'gal-dynamic-woman-award',
    title: 'Dynamic Woman of the Decade Award',
    category: 'women',
    categoryLabel: 'Women Empowerment',
    location: 'Hare Krishna Auditorium, KGISL Campus, Coimbatore',
    date: '16 April 2025',
    description: 'Honored with the prestigious Dynamic Woman of the Decade Award for tireless service in uplifting rural women’s health and well-being, presided by Dr. G. Bakthavathsalam, Padma Shri Awardee and Founder Chairman, KG Hospital.',
    imageUrl: '/images/leemamartin/gallery/awards-1.jpg',
    tags: ['Dynamic Woman Award', 'KG Hospital', "Rural Women's Health"]
  },
  {
    id: 'gal-silver-jubilee',
    title: 'Silver Jubilee & Founder’s Day Celebrations',
    category: 'trust',
    categoryLabel: 'Martin Trust Field Work',
    location: 'Martin Homoeopathy Medical College, G.N. Mills, Coimbatore',
    date: '15 November 2024',
    description: 'Celebrated the 25th Silver Jubilee of Martin Homoeopathy Medical College & Hospital together with the 25th Founder’s Day, College Day, Sports & Cultural Day, and Freshers Induction Programme.',
    imageUrl: '/images/leemamartin/gallery/public-1.jpg',
    tags: ['Silver Jubilee', "Founder's Day", 'College Day']
  },
  {
    id: 'gal-ijk-flag-hoist',
    title: '80th Birthday Flag Hoisting for Kalvi Vallal Dr. T.R. Paarivendhar',
    category: 'trust',
    categoryLabel: 'Martin Trust Field Work',
    location: 'Kalveli, Kalayarkovil, Sivagangai',
    date: '23 August 2021',
    description: 'As Joint General Secretary of Indian Jananayaga Katchi (IJK), hoisted the IJK Flag with the Sivagangai District Youth Wing on the occasion of the 80th Birthday of Kalvi Vallal Dr. T.R. Paarivendhar, MP, Founder of IJK.',
    imageUrl: '/images/leemamartin/gallery/public-2.jpg',
    tags: ['Indian Jananayaga Katchi', 'Flag Hoisting', 'Sivagangai']
  },
  {
    id: 'gal-pooja-celebrations',
    title: 'Pooja & Community Celebrations',
    category: 'pooja',
    categoryLabel: 'Community & Culture',
    location: 'Coimbatore & Regional Centres',
    date: '',
    description: 'Participating in traditional pooja celebrations and community festivities across Tamil Nadu, reflecting a lifelong commitment to interfaith harmony and cultural welfare.',
    imageUrl: '/images/leemamartin/gallery/pooja-1.jpg',
    tags: ['Pooja Celebrations', 'Community', 'Culture']
  },
  {
    id: 'gal-corporation-school',
    title: 'Corporation Middle School Smart Classroom Renovation',
    category: 'trust',
    categoryLabel: 'Martin Trust Field Work',
    location: 'G.N. Mills, Coimbatore',
    date: '2024',
    description: 'Renovated facilities for 413 students spanning LKG to 8th Standard: eight ventilated classrooms, a modernized computer lab, library, digital smart classroom, science laboratory, RO drinking water facility, and a 3,000 sq. ft multi-sports turf ground.',
    imageUrl: '/images/leemamartin/gallery/trust-1.jpg',
    tags: ['Model Smart School', 'Corporation Middle School', 'Infrastructure']
  },
  {
    id: 'gal-narayanan-canal',
    title: 'Narayanan Canal Restoration – ₹50 Lakh Donation',
    category: 'trust',
    categoryLabel: 'Martin Trust Field Work',
    location: 'Ramanathapuram, Tamil Nadu',
    date: '2024',
    description: 'Donated ₹50 lakhs to Mega Foundations for the restoration of the 48.25 km Narayanan Canal, benefiting over 5 lakh people across 455 villages and recharging over 1,000 lakes and 2,500 small ponds.',
    imageUrl: '/images/leemamartin/gallery/trust-2.jpg',
    tags: ['Mega Foundations', 'Water Restoration', 'Ramanathapuram']
  },
  {
    id: 'gal-kabaddi-sponsorship',
    title: 'Best & Co. Kabaddi Team Sponsorship',
    category: 'sports',
    categoryLabel: 'Sports & Accessibility',
    location: 'Coimbatore',
    date: '7 October 2013',
    description: 'Sponsored ₹25,000 towards Kabaddi team dress and equipment as Vice President of the Best & Co. Kabaddi Team Association, Coimbatore.',
    imageUrl: '/images/leemamartin/gallery/sport-1.jpg',
    tags: ['Kabaddi', 'Sports Sponsorship']
  },
  {
    id: 'gal-berlin-congress',
    title: 'Berlin International Homoeopathy Congress',
    category: 'awards',
    categoryLabel: 'Awards & Honors',
    location: 'Berlin, Germany',
    date: '2015',
    description: 'Delegation to the Berlin International Homoeopathy Congress, receiving the Distinguished Service Award in Homoeopathic Medicine on the 260th Birth Anniversary of Dr. Christian Friedrich Samuel Hahnemann.',
    imageUrl: '/images/leemamartin/gallery/berlin-1.jpg',
    tags: ['Berlin MOU', 'Germany', 'Homoeopathy Medicine']
  },
  {
    id: 'gal-psg-brain-surgery',
    title: 'Critical Brain Surgery Sponsorship',
    category: 'medical',
    categoryLabel: 'Healthcare & Relief',
    location: 'PSG Hospitals, Coimbatore',
    date: '20 August 2018',
    description: 'Donated ₹1,00,000 through Rotary Club of Coimbatore Aakruthi to sponsor a critical brain surgery for a patient at PSG Hospitals, Coimbatore.',
    imageUrl: '/images/leemamartin/gallery/medi-1.jpg',
    tags: ['Medical Assistance', 'PSG Hospitals', 'Critical Surgery']
  },
  {
    id: 'gal-polio-campaign',
    title: 'Polio Eradication Campaign',
    category: 'medical',
    categoryLabel: 'Healthcare & Relief',
    location: 'Besant Nagar, Chennai',
    date: '29 April 2017',
    description: 'Led the Rotary Aakruthi polio vaccination campaign at the Government Primary Middle School, Besant Nagar, Chennai, in association with Kanchi Kamakoti Sankara Medical Trust.',
    imageUrl: '/images/leemamartin/gallery/medi-2.jpg',
    tags: ['Polio Campaign', 'Rotary Aakruthi', 'Public Health']
  },
  {
    id: 'gal-vattamalaipalayam-school',
    title: '₹46 Lakh Donation to Government Middle School',
    category: 'trust',
    categoryLabel: 'Martin Trust Field Work',
    location: 'Vattamalaipalayam, Coimbatore',
    date: '19 November 2024',
    description: 'Donated ₹46,00,000 to Government Middle School, Vattamalaipalayam for new classrooms and modern toilet facilities – a school with a proud legacy, once visited by Rabindranath Tagore in 1923.',
    imageUrl: '/images/leemamartin/gallery/soc-1.jpg',
    tags: ['Martin Foundation', 'School Infrastructure', 'Historic Legacy']
  },
  {
    id: 'gal-pond-rejuvenation',
    title: 'Vellakinar South Solai Pond Rejuvenation',
    category: 'environment',
    categoryLabel: 'Environment & Ecology',
    location: 'Coimbatore',
    date: '11 April 2025',
    description: 'Graced the commencement ceremony of the Rejuvenation of Vellakinar South Solai Pond as Chief Guest, organized by Siruthuli under the Nalla Thanni Project for desilting and sewage treatment.',
    imageUrl: '/images/leemamartin/gallery/soc-2.jpg',
    tags: ['Siruthuli', 'Water Conservation', 'Environment']
  },
  {
    id: 'gal-seed-ball-world-record',
    title: '34 Lakh Seed Ball World Record Event',
    category: 'environment',
    categoryLabel: 'Environment & Ecology',
    location: 'National Academy School, Ramanathapuram',
    date: '21–23 January 2020',
    description: '34,00,000 seed balls were prepared by 2,500 participants, including students from the National Academy and Ramanathapuram District Government Schools, over a 72-hour event raising awareness on green cover and reducing global warming.',
    imageUrl: '/images/leemamartin/gallery/wr-1.jpg',
    tags: ['World Record', 'Seed Balls', 'Reforestation']
  },
  {
    id: 'gal-italy-convocation',
    title: 'Yorker International University Convocation',
    category: 'awards',
    categoryLabel: 'Awards & Honors',
    location: 'Florence, Italy',
    date: '2010',
    description: 'Conferral ceremony for the Honorary Doctorate of Humanity Science at Yorker International University, Italy, in recognition of international humanitarian and community healthcare work.',
    imageUrl: '/images/leemamartin/gallery/italy-1.jpg',
    tags: ['Italy MOU', 'Honorary Doctorate', 'Humanity Science']
  }
];

