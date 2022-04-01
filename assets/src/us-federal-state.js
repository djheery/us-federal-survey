const US_FEDERAL_STATE = (() => {
  const state = {
    CQ: 0,
    NQ: 1,
    PQ: [],
    PA: [],
    Qualifies: [],
  }

  const incomeRequirementState = {
    age: null, 
    spouseAge: null,
    filingStatus: null
  }

  const brackets = {
    single: {
      under65: 12400,
      over65: 14050,
    },
    headOfHouse: {
      under65: 18650,
      over65: 20300,
    },
    marriedJoint: {
      under65Both: 24800,
      over65One: 26100,
      over65Both: 27400 
    },
    widower: {
      under65: 24800,
      over65: 26100
    },
    marriedSeparate: 5,
    selfEmployed: 400,
  }

  const questions = [
    {
      id: -1,
      QC: 'You\'ve finished our survey we hope it helped you, if you have any issues regarding UK tax do not hesitate to <a href="https://bambridgeaccountants.com/contact-us" target="_blank" class="blog-link">contact us</a>.',
      NQ: [-1],
      PQ: state.PQ,
      PA: state.PA,
      Qualifies: state.Qualifies
    },
    {
      id: 1,
      QC: 'Which age bracket do you fit into?',
      options: ['Under 65', 'Over 65'],
      NQ: [2],
      selectBox: false,
      input: false,
      Qualifies: [false, false],
      statement: ''
    },
    {
      id: 2,
      QC: 'What is your filing status?',
      options: ['Single', 'Married filing separately', 'Head of Household', 'Married Filing Jointly', 'Qualifying Widow[er] with Dependent Children', 'Self Employment'],
      selectBox: true,
      input: false,
      NQ: [3, 21],
      Qualifies: [false, false],
      statement:''
    },
    {
      id: 121,
      QC: 'Which age brackets is your spouse?',
      options: ['Under 65', 'Over 65'],
      selectBox: false,
      input: false,
      NQ: [3],
      selectBox: false,
      Qualifies: [false, false],
      input: false, 

    },
    {
      id: 3,
      QC: 'What is your average annual Income?',
      options: null,
      selectBox: false,
      input: true,
      NQ: [4],
      Qualifies: [true, false],
      statement: '',
    },
    {
      id: 4,
      QC: 'Do you owe tax on a health savings account or a retirement plan',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [5],
      Qualifies: [true, false],
      statement: 'If you owe tax on a health savings account or retirement plan you should file a Federal Tax Return.'
    },
    {
      id: 5,
      QC: 'Do you owe Alternative Minimum Tax?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [6],
      Qualifies: [true, false],
      statement: 'If you owe Alternative Minimum Tax you should file a Federal Tax Return.'
    },
    {
      id: 6,
      QC: 'Do you owe household employment taxes?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [7],
      Qualifies: [true, false],
      statement: 'If you owe household employment taxes you should file a Federal Tax Return.'
    },
    {
      id: 7,
      QC: 'Have you earned wages from a tax-exempt church or church controlled organization?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [8],
      Qualifies: [true, false],
      statement: 'If you earned wages from a tax-exempt church or church controlled organization you may need to Federal Tax Return.'
    },
    {
      id: 8,
      QC: 'Have you received distributions from a Health Savings Account or an MSA?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [9],
      Qualifies: [true, false],
      statement: 'If you received distributions from a Health Savings Account or an MSA should to Federal Tax Return.'
    },
    {
      id: 9,
      QC: 'Are you required to repay a 2008 Home buyers Credit (or other recapture tax)?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [10],
      Qualifies: [true, false],
      statement: 'If you are required to repay 2008 Home Buyers Credit, or some other recapture tax, you should file a Federal Tax Return'
    },
    {
      id: 10,
      QC: 'Are you required to repay a 2008 Home buyers Credit (or other recapture tax)?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [11],
      Qualifies: [true, false],
      statement: 'If you are required to repay 2008 Home Buyers Credit, or some other recapture tax, you should file a Federal Tax Return'
    },
    {
      id: 11,
      QC: 'Do you owe Social Security/Medicare taxes on unreported income (tips)?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [12],
      Qualifies: [true, false],
      statement: 'If you are required to repay 2008 Home Buyers Credit, or some other recapture tax, you should file a Federal Tax Return'
    },
    {
      id: 12, 
      QC: 'Do you qualify for the First-Time Homebuyer Credit',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [13],
      Qualifies: [true, false],
      statement: 'You may want to file if you qualify for the First-Time Homebuyer Credit'
    },
    {
      id: 13, 
      QC: 'Do you qualify for the Health Coverage Tax Credit',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [14],
      Qualifies: [true, false],
      statement: 'You may want to file if you qualify for Health Coverage Tax Credit'
    },
    {
      id: 15, 
      QC: 'Have you overpaid in estimated tax?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [16],
      Qualifies: [true, false],
      statement: 'If you have overpaid in estimated tax you may want to file a tax return'
    },
    {
      id: 16, 
      QC: 'Do you qualify for a federal fuel tax credit?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [17],
      Qualifies: [true, false],
      statement: 'If you qualify for federal fuel tax credit you may want to file a tax return'
    },
    {
      id: 17,
      QC: 'Have taxes been withheld from your pay?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [18],
      Qualifies: [true, false],
      statement: 'If taxes have been withheld from your pay you may want to file a federal tax return'
    },
    {
      id: 18,
      QC: 'Do you qualify for Earned Income Tax Credit?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [19],
      Qualifies: [true, false],
      statement: 'If you qualify for Earned Income Tax Credit you may want to file a US federal tax return'
    },
    {
      id: 19,
      QC: 'Do you qualify for American Opportunity Tax Credit?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [20],
      Qualifies: [true, false],
      statement: 'If you qualify for American Opportunity tax credit you may want to file a US federal tax return'
    },
    {
      id: 20,
      QC: 'Do you have children and qualify for Child Tax Credit?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [21],
      Qualifies: [true, false],
      statement: 'If you qualify for Child Tax Credit you may want to file a US federal tax return'
    },
    {
      id: 21,
      QC: 'Do you have children?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [211, 22],
      Qualifies: [false, false],
      statement: ''
    },
    {
      id: 211,
      QC: 'Do you qualify for Child Tax Credit?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [22],
      Qualifies: [true, false],
      statement: 'If you qualify for Child Tax Credit you may want to file a US federal tax return'
    },
    {
      id: 22,
      QC: 'Have you adopted a child?',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [221, 23],
      Qualifies: [false, false],
      statement: ''
    },
    {
      id: 221,
      QC: 'Do you qualify for Adoption Tax Credit',
      options: ['Yes', 'No'],
      selectBox: false,
      input: false,
      NQ: [-1],
      Qualifies: [true, false],
      statement: 'If you qualify for Child Tax Credit you may want to file a US federal tax return'
    },
  ]

  return {
    getQuestions: () => {
      return questions
    },
    getState: () => {
      return state
    },
    updateCurrentQuestion: (CQ) => {
      state.CQ = CQ
    },
    updateNextQuestion: (NQ) => {
      state.NQ = NQ 
    },
    updatePreviousQuestion: (PQ, t, type) => {
      state.PQ.push(PQ)
    }, 
    removePreviousQuestion: (Q) => {
      state.PQ.pop()
      state.PA.pop()
    },
    updateDoesNotQualify: (q) => {
    
      state.Qualifies.push({question: q.id, statement: q.statement})
    },
    setStatement: (q, statement) => {
      state.Qualifies.push({question: q.id, statement: statement})
    }
  }
})()