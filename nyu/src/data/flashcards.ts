export interface Flashcard {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  category: string;
  examSet: string;
}

export const flashcards: Flashcard[] = [
  // 60th MID Exam
  {
    id: 1,
    question: "The upper 3/4 of the vagina develops from:",
    options: [
      "Urogenital sinus",
      "Cloacal membrane", 
      "Wolffian ducts",
      "Mesonephric tubules",
      "Mullerian ducts"
    ],
    correctAnswer: "E",
    category: "Embryology",
    examSet: "60th MID Exam"
  },
  {
    id: 2,
    question: "Which hormone is responsible for the proliferative phase of the endometrium?",
    options: [
      "Progesterone",
      "Estrogen",
      "FSH", 
      "LH",
      "Inhibin"
    ],
    correctAnswer: "B",
    category: "Endocrinology",
    examSet: "60th MID Exam"
  },
  {
    id: 3,
    question: "Persistent FSH levels >40 IU/L are diagnostic for:",
    options: [
      "PCOS",
      "Menopause",
      "Hyperprolactinemia",
      "Hypothyroidism", 
      "Pregnancy"
    ],
    correctAnswer: "B",
    category: "Endocrinology",
    examSet: "60th MID Exam"
  },
  {
    id: 4,
    question: "The first-line treatment for menopausal vasomotor symptoms is:",
    options: [
      "SSRIs",
      "Bisphosphonates",
      "Estrogen therapy",
      "Gabapentin",
      "Clonidine"
    ],
    correctAnswer: "C",
    category: "Menopause",
    examSet: "60th MID Exam"
  },
  {
    id: 5,
    question: "Elevated FSH and LH levels indicate:",
    options: [
      "Hypothalamic dysfunction",
      "Ovarian failure",
      "Pituitary tumor",
      "PCOS",
      "Hyperprolactinemia"
    ],
    correctAnswer: "B",
    category: "Endocrinology",
    examSet: "60th MID Exam"
  },
  {
    id: 6,
    question: "The first-line medical treatment for acute abnormal uterine bleeding (AUB) is:",
    options: [
      "Tranexamic acid",
      "Hysterectomy",
      "Antibiotics",
      "NSAIDs"
    ],
    correctAnswer: "A",
    category: "Abnormal Uterine Bleeding",
    examSet: "60th MID Exam"
  },
  {
    id: 7,
    question: "A fishy odor after adding KOH to vaginal discharge indicates:",
    options: [
      "Candidiasis",
      "Trichomoniasis",
      "Bacterial vaginosis",
      "Gonorrhea",
      "Atrophic vaginitis"
    ],
    correctAnswer: "C",
    category: "Infections",
    examSet: "60th MID Exam"
  },
  {
    id: 8,
    question: "The most common cause of pelvic inflammatory disease (PID) is:",
    options: [
      "Chlamydia trachomatis",
      "Neisseria gonorrhoeae",
      "E. coli",
      "Mycoplasma",
      "Trichomonas vaginalis"
    ],
    correctAnswer: "B",
    category: "Infections",
    examSet: "60th MID Exam"
  },
  {
    id: 9,
    question: "The first-line medical treatment for endometriosis is:",
    options: [
      "NSAIDs",
      "Combined oral contraceptives",
      "Danazol",
      "GnRH agonists",
      "Progestins"
    ],
    correctAnswer: "B",
    category: "Endometriosis",
    examSet: "60th MID Exam"
  },
  {
    id: 10,
    question: "A 29-year-old female comes to the gynecological clinic complaining of thick, curdy-like white vaginal discharge. This discharge is typical of:",
    options: [
      "Candidiasis",
      "Trichomoniasis",
      "Bacterial vaginosis",
      "Gonorrhea",
      "Cervicitis"
    ],
    correctAnswer: "A",
    category: "Infections",
    examSet: "60th MID Exam"
  },
  {
    id: 11,
    question: "Dyspareunia is most strongly associated with:",
    options: [
      "Vaginismus",
      "Endometriosis",
      "Cervicitis",
      "Ovarian cysts",
      "Uterine fibroids"
    ],
    correctAnswer: "B",
    category: "Endometriosis",
    examSet: "60th MID Exam"
  },
  {
    id: 12,
    question: "The lymphatic drainage of the vulva is primarily to the:",
    options: [
      "Inguinal nodes",
      "Pelvic nodes",
      "Para-aortic nodes",
      "Sacral nodes",
      "Obturator nodes"
    ],
    correctAnswer: "A",
    category: "Anatomy",
    examSet: "60th MID Exam"
  },
  {
    id: 13,
    question: "The vaginal pH maintained by Doderlein's bacilli is approximately:",
    options: [
      "3.5–4.5",
      "5.0–6.0",
      "6.5–7.0",
      "7.5–8.0",
      "8.5–9.0"
    ],
    correctAnswer: "A",
    category: "Physiology",
    examSet: "60th MID Exam"
  },
  {
    id: 14,
    question: "The endometrium's basal layer is responsible for:",
    options: [
      "Menstrual shedding",
      "Regeneration after menstruation",
      "Implantation",
      "Secretory changes",
      "Decidualization"
    ],
    correctAnswer: "B",
    category: "Physiology",
    examSet: "60th MID Exam"
  },
  {
    id: 15,
    question: "Which congenital anomaly results from incomplete fusion of the Mullerian ducts?",
    options: [
      "Unicornuate uterus",
      "Uterus didelphys",
      "Imperforate hymen",
      "Vaginal atresia",
      "Turner syndrome"
    ],
    correctAnswer: "B",
    category: "Embryology",
    examSet: "60th MID Exam"
  },
  {
    id: 16,
    question: "Menarche typically occurs during Tanner stage:",
    options: [
      "I",
      "II", 
      "III",
      "IV",
      "V"
    ],
    correctAnswer: "D",
    category: "Puberty",
    examSet: "60th MID Exam"
  },
  {
    id: 17,
    question: "The average duration of the luteal phase is:",
    options: [
      "7 days",
      "14 days",
      "21 days",
      "28 days",
      "35 days"
    ],
    correctAnswer: "B",
    category: "Physiology",
    examSet: "60th MID Exam"
  },
  {
    id: 18,
    question: "The first sign of puberty in females is usually:",
    options: [
      "Thelarche",
      "Menarche",
      "Pubarche",
      "Growth spurt",
      "Adrenarche"
    ],
    correctAnswer: "A",
    category: "Puberty",
    examSet: "60th MID Exam"
  },
  {
    id: 19,
    question: "The mean age of natural menopause is:",
    options: [
      "45 years",
      "51 years",
      "55 years",
      "60 years",
      "65 years"
    ],
    correctAnswer: "B",
    category: "Menopause",
    examSet: "60th MID Exam"
  },
  {
    id: 20,
    question: "The best treatment for menopausal symptoms in a woman with a uterus is:",
    options: [
      "Estrogen-only therapy",
      "Progesterone-only therapy",
      "Combined estrogen-progesterone",
      "Tibolone",
      "Phytoestrogens"
    ],
    correctAnswer: "C",
    category: "Menopause",
    examSet: "60th MID Exam"
  },
  {
    id: 21,
    question: "The primary source of estrogen in postmenopausal women is:",
    options: [
      "Ovaries",
      "Adrenal glands",
      "Liver",
      "Fat tissue",
      "Peripheral conversion of androgens"
    ],
    correctAnswer: "E",
    category: "Menopause",
    examSet: "60th MID Exam"
  },
  {
    id: 22,
    question: "Primary amenorrhea is diagnosed if no menses occur by age:",
    options: [
      "12",
      "13",
      "15",
      "16",
      "18"
    ],
    correctAnswer: "B",
    category: "Amenorrhea",
    examSet: "60th MID Exam"
  },
  {
    id: 23,
    question: "A progesterone withdrawal test causing bleeding indicates:",
    options: [
      "Ovarian failure",
      "Uterine outflow obstruction",
      "Anovulation",
      "Estrogenized endometrium",
      "Hypothalamic dysfunction"
    ],
    correctAnswer: "C,D",
    category: "Amenorrhea",
    examSet: "60th MID Exam"
  },
  {
    id: 24,
    question: "Testicular feminization syndrome results from:",
    options: [
      "46,XX karyotype",
      "Androgen insensitivity",
      "Estrogen deficiency",
      "Mullerian agenesis",
      "Turner syndrome"
    ],
    correctAnswer: "B",
    category: "Intersex",
    examSet: "60th MID Exam"
  },
  {
    id: 25,
    question: "AUB-O refers to:",
    options: [
      "Ovulatory dysfunction",
      "Ovarian tumor",
      "Outflow obstruction",
      "Obesity-related bleeding",
      "Osteoporosis"
    ],
    correctAnswer: "A",
    category: "Abnormal Uterine Bleeding",
    examSet: "60th MID Exam"
  },
  {
    id: 26,
    question: "A 45-year-old woman with irregular bleeding and thickened endometrium on ultrasound should undergo:",
    options: [
      "Endometrial biopsy",
      "Hysterectomy",
      "Hormonal therapy",
      "Observation",
      "MRI"
    ],
    correctAnswer: "A",
    category: "Abnormal Uterine Bleeding",
    examSet: "60th MID Exam"
  },
  {
    id: 27,
    question: "The most common cause of postmenopausal bleeding is:",
    options: [
      "Endometrial cancer",
      "Atrophic endometritis",
      "Endometrial hyperplasia",
      "Cervical polyp",
      "Hormone therapy"
    ],
    correctAnswer: "B",
    category: "Menopause",
    examSet: "60th MID Exam"
  },
  {
    id: 28,
    question: "The gold standard for diagnosing endometriosis is:",
    options: [
      "Ultrasound",
      "MRI",
      "Laparoscopy",
      "CA-125",
      "Biopsy"
    ],
    correctAnswer: "C",
    category: "Endometriosis",
    examSet: "60th MID Exam"
  },
  {
    id: 29,
    question: "Adenomyosis is best diagnosed by:",
    options: [
      "Transvaginal ultrasound",
      "MRI",
      "Hysteroscopy",
      "Endometrial biopsy",
      "Laparoscopy"
    ],
    correctAnswer: "B",
    category: "Adenomyosis",
    examSet: "60th MID Exam"
  },
  {
    id: 30,
    question: "The definitive treatment for adenomyosis is:",
    options: [
      "Hysterectomy",
      "Hormonal intrauterine device",
      "GnRH agonists",
      "Endometrial ablation",
      "Myomectomy"
    ],
    correctAnswer: "A",
    category: "Adenomyosis",
    examSet: "60th MID Exam"
  },
  {
    id: 31,
    question: "A 35-year-old woman suffering from breast tenderness, bloating, pelvic pain, nervousness, and depression one week before her period. This condition is known as:",
    options: [
      "Spasmodic dysmenorrhea",
      "Congestive dysmenorrhea",
      "Postmenopausal syndrome",
      "Premenopausal syndrome",
      "Premenstrual syndrome"
    ],
    correctAnswer: "E",
    category: "PMS",
    examSet: "60th MID Exam"
  },
  {
    id: 32,
    question: "The most common type of degeneration in uterine fibroid during pregnancy is:",
    options: [
      "Hyaline",
      "Fatty",
      "Red",
      "Cystic",
      "Sarcomatous changes"
    ],
    correctAnswer: "C",
    category: "Fibroids",
    examSet: "60th MID Exam"
  },
  {
    id: 33,
    question: "Which FIGO classification type describes a fibroid completely within the uterine cavity:",
    options: [
      "0",
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: "A",
    category: "Fibroids",
    examSet: "60th MID Exam"
  },
  {
    id: 34,
    question: "Hormone replacement therapy is contraindicated in which of the following:",
    options: [
      "Controlled hypertension",
      "Oophorectomy",
      "Hysterectomy",
      "Thromboembolism",
      "Cervical cancer"
    ],
    correctAnswer: "D",
    category: "Menopause",
    examSet: "60th MID Exam"
  },
  {
    id: 35,
    question: "Which hormone is primarily responsible for initiation of the thelarche:",
    options: [
      "Thyroxine",
      "Progesterone",
      "Testosterone",
      "Inhibin",
      "Estrogen"
    ],
    correctAnswer: "E",
    category: "Puberty",
    examSet: "60th MID Exam"
  },
  {
    id: 36,
    question: "Risk factors for developing uterine fibroids include:",
    options: [
      "Regular exercise",
      "High-fiber diet",
      "Family history of fibroids",
      "Non-smoker",
      "Multiparity"
    ],
    correctAnswer: "C",
    category: "Fibroids",
    examSet: "60th MID Exam"
  },
  {
    id: 37,
    question: "'Strawberry cervix' is pathognomonic for:",
    options: [
      "Candidiasis",
      "Trichomoniasis",
      "Bacterial vaginosis",
      "Gonorrhea",
      "Chlamydia"
    ],
    correctAnswer: "B",
    category: "Infections",
    examSet: "60th MID Exam"
  },
  {
    id: 38,
    question: "Submucous fibroid is usually associated with what type of menstrual abnormality:",
    options: [
      "Oligomenorrhea",
      "Amenorrhea",
      "Postcoital bleeding",
      "Metrorrhagia",
      "Heavy menstrual flow"
    ],
    correctAnswer: "E",
    category: "Fibroids",
    examSet: "60th MID Exam"
  },
  {
    id: 39,
    question: "What is the first step to do for a 52-year-old postmenopausal woman presenting with vaginal bleeding:",
    options: [
      "Assurance and follow-up",
      "Start gestagen therapy",
      "Transvaginal sonography",
      "Give nonspecific haemostatics",
      "Hysteroscopic ablation"
    ],
    correctAnswer: "C,D",
    category: "Menopause",
    examSet: "60th MID Exam"
  },
  {
    id: 40,
    question: "Which of the following is considered a sure criterion of pelvic inflammatory disease (PID):",
    options: [
      "Abnormal vaginal discharge",
      "Adnexal tenderness",
      "Endometritis by histopathology",
      "Tender cervical motion",
      "Elevated ESR and fever"
    ],
    correctAnswer: "C",
    category: "Infections",
    examSet: "60th MID Exam"
  },
  // 59th Mid Exam
  {
    id: 41,
    question: "In a 25-year-old woman, serum FSH is elevated more than 25 IU/L in which case:",
    options: [
      "Polycystic ovarian syndrome",
      "Mullerian agenesis",
      "Ovarian agenesis",
      "Medications like anti-estrogen and H2 blockers",
      "Asherman syndrome"
    ],
    correctAnswer: "C",
    category: "Endocrinology",
    examSet: "59th Mid Exam"
  },
  {
    id: 42,
    question: "Control of blood loss during menstruation does not appropriately involve which of the following mechanisms?",
    options: [
      "Thrombus formation",
      "Decrease local endometrial production of PGI2",
      "Vasoconstriction of spiral arteries",
      "Myometrial contractions",
      "Regeneration of endometrium"
    ],
    correctAnswer: "D",
    category: "Physiology",
    examSet: "59th Mid Exam"
  },
  {
    id: 43,
    question: "Which of the following descriptions would you most likely do not find in a normal patient during pelvic examination or laparotomy?",
    options: [
      "Dextro rotation of the uterus",
      "Ovaries cranial to the cervix",
      "Round ligaments attached to the uterus anterior to the insertion of the fallopian tubes",
      "Corpus is mobile in many directions",
      "Cervix could be palpable on rectal examination"
    ],
    correctAnswer: "A",
    category: "Anatomy",
    examSet: "59th Mid Exam"
  },
  {
    id: 44,
    question: "Which of the following statements accurately describes the effect of estrogen?",
    options: [
      "It decreases the water content of cervical mucus",
      "It decreases the palmleaf crystallization pattern of mucus upon drying (ferning)",
      "It decreases formation of glycoprotein channels, which favor sperm penetration",
      "It decreases cervical mucus stretchability (spinnbarkeit)",
      "It increases the amount of sodium chloride in the cervical mucus"
    ],
    correctAnswer: "E",
    category: "Endocrinology",
    examSet: "59th Mid Exam"
  },
  {
    id: 45,
    question: "Which of the following is true with most of the Mullerian duct anomalies?",
    options: [
      "Associated with disordered function of the gonads",
      "Usually diagnosed after onset of puberty",
      "Often recognized in prepubertal period",
      "Associated with age-inappropriate external genitalia",
      "Mostly associated with lower gastrointestinal tract anomalies"
    ],
    correctAnswer: "B",
    category: "Embryology",
    examSet: "59th Mid Exam"
  },
  {
    id: 46,
    question: "The most accurate diagnosis of endometriosis is by:",
    options: [
      "History and clinical examinations",
      "Pelvic Ultrasound examination",
      "Laparoscopy",
      "Laparoscopic-guided biopsy",
      "Magnetic resonance imaging"
    ],
    correctAnswer: "D",
    category: "Endometriosis",
    examSet: "59th Mid Exam"
  },
  {
    id: 47,
    question: "Woman suffering multiple painful vesicles in vulva that later rupture with no noted inguinal lymphadenopathy, most likely diagnosed:",
    options: [
      "Herpes simplex",
      "HPV infection",
      "Syphilis",
      "Chancroid",
      "Lymphogranuloma venereum"
    ],
    correctAnswer: "A",
    category: "Infections",
    examSet: "59th Mid Exam"
  },
  {
    id: 48,
    question: "A 46-year-old, non-pregnant, morbidly obese woman presents with irregular menstrual cycles for several months. Which of the following represents the most appropriate initial management?",
    options: [
      "Assessment of sex steroid hormones",
      "Endometrial sampling",
      "Office hysteroscopy",
      "Dilation and curettage",
      "Endometrial ablation"
    ],
    correctAnswer: "B",
    category: "Abnormal Uterine Bleeding",
    examSet: "59th Mid Exam"
  },
  {
    id: 49,
    question: "Urinary incontinence is a major problem for some women. Which of the following characteristics of the female urethra helps prevent incontinence?",
    options: [
      "Its 3- to 4-cm length",
      "Its junction with the bladder at the level of the midtrigone",
      "Its true anatomic sphincter",
      "Its intrinsic resting tone",
      "Its upper two-thirds integration with the anterior vaginal wall"
    ],
    correctAnswer: "D",
    category: "Urology",
    examSet: "59th Mid Exam"
  },
  {
    id: 50,
    question: "Premenstrual syndrome has a cluster of possible symptoms. Which of the following would not be most expected?",
    options: [
      "Non cyclic mastalgia",
      "Constipation",
      "Abdominal bloating",
      "Temporary weight gain",
      "Anxiety"
    ],
    correctAnswer: "A",
    category: "PMS",
    examSet: "59th Mid Exam"
  },
  {
    id: 51,
    question: "A 7-year-old girl and her mother seek medical advice because the girl has developed breasts and has started to grow pubic hair. Which of the following is the best line of treatment for her condition?",
    options: [
      "Exogenous gonadotropins for one year",
      "GnRH agonists till usual age of puberty",
      "GnRH agonists for 36 months",
      "Low dose combined oral contraceptive for 2 years",
      "No treatment -> reassure the mother that pubertal symptoms at age 7 are normal"
    ],
    correctAnswer: "B",
    category: "Puberty",
    examSet: "59th Mid Exam"
  },
  {
    id: 52,
    question: "Which of the following characteristics of the normal ovary is correct?",
    options: [
      "They are normally unchanged in size throughout a woman's lifetime",
      "They are suspended only by the ovarian ligaments",
      "They are endocrine glands and store germ cells",
      "They lie in the true pelvis",
      "They are completely mesodermal in origin and mobile"
    ],
    correctAnswer: "D",
    category: "Anatomy",
    examSet: "59th Mid Exam"
  },
  {
    id: 53,
    question: "To decrease the risk of uterine perforation during dilatation and curettage, which of the following is the first surgical step?",
    options: [
      "Uterine sounding",
      "Uterine dilation",
      "Bimanual examination",
      "Transvaginal sonography",
      "Traction applied on posterior lip of the cervix in a retroverted uterus"
    ],
    correctAnswer: "C",
    category: "Surgery",
    examSet: "59th Mid Exam"
  },
  {
    id: 54,
    question: "Commonly the vagina is maldeveloped in which of the following?",
    options: [
      "Congenital adrenal hyperplasia in a female infant",
      "Association with an absent or rudimentary uterus",
      "Classic Turner's syndrome",
      "Medication induced fetal masculinization of a female infant",
      "Gonadal agenesis"
    ],
    correctAnswer: "B",
    category: "Embryology",
    examSet: "59th Mid Exam"
  },
  {
    id: 55,
    question: "Regarding the menstrual cycle, which is the true statement?",
    options: [
      "Menstruation occurs with vasodilation of the spiral arteries",
      "The LH surge triggers menstruation",
      "The Graafian follicle develops during the follicular phase",
      "Both the follicle and the corpus luteum secrete oestradiol",
      "Progesterone levels fall before the onset of menstruation"
    ],
    correctAnswer: "E",
    category: "Physiology",
    examSet: "59th Mid Exam"
  },
  {
    id: 56,
    question: "A 28-year-old patient, regularly menstruating, complains of amenorrhea after dilation and curettage. Which of the following is the most likely diagnosis?",
    options: [
      "Asherman syndrome",
      "Sheehan syndrome",
      "Cervical stenosis",
      "Traumatic vaginal atresia",
      "Gonadal failure"
    ],
    correctAnswer: "A",
    category: "Amenorrhea",
    examSet: "59th Mid Exam"
  },
  {
    id: 57,
    question: "What are the classic risk factors for primary dysmenorrhea?",
    options: [
      "Age more than 30, BMI more than 30 & smoker",
      "Age more than 25, BMI more than 25 & non smoker",
      "Age more than 30, BMI less than 30 & non smoker",
      "Age less than 30, BMI less than 30 & non smoker",
      "Age <30 years, BMI < 20 kg/m2, smoking"
    ],
    correctAnswer: "E",
    category: "Dysmenorrhea",
    examSet: "59th Mid Exam"
  },
  {
    id: 58,
    question: "Which circumstance best describes the typical candidate for the Le Fort's obliterative procedure used in treating genital descent?",
    options: [
      "Desires future fertility",
      "Desires future coital activity",
      "Has abnormal uterine bleeding requiring concomitant hysterectomy",
      "Is medically compromised or elderly",
      "Patient refusing surgical intervention"
    ],
    correctAnswer: "D",
    category: "Surgery",
    examSet: "59th Mid Exam"
  },
  {
    id: 59,
    question: "In premenarchal girls, which of the following is the most common source of abnormal bleeding?",
    options: [
      "Ovary",
      "Uterus",
      "Vagina",
      "Urethra",
      "Anus"
    ],
    correctAnswer: "C",
    category: "Pediatrics",
    examSet: "59th Mid Exam"
  },
  {
    id: 60,
    question: "A 20 years sexually active lady presented after end of menstruation with fever, tender lower abdomen, tender cervical motion and leucocytosis. The most likely diagnosis is:",
    options: [
      "Ectopic pregnancy",
      "Ruptured ovarian cyst",
      "Acute pyelitis",
      "Diverticulitis",
      "Pelvic inflammatory disease"
    ],
    correctAnswer: "E",
    category: "Infections",
    examSet: "59th Mid Exam"
  },
  {
    id: 61,
    question: "The floor of Pouch of Douglas is formed of:",
    options: [
      "Peritoneum covering posterior fornix",
      "Cardinal ligament",
      "Posterior aspect of cervix",
      "Rectum",
      "Uterosacral ligament"
    ],
    correctAnswer: "A",
    category: "Anatomy",
    examSet: "59th Mid Exam"
  },
  {
    id: 62,
    question: "The hormones relevant to the embryogenesis/differentiation of the external genitalia include the following?",
    options: [
      "Androstenedione",
      "Estrogens",
      "Human chorionic gonadotropin",
      "Dihydrotestosterone",
      "Progesterone"
    ],
    correctAnswer: "D",
    category: "Embryology",
    examSet: "59th Mid Exam"
  },
  {
    id: 63,
    question: "What is the usual order of appearance of the signs of normal puberty?",
    options: [
      "Menarche then Axillary & pubic hair, then breast buds",
      "Breast buds then Axillary & pubic hair, then menarche",
      "Breast buds, then menarche, then Axillary & pubic hair",
      "Axillary & pubic hair, then menarche, then breast buds",
      "Axillary & pubic hair, then breast buds, then menarche"
    ],
    correctAnswer: "B",
    category: "Puberty",
    examSet: "59th Mid Exam"
  },
  {
    id: 64,
    question: "With regard to the cervix uteri, during speculum examination, the examiner could comment on which of the followings:",
    options: [
      "Consistency of the cervix",
      "External os direction",
      "Cervical mobility",
      "Level of external os",
      "Characters of cervical discharge"
    ],
    correctAnswer: "E",
    category: "Examination",
    examSet: "59th Mid Exam"
  },
  {
    id: 65,
    question: "A 30-year-old woman presents with primary infertility and inability to get pregnant over the past 18 months. She and her husband are in good health. Which test would not be part of the basic work-up:",
    options: [
      "Diagnostic laparoscopy",
      "Menstrual calendars",
      "Day 3 FSH level",
      "Semen analysis",
      "Thyroid profile"
    ],
    correctAnswer: "A",
    category: "Infertility",
    examSet: "59th Mid Exam"
  },
  {
    id: 66,
    question: "A 28-year-old nulligravida presents with primary amenorrhea. She is diagnosed with 46,XY gonadal dysgenesis. During pelvic laparoscopy, what is the expected finding?",
    options: [
      "Streak gonads and male internal genitalia",
      "Empty pelvis (no gonads or internal genitalia)",
      "Streak gonads and female internal genitalia",
      "Bilateral abdominal testes and male internal genitalia",
      "Bilateral abdominal testes and no internal genitalia"
    ],
    correctAnswer: "C",
    category: "Intersex",
    examSet: "59th Mid Exam"
  },
  {
    id: 67,
    question: "Which of the following statements concerning endometriosis is true?",
    options: [
      "Malignant changes are rare",
      "Cryptomenorrhea is a risk factor for disease development",
      "It is more common in reproductive aged women",
      "Affected women may present with subfertility",
      "The ovary is a commonly affected site"
    ],
    correctAnswer: "D",
    category: "Endometriosis",
    examSet: "59th Mid Exam"
  },
  {
    id: 68,
    question: "Which of the following is a sexually transmitted disease and therefore warrants treatment of sexual partners?",
    options: [
      "First diagnosis of bacterial vaginosis",
      "Recurrent secondary genital herpes infection",
      "First diagnosis of vaginal Candida glabrata infection",
      "Postmenopausal genital lichen sclerosis",
      "Recurrent diagnosis of vaginal trichomoniasis"
    ],
    correctAnswer: "E",
    category: "Infections",
    examSet: "59th Mid Exam"
  },
  {
    id: 69,
    question: "An 18-year-old hirsute, non sexually active lady consults you for evaluation of disabling pain with her menstrual periods. The pain has been present since menarche and is accompanied by nausea and headache. History is otherwise unremarkable, and pelvic examination is normal. You diagnose primary dysmenorrhea and recommend initial treatment with which of the following?",
    options: [
      "Combined oral contraceptives containing levonorgestrel",
      "Cyclo-oxygenase inhibitors",
      "Gonadotropin-releasing hormone (GnRH) analogues",
      "Danazol",
      "Codeine"
    ],
    correctAnswer: "B",
    category: "Dysmenorrhea",
    examSet: "59th Mid Exam"
  },
  {
    id: 70,
    question: "A 22-year-old patient presents to the gynecology clinic with severe lower abdominal pain and vaginal discharge. She is not pregnant and the local examination shows severe cervical and adnexal tenderness. There is abnormal purulent cervical discharge that is sent for culture and sensitivity. What are the most common microorganisms that can cause this condition?",
    options: [
      "Chlamydia trachomatis and pseudomonas",
      "Chlamydia trachomatis and Neisseria gonorrhoeae",
      "Neisseria gonorrhoeae and pseudomonas",
      "Mixed anaerobic organisms",
      "Neisseria gonorrhoeae and Trichomonas vaginalis"
    ],
    correctAnswer: "B",
    category: "Infections",
    examSet: "59th Mid Exam"
  },
  {
    id: 71,
    question: "Kegel exercises were designed to do which of the following?",
    options: [
      "Strengthen the abdominal muscles after childbirth",
      "Increase the blood flow to the perineum to speed the healing of an episiotomy",
      "Improve the tone of the muscles surrounding the bladder base, neck and proximal urethra",
      "Prevent denervation of pelvic muscles after childbirth",
      "Decrease the muscle atrophy associated with aging"
    ],
    correctAnswer: "C",
    category: "Urology",
    examSet: "59th Mid Exam"
  },
  {
    id: 72,
    question: "Which of the following clinical scenarios meets the definition of amenorrhea?",
    options: [
      "12-year-old with Tanner stage I breast development",
      "16-year-old with Tanner stage II breast development",
      "14-year-old with Tanner stage III breast development",
      "18-year-old with Tanner stage V breast development and cessation of menses for the last two cycles",
      "13-year-old with Tanner stage I breast development"
    ],
    correctAnswer: "B",
    category: "Amenorrhea",
    examSet: "59th Mid Exam"
  },
  {
    id: 73,
    question: "After menopause increased facial hair growth occurs due to:",
    options: [
      "Fall in FSH level",
      "Increase in LH level",
      "Decreased estrogen to androgen ratio",
      "Decreased androgen level",
      "Constitutional effect"
    ],
    correctAnswer: "C",
    category: "Menopause",
    examSet: "59th Mid Exam"
  },
  {
    id: 74,
    question: "Where do the Bartholin's glands' ducts open?",
    options: [
      "Into the midline of the posterior fourchette",
      "Bilaterally beneath the external urethral opening",
      "Bilaterally on the inner surface of the labia majora",
      "Bilaterally in the anterior part of the vaginal vestibule",
      "Bilaterally into the posterior part of vaginal vestibule"
    ],
    correctAnswer: "E",
    category: "Anatomy",
    examSet: "59th Mid Exam"
  },
  {
    id: 75,
    question: "Which of the following pubertal events in girls is not estrogen-dependent?",
    options: [
      "Menstruation",
      "Maturation of the vaginal epithelium",
      "Reaching adult height",
      "Hair growth",
      "Growth of mammary gland and stroma of the breast"
    ],
    correctAnswer: "D",
    category: "Puberty",
    examSet: "59th Mid Exam"
  },
  {
    id: 76,
    question: "27-year-old woman with a chronic bulimia presents for infertility evaluation. Your work-up identifies ovulatory dysfunction with low levels of estrogen and gonadotropins. What is the best method of ovulation induction?",
    options: [
      "Human menopausal gonadotropin",
      "Human menopausal gonadotropin plus human chorionic gonadotropin",
      "Dopamine agonists",
      "Depot GnRH agonists",
      "Ovum donation"
    ],
    correctAnswer: "B",
    category: "Infertility",
    examSet: "59th Mid Exam"
  },
  {
    id: 77,
    question: "A 26-year-old woman presented with first time secondary amenorrhea and during evaluation hyperprolactinemia is diagnosed. Which of the following conditions could cause increased circulating prolactin concentration and amenorrhea in this patient?",
    options: [
      "Stress",
      "Primary hypothyroidism",
      "Anorexia nervosa",
      "Congenital adrenal hyperplasia",
      "Polycystic ovarian disease"
    ],
    correctAnswer: "A",
    category: "Endocrinology",
    examSet: "59th Mid Exam"
  },
  {
    id: 78,
    question: "Which of the following is least likely to aid the diagnosis of a rectovaginal fistula?",
    options: [
      "Vaginoscopy",
      "Barium enema",
      "Noncontrast computed tomography",
      "Tampon in the vagina with methylene blue instilled in the rectum",
      "Proctoscopy"
    ],
    correctAnswer: "C",
    category: "Surgery",
    examSet: "59th Mid Exam"
  },
  {
    id: 79,
    question: "A 16-year-old phenotypic girl is seen for primary amenorrhea. Karyotyping shows 46, XY. In counsel you advise gonadectomy under which of the following circumstances?",
    options: [
      "When she is finished growing",
      "If the gonads are not in the normal location in the pelvis",
      "Primarily because she will become virilized",
      "Primarily because there is no chance of pregnancy",
      "Primarily because of the risk of malignancy"
    ],
    correctAnswer: "E",
    category: "Intersex",
    examSet: "59th Mid Exam"
  },
  {
    id: 80,
    question: "Which of the following is not a contraindication of estrogen replacement therapy in women?",
    options: [
      "Vasomotor symptoms",
      "Active liver disease",
      "Known or suspected breast carcinoma",
      "Abnormal genital bleeding of unknown etiology",
      "Active or history of thromboembolic disease"
    ],
    correctAnswer: "A",
    category: "Menopause",
    examSet: "59th Mid Exam"
  },
  // 59th Final Exam
  {
    id: 81,
    question: "A 52 year old lady presents for her annual examination and gives a history that she has not had menstrual period in 2 years. Which of the following is least likely to be associated with the menopause?",
    options: [
      "Vasomotor instability",
      "Endometrial thickness < 4 mm",
      "Weight loss",
      "Mood disorders",
      "Decrease bone density"
    ],
    correctAnswer: "C",
    category: "Menopause",
    examSet: "59th Final Exam"
  },
  {
    id: 82,
    question: "What best technique of examination is useful in distinguishing between enterocele, vaginal prolapse, and rectocele?",
    options: [
      "Rectal examination in Sims' position",
      "Recto-vaginal examination with the patient straining",
      "Per-vaginal examination",
      "Bimanual examination",
      "Rectal examination in lithotomy position"
    ],
    correctAnswer: "B",
    category: "Examination",
    examSet: "59th Final Exam"
  },
  {
    id: 83,
    question: "In a 20 year old single complaining of severe dysmenorrhea because of endometriosis, the treatment of choice is:",
    options: [
      "Continuous oral progestogen",
      "Levonorgestrel intrauterine system (LNG-IUS)",
      "Cyclical COCP",
      "GnRH analogue",
      "Bilateral oophorectomy"
    ],
    correctAnswer: "A",
    category: "Endometriosis",
    examSet: "59th Final Exam"
  },
  {
    id: 84,
    question: "Regarding endometrial cancer, which of the following is incorrect?",
    options: [
      "Hereditary non-polyposis colorectal cancer is a risk factor",
      "Cervical involvement changes the prognosis",
      "Baseline treatment for all patients is hysterectomy and salpingo-oophorectomy",
      "Post-menopause women have worse prognosis than pre-menopause",
      "Serous type is associated with good prognosis"
    ],
    correctAnswer: "C",
    category: "Cancer",
    examSet: "59th Final Exam"
  },
  {
    id: 85,
    question: "Which of the following hormones is the primary androgen and/or androgen precursor produced by the ovary?",
    options: [
      "Testosterone",
      "Androstenedione",
      "Dihydrotestosterone",
      "Dehydroepiandrosterone sulfate",
      "Dehydroepiandrosterone"
    ],
    correctAnswer: "B",
    category: "Endocrinology",
    examSet: "59th Final Exam"
  },
  {
    id: 86,
    question: "What are the effects of increased intrauterine pressures in hysteroscopy?",
    options: [
      "Increased bleeding",
      "Decrease the circulating fluid load",
      "Limited visualization",
      "Increased intravasation",
      "Limited operating space"
    ],
    correctAnswer: "D",
    category: "Surgery",
    examSet: "59th Final Exam"
  },
  {
    id: 87,
    question: "A 68-year-old woman presents for her examination and complains of vulvar pruritus. A thick white plaque is noted on her vulvar skin. What is the most appropriate next step?",
    options: [
      "Biopsy the lesion in the office",
      "Prescribe steroid cream and reevaluate in 3 months",
      "Prescribe estrogen cream and reevaluate in 3 months",
      "Perform a wide local excision in the operating room",
      "Perform HPV DNA testing"
    ],
    correctAnswer: "A",
    category: "Dermatology",
    examSet: "59th Final Exam"
  },
  {
    id: 88,
    question: "With regards to the vagina, which of the following is correct?",
    options: [
      "Lined by stratified squamous non-keratinized epithelium",
      "The pH of its fluid changes throughout the female life",
      "In direct relation to peritoneal cavity through posterior fornix",
      "The middle portion of posterior vaginal wall is in contact with rectum",
      "It is a potential but capacious space"
    ],
    correctAnswer: "E",
    category: "Anatomy",
    examSet: "59th Final Exam"
  },
  {
    id: 89,
    question: "What is the preferred imaging modality when a congenital mullerian anomaly is suspected?",
    options: [
      "Computed tomography",
      "Two-dimensional Trans-abdominal sonography",
      "Magnetic resonance imaging",
      "Abdomino-pelvic x-ray series",
      "Doppler ultrasonography"
    ],
    correctAnswer: "C",
    category: "Radiology",
    examSet: "59th Final Exam"
  },
  {
    id: 90,
    question: "Regarding cervical cancer, which of the following is incorrect?",
    options: [
      "Cervical cancer is the fourth commonest cancer in women worldwide",
      "Human papilloma virus (HPV) types 16 and 18 are the most commonly associated with cervical cancer",
      "Cervical cancer is decreasing in mortality worldwide",
      "Cervical cancer is so rare in women under 25 years that screening is not necessary before this age",
      "Cervical cancer could be a preventable disease"
    ],
    correctAnswer: "B",
    category: "Cancer",
    examSet: "59th Final Exam"
  },
  {
    id: 91,
    question: "The non-surgical management of uterine fibroid is a good alternative when indicated. Which of the following is the best to control the volume/growth of fibroid?",
    options: [
      "Progestin-releasing intrauterine system",
      "Tranexamic acid",
      "Mefenamic acid",
      "Gonadotropin releasing hormone agonists",
      "Low dose combined oral contraceptives"
    ],
    correctAnswer: "D",
    category: "Fibroids",
    examSet: "59th Final Exam"
  },
  {
    id: 92,
    question: "A primary goal of therapy for central precocious puberty includes prevention of which of the following consequences?",
    options: [
      "Short stature",
      "Excessive breast size",
      "Learning disabilities",
      "Occurrence of pregnancy",
      "Psychological upset"
    ],
    correctAnswer: "A",
    category: "Puberty",
    examSet: "59th Final Exam"
  },
  {
    id: 93,
    question: "A 43-year-old woman presents with contact bleeding for the past 6 months. Severe cervical dysplasia was diagnosed by Pap smear, and colposcopy confirmed the diagnosis. Which of the following is the most appropriate next step in management?",
    options: [
      "Simple hysterectomy",
      "Loop Electrosurgical Excision Procedure (LEEP)",
      "Radical trachelectomy",
      "Follow-up with Pap smear after 6 months",
      "Pelvic radiation treatment"
    ],
    correctAnswer: "B",
    category: "Cancer",
    examSet: "59th Final Exam"
  },
  {
    id: 94,
    question: "According to the Rotterdam criteria, which of the following is not a characteristic graphic finding in PCOS?",
    options: [
      "Ovarian volume > 10 mL",
      "At least 12 follicles per ovary",
      "Follicles 2-9 mm in mean diameter",
      "Only one ovary with findings is sufficient to define",
      "Hyperdense stroma"
    ],
    correctAnswer: "E",
    category: "Endocrinology",
    examSet: "59th Final Exam"
  },
  {
    id: 95,
    question: "A patient complains of heavy but regular menstrual periods. No evident etiology. Which of the following has been shown to be most effective in reducing menstrual flow?",
    options: [
      "Depot medroxyprogesterone acetate",
      "Dilation and curettage",
      "Tranexamic acid",
      "Misoprostol",
      "Ergonovine maleate"
    ],
    correctAnswer: "C",
    category: "Abnormal Uterine Bleeding",
    examSet: "59th Final Exam"
  },
  {
    id: 96,
    question: "Which of the following is a recognized risk factor for adenomyosis?",
    options: [
      "Previous uterine surgery",
      "Nulliparity",
      "Smoking",
      "Previous medical miscarriages",
      "Third decade of life"
    ],
    correctAnswer: "A",
    category: "Adenomyosis",
    examSet: "59th Final Exam"
  },
  {
    id: 97,
    question: "Regarding epithelial ovarian cancer, one is correct:",
    options: [
      "Combined oral contraceptive pills (COCP) is a protective factor",
      "The prognosis is better if diagnosed early",
      "Staging of the disease is based on surgical findings",
      "Familial in 10-15% of cases",
      "Borderline type is best treated by surgery"
    ],
    correctAnswer: "B",
    category: "Cancer",
    examSet: "59th Final Exam"
  },
  {
    id: 98,
    question: "Using WHO classification for Semen Analysis interpretation, choose the false statement:",
    options: [
      "The normal lower limit for normal morphology is 4%",
      "The normal lower limit for sperm motility is 32%",
      "Viability should be at least 58%",
      "The normal lower limit for sperm concentration is 15 million/mL",
      "Seminal fluid has alkaline pH and liquefies within 60 minutes"
    ],
    correctAnswer: "D",
    category: "Infertility",
    examSet: "59th Final Exam"
  },
  {
    id: 99,
    question: "The diagnosis of carcinoma of the cervix, FIGO stage III, is assigned when which of the following occurs?",
    options: [
      "The carcinoma has extended to the pelvic wall and/or involves lower third of vagina",
      "The carcinoma involves the distal vaginal mucosa",
      "The carcinoma has extended into the parametria, but not to the pelvic sidewall",
      "The tumor has pulmonary metastasis",
      "The tumor has involved the corpus"
    ],
    correctAnswer: "B",
    category: "Cancer",
    examSet: "59th Final Exam"
  },
  {
    id: 100,
    question: "Regard to clinical examination of the gynecological patient, which statement is incorrect?",
    options: [
      "Abdominal examination is mandatory as part of the gynecological examination",
      "A chaperone is always needed for intimate examinations",
      "Palpation below an abdominal mass is possible",
      "Bimanual examination can determine whether a pelvic mass is ovarian or uterine in origin",
      "Shifting dullness and fluid thrill can be seen due to ascites"
    ],
    correctAnswer: "E",
    category: "Examination",
    examSet: "59th Final Exam"
  },
  // 58th 1st Round Exam
  {
    id: 101,
    question: "Arterial blood supply to the uterus is derived from what arteries?",
    options: [
      "Ovarian arteries alone",
      "Uterine arteries alone",
      "Uterine and ovarian arteries",
      "Uterine and inferior rectal arteries",
      "Vaginal and uterine arteries"
    ],
    correctAnswer: "C",
    category: "Anatomy",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 102,
    question: "Lymphatic drainage of the ovaries follows the course of the ovarian arteries to what groups of nodes?",
    options: [
      "Lateral and preaortic lumbar nodes",
      "Paracervical nodes",
      "Deep inguinal nodes",
      "Internal iliac nodes",
      "Obturator nodes"
    ],
    correctAnswer: "A",
    category: "Anatomy",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 103,
    question: "During a speculum exam, you notice a lesion on the patient's cervix. It can be defined as a retention cyst of endocervical columnar cells. What do you call this lesion?",
    options: [
      "Epidermoid inclusion cyst",
      "Gartner cyst",
      "Nabothian cyst",
      "Lymphocyst",
      "Dermoid cyst"
    ],
    correctAnswer: "C",
    category: "Anatomy",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 104,
    question: "What best technique of examination is useful in distinguishing between enterocele, vaginal prolapse, and rectocele?",
    options: [
      "Rectal examination in Sims' position",
      "Recto-vaginal examination with the patient standing",
      "Per-vaginal examination",
      "Bimanual examination",
      "Rectal examination in lithotomy position"
    ],
    correctAnswer: "B",
    category: "Examination",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 105,
    question: "Which of the following anatomic structures is correctly paired with its embryologic origin?",
    options: [
      "Genital tubercle - clitoris",
      "Urethral folds - labia minora",
      "Labioscrotal folds - labia majora",
      "The whole vagina - urogenital sinus",
      "Fallopian tubes - mesonephric duct"
    ],
    correctAnswer: "A",
    category: "Embryology",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 106,
    question: "What is the preferred imaging modality when a congenital mullerian anomaly is suspected?",
    options: [
      "Computed tomography",
      "Two-dimensional Trans-abdominal sonography",
      "Magnetic resonance imaging",
      "Abdomino-pelvic x-ray series",
      "Doppler ultrasonography"
    ],
    correctAnswer: "C",
    category: "Radiology",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 107,
    question: "A woman normally has 32-day cycles. In this woman, when does ovulation occur?",
    options: [
      "It should occur at day 12",
      "It should occur at day 14",
      "It should occur at day 18",
      "It should occur at day 22",
      "It should occur at day 20"
    ],
    correctAnswer: "C",
    category: "Physiology",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 108,
    question: "Which of the following generally occurs first among the major developmental events of female puberty?",
    options: [
      "Menarche",
      "Pubarche",
      "Thelarche",
      "Growth spurt",
      "Adrenarche"
    ],
    correctAnswer: "C",
    category: "Puberty",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 109,
    question: "What is the initial treatment of choice of primary dysmenorrhea?",
    options: [
      "Assurance and prostaglandin synthetase inhibitors",
      "Assurance and combined oral contraceptives",
      "Assurance and progestins",
      "Transcutaneous electrical nerve stimulation",
      "Acupuncture/acupressure and relaxation"
    ],
    correctAnswer: "A",
    category: "Dysmenorrhea",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 110,
    question: "Which of the following is not appropriate medical treatments for adenomyosis?",
    options: [
      "Copper intrauterine device",
      "Combination oral contraceptives",
      "Nonsteroidal anti-inflammatory drugs",
      "Levonorgestrel-releasing intrauterine system (LNG-IUS)",
      "Hormone containing vaginal ring"
    ],
    correctAnswer: "A",
    category: "Adenomyosis",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 111,
    question: "Which of the following conditions is a risk factor for developing endometriosis?",
    options: [
      "Multiparity",
      "Transverse vaginal septum",
      "Prior chemotherapy exposure",
      "Autoimmune connective tissue disorders",
      "Obesity"
    ],
    correctAnswer: "B",
    category: "Endometriosis",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 112,
    question: "What is the next step in the evaluation of abnormal uterine bleeding following the history and physical examination in a woman of reproductive age?",
    options: [
      "Pelvic ultrasound",
      "Coagulation profile",
      "Pregnancy test",
      "Ovarian tumor markers",
      "Testing for chlamydia infection"
    ],
    correctAnswer: "C",
    category: "Abnormal Uterine Bleeding",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 113,
    question: "What is the most common cause of postmenopausal bleeding?",
    options: [
      "Endometrial cancer",
      "Estrogen replacement therapy",
      "Atrophic endometrium and/or atrophic vaginitis",
      "Anticoagulants therapy",
      "Endometrial polyps"
    ],
    correctAnswer: "C",
    category: "Menopause",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 114,
    question: "Which of the following tools is not clinically useful to estimate menstrual blood loss?",
    options: [
      "Pad counts",
      "Hemoglobin and hematocrit",
      "Pallor",
      "Sodium hydroxide extraction of hemoglobin",
      "Size of blood clots"
    ],
    correctAnswer: "D",
    category: "Abnormal Uterine Bleeding",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 115,
    question: "Which of the following may be reasonably considered in the evaluation of postcoital vaginal bleeding?",
    options: [
      "Conization",
      "Cystoscopy",
      "Colposcopy",
      "Proctoscopy",
      "Laparoscopy"
    ],
    correctAnswer: "C",
    category: "Abnormal Uterine Bleeding",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 116,
    question: "Which one of the following symptoms would you expect in an infertile young patient diagnosed to have Asherman syndrome?",
    options: [
      "Hypomenorrhea",
      "Oligomenorrhea",
      "Menorrhagia",
      "Metrorrhagia",
      "Dysmenorrhea"
    ],
    correctAnswer: "A",
    category: "Amenorrhea",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 117,
    question: "Precocious puberty is defined as initial pubertal changes occurring prior to what age?",
    options: [
      "6.5 years",
      "8 years",
      "9.5 years",
      "10 years",
      "<5.5 years"
    ],
    correctAnswer: "B",
    category: "Puberty",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 118,
    question: "A primary goal of therapy for central precocious puberty includes prevention of which of the following consequences?",
    options: [
      "Short stature",
      "Excessive breast size",
      "Learning disabilities",
      "Occurrence of pregnancy",
      "Psychological upset"
    ],
    correctAnswer: "A",
    category: "Puberty",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 119,
    question: "Secondary amenorrhea is absence of menstruation, in a previously menstruating woman for:",
    options: [
      "two previous cycle intervals",
      "12 months",
      "three previous cycle intervals or 4 months",
      "three previous cycle intervals or 6 months",
      "six previous cycle intervals or 6 months"
    ],
    correctAnswer: "D",
    category: "Amenorrhea",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 120,
    question: "In primary amenorrhea, if FSH is elevated and no breast development is present, what is the diagnosis?",
    options: [
      "Complete androgen insensitivity",
      "Kallmann syndrome",
      "Mullerian agenesis",
      "Hypothalamic dysfunction",
      "Gonadal dysgenesis"
    ],
    correctAnswer: "E",
    category: "Amenorrhea",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 121,
    question: "Which of the following is a significant symptom of Climacteric period?",
    options: [
      "Obesity",
      "Premenstrual tension",
      "Hot flushes",
      "Abnormal uterine bleeding",
      "Urinary abnormalities"
    ],
    correctAnswer: "C",
    category: "Menopause",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 122,
    question: "The appearance of a 'strawberry cervix' is a classic sign of what infection?",
    options: [
      "Tuberculosis of the cervix",
      "Trichomonas vaginalis",
      "Bacterial vaginosis",
      "Herpes simplex infection",
      "Neisseria gonorrhea"
    ],
    correctAnswer: "B",
    category: "Infections",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 123,
    question: "What is the most practical method of diagnosing candidal vaginitis?",
    options: [
      "Methylene blue stained film",
      "Culture on Nickerson media",
      "Vaginal pH less than 4.5",
      "Application of KOH on a wet smear",
      "PCR"
    ],
    correctAnswer: "D",
    category: "Infections",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 124,
    question: "Which of the following statements is true regarding polycystic ovarian syndrome?",
    options: [
      "Patients typically present with amenorrhea",
      "It is the most common cause of chronic anovulation",
      "It is characterized by hypogonadotropic hypogonadism",
      "Persistently elevated follicle-stimulating hormone and estradiol levels",
      "Most of the patients are lean"
    ],
    correctAnswer: "B",
    category: "Endocrinology",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 125,
    question: "Which of the following medications is used for achieving a pregnancy in a patient with hypogonadotropic hypogonadism?",
    options: [
      "Estradiol",
      "Aromatase inhibitors",
      "Gonadotropins",
      "Clomiphene citrate",
      "Continuous GnRH infusion"
    ],
    correctAnswer: "C",
    category: "Infertility",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 126,
    question: "What is the treatment of primary hyper-prolactinemia?",
    options: [
      "Aromatase inhibitors",
      "L-thyroxine",
      "Dopamine agonists",
      "Gonadotropin",
      "Serotonin re-uptake inhibitors"
    ],
    correctAnswer: "C",
    category: "Endocrinology",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 127,
    question: "In couples attempting pregnancy, what percentage of women is expected to conceive within 1 year?",
    options: [
      "15",
      "30",
      "60",
      "85",
      "50"
    ],
    correctAnswer: "D",
    category: "Infertility",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 128,
    question: "Patients with severe oligospermia have sperm counts less than which of the following?",
    options: [
      "< 5 million/mL",
      "< 13 million/mL",
      "< 25 million/mL",
      "< 30 million/mL",
      "< 40 million/mL"
    ],
    correctAnswer: "A",
    category: "Infertility",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 129,
    question: "Which factor is not protective against ovarian carcinomas?",
    options: [
      "Pregnancy",
      "Barrier methods of contraception",
      "Bilateral salpingectomy",
      "Hysterectomy",
      "Use of oral contraceptives"
    ],
    correctAnswer: "B",
    category: "Cancer",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 130,
    question: "A 21-year-old woman presents with left lower quadrant pain. An anterior 7-cm firm adnexal cyst is palpated. Ultrasound confirms a complex left adnexal mass with solid components that appear to contain bone and teeth. What percentage of these tumors are bilateral?",
    options: [
      "<1%",
      "2-3%",
      "10-15%",
      "50%",
      "60%"
    ],
    correctAnswer: "C",
    category: "Cancer",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 131,
    question: "A 7-year-old girl is seen by her pediatrician for left lower quadrant pain. You are consulted because an ovarian neoplasm is identified by ultrasound. Which of the following is the most common ovarian tumor in this type of patient?",
    options: [
      "Germ cell",
      "Papillary serous epithelial",
      "Fibrosarcoma",
      "Brenner tumor",
      "Sarcoma botryoides"
    ],
    correctAnswer: "A",
    category: "Cancer",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 132,
    question: "Which of the following is risk factor for the development of cervical cancer?",
    options: [
      "Herpes simplex",
      "HPV types 16 and 18",
      "Family history of cervical cancer",
      "Obesity",
      "Previous chlamydial infection"
    ],
    correctAnswer: "B",
    category: "Cancer",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 133,
    question: "An intravenous pyelogram (IVP) shows hydronephrosis in the workup of a patient with cervical cancer otherwise confined to a cervix of normal size. This indicates which one of the following stages?",
    options: [
      "I",
      "II",
      "III",
      "IV",
      "Micro invasion stage"
    ],
    correctAnswer: "C",
    category: "Cancer",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 134,
    question: "The initial treatment option of 47 years lady with asymptomatic myoma 5 cm FIGO 5 is?",
    options: [
      "Gonadotropin releasing hormone agonists",
      "Assurance and follow up",
      "Combined oral contraceptives",
      "Selective progesterone receptor modulators",
      "Levonorgestrel intrauterine system"
    ],
    correctAnswer: "B",
    category: "Fibroids",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 135,
    question: "What is the risk of progression to malignancy with complex atypical hyperplasia of the endometrium without treatment?",
    options: [
      "Approximately 5% of these cases progress to carcinoma",
      "Approximately 45% of these cases progress to carcinoma",
      "Approximately 10% of these cases progress to carcinoma",
      "Approximately 23% of these cases progress to carcinoma",
      "Approximately 2% of these cases progress to carcinoma"
    ],
    correctAnswer: "D",
    category: "Cancer",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 136,
    question: "What is the most common presenting complaint of a woman with endometrial cancer?",
    options: [
      "Pelvic pain",
      "Postmenopausal/premenopausal uterine bleeding",
      "Excessive offensive vaginal discharge",
      "Weight loss",
      "Rectal symptoms"
    ],
    correctAnswer: "B",
    category: "Cancer",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 137,
    question: "Which of the following is correct as regards management of cystocele?",
    options: [
      "Pessaries",
      "Kegel exercises",
      "Obliteration of cul-de-sac",
      "Anterior colporrhaphy",
      "Estrogen"
    ],
    correctAnswer: "D",
    category: "Urology",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 138,
    question: "Urinary stress incontinence is?",
    options: [
      "The loss of small amount of urine when intra-abdominal pressure increases",
      "The loss of small amount of urine with normal intra-abdominal pressure",
      "Inability to control urine with desire",
      "Inability to pass urine",
      "Constant loss of urine"
    ],
    correctAnswer: "A",
    category: "Urology",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 139,
    question: "Which location of uterine fibroid is typically the most symptomatic?",
    options: [
      "FIGO 1",
      "FIGO 4",
      "FIGO 5",
      "FIGO 3",
      "FIGO 7"
    ],
    correctAnswer: "A",
    category: "Fibroids",
    examSet: "58th 1st Round Exam"
  },
  {
    id: 140,
    question: "Second degree uterine descent is defined as?",
    options: [
      "External os at ischial spine",
      "External os outside vaginal introitus",
      "External os below ischial spine",
      "Fundus of the uterus below vaginal introitus",
      "Fundus of the uterus below ischial spine"
    ],
    correctAnswer: "B",
    category: "Urology",
    examSet: "58th 1st Round Exam"
  }
];

export const categories = [
  "All",
  "Embryology",
  "Endocrinology", 
  "Menopause",
  "Abnormal Uterine Bleeding",
  "Infections",
  "Endometriosis",
  "Anatomy",
  "Physiology",
  "Puberty",
  "Amenorrhea",
  "Intersex",
  "Adenomyosis",
  "PMS",
  "Fibroids",
  "Urology",
  "Dysmenorrhea",
  "Surgery",
  "Pediatrics",
  "Infertility",
  "Examination",
  "Cancer",
  "Dermatology",
  "Radiology"
];

export const examSets = [
  "All",
  "60th MID Exam",
  "59th Mid Exam",
  "59th Final Exam",
  "58th 1st Round Exam",
  "58th 2nd Round Exam"
];