export interface Document {
  id: string;
  documentId: string;
  title: string;
  category: string;
  releaseDate: string;
  summary: string;
  content: string;
  individuals: string[];
  redactionLevel: 'none' | 'partial' | 'heavily';
  pages: number;
  source: string;
  keyDates?: { date: string; event: string }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All Files', description: 'View all released documents' },
  { id: 'flight-logs', name: 'Flight Logs', description: 'Private aircraft travel records' },
  { id: 'depositions', name: 'Depositions', description: 'Sworn testimony transcripts' },
  { id: 'court-filings', name: 'Court Filings', description: 'Legal documents and motions' },
  { id: 'communications', name: 'Communications', description: 'Correspondence and messages' },
  { id: 'financial', name: 'Financial', description: 'Transaction and banking records' },
  { id: 'witness', name: 'Witness Statements', description: 'Accounts from witnesses' },
];

export const documents: Document[] = [
  {
    id: '1',
    documentId: 'DOC-2024-001',
    title: 'Lolita Express Flight Logs 1995-2003',
    category: 'flight-logs',
    releaseDate: '2024-01-03',
    summary: 'Complete flight manifests for N908JE aircraft documenting passenger lists, destinations, and travel dates spanning eight years of operation.',
    content: 'These flight logs document hundreds of flights on the Boeing 727 aircraft registered as N908JE, commonly referred to as the "Lolita Express." The logs detail departure and arrival locations, passenger manifests, and crew information. Notable destinations include Teterboro Airport (NJ), Palm Beach International, and various Caribbean locations.',
    individuals: ['Jeffrey Epstein', 'Ghislaine Maxwell', 'Bill Clinton', 'Alan Dershowitz', 'Prince Andrew', 'Kevin Spacey', 'Chris Tucker', 'Naomi Campbell'],
    redactionLevel: 'partial',
    pages: 73,
    source: 'US District Court SDNY',
    keyDates: [
      { date: 'May 1995', event: 'First documented flight in released logs' },
      { date: 'Sept 2002', event: 'Africa trip with multiple high-profile passengers' },
      { date: 'Nov 2003', event: 'Last documented flight in this batch' },
    ]
  },
  {
    id: '2',
    documentId: 'DOC-2024-002',
    title: 'Virginia Giuffre Deposition - Full Transcript',
    category: 'depositions',
    releaseDate: '2024-01-03',
    summary: 'Complete sworn testimony of Virginia Giuffre detailing her experiences and naming individuals she claims were involved in trafficking activities.',
    content: 'This deposition transcript contains over 400 pages of testimony from Virginia Giuffre (née Roberts), one of the primary accusers in the Epstein case. She provides detailed accounts of her recruitment at Mar-a-Lago, subsequent abuse, and names numerous individuals she alleges participated in or witnessed criminal conduct.',
    individuals: ['Virginia Giuffre', 'Ghislaine Maxwell', 'Prince Andrew', 'Alan Dershowitz', 'Jean-Luc Brunel', 'Sarah Kellen', 'Nadia Marcinkova'],
    redactionLevel: 'partial',
    pages: 418,
    source: 'Giuffre v. Maxwell Civil Case',
    keyDates: [
      { date: 'May 2016', event: 'Deposition conducted' },
      { date: 'Aug 2019', event: 'Initially sealed, then partially released' },
      { date: 'Jan 2024', event: 'Further portions unsealed by court order' },
    ]
  },
  {
    id: '3',
    documentId: 'DOC-2024-003',
    title: 'Ghislaine Maxwell Criminal Trial Evidence Index',
    category: 'court-filings',
    releaseDate: '2024-01-05',
    summary: 'Comprehensive index of exhibits presented during the criminal trial including photographs, documents, and digital evidence cataloged by prosecution.',
    content: 'The evidence index catalogs over 1,000 exhibits used during the Maxwell trial. Categories include: photographic evidence from various properties, travel documents, financial records showing payments to victims, training documents, and digital communications recovered from seized devices.',
    individuals: ['Ghislaine Maxwell', 'Jeffrey Epstein', 'Annie Farmer', 'Kate', 'Carolyn', 'Jane'],
    redactionLevel: 'heavily',
    pages: 156,
    source: 'United States v. Maxwell',
    keyDates: [
      { date: 'Nov 2021', event: 'Trial commenced' },
      { date: 'Dec 2021', event: 'Guilty verdict on 5 of 6 counts' },
      { date: 'Jun 2022', event: 'Sentenced to 20 years' },
    ]
  },
  {
    id: '4',
    documentId: 'DOC-2024-004',
    title: 'Palm Beach Police Department Investigation Report',
    category: 'witness',
    releaseDate: '2024-01-06',
    summary: 'Initial 2005 investigation files from Palm Beach PD including witness interviews, surveillance notes, and evidence collection records.',
    content: 'The Palm Beach investigation began after a parent reported their 14-year-old daughter had been taken to Epstein\'s mansion. The file documents interviews with over 30 potential victims, describes the interior layout of the residence, and details the initial coordination with FBI before the controversial non-prosecution agreement.',
    individuals: ['Jeffrey Epstein', 'Sarah Kellen', 'Haley Robson', 'Adriana Ross', 'Lesley Groff'],
    redactionLevel: 'partial',
    pages: 289,
    source: 'Palm Beach Police Department',
    keyDates: [
      { date: 'Mar 2005', event: 'Investigation initiated' },
      { date: 'May 2006', event: 'Case referred to FBI' },
      { date: 'Sep 2007', event: 'Non-prosecution agreement signed' },
    ]
  },
  {
    id: '5',
    documentId: 'DOC-2024-005',
    title: 'Financial Transaction Records 2001-2008',
    category: 'financial',
    releaseDate: '2024-01-07',
    summary: 'Bank records and wire transfers documenting payments to alleged victims, employees, and associated entities during peak operational years.',
    content: 'Financial records reveal patterns of cash payments and wire transfers. Documents show regular payments to young women ranging from $200-$2000 labeled as "massage services." Records also detail transfers to modeling agencies, payments to recruiters, and property acquisitions in multiple jurisdictions.',
    individuals: ['Jeffrey Epstein', 'Ghislaine Maxwell', 'Jean-Luc Brunel', 'Les Wexner'],
    redactionLevel: 'heavily',
    pages: 892,
    source: 'SDNY Financial Forensics',
    keyDates: [
      { date: '2001-2008', event: 'Period covered by financial records' },
      { date: 'Aug 2019', event: 'Records subpoenaed from multiple banks' },
    ]
  },
  {
    id: '6',
    documentId: 'DOC-2024-006',
    title: 'Little St. James Island Property Records',
    category: 'court-filings',
    releaseDate: '2024-01-08',
    summary: 'Property documents, construction permits, and employment records related to the private Caribbean island compound.',
    content: 'Documents detail the acquisition and development of Little St. James Island in the US Virgin Islands. Includes construction permits for the main residence, guest houses, and other structures. Employment records show staff manifests and contractor information spanning 1998-2019.',
    individuals: ['Jeffrey Epstein', 'Cecile de Jongh', 'Various contractors'],
    redactionLevel: 'partial',
    pages: 234,
    source: 'USVI Government Records',
  },
  {
    id: '7',
    documentId: 'DOC-2024-007',
    title: 'Alan Dershowitz Deposition Excerpts',
    category: 'depositions',
    releaseDate: '2024-01-08',
    summary: 'Excerpts from sworn testimony given by attorney Alan Dershowitz regarding his relationship with Epstein and denials of any improper conduct.',
    content: 'In this deposition, Dershowitz addresses his legal representation of Epstein, social interactions, and categorically denies allegations made against him by Virginia Giuffre. He discusses the non-prosecution agreement he helped negotiate and his visits to Epstein properties.',
    individuals: ['Alan Dershowitz', 'Jeffrey Epstein', 'Virginia Giuffre', 'Ghislaine Maxwell'],
    redactionLevel: 'partial',
    pages: 187,
    source: 'Giuffre v. Dershowitz',
  },
  {
    id: '8',
    documentId: 'DOC-2024-008',
    title: 'Email Communications 2010-2015',
    category: 'communications',
    releaseDate: '2024-01-09',
    summary: 'Recovered email correspondence between Epstein, Maxwell, and various associates following his 2008 conviction.',
    content: 'Email communications retrieved from seized devices show continued coordination between Epstein and Maxwell after his Florida conviction. Topics include travel arrangements, property management, and scheduling. Several messages reference efforts to rehabilitate Epstein\'s public image and maintain social connections.',
    individuals: ['Jeffrey Epstein', 'Ghislaine Maxwell', 'Various Media Figures', 'PR Consultants'],
    redactionLevel: 'heavily',
    pages: 445,
    source: 'FBI Digital Forensics',
    keyDates: [
      { date: 'Jul 2010', event: 'Release from Florida custody' },
      { date: '2010-2015', event: 'Period of email communications' },
    ]
  },
  {
    id: '9',
    documentId: 'DOC-2024-009',
    title: 'Johanna Sjoberg Deposition',
    category: 'depositions',
    releaseDate: '2024-01-10',
    summary: 'Testimony from former employee describing recruitment process, activities at various properties, and observations of visitors.',
    content: 'Sjoberg describes being recruited while a college student in Palm Beach. Her testimony details the operations at Epstein\'s properties, her role in scheduling "massages," and describes numerous high-profile visitors. She provides specific accounts of interactions with Prince Andrew including the infamous photograph incident.',
    individuals: ['Johanna Sjoberg', 'Jeffrey Epstein', 'Ghislaine Maxwell', 'Prince Andrew', 'Sarah Kellen'],
    redactionLevel: 'partial',
    pages: 203,
    source: 'Giuffre v. Maxwell Civil Case',
  },
  {
    id: '10',
    documentId: 'DOC-2024-010',
    title: 'New Mexico Ranch Investigation Files',
    category: 'witness',
    releaseDate: '2024-01-10',
    summary: 'Investigation materials related to Zorro Ranch in New Mexico including witness statements and property search documentation.',
    content: 'The Zorro Ranch investigation files document law enforcement efforts to investigate activities at Epstein\'s New Mexico property. Materials include interviews with former employees, neighboring property owners, and documentation of the compound\'s layout and facilities.',
    individuals: ['Jeffrey Epstein', 'Various Ranch Employees', 'Local Witnesses'],
    redactionLevel: 'partial',
    pages: 178,
    source: 'New Mexico Attorney General',
  },
  {
    id: '11',
    documentId: 'DOC-2024-011',
    title: 'Jean-Luc Brunel Investigation Summary',
    category: 'court-filings',
    releaseDate: '2024-01-11',
    summary: 'French investigation documents regarding modeling agent Jean-Luc Brunel and his connection to trafficking networks.',
    content: 'Investigation materials compiled by French authorities detail the role of modeling agent Jean-Luc Brunel in recruiting young women from Eastern Europe and South America. Documents trace his decades-long association with Epstein and describe the MC2 modeling agency operations.',
    individuals: ['Jean-Luc Brunel', 'Jeffrey Epstein', 'Ghislaine Maxwell', 'Various Models'],
    redactionLevel: 'heavily',
    pages: 312,
    source: 'French National Police (translated)',
    keyDates: [
      { date: 'Dec 2020', event: 'Brunel arrested in Paris' },
      { date: 'Feb 2022', event: 'Found dead in prison cell' },
    ]
  },
  {
    id: '12',
    documentId: 'DOC-2024-012',
    title: 'Sarah Kellen Interview Transcripts',
    category: 'witness',
    releaseDate: '2024-01-12',
    summary: 'Law enforcement interview transcripts with former assistant Sarah Kellen regarding her role in scheduling and operations.',
    content: 'Transcripts document interviews conducted with Sarah Kellen, identified as a key assistant who managed schedules and logistics. The interviews explore her knowledge of Epstein\'s activities, her role in contacting young women, and her understanding of what occurred during "massage" appointments.',
    individuals: ['Sarah Kellen', 'Jeffrey Epstein', 'Ghislaine Maxwell', 'Nadia Marcinkova'],
    redactionLevel: 'partial',
    pages: 145,
    source: 'FBI Interview Records',
  },
  {
    id: '13',
    documentId: 'DOC-2024-013',
    title: 'Prince Andrew Civil Settlement Filings',
    category: 'court-filings',
    releaseDate: '2024-01-12',
    summary: 'Court documents related to the civil lawsuit and subsequent settlement between Virginia Giuffre and Prince Andrew.',
    content: 'These filings document the civil case brought by Virginia Giuffre against Prince Andrew. Documents include the initial complaint, Prince Andrew\'s motion to dismiss, correspondence regarding service of process, and the eventual settlement terms (with financial details redacted).',
    individuals: ['Prince Andrew', 'Virginia Giuffre', 'Ghislaine Maxwell', 'Jeffrey Epstein'],
    redactionLevel: 'partial',
    pages: 267,
    source: 'US District Court SDNY',
    keyDates: [
      { date: 'Aug 2021', event: 'Civil lawsuit filed' },
      { date: 'Feb 2022', event: 'Settlement announced' },
    ]
  },
  {
    id: '14',
    documentId: 'DOC-2024-014',
    title: 'Flight Logs 2004-2016 Supplemental',
    category: 'flight-logs',
    releaseDate: '2024-01-13',
    summary: 'Additional flight records from later aircraft operations including helicopter and smaller jet manifests.',
    content: 'Supplemental aviation records covering flights after the 727 operations. Includes manifests from Gulfstream aircraft, helicopter transfers between properties, and chartered flight arrangements. Documents show continued travel patterns after the 2008 conviction.',
    individuals: ['Jeffrey Epstein', 'Ghislaine Maxwell', 'Various Associates'],
    redactionLevel: 'partial',
    pages: 156,
    source: 'FAA Records / Court Subpoena',
  },
  {
    id: '15',
    documentId: 'DOC-2024-015',
    title: 'Victim Impact Statements Compilation',
    category: 'witness',
    releaseDate: '2024-01-15',
    summary: 'Collection of victim impact statements submitted to the court for sentencing proceedings.',
    content: 'This compilation includes victim impact statements submitted during various legal proceedings. Survivors describe their experiences, long-term trauma, and the impact on their lives. Names are partially redacted to protect privacy where requested.',
    individuals: ['Multiple Survivors', 'Jeffrey Epstein', 'Ghislaine Maxwell'],
    redactionLevel: 'heavily',
    pages: 198,
    source: 'Multiple Court Proceedings',
  },
  {
    id: '16',
    documentId: 'DOC-2024-016',
    title: 'Les Wexner Association Documents',
    category: 'financial',
    releaseDate: '2024-01-15',
    summary: 'Financial and legal documents detailing the business relationship between Epstein and retail billionaire Les Wexner.',
    content: 'Documents trace the unusual financial relationship between Epstein and Wexner spanning decades. Includes power of attorney documents, property transfers (including the Manhattan mansion), and communications regarding financial management. Wexner later claimed Epstein misappropriated funds.',
    individuals: ['Les Wexner', 'Jeffrey Epstein', 'Various Attorneys'],
    redactionLevel: 'partial',
    pages: 423,
    source: 'Ohio Attorney General / Civil Filings',
    keyDates: [
      { date: '1991', event: 'Transfer of Manhattan mansion' },
      { date: '2007', event: 'Formal severance of business relationship' },
      { date: '2019', event: 'Wexner public statement on relationship' },
    ]
  },
  {
    id: '17',
    documentId: 'DOC-2024-017',
    title: 'Metropolitan Correctional Center Death Investigation',
    category: 'court-filings',
    releaseDate: '2024-01-16',
    summary: 'Department of Justice investigation materials regarding Epstein\'s death at MCC New York on August 10, 2019.',
    content: 'Investigation materials examining the circumstances of Epstein\'s death in federal custody. Documents detail security failures, camera malfunctions, guard negligence, and the medical examiner\'s findings. Includes interview transcripts with correctional officers and incident reports.',
    individuals: ['Jeffrey Epstein', 'MCC Staff', 'Medical Examiner'],
    redactionLevel: 'heavily',
    pages: 534,
    source: 'DOJ Office of Inspector General',
    keyDates: [
      { date: 'Jul 23, 2019', event: 'First apparent suicide attempt' },
      { date: 'Aug 10, 2019', event: 'Found unresponsive in cell' },
      { date: 'Aug 2019', event: 'Medical examiner rules suicide' },
    ]
  },
  {
    id: '18',
    documentId: 'DOC-2024-018',
    title: 'Address Book and Contact List',
    category: 'communications',
    releaseDate: '2024-01-17',
    summary: 'Epstein\'s personal address book containing contact information for associates, with circled entries allegedly indicating victims.',
    content: 'The infamous "black book" contains over 1,500 names and contact details. Circled entries were reportedly marked by a former employee to indicate individuals who might be victims or have relevant information. Categories include personal contacts, business associates, and staff at various properties.',
    individuals: ['Multiple High-Profile Names', 'Various International Contacts'],
    redactionLevel: 'partial',
    pages: 92,
    source: 'Palm Beach Investigation / Leaked Document',
  },
  {
    id: '19',
    documentId: 'DOC-2024-019',
    title: 'Non-Prosecution Agreement Analysis',
    category: 'court-filings',
    releaseDate: '2024-01-18',
    summary: 'The controversial 2007 non-prosecution agreement and related correspondence between federal prosecutors and Epstein\'s legal team.',
    content: 'Documents detail the negotiation of the controversial NPA that allowed Epstein to plead guilty to state charges while avoiding federal prosecution. Includes correspondence revealing the unusual level of access given to defense attorneys and the decision to conceal the agreement from victims.',
    individuals: ['Jeffrey Epstein', 'Alexander Acosta', 'Alan Dershowitz', 'Kenneth Starr', 'Jay Lefkowitz'],
    redactionLevel: 'partial',
    pages: 287,
    source: 'DOJ / SDFL Records',
    keyDates: [
      { date: '2007-2008', event: 'NPA negotiation period' },
      { date: 'Jun 2008', event: 'Agreement finalized' },
      { date: '2019', event: 'Agreement invalidated for victim notification failures' },
    ]
  },
  {
    id: '20',
    documentId: 'DOC-2024-020',
    title: 'Doe v. Epstein Estate Claims Index',
    category: 'court-filings',
    releaseDate: '2024-01-20',
    summary: 'Index of claims filed against Epstein\'s estate by victims seeking compensation through the Victims\' Compensation Fund.',
    content: 'Following Epstein\'s death, a compensation fund was established for victims. This index documents the hundreds of claims filed, categorized by time period, location, and nature of abuse alleged. Individual claims are heavily redacted to protect claimant identities.',
    individuals: ['Over 150 Claimants', 'Estate Representatives'],
    redactionLevel: 'heavily',
    pages: 678,
    source: 'Epstein Victims\' Compensation Program',
    keyDates: [
      { date: 'Jun 2020', event: 'Compensation program established' },
      { date: 'Aug 2021', event: 'Over $121 million distributed' },
    ]
  },
];
