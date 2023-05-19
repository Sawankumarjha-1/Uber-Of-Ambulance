// import Doctor1 from "./src/assets/doctor1.png";

const healthDoctors = [
  {
    id: "alifecare_doctor_1",
    full_name: "Dr. Virgil Westaby",
    doctor_category: "Dentist",
    phone_no: "+91-1234567890",
    growing: "Growing in Yatharth Hospital",
    appointment_fee: "1000 /-",
    address: "Noida, near Bhangale",
    education: "MBBS from All India Institute of Medical Sciences, Delhi",
    brief_intro:
      "Hi, my name is Virgil Westaby. I am a dentist with over 10 years of experience.",
    overall_experience: "+10 years",
    image: "doctor_1.jpg",
    degree: "MBBS",
  },
  {
    id: "alifecare_doctor_2",
    full_name: "Dr. Jane Smith",
    doctor_category: "Pediatrician",
    phone_no: "+91-9876543210",
    growing: "Growing in Max Hospital",
    appointment_fee: "1500 /-",
    address: "Gurgaon, Haryana",
    education: "MD in Pediatrics from Maulana Azad Medical College, Delhi",
    brief_intro:
      "Hi, my name is Jane Smith. I am a pediatrician with over 15 years of experience.",
    overall_experience: "+15 years",
    image: "doctor_2.jpg",
    degree: "MD",
  },
  {
    id: "alifecare_doctor_3",
    full_name: "Dr. John Doe",
    doctor_category: "Cardiologist",
    phone_no: "+91-9999999999",
    growing: "Growing in Medanta Hospital",
    appointment_fee: "2000 /-",
    address: "Delhi, India",
    education: "DM in Cardiology from AIIMS, Delhi",
    brief_intro:
      "Hi, my name is John Doe. I am a cardiologist with over 20 years of experience.",
    overall_experience: "+20 years",
    image: "doctor_3.jpg",
    degree: "DM",
  },
  {
    id: "alifecare_doctor_4",
    full_name: "Dr. Maria Garcia",
    doctor_category: "Gynecologist",
    phone_no: "+91-8888888888",
    growing: "Growing in Fortis Hospital",
    appointment_fee: "1800 /-",
    address: "Mumbai, Maharashtra",
    education: "MS in Obstetrics and Gynecology from KEM Hospital, Mumbai",
    brief_intro:
      "Hi, my name is Maria Garcia. I am a gynecologist with over 12 years of experience.",
    overall_experience: "+12 years",
    image: "doctor_4.jpg",
    degree: "MS",
  },
  {
    id: "alifecare_doctor_5",
    full_name: "Dr. David Lee",
    doctor_category: "Orthopedic Surgeon",
    phone_no: "+91-7777777777",
    growing: "Growing in Apollo Hospital",
    appointment_fee: "2500 /-",
    address: "Chennai, Tamil Nadu",
    education: "MCh in Orthopedics from CMC Vellore",
    brief_intro:
      "Hi, my name is David Lee. I am an orthopedic surgeon with over 18 years of experience.",
    overall_experience: "+18 years",
    image: "doctor_5.jpg",
    degree: "MCh",
  },

  {
    id: "alifecare_doctor_6",
    full_name: "Dr. Sarah Johnson",
    doctor_category: "Psychiatrist",
    phone_no: "+91-9998887776",
    growing: "Growing in AIIMS Hospital",
    appointment_fee: "1200 /-",
    address: "Delhi, India",
    education: "MD in Psychiatry from NIMHANS, Bangalore",
    brief_intro:
      "Hi, my name is Sarah Johnson. I am a psychiatrist with over 8 years of experience.",
    overall_experience: "+8 years",
    image: "doctor_6.jpg",
    degree: "MD",
  },
  {
    id: "alifecare_doctor_7",
    full_name: "Dr. Mohammed Ahmed",
    doctor_category: "Neurologist",
    phone_no: "+91-9876543210",
    growing: "Growing in Apollo Hospital",
    appointment_fee: "2000 /-",
    address: "Hyderabad, Telangana",
    education: "DM in Neurology from NIMHANS, Bangalore",
    brief_intro:
      "Hi, my name is Mohammed Ahmed. I am a neurologist with over 10 years of experience.",
    overall_experience: "+10 years",
    image: "doctor_7.jpg",
    degree: "DM",
  },
  {
    id: "alifecare_doctor_8",
    full_name: "Dr. Shreya Gupta",
    doctor_category: "Dermatologist",
    phone_no: "+91-9999999999",
    growing: "Growing in Fortis Hospital",
    appointment_fee: "1500 /-",
    address: "Noida, Uttar Pradesh",
    education: "MD in Dermatology from AIIMS, Delhi",
    brief_intro:
      "Hi, my name is Shreya Gupta. I am a dermatologist with over 6 years of experience.",
    overall_experience: "+6 years",
    image: "doctor_8.jpg",
    degree: "MD",
  },
  {
    id: "alifecare_doctor_9",
    full_name: "Dr. Michael Brown",
    doctor_category: "Ophthalmologist",
    phone_no: "+91-8888888888",
    growing: "Growing in Aravind Eye Hospital",
    appointment_fee: "1800 /-",
    address: "Coimbatore, Tamil Nadu",
    education: "MS in Ophthalmology from AIIMS, Delhi",
    brief_intro:
      "Hi, my name is Michael Brown. I am an ophthalmologist with over 12 years of experience.",
    overall_experience: "+12 years",
    image: "doctor_9.jpg",
    degree: "MS",
  },
  {
    id: "alifecare_doctor_10",
    full_name: "Dr. Emily Wilson",
    doctor_category: "ENT Specialist",
    phone_no: "+91-7777777777",
    growing: "Growing in Manipal Hospital",
    appointment_fee: "2000 /-",
    address: "Bangalore, Karnataka",
    education: "MS in Otorhinolaryngology from AIIMS, Delhi",
    brief_intro:
      "Hi, my name is Emily Wilson. I am an ENT specialist with over 15 years of experience.",
    overall_experience: "+15 years",
    image: "doctor_10.jpg",
    degree: "MS",
  },

  {
    id: "alifecare_doctor_11",
    full_name: "Dr. Maria Rodriguez",
    doctor_category: "Gynecologist",
    phone_no: "+91-7777777778",
    growing: "Growing in Fortis Hospital",
    appointment_fee: "1800 /-",
    address: "Mumbai, Maharashtra",
    education: "MS in Obstetrics and Gynecology from KEM Hospital, Mumbai",
    brief_intro:
      "Hi, my name is Maria Rodriguez. I am a gynecologist with over 9 years of experience.",
    overall_experience: "+9 years",
    image: "doctor_11.jpg",
    degree: "MS",
  },
  {
    id: "alifecare_doctor_12",
    full_name: "Dr. David Lee",
    doctor_category: "Cardiologist",
    phone_no: "+91-8888888889",
    growing: "Growing in Max Super Speciality Hospital",
    appointment_fee: "2500 /-",
    address: "New Delhi, India",
    education: "DM in Cardiology from AIIMS, Delhi",
    brief_intro:
      "Hi, my name is David Lee. I am a cardiologist with over 14 years of experience.",
    overall_experience: "+14 years",
    image: "doctor_12.jpg",
    degree: "DM",
  },
  {
    id: "alifecare_doctor_13",
    full_name: "Dr. Sarah Gupta",
    doctor_category: "Endocrinologist",
    phone_no: "+91-9999999998",
    growing: "Growing in Apollo Hospital",
    appointment_fee: "2200 /-",
    address: "Chennai, Tamil Nadu",
    education: "DM in Endocrinology from AIIMS, Delhi",
    brief_intro:
      "Hi, my name is Sarah Gupta. I am an endocrinologist with over 7 years of experience.",
    overall_experience: "+7 years",
    image: "doctor_13.jpg",
    degree: "DM",
  },
  {
    id: "alifecare_doctor_14",
    full_name: "Dr. Rajesh Sharma",
    doctor_category: "Urologist",
    phone_no: "+91-7777777779",
    growing: "Growing in Medanta Hospital",
    appointment_fee: "2000 /-",
    address: "Gurgaon, Haryana",
    education: "MS in Urology from PGIMER, Chandigarh",
    brief_intro:
      "Hi, my name is Rajesh Sharma. I am a urologist with over 12 years of experience.",
    overall_experience: "+12 years",
    image: "doctor_14.jpg",
    degree: "MS",
  },
  {
    id: "alifecare_doctor_15",
    full_name: "Dr. Anjali Singh",
    doctor_category: "Pediatrician",
    phone_no: "+91-8888888890",
    growing: "Growing in AIIMS Hospital",
    appointment_fee: "1500 /-",
    address: "Delhi, India",
    education: "MD in Pediatrics from AIIMS, Delhi",
    brief_intro:
      "Hi, my name is Anjali Singh. I am a pediatrician with over 8 years of experience.",
    overall_experience: "+8 years",
    image: "doctor_15.jpg",
    degree: "MD",
  },
];
export default healthDoctors;