 
const TUTORS = [
  {
    id: "daniel-hosana",
    name: "Daniel Hosana",
    subject: "SAT",
    grade: "Grade 9",
    rate: 300,
    location: "Yeka, Wereda 9",
    schedule: "Mon · Tue · Wed",
    rating: 5.0,
    reviewCount: 1,
    initials: "DH",
    color1: "#F97316", color2: "#C2410C",
    photo: "assets/tutors/daniel-hosana.jpg",
    verified: true,
    degree: "Bachelor's Degree in Education",
    school: "Addis Ababa University",
    experience: "3+ years of tutoring experience with middle and high school students.",
    about: "Passionate and dedicated tutor with experience helping Grade 9 students excel in their studies. I focus on creating personalized lessons that build confidence and improve understanding.",
    availability: [
      { day: "Monday", slots: ["10:30 PM – 11:30 PM"] },
      { day: "Tuesday", slots: ["12:30 PM – 1:30 PM"] },
      { day: "Wednesday", slots: ["9:00 AM – 10:00 AM", "4:00 PM – 5:00 PM"] }
    ],
    reviews: [
      { name: "Selamawit T.", stars: 5, date: "Mar 21, 2025", text: "Very clear explanations and always on time. My son's grades improved within a month.", responded: true, initials: "ST", color1: "#C2410C", color2: "#7C2D12", photo: "assets/reviewers/selamawit-t.jpg" }
    ]
  },
  {
    id: "eden-asefa",
    name: "Eden Asefa",
    subject: "Language",
    grade: "Grade 9",
    rate: 250,
    location: "Yeka, Wereda 9",
    schedule: "Mon · Tue",
    rating: 5.0,
    reviewCount: 1,
    initials: "EA",
    color1: "#FB923C", color2: "#9A3412",
    photo: "assets/tutors/eden-asefa.jpg",
    verified: true,
    degree: "BA in English Language & Literature",
    school: "Addis Ababa University",
    experience: "4+ years teaching English as a second language to teens and adults.",
    about: "I help students build real confidence in reading, writing and speaking — with lessons shaped around what they actually want to talk about.",
    availability: [
      { day: "Monday", slots: ["3:00 PM – 4:00 PM"] },
      { day: "Tuesday", slots: ["3:00 PM – 4:00 PM"] }
    ],
    reviews: [
      { name: "Nathnael G.", stars: 5, date: "Feb 4, 2025", text: "Eden made grammar finally make sense to me. Patient and encouraging.", responded: false, initials: "NG", color1: "#9A3412", color2: "#5C2E0C", photo: "assets/reviewers/nathnael-g.jpg" }
    ]
  },
  {
    id: "abel-birhanu",
    name: "Abel Birhanu",
    subject: "IT & Communication",
    grade: "Grade 11",
    rate: 350,
    location: "Bole, Wereda 3",
    schedule: "Wed · Thu",
    rating: 4.9,
    reviewCount: 8,
    initials: "AB",
    color1: "#EA580C", color2: "#7C2D12",
    photo: "assets/tutors/abel-birhanu.jpg",
    verified: true,
    degree: "BSc in Computer Science",
    school: "Addis Ababa Science & Technology University",
    experience: "5+ years teaching programming fundamentals and digital literacy.",
    about: "I turn coding from intimidating to fun — starting from the basics of logic and building up to real projects students are proud of.",
    availability: [
      { day: "Wednesday", slots: ["5:00 PM – 6:30 PM"] },
      { day: "Thursday", slots: ["5:00 PM – 6:30 PM"] }
    ],
    reviews: [
      { name: "Mikiyas A.", stars: 5, date: "Jan 18, 2025", text: "Abel explains programming concepts in a way that actually sticks.", responded: true, initials: "MA", color1: "#7C2D12", color2: "#431407", photo: "assets/reviewers/mikiyas-a.jpg" },
      { name: "Hana W.", stars: 5, date: "Dec 2, 2024", text: "Super reliable and knows the subject deeply.", responded: false, initials: "HW", color1: "#EA580C", color2: "#9A3412", photo: "assets/reviewers/hana-w.jpg" }
    ]
  },
  {
    id: "desta-alemu",
    name: "Desta Alemu",
    subject: "Exam preparation",
    grade: "Grade 12",
    rate: 400,
    location: "Kirkos, Wereda 2",
    schedule: "Sat · Sun",
    rating: 4.9,
    reviewCount: 14,
    initials: "DA",
    color1: "#F97316", color2: "#B45309",
    photo: "assets/tutors/desta-alemu.jpg",
    verified: true,
    degree: "MA in Education",
    school: "Bahir Dar University",
    experience: "6+ years preparing students for national exams.",
    about: "I build a personalised study plan around each student's weak points and track progress week over week toward exam day.",
    availability: [
      { day: "Saturday", slots: ["9:00 AM – 11:00 AM"] },
      { day: "Sunday", slots: ["9:00 AM – 11:00 AM"] }
    ],
    reviews: [
      { name: "Kidist A.", stars: 5, date: "Nov 30, 2024", text: "Desta helped me raise my mock exam score by a huge margin.", responded: true, initials: "KA", color1: "#B45309", color2: "#78350F", photo: "assets/reviewers/kidist-a.jpg" }
    ]
  },
  {
    id: "abebe-kebede",
    name: "Abebe Kebede",
    subject: "Language",
    grade: "Grade 10",
    rate: 280,
    location: "Yeka, Wereda 5",
    schedule: "Tue · Thu",
    rating: 4.9,
    reviewCount: 6,
    initials: "AK",
    color1: "#FDBA74", color2: "#C2410C",
    photo: "assets/tutors/abebe-kebede.jpg",
    verified: true,
    degree: "BA in Linguistics",
    school: "Addis Ababa University",
    experience: "5+ years teaching Amharic and English language skills.",
    about: "Lessons built around real conversation practice, not just memorisation — so students actually retain what they learn.",
    availability: [
      { day: "Tuesday", slots: ["4:00 PM – 5:00 PM"] },
      { day: "Thursday", slots: ["4:00 PM – 5:00 PM"] }
    ],
    reviews: [
      { name: "Rediet M.", stars: 5, date: "Oct 14, 2024", text: "Great with beginners, very patient.", responded: false, initials: "RM", color1: "#C2410C", color2: "#7C2D12", photo: "assets/reviewers/rediet-m.jpg" }
    ]
  },
  {
    id: "selam-yenenesh",
    name: "Selam Yenenesh",
    subject: "Personal Development",
    grade: "Grade 8",
    rate: 260,
    location: "Bole, Wereda 6",
    schedule: "Mon · Wed · Fri",
    rating: 4.9,
    reviewCount: 9,
    initials: "SY",
    color1: "#FB923C", color2: "#EA580C",
    photo: "assets/tutors/selam-yenenesh.jpg",
    verified: true,
    degree: "BA in Psychology",
    school: "Addis Ababa University",
    experience: "4+ years coaching students on confidence, study habits and leadership.",
    about: "I work with students on the skills that sit underneath every subject — focus, confidence and how to actually study.",
    availability: [
      { day: "Monday", slots: ["2:00 PM – 3:00 PM"] },
      { day: "Wednesday", slots: ["2:00 PM – 3:00 PM"] },
      { day: "Friday", slots: ["2:00 PM – 3:00 PM"] }
    ],
    reviews: [
      { name: "Yohannes B.", stars: 5, date: "Sep 9, 2024", text: "My daughter looks forward to every session with Selam.", responded: true, initials: "YB", color1: "#EA580C", color2: "#9A3412", photo: "assets/reviewers/yohannes-b.jpg" }
    ]
  }
];

/* Student testimonials shown on the home page.
   Same photo rule as above — set "photo" to an image path, or leave "" for initials. */
const TESTIMONIALS = [
  {
    name: "Daniel Hayle",
    grade: "Grade 12",
    stars: 5,
    text: "MyTutor helped me improve my math skills a lot. The tutors are amazing and always patient with my questions.",
    initials: "DH",
    color1: "#F97316", color2: "#C2410C",
    photo: "assets/testimonials/daniel-hayle.jpg"
  },
  {
    name: "Kidist Abera",
    grade: "Grade 12",
    stars: 5,
    text: "Booking a session took two minutes and my tutor showed up right on time. Exactly what I needed before finals.",
    initials: "KA",
    color1: "#FB923C", color2: "#9A3412",
    photo: "assets/testimonials/kidist-abera.jpg"
  },
  {
    name: "Rahel Girma",
    grade: "Grade 12",
    stars: 5,
    text: "My English speaking confidence has grown so much in just a few weeks of lessons. Highly recommend MyTutor.",
    initials: "RG",
    color1: "#FDBA74", color2: "#EA580C",
    photo: "assets/testimonials/rahel-girma.jpg"
  },
  {
    name: "Kirubel Reta",
    grade: "Grade 11",
    stars: 5,
    text: "The tutor list made it easy to compare and pick someone who fit my schedule and budget perfectly.",
    initials: "KR",
    color1: "#F97316", color2: "#7C2D12",
    photo: "assets/testimonials/kirubel-reta.jpg"
  }
];

function getTutorById(id){
  return TUTORS.find(t => t.id === id);
}
