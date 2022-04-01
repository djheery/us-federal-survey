const US_FEDERAL_UI = (() => {
  const selectors = {
    questionContainer: document.querySelector('.question-container'),
    btnContainer: document.querySelector('.question-btn__container'),
    answerContainer: document.querySelector('.answer-options-container'),
    confirmAnswerBtn: document.querySelector('.confirm-answer'),
    prevQuestion: document.querySelector('.prev-question'),
    resultsContainer: document.querySelector('.final-results-container')
  }

  return {
    getSelectors: () => {
      return selectors
    },
    displayNextQuestion: (q) =>  {
      selectors.btnContainer.innerHTML = ''
      if(q.id !== -1) {
        selectors.answerContainer.dataset.nextquestion = q.NQ[0]
        selectors.questionContainer.innerHTML = q.QC
        selectors.answerContainer.innerHTML = ''
        if(q.options.length > 4) {
          US_FEDERAL_UI.displaySelectBox(q)
          return
        }
        for(let i = 0; i < q.options.length; i++) {
          selectors.answerContainer.innerHTML += `
          <div class="radio-btn-container radio-y-n">
            <label for="survey-question" class="survey-option">${q.options[i]}</label>
            <input type="radio" name="survey-radio-btn" id="survey-radio-btn" class="survey-radio-btn" data-dnq="${q.Qualifies[i]}">
          </div>
          `
        }
      }
    },
    displayPreviousQuestion: () => {
      
    },
    displaySelectBox: (q) => {
      selectors.answerContainer.innerHTML += '<select name="filing-status" id="filing-status">'
      for(let i = 0; i < q.options.length; i++) {
        document.getElementById("filing-status").innerHTML += `
          <option value="${q.options[i]}">${q.options[i]}</option>
        `
      }
      document.getElementById("filing-status").innerHTML += "</select>"
    },
    displayInputBox: (q) => {
      selectors.answerContainer.innerHTML += `
      <div class="input-container" data-error="The number you have input is invalid">
        <span class="before-input-box">£</span>
        <input type="number" id="annual-earnings" name="annual-earnings" data-inputType="annual-earnings" class="bacc-calc-input">
      </div>
      `
    },
    displayFinalVerdict: (Q) => {
      selectors.questionContainer.innerHTML = ``
      selectors.answerContainer.innerHTML = ``
      if(Q.Qualifies.length >= 1) {
        selectors.resultsContainer.innerHTML = `
        <div class="final-verdict-container">
          <p>The answers you have provided indicate that you <span class="fw-bold">should register for VAT</span>. Based on the answers provided the following reasons may be why we have come to this conclusion</p>
          <br>
          <ul class="reasons mgb-20"></ul>
        </div>

        `
        const reasons = document.querySelector('.reasons')
        for(let i = 0; i < Q.Qualifies.length; i++) {
          reasons.innerHTML += `
            <li>${Q.Qualifies[i].statement}</li>
          `
        }
      } else {
        selectors.resultsContainer.innerHTML = `
        <div class="final-verdict-container">
          <p class="mgb-20">The answers you have provided indicate that <span class="accent-clr fw-bold"> you do not qualify </span> for VAT registration. If you believe your circumstances are more abstract than those in the survey, please contact the HMRC or a tax professional for advice.</p>
        </div>
        `
      }
      
      document.querySelector('.final-verdict-container').innerHTML += `
        <p>${Q.QC}</p>
      `
    },
    setBtnData: () => {

    },
    transitionOut: () => {
      selectors.answerContainer.classList.remove('transition-two')
      selectors.questionContainer.classList.remove('transition-two')
      selectors.answerContainer.classList.add('transition')  
      selectors.questionContainer.classList.add('transition')  
    },
    transitionIn: () => {
      selectors.answerContainer.classList.remove('transition')
      selectors.questionContainer.classList.remove('transition')
      selectors.answerContainer.classList.add('transition-two')
      selectors.questionContainer.classList.add('transition-two')
    },
  }
})()