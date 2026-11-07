export type Language = 'id' | 'en';

export interface LocalizedText {
  id: string;
  en: string;
}

export interface StatItem {
  value: string;
  label: LocalizedText;
  sublabel: LocalizedText;
}

export interface MissionPillar {
  code: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface LeadershipMember {
  name: string;
  role: LocalizedText;
  division: LocalizedText;
  badge: string;
}

export interface EngineeringSubsystem {
  id: string;
  code: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  specs: {
    label: LocalizedText;
    value: string;
  }[];
  image: string;
  imageAlt: string;
}

export interface RobotViewItem {
  id: string;
  label: LocalizedText;
  caption: LocalizedText;
  src: string;
  type: 'cad' | 'photo';
  tag: string;
}

export interface AchievementItem {
  id: string;
  rank: string;
  title: LocalizedText;
  event: string;
  year: string;
  description: LocalizedText;
  metrics: {
    label: LocalizedText;
    value: string;
  }[];
  image: string;
  secondaryImage?: string;
}

export interface TimelinePhase {
  phase: string;
  period: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  status: 'completed' | 'active';
}

export interface ProgramItem {
  code: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
}

export interface GalleryItem {
  id: string;
  src: string;
  category: 'robot' | 'competition' | 'awards' | 'community';
  title: LocalizedText;
  caption: LocalizedText;
  tag: string;
  aspect: 'wide' | 'standard' | 'tall';
}

export interface PartnershipTier {
  name: string;
  tierCode: string;
  startingFrom: string;
  accentClass: string;
  benefits: LocalizedText[];
}

export interface SocialMediaLink {
  id: 'tiktok' | 'instagram' | 'youtube' | 'github' | 'website';
  platform: string;
  handle: string;
  url: string;
  label: LocalizedText;
}

export const TEAM_INFO = {
  name: 'No Clue Robotics',
  shortName: 'N.C.R',
  teamNumber: '30647',
  motto: 'No Clue, No Limit.',
  pitQuote:
    "We believe that creativity doesn't always start with a plan, sometimes it starts with curiosity, randomness, and mistakes.",
  founded: 'November 2025',
  season: 'FIRST Tech Challenge (FTC) DECODE™ 2025–2026',
  foundation: 'Yayasan Indonesia FIRST Robotik',
  location: {
    street: 'Jl. RTM No. 16, Kel. Tugu, Kec. Cimanggis',
    city: 'Kota Depok, Jawa Barat 16451',
    country: 'Indonesia',
    short: 'Cimanggis, Depok — Jawa Barat, Indonesia',
  },
  contact: {
    leadMentor: 'Muhammad Taufiq',
    teamCaptain: 'Kyara Zahra',
    secretary: 'P. Sahyayodha',
    email: 'nocluerobotics@gmail.com',
    phone: '+62 858-9366-5329',
    whatsappUrl: 'https://wa.me/6285893665329',
    websiteLabel: 'www.nocluerobotics.club',
    websiteUrl: 'https://www.nocluerobotics.club',
    instagramHandle: '@nocluerobotics',
    instagramUrl: 'https://www.instagram.com/nocluerobotics',
    tiktokHandle: '@nocluerobotics30647',
    tiktokUrl: 'https://www.tiktok.com/@nocluerobotics30647',
    youtubeHandle: '@nocluerobotics',
    youtubeUrl: 'https://youtube.com/@nocluerobotics',
    githubHandle: 'No-Clue-Robotics',
    githubUrl: 'https://github.com/No-Clue-Robotics',
  },
};

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@nocluerobotics30647',
    url: 'https://www.tiktok.com/@nocluerobotics30647',
    label: {
      id: 'Konten Pendek & Behind The Pit',
      en: 'Short-Form & Behind The Pit',
    },
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@nocluerobotics',
    url: 'https://www.instagram.com/nocluerobotics',
    label: {
      id: 'Update Kegiatan & Dokumentasi',
      en: 'Team Updates & Highlights',
    },
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: '@nocluerobotics',
    url: 'https://youtube.com/@nocluerobotics',
    label: {
      id: 'Video Profil, Match & Edukasi',
      en: 'Team Videos, Matches & Tutorials',
    },
  },
  {
    id: 'github',
    platform: 'GitHub',
    handle: 'No-Clue-Robotics',
    url: 'https://github.com/No-Clue-Robotics',
    label: {
      id: 'Repositori Kode & Open Source',
      en: 'Code Repositories & Open Source',
    },
  },
  {
    id: 'website',
    platform: 'WebSite',
    handle: 'www.nocluerobotics.club',
    url: 'https://www.nocluerobotics.club',
    label: {
      id: 'Portal Resmi NCR #30647',
      en: 'Official NCR #30647 Portal',
    },
  },
];

export const HERO_STATS: StatItem[] = [
  {
    value: '#30647',
    label: {
      id: 'Nomor Tim Resmi FTC',
      en: 'Official FTC Team Number',
    },
    sublabel: {
      id: 'Terdaftar di Musim DECODE™ 2025–2026',
      en: 'Registered for DECODE™ 2025–2026 Season',
    },
  },
  {
    value: '2nd Winner',
    label: {
      id: 'Inspire Award',
      en: 'Inspire Award',
    },
    sublabel: {
      id: 'Penghargaan Tertinggi FTC Nusantara Championship',
      en: 'Top Overall Honor at FTC Nusantara Championship',
    },
  },
  {
    value: '1st Pick',
    label: {
      id: 'Winning Alliance',
      en: 'Winning Alliance',
    },
    sublabel: {
      id: 'Juara Playoff & Peringkat #3 Kualifikasi (Skor 253–100)',
      en: 'Playoff Champion & Qual Rank #3 (Score 253–100)',
    },
  },
  {
    value: '11 + 3',
    label: {
      id: 'Pelajar & Mentor',
      en: 'Students & Mentors',
    },
    sublabel: {
      id: '11 Pelajar Lintas Sekolah & 3 Mentor Robotika',
      en: '11 Cross-School Students & 3 Robotics Mentors',
    },
  },
];

export const MISSION_PILLARS: MissionPillar[] = [
  {
    code: '01',
    title: {
      id: 'Komunitas Inklusif Lintas Batas',
      en: 'Inclusive Open Community',
    },
    description: {
      id: 'Menyatukan pelajar dari berbagai SMA/SMK, kota, dan latar belakang di Indonesia tanpa dibatasi afiliasi satu institusi sekolah.',
      en: 'Uniting students from diverse high schools, cities, and backgrounds across Indonesia beyond single-school institutional boundaries.',
    },
  },
  {
    code: '02',
    title: {
      id: 'Keunggulan Rekayasa & Kompetisi',
      en: 'Engineering & Competitive Excellence',
    },
    description: {
      id: 'Mendorong eksperimen berkelanjutan melalui desain 3D CAD, manufaktur mekanik, dan sistem otonom di kompetisi FIRST Tech Challenge.',
      en: 'Driving continuous experimentation through 3D CAD design, mechanical fabrication, and autonomous systems in FIRST Tech Challenge.',
    },
  },
  {
    code: '03',
    title: {
      id: 'Aksesibilitas Edukasi Robotika',
      en: 'Accessible Robotics Education',
    },
    description: {
      id: 'Memperkenalkan kurikulum STEM, pemrograman, dan rekayasa perangkat keras ke sekolah-sekolah serta komunitas lokal melalui lokakarya langsung.',
      en: 'Introducing practical STEM, programming, and hardware engineering to schools and local communities through hands-on workshops.',
    },
  },
  {
    code: '04',
    title: {
      id: 'Kolaborasi Ekosistem & Industri',
      en: 'Ecosystem & Industry Collaboration',
    },
    description: {
      id: 'Membangun jembatan kolaborasi antara talenta muda, institusi pendidikan, dan mitra teknologi untuk mendukung visi Indonesia Emas 2045.',
      en: 'Building bridges between emerging youth talent, educational institutions, and technology partners toward Golden Indonesia 2045.',
    },
  },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: 'Muhammad Taufiq',
    role: {
      id: 'Lead Mentor',
      en: 'Lead Mentor',
    },
    division: {
      id: 'Pembina Utama & Pengarah Rekayasa Sistem',
      en: 'Lead Technical Advisor & Systems Engineering Mentor',
    },
    badge: 'MENTOR // 01',
  },
  {
    name: 'Kyara Zahra',
    role: {
      id: 'Team Captain',
      en: 'Team Captain',
    },
    division: {
      id: 'Kapten Tim, Strategi Kompetisi & Manajemen Operasional',
      en: 'Team Captain, Match Strategy & Operations Lead',
    },
    badge: 'CAPTAIN // 02',
  },
  {
    name: 'P. Sahyayodha',
    role: {
      id: 'Secretary & Treasurer',
      en: 'Secretary & Treasurer',
    },
    division: {
      id: 'Administrasi Organisasi, Kemitraan & Dokumentasi Portofolio',
      en: 'Organizational Administration, Partnerships & Portfolio',
    },
    badge: 'OFFICER // 03',
  },
  {
    name: '11 Pelajar & 3 Mentor',
    role: {
      id: 'Skuad Rekayasa Lintas Sekolah',
      en: 'Cross-School Engineering Roster',
    },
    division: {
      id: 'Divisi Mechanical & CAD, Software ("In Code We Trust"), Electrical, Drive Team & Media Outreach',
      en: 'Mechanical & CAD, Software ("In Code We Trust"), Electrical, Drive Team & Media Outreach Divisions',
    },
    badge: 'ROSTER // #30647',
  },
];

export const ROBOT_VIEWS: RobotViewItem[] = [
  {
    id: 'cad-iso',
    label: {
      id: '3D CAD Isometrik',
      en: '3D CAD Isometric',
    },
    caption: {
      id: 'Model 3D CAD penuh Robot #30647 memperlihatkan integrasi front omni-roller intake, pelat sasis truss-cut, REV Control Hub, dan upper launcher turret.',
      en: 'Full 3D CAD assembly of Robot #30647 highlighting the front omni-roller intake, truss-cut chassis plates, REV Control Hub, and upper launcher turret.',
    },
    src: '/assets/cad/robot-cad-iso.png',
    type: 'cad',
    tag: 'CAD // REV-A1',
  },
  {
    id: 'action-field',
    label: {
      id: 'Aksi Arena FTC',
      en: 'FTC Field Action',
    },
    caption: {
      id: 'Robot #30647 menembakkan elemen permainan (Artifact) di arena FTC Nusantara Championship dengan modul visi kamera di atas turret.',
      en: 'Robot #30647 launching a purple DECODE artifact on the FTC Nusantara Championship field with its turret-mounted vision camera.',
    },
    src: '/assets/photos/robot-action-field.jpg',
    type: 'photo',
    tag: 'LIVE // MATCH',
  },
  {
    id: 'cad-rear',
    label: {
      id: '3D CAD Transmisi & Panel',
      en: '3D CAD Drivetrain & Panel',
    },
    caption: {
      id: 'Tampak belakang 3D CAD memperlihatkan sistem transmisi rantai ganda (dual-chain drive), dudukan baterai, pelat nomor 30647, dan alokasi panel kemitraan.',
      en: 'Rear 3D CAD perspective showing the dual-chain transmission, battery bay, custom 30647 number plate, and modular sponsor panel layout.',
    },
    src: '/assets/cad/robot-cad-rear.png',
    type: 'cad',
    tag: 'CAD // REAR-B2',
  },
  {
    id: 'pit-hardware',
    label: {
      id: 'Perangkat Keras Aktual',
      en: 'Actual Built Hardware',
    },
    caption: {
      id: 'Konstruksi aktual Robot #30647 di area pit lengkap dengan roda omni depan, pelat samping kustom, dan dua kontroler Drive Team.',
      en: 'Actual physical build of Robot #30647 in the pit area featuring front omni-wheels, custom side plates, and dual Drive Team controllers.',
    },
    src: '/assets/photos/robot-pit-intake.jpg',
    type: 'photo',
    tag: 'BUILD // #30647',
  },
];

export const ENGINEERING_SUBSYSTEMS: EngineeringSubsystem[] = [
  {
    id: 'mechanical-cad',
    code: 'SYS-01 // MECH & CAD',
    title: {
      id: 'Arsitektur Mekanik & 3D CAD Kustom',
      en: 'Custom Mechanical & 3D CAD Architecture',
    },
    subtitle: {
      id: 'Desain Modular Berbasis Simulasi CAD',
      en: 'Modular Design Driven by 3D CAD Modeling',
    },
    description: {
      id: 'Seluruh struktur Robot #30647 dirancang dari nol menggunakan pemodelan 3D CAD presisi sebelum tahap manufaktur. Sasis mengadopsi pelat samping berpola rangka (truss-lightened plates) untuk menjaga titik berat tetap rendah sekaligus menopang mekanisme lengan rantai ganda dan pelontar roda ganda (dual-wheel shooter turret).',
      en: 'Every structure of Robot #30647 is engineered from the ground up in 3D CAD prior to fabrication. The chassis uses truss-lightened side plates to maintain a low center of gravity while supporting a dual-chain articulated arm and high-speed dual-wheel launcher turret.',
    },
    specs: [
      {
        label: { id: 'Sistem Intake', en: 'Intake System' },
        value: 'Front Omni & Compliant Roller Array',
      },
      {
        label: { id: 'Mekanisme Skor', en: 'Scoring Mechanism' },
        value: 'Dual-Chain Turret & Flywheel Launcher',
      },
      {
        label: { id: 'Struktur Sasis', en: 'Chassis Structure' },
        value: 'Custom CNC/Laser-Cut Truss Side Plates',
      },
    ],
    image: '/assets/photos/robot-pit-intake.jpg',
    imageAlt: 'Mekanisme intake dan sasis Robot NCR 30647',
  },
  {
    id: 'electrical-rev',
    code: 'SYS-02 // ELECTRICAL',
    title: {
      id: 'Integrasi Elektrikal & Ekosistem REV',
      en: 'Electrical Integration & REV Ecosystem',
    },
    subtitle: {
      id: 'Manajemen Daya & Distribusi Sinyal Presisi',
      en: 'Power Management & Reliable Signal Distribution',
    },
    description: {
      id: 'Menggunakan REV Robotics Control Hub sebagai pusat pemrosesan dan distribusi daya. Seluruh jalur kabel motor DC, encoder, dan servo dilindungi dengan braided wire sleeving untuk mencegah interferensi mekanik saat pertandingan berintensitas tinggi serta memenuhi standar ketat FTC Inspection.',
      en: 'Powered by the REV Robotics Control Hub as the central processing and power distribution unit. All DC motor, encoder, and servo harnesses are protected in braided wire sleeving to prevent mechanical snagging during intense matches and pass strict FTC Inspection standards.',
    },
    specs: [
      {
        label: { id: 'Unit Kontrol Utama', en: 'Main Controller' },
        value: 'REV Robotics Control Hub',
      },
      {
        label: { id: 'Manajemen Kabel', en: 'Wire Management' },
        value: 'Braided Looming & Strain Relief',
      },
      {
        label: { id: 'Standar Inspeksi', en: 'Inspection Status' },
        value: '100% Passed FTC DECODE Checklist',
      },
    ],
    image: '/assets/photos/robot-engineering-closeup.jpg',
    imageAlt: 'Perakitan elektrikal dan REV Control Hub pada Robot 30647',
  },
  {
    id: 'autonomous-software',
    code: 'SYS-03 // SOFTWARE',
    title: {
      id: 'Sistem Otonom, Visi & Kendali TeleOp',
      en: 'Autonomous Vision & TeleOp Control',
    },
    subtitle: {
      id: '"In Code We Trust" — Kendali Berbasis Sensor',
      en: '"In Code We Trust" — Sensor-Driven Control',
    },
    description: {
      id: 'Dilengkapi kamera visi yang terpasang langsung di atas struktur pelontar (upper turret) untuk membantu pembacaan elemen arena selama fase otonom 30 detik. Pada fase Driver-Controlled (TeleOp), perangkat lunak mengoptimalkan sinkronisasi dua operator (Drive Team) untuk siklus pengambilan dan penembakan Artifact yang cepat.',
      en: 'Equipped with a vision camera mounted directly atop the upper turret structure for field element tracking during the 30-second Autonomous period. During Driver-Controlled (TeleOp) play, custom control loops synchronize dual-gamepad inputs for rapid artifact intake-to-launch cycles.',
    },
    specs: [
      {
        label: { id: 'Sensor Visi', en: 'Vision Sensor' },
        value: 'Turret-Mounted USB Vision Camera',
      },
      {
        label: { id: 'Konfigurasi Kemudi', en: 'Driver Setup' },
        value: 'Dual-Gamepad Cooperative TeleOp',
      },
      {
        label: { id: 'Akurasi Penalti', en: 'Foul Discipline' },
        value: '0 Foul Points in Playoff Match 11',
      },
    ],
    image: '/assets/photos/drive-team-focus.jpg',
    imageAlt: 'Drive Team NCR 30647 mengendalikan robot di lapangan FTC',
  },
];

export const VERIFIED_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'inspire-award-2nd',
    rank: '2nd Place Winner',
    title: {
      id: 'Inspire Award — 2nd Winner',
      en: 'Inspire Award — 2nd Winner',
    },
    event: 'FIRST Tech Challenge (FTC) Nusantara Championship — Universitas Indonesia',
    year: '2025–2026 DECODE™ Season',
    description: {
      id: 'Penghargaan paling bergengsi di FIRST Tech Challenge yang diberikan kepada tim yang secara menyeluruh merepresentasikan keunggulan desain rekayasa robot, portofolio dokumentasi teknis, kolaborasi tim, serta dampak program outreach di masyarakat.',
      en: 'The most prestigious overall recognition in FIRST Tech Challenge, awarded to the team that best embodies engineering design excellence, a thorough engineering portfolio, team collaboration, and community outreach impact.',
    },
    metrics: [
      {
        label: { id: 'Kategori Penghargaan', en: 'Award Category' },
        value: 'Overall Team Excellence (Inspire)',
      },
      {
        label: { id: 'Tingkat Kompetisi', en: 'Competition Level' },
        value: 'FTC Nusantara Championship (National)',
      },
    ],
    image: '/assets/photos/stage-inspire-award.jpg',
    secondaryImage: '/assets/photos/team-awards-backdrop.jpg',
  },
  {
    id: 'winning-alliance-1st-pick',
    rank: 'Winning Alliance',
    title: {
      id: 'Winning Alliance — 1st Team Selected',
      en: 'Winning Alliance — 1st Team Selected',
    },
    event: 'FIRST Tech Challenge (FTC) Nusantara Championship — Playoff Finals',
    year: '2025–2026 DECODE™ Season',
    description: {
      id: 'Menempati Peringkat #3 pada babak kualifikasi dan terpilih sebagai mitra pertama (First Pick) oleh Kapten Aliansi 1 (#17517 ULT). Bersama-sama mendominasi babak Playoff termasuk kemenangan telak 253–100 pada Playoff Match 11 dengan 219 poin Artifact tanpa satu pun penalti (0 Foul).',
      en: 'Ranked #3 in qualification rounds and selected as the First Pick partner by Alliance 1 Captain (#17517 ULT). Together dominated the championship playoffs, including a decisive 253–100 victory in Playoff Match 11 with 219 Artifact points and 0 fouls.',
    },
    metrics: [
      {
        label: { id: 'Peringkat Kualifikasi', en: 'Qualification Seed' },
        value: 'Rank #3 — Alliance 1 First Pick',
      },
      {
        label: { id: 'Rekor Skor Playoff M-11', en: 'Playoff Match 11 Score' },
        value: '253 – 100 (219 Artifact Pts, 0 Foul)',
      },
    ],
    image: '/assets/photos/stage-winning-alliance.jpg',
    secondaryImage: '/assets/photos/scoreboard-match11.jpg',
  },
];

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: 'PHASE 01',
    period: {
      id: 'November 2025',
      en: 'November 2025',
    },
    title: {
      id: 'Inisiasi Komunitas & Perakitan Proposal',
      en: 'Community Initiation & Proposal Assembly',
    },
    description: {
      id: 'Pendirian No Clue Robotics (NCR #30647) di Cimanggis, Depok sebagai komunitas robotika independen pertama di Indonesia yang menyatukan 11 pelajar lintas SMA/SMK dan 3 mentor.',
      en: 'Founding of No Clue Robotics (NCR #30647) in Cimanggis, Depok as an independent youth robotics community uniting 11 cross-school high school students and 3 mentors.',
    },
    status: 'completed',
  },
  {
    phase: 'PHASE 02',
    period: {
      id: 'Desember 2025 – Januari 2026',
      en: 'December 2025 – January 2026',
    },
    title: {
      id: 'Perancangan Model 3D CAD & Riset Mekanik',
      en: 'Designing 3D CAD Models & Mechanical R&D',
    },
    description: {
      id: 'Pemodelan 3D CAD penuh Robot #30647, perancangan pelat rangka kustom, integrasi ekosistem REV Robotics Control Hub, dan publikasi proposal kemitraan.',
      en: 'Complete 3D CAD modeling of Robot #30647, custom truss plate engineering, REV Robotics Control Hub integration, and partnership proposal publication.',
    },
    status: 'completed',
  },
  {
    phase: 'PHASE 03',
    period: {
      id: 'Januari – Februari 2026',
      en: 'January – February 2026',
    },
    title: {
      id: 'Fabrikasi Robot, Latihan & Publikasi Media',
      en: 'Engineering Fabrication, Practice & Media Publication',
    },
    description: {
      id: 'Perakitan fisik sasis dan turret pelontar, kalibrasi algoritma otonom berbasis visi, latihan intensif Drive Team, serta penyelesaian Engineering Portfolio.',
      en: 'Physical fabrication of chassis and launcher turret, vision-based autonomous calibration, intensive Drive Team practice, and Engineering Portfolio completion.',
    },
    status: 'completed',
  },
  {
    phase: 'PHASE 04',
    period: {
      id: '2026 & Berkelanjutan',
      en: '2026 & Ongoing',
    },
    title: {
      id: 'FTC Nusantara Championship & Ekspansi Nasional',
      en: 'FTC Nusantara Championship & National Expansion',
    },
    description: {
      id: 'Meraih Inspire Award 2nd Winner dan Winning Alliance First Pick di Universitas Indonesia, dilanjutkan dengan program Outreach sekolah dan persiapan National Robotics Competition (BioBuzz Edition).',
      en: 'Securing Inspire Award 2nd Winner and Winning Alliance First Pick at Universitas Indonesia, followed by school outreach programs and preparation for the National Robotics Competition (BioBuzz Edition).',
    },
    status: 'active',
  },
];

export const NCR_PROGRAMS: ProgramItem[] = [
  {
    code: 'PRG-01',
    title: {
      id: 'National & International Robotics Competition',
      en: 'National & International Robotics Competition',
    },
    tagline: {
      id: 'Rekayasa, Kompetisi & Keunggulan Teknis',
      en: 'Engineering, Competition & Technical Excellence',
    },
    description: {
      id: 'Partisipasi aktif di FIRST Tech Challenge (FTC) musim DECODE™ 2025–2026 serta persiapan menuju National Robotics Competition (termasuk edisi BioBuzz) untuk menguji ketangguhan rekayasa tim.',
      en: 'Active competition in FIRST Tech Challenge (FTC) DECODE™ 2025–2026 and preparation for the National Robotics Competition (including BioBuzz edition) to benchmark engineering capability.',
    },
    highlights: [
      { id: 'Riset & iterasi robot kompetisi #30647', en: 'R&D and iteration of competition Robot #30647' },
      { id: 'Strategi aliansi & manajemen pertandingan', en: 'Alliance strategy & match management' },
      { id: 'Penyusunan Engineering Portfolio berstandar FIRST', en: 'FIRST-standard Engineering Portfolio documentation' },
    ],
  },
  {
    code: 'PRG-02',
    title: {
      id: 'Robotics Outreach Program',
      en: 'Robotics Outreach Program',
    },
    tagline: {
      id: 'Membawa Robotika Lebih Dekat ke Generasi Muda',
      en: 'Bringing Robotics Closer to Young Generations',
    },
    description: {
      id: 'Kunjungan langsung ke sekolah-sekolah dan komunitas pendidikan untuk mendemonstrasikan cara kerja robot secara interaktif dan membuka akses pembelajaran STEM bagi pelajar.',
      en: 'Direct school visits and community sessions offering interactive robot demonstrations and opening accessible pathways into practical STEM education.',
    },
    highlights: [
      { id: 'Demonstrasi langsung Robot FTC #30647 di sekolah', en: 'Live school demonstrations of FTC Robot #30647' },
      { id: 'Pengenalan dasar mekanik, sensor & pemrograman', en: 'Introductory mechanics, sensors & programming sessions' },
      { id: 'Diskusi terbuka membangun tim robotika baru', en: 'Open sharing sessions on starting new robotics teams' },
    ],
  },
  {
    code: 'PRG-03',
    title: {
      id: 'Engineering Hands-on Workshop',
      en: 'Engineering Hands-on Workshop',
    },
    tagline: {
      id: 'Belajar Melalui Eksperimen & Perakitan Langsung',
      en: 'Learning by Building & Direct Experimentation',
    },
    description: {
      id: 'Pelatihan berkala dan sesi praktik langsung bagi pelajar maupun komunitas lokal yang ingin mempelajari fondasi desain mekanik 3D CAD, elektronika, dan pemrograman otonom.',
      en: 'Regular training and practical sessions for students and local communities covering 3D CAD mechanical design, electronics integration, and autonomous programming.',
    },
    highlights: [
      { id: 'Pemrograman dasar & kendali sistem otonom', en: 'Basic programming & autonomous control systems' },
      { id: 'Desain mekanik 3D CAD & konstruksi perangkat keras', en: '3D CAD mechanical design & hardware construction' },
      { id: 'Pemecahan masalah rekayasa secara kolaboratif', en: 'Collaborative engineering problem-solving' },
    ],
  },
  {
    code: 'PRG-04',
    title: {
      id: 'Media & Technology Education',
      en: 'Media & Technology Education',
    },
    tagline: {
      id: 'Berbagi Pengetahuan Melampaui Ruang Kelas',
      en: 'Sharing Knowledge Beyond the Classroom',
    },
    description: {
      id: 'Produksi konten edukasi digital, dokumentasi proyek, dan panduan teknis melalui platform media sosial (@nocluerobotics) agar pengetahuan robotika dapat diakses dari mana saja.',
      en: 'Producing digital educational content, project documentation, and technical guides across social platforms (@nocluerobotics) to make robotics knowledge openly accessible.',
    },
    highlights: [
      { id: 'Dokumentasi proses rekayasa & bedah komponen robot', en: 'Engineering process logs & robot subsystem breakdowns' },
      { id: 'Materi pembelajaran terbuka bagi calon tim baru', en: 'Open learning resources for aspiring robotics teams' },
      { id: 'Publikasi perjalanan kompetisi & kolaborasi mitra', en: 'Competition journey coverage & partner collaborations' },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    src: '/assets/photos/team-awards-backdrop.jpg',
    category: 'awards',
    title: {
      id: 'Skuad Lengkap NCR #30647 — Inspire Award & Winning Alliance',
      en: 'Full NCR #30647 Squad — Inspire Award & Winning Alliance',
    },
    caption: {
      id: 'Keseluruhan anggota tim No Clue Robotics #30647 bersama Robot #30647, plakat Winning Alliance, piala kejuaraan, dan penghargaan Inspire Award 2nd Winner di FTC Nusantara Championship.',
      en: 'The complete No Clue Robotics #30647 team with Robot #30647, Winning Alliance plaque, championship trophies, and the Inspire Award 2nd Winner banner at the FTC Nusantara Championship.',
    },
    tag: 'AWARDS // NUSANTARA CHAMPIONSHIP',
    aspect: 'wide',
  },
  {
    id: 'gal-2',
    src: '/assets/photos/robot-action-field.jpg',
    category: 'robot',
    title: {
      id: 'Aksi Pelontar Robot #30647 di Arena DECODE™',
      en: 'Robot #30647 Turret Launcher in DECODE™ Arena Action',
    },
    caption: {
      id: 'Tangkapan berkecepatan tinggi saat Robot #30647 melontarkan elemen permainan Artifact berwarna ungu di lapangan pertandingan resmi FIRST Tech Challenge.',
      en: 'High-speed action capture of Robot #30647 launching a purple Artifact game element on the official FIRST Tech Challenge competition field.',
    },
    tag: 'ROBOT // FIELD ACTION',
    aspect: 'standard',
  },
  {
    id: 'gal-3',
    src: '/assets/photos/robot-engineering-closeup.jpg',
    category: 'robot',
    title: {
      id: 'Presisi Perakitan & Kalibrasi di Area Pit',
      en: 'Precision Assembly & Calibration in the Pit',
    },
    caption: {
      id: 'Penyetelan mekanis pada struktur turret Robot #30647 memperlihatkan integrasi REV Control Hub, jalur kabel terlindung, dan pelat kustom tim.',
      en: 'Mechanical tuning on Robot #30647 turret assembly showing the REV Control Hub, braided cable harness, and custom team plates.',
    },
    tag: 'ENGINEERING // #30647',
    aspect: 'standard',
  },
  {
    id: 'gal-4',
    src: '/assets/photos/stage-inspire-award.jpg',
    category: 'awards',
    title: {
      id: 'Penganugerahan Inspire Award — 2nd Winner di Panggung Utama',
      en: 'Receiving the Inspire Award — 2nd Winner on Main Stage',
    },
    caption: {
      id: 'Momen kebanggaan tim NCR #30647 di panggung utama Universitas Indonesia saat dinobatkan sebagai peraih Inspire Award 2nd Winner musim 2025–2026.',
      en: 'Proud moment on the main stage at Universitas Indonesia as NCR #30647 is honored with the Inspire Award 2nd Winner for the 2025–2026 season.',
    },
    tag: 'HONOR // INSPIRE 2ND WINNER',
    aspect: 'standard',
  },
  {
    id: 'gal-5',
    src: '/assets/photos/drive-team-focus.jpg',
    category: 'competition',
    title: {
      id: 'Fokus Drive Team & Team Coach Saat Pertandingan',
      en: 'Drive Team & Team Coach Focus During Match Play',
    },
    caption: {
      id: 'Operator kemudi (Drive Team) dan Team Coach NCR #30647 mengoordinasikan pergerakan TeleOp dan siklus skor di tepi arena pertandingan.',
      en: 'NCR #30647 Drive Team operators and Team Coach coordinating TeleOp maneuvers and scoring cycles beside the competition field.',
    },
    tag: 'MATCH // DRIVE TEAM',
    aspect: 'standard',
  },
  {
    id: 'gal-6',
    src: '/assets/photos/stage-winning-alliance.jpg',
    category: 'awards',
    title: {
      id: 'Seremoni Winning Alliance — Partner #30647 & Captain #17517',
      en: 'Winning Alliance Ceremony — Partner #30647 & Captain #17517',
    },
    caption: {
      id: 'Kolaborasi juara antara Kapten Aliansi #17517 (ULT) dan First Pick Partner #30647 (N.C.R NoClueRobotics, Depok, Indonesia) di panggung kejuaraan.',
      en: 'Championship collaboration between Alliance Captain #17517 (ULT) and First Pick Partner #30647 (N.C.R NoClueRobotics, Depok, Indonesia) on stage.',
    },
    tag: 'CHAMPIONS // WINNING ALLIANCE',
    aspect: 'wide',
  },
  {
    id: 'gal-7',
    src: '/assets/photos/robot-pit-intake.jpg',
    category: 'robot',
    title: {
      id: 'Detail Mekanisme Front Omni-Roller Intake #30647',
      en: 'Close-Up of #30647 Front Omni-Roller Intake Mechanism',
    },
    caption: {
      id: 'Konfigurasi perangkat keras Robot #30647 di meja pit, memperlihatkan sistem roda omni pengambil Artifact, motor penggerak rantai, dan kamera visi.',
      en: 'Hardware configuration of Robot #30647 on the pit table showing the omni-wheel artifact intake, chain drive motors, and turret vision camera.',
    },
    tag: 'HARDWARE // INTAKE & TURRET',
    aspect: 'standard',
  },
  {
    id: 'gal-8',
    src: '/assets/photos/scoreboard-match11.jpg',
    category: 'competition',
    title: {
      id: 'Kemenangan Telak 253 – 100 di Playoff Match 11',
      en: 'Decisive 253 – 100 Victory in Playoff Match 11',
    },
    caption: {
      id: 'Papan skor resmi FTC Nusantara Championship mencatat kemenangan Aliansi 1 (#17517 & #30647) dengan 253 poin (219 Artifact, 16 Pattern, 15 Base, 0 Foul).',
      en: 'Official FTC Nusantara Championship scoreboard recording Alliance 1 (#17517 & #30647) winning with 253 points (219 Artifact, 16 Pattern, 15 Base, 0 Foul).',
    },
    tag: 'SCOREBOARD // 253 - 100',
    aspect: 'standard',
  },
  {
    id: 'gal-9',
    src: '/assets/photos/team-strategy-huddle.jpg',
    category: 'competition',
    title: {
      id: 'Briefing Strategi & Evaluasi Teknis Antar-Pertandingan',
      en: 'Pre-Match Strategy Briefing & Technical Huddle',
    },
    caption: {
      id: 'Diskusi strategi intensif seluruh anggota tim NCR #30647 sebelum memasuki antrean pertandingan babak kualifikasi dan playoff.',
      en: 'Intensive strategy huddle among NCR #30647 members prior to entering the qualification and playoff match queue.',
    },
    tag: 'TEAMWORK // STRATEGY HUDDLE',
    aspect: 'standard',
  },
  {
    id: 'gal-10',
    src: '/assets/photos/pit-banner-robot.jpg',
    category: 'community',
    title: {
      id: 'Booth Pit NCR #30647 & Filosofi "No Clue, No Limit"',
      en: 'NCR #30647 Pit Booth & "No Clue, No Limit" Philosophy',
    },
    caption: {
      id: 'Anggota tim memamerkan Robot #30647 di depan banner profil komunitas di area pit FTC Nusantara Championship.',
      en: 'Team member showcasing Robot #30647 in front of the community profile banner in the FTC Nusantara Championship pit area.',
    },
    tag: 'PIT BOOTH // IDENTITY',
    aspect: 'standard',
  },
  {
    id: 'gal-11',
    src: '/assets/photos/inspection-checklist.jpg',
    category: 'robot',
    title: {
      id: 'Lolos Verifikasi FTC Robot Inspection Checklist',
      en: 'Passed Official FTC Robot Inspection Checklist',
    },
    caption: {
      id: 'Lembar inspeksi resmi FIRST Tech Challenge DECODE™ untuk Tim #30647 yang memverifikasi kepatuhan dimensi, mekanik, dan keamanan robot.',
      en: 'Official FIRST Tech Challenge DECODE™ inspection sheet for Team #30647 verifying dimensional, mechanical, and safety compliance.',
    },
    tag: 'INSPECTION // PASSED',
    aspect: 'standard',
  },
  {
    id: 'gal-12',
    src: '/assets/photos/workshop-rev-kit.jpg',
    category: 'community',
    title: {
      id: 'Sesi Eksplorasi Kit REV Robotics di Workshop Depok',
      en: 'Exploring the REV Robotics Kit at the Depok Workshop',
    },
    caption: {
      id: 'Momen awal perakitan dan pengenalan komponen REV Control Hub bersama anggota komunitas di markas latihan Cimanggis, Depok.',
      en: 'Early hardware exploration and REV Control Hub unboxing with community members at the Cimanggis, Depok workshop.',
    },
    tag: 'WORKSHOP // DEPOK BASE',
    aspect: 'standard',
  },
];

export const PARTNERSHIP_TIERS: PartnershipTier[] = [
  {
    name: 'Bronze Partner',
    tierCode: 'TIER // 01',
    startingFrom: 'Rp 1.000.000+',
    accentClass: 'border-amber-700/40 text-amber-400',
    benefits: [
      {
        id: 'Video perkenalan mitra di dalam video profil tim NCR',
        en: 'Partner introduction segment in the official NCR team introduction video',
      },
      {
        id: 'Penempatan logo ukuran Small pada publikasi media sosial (Instagram & TikTok)',
        en: 'Small logo placement across social media publications (Instagram & TikTok)',
      },
      {
        id: 'Penempatan logo pada panel sasis Robot #30647 & banner pit tim',
        en: 'Logo placement on Robot #30647 chassis panel & team pit banner',
      },
    ],
  },
  {
    name: 'Silver Partner',
    tierCode: 'TIER // 02',
    startingFrom: 'Rp 3.000.000+',
    accentClass: 'border-slate-400/40 text-slate-200',
    benefits: [
      {
        id: 'Seluruh manfaat kemitraan Bronze Partner',
        en: 'All Bronze Partner benefits included',
      },
      {
        id: 'Konten kolaborasi khusus (dedicated post/reel) di Instagram & TikTok NCR',
        en: 'Dedicated collaborative feature content on NCR Instagram & TikTok',
      },
      {
        id: 'Ukuran logo lebih besar (Medium) pada panel Robot #30647 & banner pit',
        en: 'Larger (Medium) logo placement on Robot #30647 panel & pit banner',
      },
    ],
  },
  {
    name: 'Gold Partner',
    tierCode: 'TIER // 03',
    startingFrom: 'Rp 10.000.000+',
    accentClass: 'border-[#C4FF01]/60 text-[#C4FF01]',
    benefits: [
      {
        id: 'Seluruh manfaat kemitraan Silver Partner',
        en: 'All Silver Partner benefits included',
      },
      {
        id: 'Universal branding pada jersey/merchandise tim, livery robot & identitas tim',
        en: 'Universal branding across team merchandise, robot livery & team representation',
      },
      {
        id: 'Penempatan logo utama (Large) pada panel prioritas Robot #30647 & backdrop 300x300 cm',
        en: 'Primary (Large) logo placement on Robot #30647 priority panel & 300x300 cm backdrop',
      },
    ],
  },
];
