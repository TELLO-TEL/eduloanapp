var mongoose = require('../configs/mongoose');

var Schema = mongoose.Schema;

var HP = new Schema({
  cdSurname: {
    type: String
  },
  cdName: {
    type: String
  },
  cdIdNumber: {
    type: String
  },
  cdHomeTelephone: {
    type: String
  },
  cdPhysicalAddress: {
    type: String
  },
  cdPhysicalAddress2: {
    type: String
  },
  cdPostalAddress: {
    type: String
  },
  cdPostalAddress2: {
    type: String
  },
  cdEmployer: {
    type: String
  },
  cdOccupation: {
    type: String
  },
  cdYearsInService: {
    type: String
  },
  cdEmployeeNumber: {
    type: String
  },
  cdWorkTelephone: {
    type: String
  },
  cdEmail: {
    type: String
  },
  cdIncomeStatus: {
    type: String
  },
  sdSurname: {
    type: String
  },
  sdFirstNames: {
    type: String
  },
  sdIdNumber: {
    type: String
  },
  sdStudentNumber: {
    type: String
  },
  sdWorkTelephone: {
    type: String
  },
  sdEmail: {
    type: String
  },
  sdMobileTelephone: {
    type: String
  },
  sdCourse: {
    type: String
  },
  sdYearOfStudy: {
    type: String
  },
  sdInstitution: {
    type: String
  },
  sdFaculty: {
    type: String
  },
  sdApplyingFor: {
    type: String
  },
  sdGender: {
    type: String
  },
  sdMaritalStatus: {
    type: String
  },
  sdNumberOfDependants: {
    type: String
  },
  idGrossSalary: {
    type: String
  },
  idNetSalary: {
    type: String
  },
  idNetSalaryComment: {
    type: String
  },
  idOtherIncome: {
    type: String
  },
  idOtherIncomeComment: {
    type: String
  },
  idMonthlyIncome: {
    type: String
  },
  idMonthlyIncomeComment: {
    type: String
  },
  idMonthlyExpenses: {
    type: String
  },
  idMonthlyExpensesComment: {
    type: String
  },
  idMonthlyDisposableIncome: {
    type: String
  },
  idMonthlyDisposableIncomeComment: {
    type: String
  },
  cdPhysicalAddressCode: {
    type: String
  },
  cdPostalAddressCode: {
    type: String
  },
  qLoanAmount: {
    type: String
  },
  qInterest: {
    type: String
  },
  qInterestRate: {
    type: String
  },
  qMonthlyServiceFees: {
    type: String
  },
  qAmountRepayable: {
    type: String
  },
  qNumberOfInstalments: {
    type: String
  },
  qMonthlyInstalment: {
    type: String
  },
  qAnnualEffectiveRate: {
    type: String
  },
  qLoanType: {
    type: String
  },
  qCommissionAgentCode: {
    type: String
  },
  qAgentName: {
    type: String
  },
  qAgentId: {
    type: String
  },
  daBank: {
    type: String
  },
  daBranchCode: {
    type: String
  },
  daAccountNumber: {
    type: String
  },
  daDeductionDay: {
    type: String
  },
  daDeductionDate: {
    type: String
  },
  marketingOptions1: {
    type: String
  },
  marketingOptions2: {
    type: String
  },
  marketingOptions3: {
    type: String
  },
  cdServiceProvider: {
    type: String
  },
  sdHomeTelephone: {
    type: String
  },
  sdCourseLength: {
    type: String
  },
  qInitiationFee: {
    type: String
  },signature:{type:String},
  daAccountType: {
    type: String
  },approved:{
    type:Boolean,
    default:false

  }
,
  rejected: {
    type: Boolean,
    default: false
  },
  edited: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now()
  },
  devices: {
    type: String
  }

});

module.exports = mongoose.model('HP', HP);