const US_FEDERAL_STATE = (() => {
  const state = {
    CQ: 0,
    NQ: 1,
    PQ: [],
    PA: [],
    Qualifies: [],
    age: "UNDER_65"
  }

  const brackets = {
    single: {
      under65: 12400,
      over65: 14050,
    },
    marriedSeparate: 5,
    headOfHouse: {
      under65:
    }
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
      id: 21,
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
      NQ: [11],
      Qualifies: [true, false],
      statement: 'If you are required to repay 2008 Home Buyers Credit, or some other recapture tax, you should file a Federal Tax Return'
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