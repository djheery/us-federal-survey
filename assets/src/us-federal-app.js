const US_FEDERAL_SURVEY_APP = (() => {
  const state = US_FEDERAL_STATE.getState()
  const questions = US_FEDERAL_STATE.getQuestions()
  const ui = US_FEDERAL_UI.getSelectors()
  const loadEventListeners = () => {
    ui.answerContainer.addEventListener('click', e => nextQuestion(e))
    ui.btnContainer.addEventListener('click', checkQuestion)
  }

  const checkQuestion = (e) => {
    if(e.target.classList.contains('prev-btn')) previousQuestion()
    if(e.target.classList.contains('start-survey-btn')) nextQuestion()
  }

  const nextQuestion = (e) => {
    US_FEDERAL_UI.transitionOut()
    setTimeout(() => {
      const targetID = parseInt(ui.answerContainer.dataset.nextquestion)
      const nextQuestion = questions.find(q => q.id === targetID)
        if(e) {
          if(e.target.dataset.dnq !== 'false') {
            US_FEDERAL_STATE.updateDoesNotQualify(questions.find(q => q.id === state.CQ)) 
          }
        }
      US_FEDERAL_STATE.updateCurrentQuestion(nextQuestion.id)
      US_FEDERAL_STATE.updateNextQuestion(nextQuestion.NQ[0])
      nextQuestion.id !== -1 ?
        US_FEDERAL_UI.displayNextQuestion(nextQuestion) :
        US_FEDERAL_UI.displayFinalVerdict(nextQuestion)
      US_FEDERAL_UI.transitionIn()
    }, 800)
  }

  const previousQuestion = () => {

  }

  return {
    init: () => {
      loadEventListeners()
    }
  }
})(US_FEDERAL_UI, US_FEDERAL_STATE)

US_FEDERAL_SURVEY_APP.init()