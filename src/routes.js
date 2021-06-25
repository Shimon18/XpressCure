import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Doctor  = React.lazy(()=>import('./views/Doctors/index'))
const EditDoctor = React.lazy(()=>import('./views/Doctors/Edit'))
const DoctorMitra= React.lazy(()=>import('./views/DoctorMitra/index'))
const DoctorMitraEdit = React.lazy(()=>import('./views/DoctorMitra/edit'))
const AllDoctors = React.lazy(()=>import('./views/Doctors/AllDoctors'))
const Category = React.lazy(()=>import('./views/Blogs/Category'))
const ChildCategory = React.lazy(()=>import('./views/Blogs/ChildCategory'))
const SubCategory = React.lazy(()=>import('./views/Blogs/Subcategory'))
const VerifyDoctor = React.lazy(()=>import('./views/VerifyDoctor/index'))
const ApproveDoctor = React.lazy(()=>import('./views/VerifyDoctor/approveDoctor'))
const AddDoctorCategory = React.lazy(()=>import('./views/VerifyDoctor/AddCategory'))

const Verification = React.lazy(()=>import('./views/Doctors/Verfication/Verification'))
const RegistrationForm = React.lazy(()=>import('./views/Doctors/Verfication/RegistrationForm/RegistrationForm'))
const SelectCatagory = React.lazy(()=>import('./views/Doctors/Verfication/RegistrationForm/SelectCatagory'))
const OnlineDoctor = React.lazy(()=>import('./views/Doctors/OnlineDoctor/OnlineDoctor'))
const RegisterDoctor = React.lazy(()=>import('./views/Doctors/RegisterDoctor'))
const Patient = React.lazy(()=>import('./views/Patient/Patient'))

const AllMitradoctor = React.lazy(()=>import('./views/DoctorMitra/AllDoctors'))
const MitraVerification = React.lazy(()=>import('./views/DoctorMitra/Verfication/Verification'))
const MitraRegistrationForm = React.lazy(()=>import('./views/DoctorMitra/Verfication/RegistrationForm/RegistrationForm'))
const MitraSelectCatagory = React.lazy(()=>import('./views/DoctorMitra/Verfication/RegistrationForm/SelectCatagory'))
const MitraOnlineDoctor = React.lazy(()=>import('./views/DoctorMitra/OnlineDoctor/OnlineDoctor'))
const MitraRegisterDoctor = React.lazy(()=>import('./views/DoctorMitra/RegisterDoctor'))

const PatientDetail = React.lazy(()=>import('./views/Patient/PatientDetail/PatientDetail'))

const ControlDashboard = React.lazy(()=>import('./views/ControlPanel/ControlDashboard'))
const SpecialityMaster = React.lazy(()=>import('./views/ControlPanel/SpecialityMaster'))
const ComplaintMaster = React.lazy(()=>import('./views/ControlPanel/ComplaintMaster'))
const MedicalCollege = React.lazy(()=>import('./views/ControlPanel/MedicalCollege'))
const MedicalDegreeMaster = React.lazy(()=>import('./views/ControlPanel/MedicalDegreeMaster'))
const HealthWorker = React.lazy(()=>import('./views/ControlPanel/HealthWorker'))
const DoctorCategory = React.lazy(()=>import('./views/ControlPanel/DoctorCategory'))
const DoctorSubcategory = React.lazy(()=>import('./views/ControlPanel/DoctorSubcategory'))
const DistrictMaster = React.lazy(()=>import('./views/ControlPanel/DistrictMaster'))
const StateMaster = React.lazy(()=>import('./views/ControlPanel/StateMaster'))
const DocumentMaster = React.lazy(()=>import('./views/ControlPanel/DocumentMaster'))


const AddSpeciality = React.lazy(()=>import('./views/ControlPanel/AddSpeciality'))
const AddComplaint = React.lazy(()=>import('./views/ControlPanel/AddComplaint'))
const AddMedicalCollege = React.lazy(()=>import('./views/ControlPanel/AddMedicalCollege'))
const AddMedicalDegree = React.lazy(()=>import('./views/ControlPanel/AddMedicalDegree'))
const AddHealthWorker = React.lazy(()=>import('./views/ControlPanel/AddHealthWorker'))
const AddDoctorcategory = React.lazy(()=>import('./views/ControlPanel/AddDoctorcategory'))
const AddDoctorsubcategory = React.lazy(()=>import('./views/ControlPanel/AddDoctorsubcategory'))
const AddDistrictMaster = React.lazy(()=>import('./views/ControlPanel/AddDistrictMaster'))
const AddStateMaster = React.lazy(()=>import('./views/ControlPanel/AddStateMaster'))

const ChatbotMaster = React.lazy(()=>import('./views/ControlPanel/ChatbotMaster'))
const FeesMaster = React.lazy(()=>import('./views/ControlPanel/FeesMaster'))
const DoctorMitraService = React.lazy(()=>import('./views/ControlPanel/DoctorMitraService'))
const DoctorFeesMaster = React.lazy(()=>import('./views/ControlPanel/DoctorFeesMaster'))
const FAQ = React.lazy(()=>import('./views/ControlPanel/FAQ'))
const UserRole = React.lazy(()=>import('./views/ControlPanel/UserRole'))


const ChatBoxAssistant = React.lazy(()=>import('./views/ControlPanel/ChatBoxAssistant'))
const AddFeesMaster = React.lazy(()=>import('./views/ControlPanel/AddFeesMaster'))
const AddDoctorMitraService = React.lazy(()=>import('./views/ControlPanel/AddDoctorMitraService'))
const AddDoctorFeesMaster = React.lazy(()=>import('./views/ControlPanel/AddDoctorFeesMaster'))
const AddQuery = React.lazy(()=>import('./views/ControlPanel/AddQuery'))

const PrescriptionMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/PrescriptionMaster'))
const DiagonisMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/DiagonisMaster'))
const DosageMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/DosageMaster'))
const AllergiesMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/AllergiesMaster'))
const DurationMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/DurationMaster'))

const AddDiagonisMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/AddDiagonisMaster'))
const AddDosageMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/AddDosageMaster'))
const AddAllergiesMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/AddAllergiesMaster'))
const AddDurationMaster = React.lazy(()=>import('./views/ControlPanel/PrescriptionMaster/AddDurationMaster'))
const AddQuestion = React.lazy(()=>import('./views/ControlPanel/AddQuestion'))
const AddUserRole = React.lazy(()=>import('./views/ControlPanel/AddUserRole'))

const DoctorAccount = React.lazy(()=>import('./views/Accounts/Doctor/Doctor'))
const CurrentMonthRecords = React.lazy(()=>import('./views/Accounts/Doctor/CurrentMonthRecords'))

const DoctorMitraAccount = React.lazy(()=>import('./views/Accounts/DoctorMitra/DoctorMitra'))
const PatientAccount = React.lazy(()=>import('./views/Accounts/Patient/PatientTransection'))
const TransectionHistoryAccount = React.lazy(()=>import('./views/Accounts/TransectionHistory/TransectionHistory'))

const ViewDetailAccount = React.lazy(()=>import('./views/Accounts/Doctor/ViewDetail'))
const AddPayment = React.lazy(()=>import('./views/Accounts/Doctor/AddPayment'))
const TransectionHistoryDoctor = React.lazy(()=>import('./views/Accounts/Doctor/TransectionHistoryDoctor'))
const CurrentMonthRecordsMitra = React.lazy(()=>import('./views/Accounts/DoctorMitra/CurrentMonthRecordsMitra'))
const ViewDetailMitra = React.lazy(()=>import('./views/Accounts/DoctorMitra/ViewDetailMitra'))
const AddPaymentMitra = React.lazy(()=>import('./views/Accounts/DoctorMitra/AddPaymentMitra'))
const RechargeMgmt = React.lazy(()=>import('./views/Accounts/DoctorMitra/RechargeMgmt/RechargeMgmt'))
const AddRecharge = React.lazy(()=>import('./views/Accounts/DoctorMitra/RechargeMgmt/AddRecharge'))
const RechargeViewDetail = React.lazy(()=>import('./views/Accounts/DoctorMitra/RechargeMgmt/RechargeViewDetail'))
const SubscriptionManagement = React.lazy(()=>import('./views/Accounts/DoctorMitra/SubscriptionManagement/SubscriptionManagement'))
const AddNewSubscription = React.lazy(()=>import('./views/Accounts/DoctorMitra/SubscriptionManagement/AddNewSubscription'))
const TransectionHistoryMitra = React.lazy(()=>import('./views/Accounts/DoctorMitra/TransectionHistoryMitra/TransectionHistoryMitra'))

const Pharmecy = React.lazy(()=>import('./views/Pharmecy/Pharmecy'))
const ViewPharmecy = React.lazy(()=>import('./views/Pharmecy/ViewPharmecy'))
const AddNewMedicine = React.lazy(()=>import('./views/Pharmecy/AddNewMedicine'))

const InvestigationLab = React.lazy(()=>import('./views/InvestigationLab/InvestigationLab'))
const ViewInvestigation = React.lazy(()=>import('./views/InvestigationLab/ViewInvestigation'))
const AddInvestigation = React.lazy(()=>import('./views/InvestigationLab/AddInvestigation'))

const TheCureBlog = React.lazy(()=>import('./views/Marketing/TheCureBlog/TheCureBlog'))
const AddTheCureBlog = React.lazy(()=>import('./views/Marketing/TheCureBlog/AddTheCureBlog'))
const ViewTheCureBlog = React.lazy(()=>import('./views/Marketing/TheCureBlog/ViewTheCureBlog'))

const DoctorReview = React.lazy(()=>import('./views/ReviewRating/Doctor/DoctorReview'))
const ViewDoctorReview = React.lazy(()=>import('./views/ReviewRating/Doctor/ViewDoctorReview'))
const DoctorMitraReview = React.lazy(()=>import('./views/ReviewRating/DoctorMitra/DoctorMitraReview'))
const ViewDoctorMitraReview = React.lazy(()=>import('./views/ReviewRating/DoctorMitra/ViewDoctorMitraReview'))

const ViewSpeciality = React.lazy(()=>import('./views/ControlPanel/ViewSpeciality'))
const ViewComplaint = React.lazy(()=>import('./views/ControlPanel/ViewComplaint'))
const ViewFees = React.lazy(()=>import('./views/ControlPanel/ViewFees'))
const ViewDoctorMitraService = React.lazy(()=>import('./views/ControlPanel/ViewDoctorMitraService'))
const ViewDoctorFees = React.lazy(()=>import('./views/ControlPanel/ViewDoctorFees'))
const ViewFAQ = React.lazy(()=>import('./views/ControlPanel/ViewFAQ'))

const Employee = React.lazy(()=>import('./views/HumanResource/Employee/Employee'))
const AddEmployee = React.lazy(()=>import('./views/HumanResource/Employee/AddEmployee'))
const ViewEmployee = React.lazy(()=>import('./views/HumanResource/Employee/ViewEmployee'))
const Appraisal = React.lazy(()=>import('./views/HumanResource/Appraisal/Appraisal'))
const AddAppraisal = React.lazy(()=>import('./views/HumanResource/Appraisal/AddAppraisal'))
const ViewAppraisal = React.lazy(()=>import('./views/HumanResource/Appraisal/ViewAppraisal'))
const EmployeeFeedback = React.lazy(()=>import('./views/HumanResource/EmployeeFeedback/EmployeeFeedback'))
const AddFeedback = React.lazy(()=>import('./views/HumanResource/EmployeeFeedback/AddFeedback'))
const ViewFeedback = React.lazy(()=>import('./views/HumanResource/EmployeeFeedback/ViewFeedback'))
const Accounts = React.lazy(()=>import('./views/Accounts/Accounts'))
const SalaryMgmt = React.lazy(()=>import('./views/Accounts/Employees/SalaryMgmt'))
const CreditSalary = React.lazy(()=>import('./views/Accounts/Employees/CreditSalary'))
const ViewSalaryMgmt = React.lazy(()=>import('./views/Accounts/Employees/ViewSalaryMgmt'))
const Xpost = React.lazy(()=>import('./views/Accounts/Xpost/Xpost'))
const XpostSubscriptionMgmt = React.lazy(()=>import('./views/Accounts/Xpost/SubscriptionMgmt/index'))
const ViewSubscriptionMgmt = React.lazy(()=>import('./views/Accounts/Xpost/SubscriptionMgmt/View'))
const AddSubscriptionMgmt = React.lazy(()=>import('./views/Accounts/Xpost/SubscriptionMgmt/Add'))
const XpostTransectionHistory = React.lazy(()=>import('./views/Accounts/Xpost/TransactionHistory/XpostTransectionHistory'))
const ExpensesMgmt = React.lazy(()=>import('./views/Accounts/ExpensesMgmt/ExpensesMgmt'))
const AddExpense = React.lazy(()=>import('./views/Accounts/ExpensesMgmt/AddExpense'))

const ExpenseMgmtMaster = React.lazy(()=>import('./views/ControlPanel/ExpenseMgmtMaster'))
const AddExpenseMaster = React.lazy(()=>import('./views/ControlPanel/AddExpenseMaster'))
const ViewExpenseMaster = React.lazy(()=>import('./views/ControlPanel/ViewExpenseMaster'))
const XpostMaster = React.lazy(()=>import('./views/ControlPanel/XpostMaster'))
const AddXpost = React.lazy(()=>import('./views/ControlPanel/AddXpost'))
const ViewXpost = React.lazy(()=>import('./views/ControlPanel/ViewXpost'))
const DoctorCreditPoint = React.lazy(()=>import('./views/ControlPanel/DoctorCreditPoint'))
const AddDoctorCreditPoint = React.lazy(()=>import('./views/ControlPanel/AddDoctorCreditPoint'))
const ViewDoctorCreditPoint = React.lazy(()=>import('./views/ControlPanel/ViewDoctorCreditPoint'))
const DoctorMitraCreditPoint = React.lazy(()=>import('./views/ControlPanel/DoctorMitraCreditPoints'))
const AddDoctorMitraCreditPoint = React.lazy(()=>import('./views/ControlPanel/AddDoctorMitraCreditPoints'))
const ViewDoctorMitraCreditPoint = React.lazy(()=>import('./views/ControlPanel/ViewDoctorMitraCreditPoints'))
const XpostVideo = React.lazy(()=>import('./views/ControlPanel/XpostVideo'))

const DoctorAppReview = React.lazy(()=>import('./views/ReviewRating/DoctorApp/DoctorAppReview'))
const DoctorMitraAppReview = React.lazy(()=>import('./views/ReviewRating/DoctorMitraApp/DoctorMitraAppReview'))
const PatientAppReview = React.lazy(()=>import('./views/ReviewRating/PatientApp/PatientAppReview'))

const Marketing = React.lazy(()=>import('./views/Marketing/Marketing'))
const TheXPost = React.lazy(()=>import('./views/Marketing/TheXPost/TheXPost'))
const ViewXPost = React.lazy(()=>import('./views/Marketing/TheXPost/ViewXPost'))
const AddXPost = React.lazy(()=>import('./views/Marketing/TheXPost/AddXPost'))
const EditXpostTable = React.lazy(()=>import('./views/Marketing/TheXPost/EditXpostTable'))
const XpressWorld = React.lazy(()=>import('./views/Marketing/XpressWorld/XpressWorld'))
const AddXpressWorld = React.lazy(()=>import('./views/Marketing/XpressWorld/AddXpressWorld'))
const EditXpressWorld = React.lazy(()=>import('./views/Marketing/XpressWorld/EditXpressWorld'))
const MedicalDictionary = React.lazy(()=>import('./views/Marketing/MedicalDictionary/MedicalDictionary'))
const AddMedicalDictionary = React.lazy(()=>import('./views/Marketing/MedicalDictionary/AddMedicalDictionary'))
const EditMedicalDictionary = React.lazy(()=>import('./views/Marketing/MedicalDictionary/EditMedicalDictionary'))
const InspirationalStories = React.lazy(()=>import('./views/Marketing/InspirationalStories/InspirationalStories'))
const AddInspirationalStories = React.lazy(()=>import('./views/Marketing/InspirationalStories/AddInspirationalStories'))
const EditInspirationalStories = React.lazy(()=>import('./views/Marketing/InspirationalStories/EditInspirationalStories'))
const TheXChannel = React.lazy(()=>import('./views/Marketing/TheXChannel/TheXChannel'))
const AddTheXChannel = React.lazy(()=>import('./views/Marketing/TheXChannel/AddTheXChannel'))
const EditTheXChannel = React.lazy(()=>import('./views/Marketing/TheXChannel/EditTheXChannel'))
const HealthInformatics = React.lazy(()=>import('./views/Marketing/HealthInformatics/HealthInformatics'))
const AddHealthInformatics = React.lazy(()=>import('./views/Marketing/HealthInformatics/AddHealthInformatics'))
const EditHealthInformatics = React.lazy(()=>import('./views/Marketing/HealthInformatics/EditHealthInformatics'))

const Analytics = React.lazy(()=>import('./views/ControlPanel/Analytics/Analytics'))
const DoctorReport = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/DoctorReport'))
const Onboarding = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/Onboarding'))


// Charts Routing
const TotalDownloads = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/TotalDownloads'))
const MonthWiseDownload = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/MonthWiseDownload'))
const TotalApplicants = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/TotalApplicants'))
const MonthWiseApplication = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/MonthWiseApplication'))
const TotalApplicationPending = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/TotalApplicationPending'))
const TotalNumberRegDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/TotalNumberRegDoctor'))
const MonthWiseRegistration = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/MonthWiseRegistration'))
const AgeOfDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/AgeOfDoctor'))
const GenderDiversityDr = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/GenderDiversityDr'))
const DurationServedDr = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/DurationServedDr'))
const DemographicDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/DemographicDoctor'))
const RegisterDrAllCategories = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/RegisterDrAllCategories'))
const RegisteredMBBSdr = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/RegisteredMBBSdr'))
const RegisteredSpecialistDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/RegisteredSpecialistDoctor'))
const RegisteredSuperSpecialistdoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/RegisteredSuperSpecialistdoctor'))
const DoctorRegisterReferal = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/DoctorRegisterReferal'))
const DoctorMaximumReferal = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Onboarding/AllCharts/DoctorMaximumReferal'))

const Consultations = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/Consultations'))
const TotalConsultationAllSpeciality = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/TotalConsultationAllSpeciality'))
const TotalConsultationEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/TotalConsultationEachday'))
const MonthwiseConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/MonthwiseConsultation'))
const ConsultationCategoryDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/ConsultationCategoryDoctor'))
const ConsultationCategoryEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/ConsultationCategoryEachday'))
const MonthwiseTrendcategory = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/MonthwiseTrendcategory'))
const TotalConsultationeachSpeciality = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/TotalConsultationeachSpeciality'))
const TotalConsultationSpecialityEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/TotalConsultationSpecialityEachday'))
const MonthwiseConsultationSpeciality = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/MonthwiseConsultationSpeciality'))
const DoctorHighestConsultationMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/DoctorHighestConsultationMonth'))
const DoctorHighestConsultationDay = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/DoctorHighestConsultationDay'))
const DoctorHighestConsultationSpecialityMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/DoctorHighestConsultationSpecialityMonth'))
const DoctorHighestConsultationSpecialityDay = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/DoctorHighestConsultationSpecialityDay'))
const TotalConsultationNotCompleted = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/TotalConsultationNotCompleted'))
const TotalConsultationNotCompletedMonthwise = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Consultations/AllCharts/TotalConsultationNotCompletedMonthwise'))
const TAT = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/TAT/TAT'))
const AverageTATConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/TAT/AllCharts/AverageTATConsultation'))
const MonthWiseAverageTAT = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/TAT/AllCharts/MonthWiseAverageTAT'))
const AverageTATConsultationDay = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/TAT/AllCharts/AverageTATConsultationDay'))
const DoctorHighestConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/TAT/AllCharts/DoctorHighestConsultation'))
const DoctorLowestConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/TAT/AllCharts/DoctorLowestConsultation'))

const IncomeGenerated = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/IncomeGenerated'))
const TotalIncomeDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/AllCharts/TotalIncomeDoctor'))
const CatSubcatIncome = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/AllCharts/Cat&SubcatIncome'))
const AverageIncomeDoctorSpecialitywise = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/AllCharts/AverageIncomeDoctorSpecialitywise'))
const TotalIncomeDoctorEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/AllCharts/TotalIncomeDoctorEachday'))
const DoctorEarnHighestEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/AllCharts/DoctorEarnHighestEachday'))
const DoctorEarnLowestEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/AllCharts/DoctorEarnLowestEachday'))
const MonthWiseIncomeDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/AllCharts/MonthWiseIncomeDoctor'))
const SpecialityWiseIncomeDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/IncomeGenerated/AllCharts/SpecialityWiseIncomeDoctor'))

const FollowUps = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/FollowUps/FollowUps'))
const TotalFollowSpeciality = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/FollowUps/AllCharts/TotalFollowSpeciality'))
const DoctorHighestFollowMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/FollowUps/AllCharts/DoctorHighestFollowMonth'))
const SpecialityWiseFollowup = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/FollowUps/AllCharts/SpecialityWiseFollowup'))
const CreditPoints = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/CreditPoints/CreditPoints'))
const TotalCreditDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/CreditPoints/AllCharts/TotalCreditDoctor'))
const AnalysisCreditEachHead = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/CreditPoints/AllCharts/AnalysisCreditEachHead'))
const MonthWiseCreditDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/CreditPoints/AllCharts/MonthWiseCreditDoctor'))
const DoctorHighestCredit = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/CreditPoints/AllCharts/DoctorHighestCredit'))
const TotalCreditRedeemDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/CreditPoints/AllCharts/TotalCreditRedeemDoctor'))
const MonthwiseCreditRedeemDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/CreditPoints/AllCharts/MonthwiseCreditRedeemDoctor'))
const TotalCreditPointsConvertion = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/CreditPoints/AllCharts/TotalCreditPointsConvertion'))
const PatientReport = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Patient/PatientReport'))
const AveragePatientFeedback = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Patient/AllCharts/AveragePatientFeedback'))
const MonthwisePatientFeedback = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/Patient/AllCharts/MonthwisePatientFeedback'))

const KeyInsights = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/KeyInsights/KeyInsights'))
const NumberApplication = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/KeyInsights/AllCharts/NumberApplication'))
const NumberRegistration = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/KeyInsights/AllCharts/NumberRegistration'))
const CategoryWiseConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/KeyInsights/AllCharts/CategoryWiseConsultation'))
const DailyActiveDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/KeyInsights/AllCharts/DailyActiveDoctor'))
const MonthlyActiveDoctor = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/KeyInsights/AllCharts/MonthlyActiveDoctor'))
const AverageSessionInterval = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorReports/KeyInsights/AllCharts/AverageSessionInterval'))

const DoctorMitraReport = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/DoctorMitraReport'))
const MitraOnboarding = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/Onboarding'))
const MitraTotalDownloads = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/TotalDownloads'))
const MitraMonthWiseDownload = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/MonthWiseDownload'))
const MitraTotalApplicants = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/TotalApplicants'))
const MitraMonthWiseApplication = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/MonthWiseApplication'))
const MitraTotalApplicationPending = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/TotalApplicationPending'))
const MitraTotalRegisteration = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/TotalNumberRegistration'))
const MitraMonthWiseRegistration = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/MonthWiseRegistration'))
const AverageAgeDM = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/AverageAgeDM'))
const GenderDM = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/GenderDM'))
const DurationServedDM = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/DurationServedDM'))
const DemographicDiversityDM = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Onboarding/AllCharts/DemographicDiversityDM'))

const Training = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Training/Training'))
const NumberTrainingMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Training/AllCharts/NumberTrainingMonth'))
const MonthWiseTraining = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Training/AllCharts/MonthWiseTraining'))
const TypeOfTraining = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Training/AllCharts/TypeOfTraining'))
const TypeOfTrainingMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Training/AllCharts/TypeOfTrainingMonth'))
const Recharge = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/Recharge'))
const TotalValueRecharge = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/AllCharts/TotalValueRecharge'))

const IncreaseMonthwiseRecharge = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/AllCharts/IncreaseMonthwiseRecharge'))
const IncreaseMonthwiseRechargeDM = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/AllCharts/IncreaseMonthwiseRechargeDM'))
const AverageRechargeDM = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/AllCharts/AverageRechargeDM'))
const FrequencyRechargeDM = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/AllCharts/FrequencyRechargeDM'))
const SeasonilityRechargeDM = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/AllCharts/SeasonilityRechargeDM'))
const DMHighestRecharge = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/AllCharts/DMHighestRecharge'))
const DMLowestRecharge = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Recharge/AllCharts/DMLowestRecharge'))

const MitraConsultations = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/MitraConsultations'))
const MitraTotalConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/MitraTotalConsultation'))
const MitraConsultationEachDay = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/MitraConsultationEachDay'))
const MitraMonthwiseConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/MitraMonthwiseConsultation'))
const ConsultationEachSpeciality = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/ConsultationEachSpeciality'))
const ConsultationEachSpecialityEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/ConsultationEachSpecialityEachday'))
const MonthWiseConsultationSpeciality = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/MonthWiseConsultationSpeciality'))
const HighestSpecialityConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/HighestSpecialityConsultation'))
const HighestSpecialityConsultationEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/HighestSpecialityConsultationEachday'))
const LowestSpecialityConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/LowestSpecialityConsultation'))
const LowestSpecialityConsultationEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/LowestSpecialityConsultationEachday'))
const DMHighestConsultationMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/DMHighestConsultationMonth'))
const DMHighestConsultationDay = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/DMHighestConsultationDay'))
const DMHighestConsultationSpecialityMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/DMHighestConsultationSpecialityMonth'))
const DMHighestConsultationSpecialityday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/DMHighestConsultationSpecialityday'))
const TotalMitraConsultationNotCompleted = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/TotalConsultationNotCompleted'))
const MonthWiseConsultationNotCompleted = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Consultations/AllCharts/MonthWiseConsultationNotCompleted'))
const MitraTAT = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/TAT/MitraTAT'))
const MitraAverageTAT = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/TAT/AllCharts/MitraAverageTAT'))
const MonthwiseAverageTAT = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/TAT/AllCharts/MonthwiseAverageTAT'))
const AverageMitraTATConsultationDay = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/TAT/AllCharts/AverageTATConsultationDay'))
const DMHighestTATDay = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/TAT/AllCharts/DMHighestTATDay'))
const DMLowestTATDay = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/TAT/AllCharts/DMLowestTATDay'))

const MitraIncomeGenerated = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/IncomeGenerated/MitraIncomeGenerated'))
const TotalIncomeDMEachday = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/IncomeGenerated/AllCharts/TotalIncomeDMEachday'))
const DmHighestIncome = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/IncomeGenerated/AllCharts/DmHighestIncome'))
const DmLowestIncome = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/IncomeGenerated/AllCharts/DmLowestIncome'))
const DmMonthwiseIncome = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/IncomeGenerated/AllCharts/DmMonthwiseIncome'))
const DmSpecialitywiseIncome = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/IncomeGenerated/AllCharts/DmSpecialitywiseIncome'))

const MitraFollowUps = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/FollowUps/MitraFollowUps'))
const MitraTotalFollowMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/FollowUps/AllCharts/MitraTotalFollowMonth'))
const DmHighestFollowMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/FollowUps/AllCharts/DmHighestFollowMonth'))
const DmLowestFollowMonth = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/FollowUps/AllCharts/DmLowestFollowMonth'))

const CreditPointsEarnedMitra = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/CreditPointsEarned/CreditPointsEarnedMitra'))
const DmTotalCreditEarned = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/CreditPointsEarned/AllCharts/DmTotalCreditEarned'))
const DmMonthWiseCredit = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/CreditPointsEarned/AllCharts/DmMonthWiseCredit'))
const DmHighestCredit = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/CreditPointsEarned/AllCharts/DmHighestCredit'))
const DmLowestCredit = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/CreditPointsEarned/AllCharts/DmLowestCredit'))
const DmTotalCreditRedeem = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/CreditPointsEarned/AllCharts/DmTotalCreditRedeem'))
const DmMonthwiseRedeem = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/CreditPointsEarned/AllCharts/DmMonthwiseRedeem'))
const DmTotalcreditConversion = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/CreditPointsEarned/AllCharts/DmTotalcreditConversion'))

const PatientMitraReport = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Patient/PatientMitraReport'))

const MitraAverageFeedbackConsultation = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Patient/AllCharts/MitraAverageFeedbackConsultation'))
const MonthWiseAverageFeedbackMitra = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Patient/AllCharts/MonthWiseAverageFeedbackMitra'))
const TotalreferalMitra = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Patient/AllCharts/TotalreferalMitra'))
const MonthwiseReferalMitra = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/Patient/AllCharts/MonthwiseReferalMitra'))
const KeyInsightsMitra = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/KeyInsights/KeyInsightsMitra'))
const Application6Month = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/KeyInsights/AllCharts/Application6Month'))
const Registration6month = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/KeyInsights/AllCharts/Registration6month'))
const Consultation6month = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/KeyInsights/AllCharts/Consultation6month'))
const Speciality6month = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/KeyInsights/AllCharts/Speciality6month'))
// const Application6Month = React.lazy(()=>import('./views/ControlPanel/Analytics/DoctorMitraReports/KeyInsights/AllCharts/Application6Month'))




const routes = [


  { path: '/CreditPointsEarnedMitra', name: 'CreditPointsEarnedMitra', component: CreditPointsEarnedMitra },
  { path: '/DmTotalCreditEarned', name: 'DmTotalCreditEarned', component: DmTotalCreditEarned },
  { path: '/DmMonthWiseCredit', name: 'DmMonthWiseCredit', component: DmMonthWiseCredit },
  { path: '/DmHighestCredit', name: 'DmHighestCredit', component: DmHighestCredit },
  { path: '/DmLowestCredit', name: 'DmLowestCredit', component: DmLowestCredit },
  { path: '/DmTotalCreditRedeem', name: 'DmTotalCreditRedeem', component: DmTotalCreditRedeem },
  { path: '/DmMonthwiseRedeem', name: 'DmMonthwiseRedeem', component: DmMonthwiseRedeem },
  { path: '/DmTotalcreditConversion', name: 'DmTotalcreditConversion', component: DmTotalcreditConversion },

  { path: '/PatientMitraReport', name: 'PatientMitraReport', component: PatientMitraReport },
  { path: '/MitraAverageFeedbackConsultation', name: 'MitraAverageFeedbackConsultation', component: MitraAverageFeedbackConsultation },
  { path: '/MonthWiseAverageFeedbackMitra', name: 'MonthWiseAverageFeedbackMitra', component: MonthWiseAverageFeedbackMitra },
  { path: '/TotalreferalMitra', name: 'TotalreferalMitra', component: TotalreferalMitra },
  { path: '/MonthwiseReferalMitra', name: 'MonthwiseReferalMitra', component: MonthwiseReferalMitra },
  { path: '/KeyInsightsMitra', name: 'KeyInsightsMitra', component: KeyInsightsMitra },
  { path: '/Application6Month', name: 'Application6Month', component: Application6Month },
  { path: '/Registration6month', name: 'Registration6month', component: Registration6month },
  { path: '/Consultation6month', name: 'Consultation6month', component: Consultation6month },
  { path: '/Speciality6month', name: 'Speciality6month', component: Speciality6month },


  

























  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/doctor', name: 'Doctor', component: Doctor },
  { path: '/editDoctor/:id', name: 'Doctor-Edit', component: EditDoctor },

  { path: '/verifyDoctor', name: 'Verify Doctor', component: VerifyDoctor },
  { path: '/verifyDoctors/:id', name: 'View New Doctor', component: ApproveDoctor },
  { path: '/addDoctorCategory', name: 'View New Doctor', component: AddDoctorCategory },

  { path: '/doctorMitra', name: 'Doctor Mitra', component: DoctorMitra },
  { path: '/editDoctorMitra/:id', name: 'Doctor Mitra Edit', component: DoctorMitraEdit },
  { path: '/blog/category', name: 'Category', component: Category },
  { path: '/blog/childCategory', name: 'CHild Category', component: ChildCategory },
  { path: '/blog/subCategory', name: 'Sub Category', component: SubCategory },

  { path: '/Verification', name: 'Verification', component: Verification },
  { path: '/RegistrationForm', name: 'RegistrationForm', component: RegistrationForm },
  { path: '/SelectCatagory', name: 'SelectCatagory', component: SelectCatagory },
  { path: '/OnlineDoctor', name: 'OnlineDoctor', component: OnlineDoctor },
  { path: '/AllDoctors', name: 'AllDoctors', component: AllDoctors },
  { path: '/RegisterDoctor', name: 'RegisterDoctor', component: RegisterDoctor },
  { path: '/Patient', name: 'Patient', component: Patient },


  { path: '/AllMitradoctor', name: 'AllMitradoctor', component: AllMitradoctor },
  { path: '/MitraVerification', name: 'MitraVerification', component: MitraVerification },
  { path: '/MitraRegistrationForm', name: 'MitraRegistrationForm', component: MitraRegistrationForm },
  { path: '/MitraSelectCatagory', name: 'MitraSelectCatagory', component: MitraSelectCatagory },
  { path: '/MitraOnlineDoctor', name: 'MitraOnlineDoctor', component: MitraOnlineDoctor },
  { path: '/MitraRegisterDoctor', name: 'MitraRegisterDoctor', component: MitraRegisterDoctor },


  { path: '/PatientDetail', name: 'PatientDetail', component: PatientDetail },
  { path: '/ControlDashboard', name: 'ControlDashboard', component: ControlDashboard },
  { path: '/SpecialityMaster', name: 'SpecialityMaster', component: SpecialityMaster },
  { path: '/ComplaintMaster', name: 'ComplaintMaster', component: ComplaintMaster },
  { path: '/MedicalCollege', name: 'MedicalCollege', component: MedicalCollege },
  { path: '/MedicalDegreeMaster', name: 'MedicalDegreeMaster', component: MedicalDegreeMaster },
  { path: '/HealthWorker', name: 'HealthWorker', component: HealthWorker },
  { path: '/DoctorCategory', name: 'DoctorCategory', component: DoctorCategory },
  { path: '/DoctorSubcategory', name: 'DoctorSubcategory', component: DoctorSubcategory },
  { path: '/DistrictMaster', name: 'DistrictMaster', component: DistrictMaster },
  { path: '/StateMaster', name: 'StateMaster', component: StateMaster },
  { path: '/DocumentMaster', name: 'DocumentMaster', component: DocumentMaster },

  { path: '/AddSpeciality', name: 'AddSpeciality', component: AddSpeciality },
  { path: '/AddComplaint', name: 'AddComplaint', component: AddComplaint },
  { path: '/AddMedicalCollege', name: 'AddMedicalCollege', component: AddMedicalCollege },
  { path: '/AddMedicalDegree', name: 'AddMedicalDegree', component: AddMedicalDegree },
  { path: '/AddHealthWorker', name: 'AddHealthWorker', component: AddHealthWorker },
  { path: '/AddDoctorcategory', name: 'AddDoctorcategory', component: AddDoctorcategory },
  { path: '/AddDoctorsubcategory', name: 'AddDoctorsubcategory', component: AddDoctorsubcategory },
  { path: '/AddDistrictMaster', name: 'AddDistrictMaster', component: AddDistrictMaster },
  { path: '/AddStateMaster', name: 'AddStateMaster', component: AddStateMaster },

  { path: '/ChatbotMaster', name: 'ChatbotMaster', component: ChatbotMaster },
  { path: '/FeesMaster', name: 'FeesMaster', component: FeesMaster },
  { path: '/DoctorMitraService', name: 'DoctorMitraService', component: DoctorMitraService },
  { path: '/DoctorFeesMaster', name: 'DoctorFeesMaster', component: DoctorFeesMaster },
  { path: '/FAQ', name: 'FAQ', component: FAQ },
  { path: '/UserRole', name: 'UserRole', component: UserRole },

  { path: '/ChatBoxAssistant', name: 'ChatBoxAssistant', component: ChatBoxAssistant },
  { path: '/AddFeesMaster', name: 'AddFeesMaster', component: AddFeesMaster },
  { path: '/AddDoctorMitraService', name: 'AddDoctorMitraService', component: AddDoctorMitraService },
  { path: '/AddDoctorFeesMaster', name: 'AddDoctorFeesMaster', component: AddDoctorFeesMaster },
  { path: '/AddQuery', name: 'AddQuery', component: AddQuery },

  { path: '/PrescriptionMaster', name: 'PrescriptionMaster', component: PrescriptionMaster },
  { path: '/DiagonisMaster', name: 'DiagonisMaster', component: DiagonisMaster },
  { path: '/DosageMaster', name: 'DosageMaster', component: DosageMaster },
  { path: '/AllergiesMaster', name: 'AllergiesMaster', component: AllergiesMaster },
  { path: '/DurationMaster', name: 'DurationMaster', component: DurationMaster },
  { path: '/AddDiagonisMaster', name: 'AddDiagonisMaster', component: AddDiagonisMaster },
  { path: '/AddDosageMaster', name: 'AddDosageMaster', component: AddDosageMaster },
  { path: '/AddAllergiesMaster', name: 'AddAllergiesMaster', component: AddAllergiesMaster },
  { path: '/AddDurationMaster', name: 'AddDurationMaster', component: AddDurationMaster },

  { path: '/AddQuestion', name: 'AddQuestion', component: AddQuestion },
  { path: '/AddUserRole', name: 'AddUserRole', component: AddUserRole },
  { path: '/DoctorAccount', name: 'DoctorAccount', component: DoctorAccount },
  { path: '/DoctorMitraAccount', name: 'DoctorMitraAccount', component: DoctorMitraAccount },
  { path: '/PatientAccount', name: 'PatientAccount', component: PatientAccount },
  { path: '/TransectionHistoryAccount', name: 'TransectionHistoryAccount', component: TransectionHistoryAccount },
  { path: '/CurrentMonthRecords', name: 'CurrentMonthRecords', component: CurrentMonthRecords },

  { path: '/ViewDetailAccount', name: 'ViewDetailAccount', component: ViewDetailAccount },
  { path: '/AddPayment', name: 'AddPayment', component: AddPayment },
  { path: '/TransectionHistoryDoctor', name: 'TransectionHistoryDoctor', component: TransectionHistoryDoctor },
  { path: '/CurrentMonthRecordsMitra', name: 'CurrentMonthRecordsMitra', component: CurrentMonthRecordsMitra },
  { path: '/ViewDetailMitra', name: 'ViewDetailMitra', component: ViewDetailMitra },
  { path: '/AddPaymentMitra', name: 'AddPaymentMitra', component: AddPaymentMitra },
  { path: '/RechargeMgmt', name: 'RechargeMgmt', component: RechargeMgmt },
  { path: '/AddRecharge', name: 'AddRecharge', component: AddRecharge },
  { path: '/RechargeViewDetail', name: 'RechargeViewDetail', component: RechargeViewDetail },
  { path: '/SubscriptionManagement', name: 'SubscriptionManagement', component: SubscriptionManagement },
  { path: '/AddNewSubscription', name: 'AddNewSubscription', component: AddNewSubscription },
  { path: '/TransectionHistoryMitra', name: 'TransectionHistoryMitra', component: TransectionHistoryMitra },
  { path: '/Pharmecy', name: 'Pharmecy', component: Pharmecy },
  { path: '/ViewPharmecy', name: 'ViewPharmecy', component: ViewPharmecy },
  { path: '/AddNewMedicine', name: 'AddNewMedicine', component: AddNewMedicine },
  { path: '/InvestigationLab', name: 'InvestigationLab', component: InvestigationLab },
  { path: '/ViewInvestigation', name: 'ViewInvestigation', component: ViewInvestigation },
  { path: '/AddInvestigation', name: 'AddInvestigation', component: AddInvestigation },

  

  { path: '/TheCureBlog', name: 'TheCureBlog', component: TheCureBlog },
  { path: '/AddTheCureBlog', name: 'AddTheCureBlog', component: AddTheCureBlog },
  { path: '/ViewTheCureBlog', name: 'ViewTheCureBlog', component: ViewTheCureBlog },
  { path: '/ViewSpeciality', name: 'ViewSpeciality', component: ViewSpeciality },
  { path: '/ViewComplaint', name: 'ViewComplaint', component: ViewComplaint },
  { path: '/ViewFees', name: 'ViewFees', component: ViewFees },
  { path: '/ViewDoctorMitraService', name: 'ViewDoctorMitraService', component: ViewDoctorMitraService },
  { path: '/ViewDoctorFees', name: 'ViewDoctorFees', component: ViewDoctorFees },
  { path: '/ViewFAQ', name: 'ViewFAQ', component: ViewFAQ },


  { path: '/DoctorReview', name: 'DoctorReview', component: DoctorReview },
  { path: '/ViewDoctorReview', name: 'ViewDoctorReview', component: ViewDoctorReview },
  { path: '/DoctorMitraReview', name: 'DoctorMitraReview', component: DoctorMitraReview },
  { path: '/ViewDoctorMitraReview', name: 'ViewDoctorMitraReview', component: ViewDoctorMitraReview },

  { path: '/Accounts', name: 'Accounts', component: Accounts },
  { path: '/Employee', name: 'Employee', component: Employee },
  { path: '/AddEmployee', name: 'AddEmployee', component: AddEmployee },
  { path: '/ViewEmployee', name: 'ViewEmployee', component: ViewEmployee },
  { path: '/Appraisal', name: 'Appraisal', component: Appraisal },
  { path: '/AddAppraisal', name: 'AddAppraisal', component: AddAppraisal },
  { path: '/ViewAppraisal', name: 'ViewAppraisal', component: ViewAppraisal },
  { path: '/EmployeeFeedback', name: 'EmployeeFeedback', component: EmployeeFeedback },
  { path: '/AddFeedback', name: 'AddFeedback', component: AddFeedback },
  { path: '/ViewFeedback', name: 'ViewFeedback', component: ViewFeedback },
  { path: '/SalaryMgmt', name: 'SalaryMgmt', component: SalaryMgmt },
  { path: '/CreditSalary', name: 'CreditSalary', component: CreditSalary },
  { path: '/ViewSalaryMgmt', name: 'ViewSalaryMgmt', component: ViewSalaryMgmt },
  { path: '/Xpost', name: 'Xpost', component: Xpost },
  { path: '/XpostSubscriptionMgmt', name: 'XpostSubscriptionMgmt', component: XpostSubscriptionMgmt },
  { path: '/ViewSubscriptionMgmt', name: 'ViewSubscriptionMgmt', component: ViewSubscriptionMgmt },
  { path: '/AddSubscriptionMgmt', name: 'AddSubscriptionMgmt', component: AddSubscriptionMgmt },
  { path: '/XpostTransectionHistory', name: 'XpostTransectionHistory', component: XpostTransectionHistory },
  
  { path: '/DoctorCreditPoint', name: 'DoctorCreditPoint', component: DoctorCreditPoint },
  { path: '/AddDoctorCreditPoint', name: 'AddDoctorCreditPoint', component: AddDoctorCreditPoint },
  { path: '/ViewDoctorCreditPoint', name: 'ViewDoctorCreditPoint', component: ViewDoctorCreditPoint },
  { path: '/DoctorMitraCreditPoint', name: 'DoctorMitraCreditPoint', component: DoctorMitraCreditPoint },
  { path: '/AddDoctorMitraCreditPoint', name: 'AddDoctorMitraCreditPoint', component: AddDoctorMitraCreditPoint },
  { path: '/ViewDoctorMitraCreditPoint', name: 'ViewDoctorMitraCreditPoint', component: ViewDoctorMitraCreditPoint },
  { path: '/XpostVideo', name: 'XpostVideo', component: XpostVideo },
  { path: '/DoctorAppReview', name: 'DoctorAppReview', component: DoctorAppReview },
  { path: '/DoctorMitraAppReview', name: 'DoctorMitraAppReview', component: DoctorMitraAppReview },
  { path: '/PatientAppReview', name: 'PatientAppReview', component: PatientAppReview },


  { path: '/ExpenseMgmtMaster', name: 'ExpenseMgmtMaster', component: ExpenseMgmtMaster },
  { path: '/AddExpenseMaster', name: 'AddExpenseMaster', component: AddExpenseMaster },
  { path: '/ViewExpenseMaster', name: 'ViewExpenseMaster', component: ViewExpenseMaster },
  { path: '/XpostMaster', name: 'XpostMaster', component: XpostMaster },
  { path: '/AddXpost', name: 'AddXpost', component: AddXpost },
  { path: '/ViewXpost', name: 'ViewXpost', component: ViewXpost },

  { path: '/ExpensesMgmt', name: 'ExpensesMgmt', component: ExpensesMgmt },
  { path: '/AddExpense', name: 'AddExpense', component: AddExpense },

  { path: '/Marketing', name: 'Marketing', component: Marketing },
  { path: '/TheXPost', name: 'TheXPost', component: TheXPost },
  { path: '/ViewXPost', name: 'ViewXPost', component: ViewXPost },
  { path: '/AddXPost', name: 'AddXPost', component: AddXPost },
  { path: '/EditXpostTable', name: 'EditXpostTable', component: EditXpostTable },
  { path: '/XpressWorld', name: 'XpressWorld', component: XpressWorld },
  { path: '/AddXpressWorld', name: 'AddXpressWorld', component: AddXpressWorld },
  { path: '/EditXpressWorld', name: 'EditXpressWorld', component: EditXpressWorld },
  { path: '/MedicalDictionary', name: 'MedicalDictionary', component: MedicalDictionary },
  { path: '/AddMedicalDictionary', name: 'AddMedicalDictionary', component: AddMedicalDictionary },
  { path: '/EditMedicalDictionary', name: 'EditMedicalDictionary', component: EditMedicalDictionary },
  { path: '/InspirationalStories', name: 'InspirationalStories', component: InspirationalStories },
{ path: '/AddInspirationalStories', name: 'AddInspirationalStories', component: AddInspirationalStories },
{ path: '/EditInspirationalStories', name: 'EditInspirationalStories', component: EditInspirationalStories },
{ path: '/TheXChannel', name: 'TheXChannel', component: TheXChannel },
{ path: '/AddTheXChannel', name: 'AddTheXChannel', component: AddTheXChannel },
{ path: '/EditTheXChannel', name: 'EditTheXChannel', component: EditTheXChannel },
{ path: '/HealthInformatics', name: 'HealthInformatics', component: HealthInformatics },
{ path: '/AddHealthInformatics', name: 'AddHealthInformatics', component: AddHealthInformatics },
{ path: '/EditHealthInformatics', name: 'EditHealthInformatics', component: EditHealthInformatics },

{ path: '/Analytics', name: 'Analytics', component: Analytics },
{ path: '/DoctorReport', name: 'DoctorReport', component: DoctorReport },
{ path: '/Onboarding', name: 'Onboarding', component: Onboarding },
{ path: '/TotalDownloads', name: 'TotalDownloads', component: TotalDownloads },
{ path: '/MonthWiseDownload', name: 'MonthWiseDownload', component: MonthWiseDownload },
{ path: '/TotalApplicants', name: 'TotalApplicants', component: TotalApplicants },
{ path: '/MonthWiseApplication', name: 'MonthWiseApplication', component: MonthWiseApplication },
{ path: '/TotalApplicationPending', name: 'TotalApplicationPending', component: TotalApplicationPending },
{ path: '/TotalNumberRegDoctor', name: 'TotalNumberRegDoctor', component: TotalNumberRegDoctor },
{ path: '/MonthWiseRegistration', name: 'MonthWiseRegistration', component: MonthWiseRegistration },
{ path: '/AgeOfDoctor', name: 'AgeOfDoctor', component: AgeOfDoctor },
{ path: '/GenderDiversityDr', name: 'GenderDiversityDr', component: GenderDiversityDr },
{ path: '/DurationServedDr', name: 'DurationServedDr', component: DurationServedDr },
{ path: '/DemographicDoctor', name: 'DemographicDoctor', component: DemographicDoctor },
{ path: '/RegisterDrAllCategories', name: 'RegisterDrAllCategories', component: RegisterDrAllCategories },
{ path: '/RegisteredMBBSdr', name: 'RegisteredMBBSdr', component: RegisteredMBBSdr },
{ path: '/RegisteredSpecialistDoctor', name: 'RegisteredSpecialistDoctor', component: RegisteredSpecialistDoctor },
{ path: '/RegisteredSuperSpecialistdoctor', name: 'RegisteredSuperSpecialistdoctor', component: RegisteredSuperSpecialistdoctor },
{ path: '/DoctorRegisterReferal', name: 'DoctorRegisterReferal', component: DoctorRegisterReferal },
{ path: '/DoctorMaximumReferal', name: 'DoctorMaximumReferal', component: DoctorMaximumReferal },

{ path: '/Consultations', name: 'Consultations', component: Consultations },
{ path: '/TotalConsultationAllSpeciality', name: 'TotalConsultationAllSpeciality', component: TotalConsultationAllSpeciality },
{ path: '/TotalConsultationEachday', name: 'TotalConsultationEachday', component: TotalConsultationEachday },
{ path: '/MonthwiseConsultation', name: 'MonthwiseConsultation', component: MonthwiseConsultation },
{ path: '/ConsultationCategoryDoctor', name: 'ConsultationCategoryDoctor', component: ConsultationCategoryDoctor },
{ path: '/ConsultationCategoryEachday', name: 'ConsultationCategoryEachday', component: ConsultationCategoryEachday },
{ path: '/MonthwiseTrendcategory', name: 'MonthwiseTrendcategory', component: MonthwiseTrendcategory },
{ path: '/TotalConsultationeachSpeciality', name: 'TotalConsultationeachSpeciality', component: TotalConsultationeachSpeciality },
{ path: '/TotalConsultationSpecialityEachday', name: 'TotalConsultationSpecialityEachday', component: TotalConsultationSpecialityEachday },
{ path: '/MonthwiseConsultationSpeciality', name: 'MonthwiseConsultationSpeciality', component: MonthwiseConsultationSpeciality },
{ path: '/DoctorHighestConsultationMonth', name: 'DoctorHighestConsultationMonth', component: DoctorHighestConsultationMonth },
{ path: '/DoctorHighestConsultationDay', name: 'DoctorHighestConsultationDay', component: DoctorHighestConsultationDay },
{ path: '/DoctorHighestConsultationSpecialityMonth', name: 'DoctorHighestConsultationSpecialityMonth', component: DoctorHighestConsultationSpecialityMonth },
{ path: '/DoctorHighestConsultationSpecialityDay', name: 'DoctorHighestConsultationSpecialityDay', component: DoctorHighestConsultationSpecialityDay },
{ path: '/TotalConsultationNotCompleted', name: 'TotalConsultationNotCompleted', component: TotalConsultationNotCompleted },
{ path: '/TotalConsultationNotCompletedMonthwise', name: 'TotalConsultationNotCompletedMonthwise', component: TotalConsultationNotCompletedMonthwise },

{ path: '/TAT', name: 'TAT', component: TAT },
{ path: '/AverageTATConsultation', name: 'AverageTATConsultation', component: AverageTATConsultation },
{ path: '/MonthWiseAverageTAT', name: 'MonthWiseAverageTAT', component: MonthWiseAverageTAT },
{ path: '/AverageTATConsultationDay', name: 'AverageTATConsultationDay', component: AverageTATConsultationDay },
{ path: '/DoctorHighestConsultation', name: 'DoctorHighestConsultation', component: DoctorHighestConsultation },
{ path: '/DoctorLowestConsultation', name: 'DoctorLowestConsultation', component: DoctorLowestConsultation },


{ path: '/IncomeGenerated', name: 'IncomeGenerated', component: IncomeGenerated },
{ path: '/TotalIncomeDoctor', name: 'TotalIncomeDoctor', component: TotalIncomeDoctor },
{ path: '/CatSubcatIncome', name: 'CatSubcatIncome', component: CatSubcatIncome },
 { path: '/AverageIncomeDoctorSpecialitywise', name: 'AverageIncomeDoctorSpecialitywise', component: AverageIncomeDoctorSpecialitywise },
  { path: '/TotalIncomeDoctorEachday', name: 'TotalIncomeDoctorEachday', component: TotalIncomeDoctorEachday },
   { path: '/DoctorEarnHighestEachday', name: 'DoctorEarnHighestEachday', component: DoctorEarnHighestEachday },
    { path: '/DoctorEarnLowestEachday', name: 'DoctorEarnLowestEachday', component: DoctorEarnLowestEachday },
     { path: '/MonthWiseIncomeDoctor', name: 'MonthWiseIncomeDoctor', component: MonthWiseIncomeDoctor },
      { path: '/SpecialityWiseIncomeDoctor', name: 'SpecialityWiseIncomeDoctor', component: SpecialityWiseIncomeDoctor },

      { path: '/FollowUps', name: 'FollowUps', component: FollowUps },
      { path: '/TotalFollowSpeciality', name: 'TotalFollowSpeciality', component: TotalFollowSpeciality },
      { path: '/DoctorHighestFollowMonth', name: 'DoctorHighestFollowMonth', component: DoctorHighestFollowMonth },
      { path: '/SpecialityWiseFollowup', name: 'SpecialityWiseFollowup', component: SpecialityWiseFollowup },
      { path: '/CreditPoints', name: 'CreditPoints', component: CreditPoints },
      { path: '/TotalCreditDoctor', name: 'TotalCreditDoctor', component: TotalCreditDoctor },
      { path: '/AnalysisCreditEachHead', name: 'AnalysisCreditEachHead', component: AnalysisCreditEachHead },
      { path: '/MonthWiseCreditDoctor', name: 'MonthWiseCreditDoctor', component: MonthWiseCreditDoctor },
      { path: '/DoctorHighestCredit', name: 'DoctorHighestCredit', component: DoctorHighestCredit },
      { path: '/TotalCreditRedeemDoctor', name: 'TotalCreditRedeemDoctor', component: TotalCreditRedeemDoctor },
      { path: '/MonthwiseCreditRedeemDoctor', name: 'MonthwiseCreditRedeemDoctor', component: MonthwiseCreditRedeemDoctor },
      { path: '/TotalCreditPointsConvertion', name: 'TotalCreditPointsConvertion', component: TotalCreditPointsConvertion },

      { path: '/PatientReport', name: 'PatientReport', component: PatientReport },
      { path: '/AveragePatientFeedback', name: 'AveragePatientFeedback', component: AveragePatientFeedback },
      { path: '/MonthwisePatientFeedback', name: 'MonthwisePatientFeedback', component: MonthwisePatientFeedback },
      { path: '/KeyInsights', name: 'KeyInsights', component: KeyInsights },
      { path: '/NumberApplication', name: 'NumberApplication', component: NumberApplication },
      { path: '/NumberRegistration', name: 'NumberRegistration', component: NumberRegistration },
      { path: '/CategoryWiseConsultation', name: 'CategoryWiseConsultation', component: CategoryWiseConsultation },
      { path: '/DailyActiveDoctor', name: 'DailyActiveDoctor', component: DailyActiveDoctor },
      { path: '/MonthlyActiveDoctor', name: 'MonthlyActiveDoctor', component: MonthlyActiveDoctor },
      { path: '/AverageSessionInterval', name: 'AverageSessionInterval', component: AverageSessionInterval },

      { path: '/DoctorMitraReport', name: 'DoctorMitraReport', component: DoctorMitraReport },
      { path: '/MitraOnboarding', name: 'MitraOnboarding', component: MitraOnboarding },
      { path: '/MitraTotalDownloads', name: 'MitraTotalDownloads', component: MitraTotalDownloads },
      { path: '/MitraMonthWiseDownload', name: 'MitraMonthWiseDownload', component: MitraMonthWiseDownload },
      { path: '/MitraTotalApplicants', name: 'MitraTotalApplicants', component: MitraTotalApplicants },
      { path: '/MitraMonthWiseApplication', name: 'MitraMonthWiseApplication', component: MitraMonthWiseApplication },
      { path: '/MitraTotalApplicationPending', name: 'MitraTotalApplicationPending', component: MitraTotalApplicationPending },
      { path: '/MitraTotalRegisteration', name: 'MitraTotalRegisteration', component: MitraTotalRegisteration },
      { path: '/MitraMonthWiseRegistration', name: 'MitraMonthWiseRegistration', component: MitraMonthWiseRegistration },
      { path: '/AverageAgeDM', name: 'AverageAgeDM', component: AverageAgeDM },
      { path: '/GenderDM', name: 'GenderDM', component: GenderDM },
      { path: '/DurationServedDM', name: 'DurationServedDM', component: DurationServedDM },
      { path: '/DemographicDiversityDM', name: 'DemographicDiversityDM', component: DemographicDiversityDM },
      
      { path: '/Training', name: 'Training', component: Training },
      { path: '/NumberTrainingMonth', name: 'NumberTrainingMonth', component: NumberTrainingMonth },
      { path: '/MonthWiseTraining', name: 'MonthWiseTraining', component: MonthWiseTraining },
      { path: '/TypeOfTraining', name: 'TypeOfTraining', component: TypeOfTraining },
      { path: '/TypeOfTrainingMonth', name: 'TypeOfTrainingMonth', component: TypeOfTrainingMonth },
      { path: '/Recharge', name: 'Recharge', component: Recharge },
      { path: '/TotalValueRecharge', name: 'TotalValueRecharge', component: TotalValueRecharge },
      { path: '/IncreaseMonthwiseRecharge', name: 'IncreaseMonthwiseRecharge', component: IncreaseMonthwiseRecharge },
      { path: '/IncreaseMonthwiseRechargeDM', name: 'IncreaseMonthwiseRechargeDM', component: IncreaseMonthwiseRechargeDM },
      { path: '/AverageRechargeDM', name: 'AverageRechargeDM', component: AverageRechargeDM },
      { path: '/FrequencyRechargeDM', name: 'FrequencyRechargeDM', component: FrequencyRechargeDM },
      { path: '/SeasonilityRechargeDM', name: 'SeasonilityRechargeDM', component: SeasonilityRechargeDM },
      { path: '/DMHighestRecharge', name: 'DMHighestRecharge', component: DMHighestRecharge },
      { path: '/DMLowestRecharge', name: 'DMLowestRecharge', component: DMLowestRecharge },

      { path: '/MitraConsultations', name: 'MitraConsultations', component: MitraConsultations },
      { path: '/MitraTotalConsultation', name: 'MitraTotalConsultation', component: MitraTotalConsultation },
      { path: '/MitraConsultationEachDay', name: 'MitraConsultationEachDay', component: MitraConsultationEachDay },
      { path: '/MitraMonthwiseConsultation', name: 'MitraMonthwiseConsultation', component: MitraMonthwiseConsultation },
      { path: '/ConsultationEachSpeciality', name: 'ConsultationEachSpeciality', component: ConsultationEachSpeciality },
      { path: '/ConsultationEachSpecialityEachday', name: 'ConsultationEachSpecialityEachday', component: ConsultationEachSpecialityEachday },
      { path: '/MonthWiseConsultationSpeciality', name: 'MonthWiseConsultationSpeciality', component: MonthWiseConsultationSpeciality },
      { path: '/HighestSpecialityConsultation', name: 'HighestSpecialityConsultation', component: HighestSpecialityConsultation },
      { path: '/HighestSpecialityConsultationEachday', name: 'HighestSpecialityConsultationEachday', component: HighestSpecialityConsultationEachday },
      { path: '/LowestSpecialityConsultation', name: 'LowestSpecialityConsultation', component: LowestSpecialityConsultation },
      { path: '/LowestSpecialityConsultationEachday', name: 'LowestSpecialityConsultationEachday', component: LowestSpecialityConsultationEachday },
      { path: '/DMHighestConsultationMonth', name: 'DMHighestConsultationMonth', component: DMHighestConsultationMonth },
      { path: '/DMHighestConsultationDay', name: 'DMHighestConsultationDay', component: DMHighestConsultationDay },
      { path: '/DMHighestConsultationSpecialityMonth', name: 'DMHighestConsultationSpecialityMonth', component: DMHighestConsultationSpecialityMonth },
      { path: '/DMHighestConsultationSpecialityday', name: 'DMHighestConsultationSpecialityday', component: DMHighestConsultationSpecialityday },
      { path: '/TotalMitraConsultationNotCompleted', name: 'TotalMitraConsultationNotCompleted', component: TotalMitraConsultationNotCompleted },
      { path: '/MonthWiseConsultationNotCompleted', name: 'MonthWiseConsultationNotCompleted', component: MonthWiseConsultationNotCompleted },

      { path: '/MitraTAT', name: 'MitraTAT', component: MitraTAT },
      { path: '/MitraAverageTAT', name: 'MitraAverageTAT', component: MitraAverageTAT },
      { path: '/MonthwiseAverageTAT', name: 'MonthwiseAverageTAT', component: MonthwiseAverageTAT },
      { path: '/AverageMitraTATConsultationDay', name: 'AverageMitraTATConsultationDay', component: AverageMitraTATConsultationDay },
      { path: '/DMHighestTATDay', name: 'DMHighestTATDay', component: DMHighestTATDay },
      { path: '/DMLowestTATDay', name: 'DMLowestTATDay', component: DMLowestTATDay },
      { path: '/MitraIncomeGenerated', name: 'MitraIncomeGenerated', component: MitraIncomeGenerated },
      { path: '/TotalIncomeDMEachday', name: 'TotalIncomeDMEachday', component: TotalIncomeDMEachday },
      { path: '/DmHighestIncome', name: 'DmHighestIncome', component: DmHighestIncome },
      { path: '/DmLowestIncome', name: 'DmLowestIncome', component: DmLowestIncome },
      { path: '/DmMonthwiseIncome', name: 'DmMonthwiseIncome', component: DmMonthwiseIncome },
      { path: '/DmSpecialitywiseIncome', name: 'DmSpecialitywiseIncome', component: DmSpecialitywiseIncome },
      { path: '/MitraFollowUps', name: 'MitraFollowUps', component: MitraFollowUps },
      { path: '/MitraTotalFollowMonth', name: 'MitraTotalFollowMonth', component: MitraTotalFollowMonth },
      { path: '/DmHighestFollowMonth', name: 'DmHighestFollowMonth', component: DmHighestFollowMonth },
      { path: '/DmLowestFollowMonth', name: 'DmLowestFollowMonth', component: DmLowestFollowMonth },























  //
];

export default routes;
