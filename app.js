const answers = ["nsw", "australia", "hospital", "useful", "male"]
const cw = ["correct", "wrong"]
const states = [false, false, false, false, false]

const profileOfVictimIconElem = document.querySelector('.profile_of_victim_icon')
const listOfParticipantsIconElem = document.querySelector('.list_of_participants_icon')
const codesIconElem = document.querySelector('.codes_icon')
const profileOfVictimElem = document.querySelector('.profile_of_victim')
const listOfParticipantsElem = document.querySelector('.list_of_participants')
const codesElem = document.querySelector('.codes')

const participant1Elem = document.querySelector('.participant1')
const participant1ProfileElem = document.querySelector('.participant1-profile')
const participant2Elem = document.querySelector('.participant2')
const participant2ProfileElem = document.querySelector('.participant2-profile')
const participant3Elem = document.querySelector('.participant3')
const participant3ProfileElem = document.querySelector('.participant3-profile')
const participant4Elem = document.querySelector('.participant4')
const participant4ProfileElem = document.querySelector('.participant4-profile')
const participant5Elem = document.querySelector('.participant5')
const participant5ProfileElem = document.querySelector('.participant5-profile')
const participant6Elem = document.querySelector('.participant6')
const participant6ProfileElem = document.querySelector('.participant6-profile')
const participant7Elem = document.querySelector('.participant7')
const participant7ProfileElem = document.querySelector('.participant7-profile')

const code1TxtElem = document.querySelector('.code1-txt')
const code1Wrapperelem = document.querySelector('.code1-wrapper')
const answerCode1Input = document.querySelector('.answer-code1-input')
const answer1Btn = document.querySelector('.answer1-btn')
const answer1Elem = document.querySelector('.answer1')
const message1Elem = document.querySelector('.message1')
const cw1Elem = document.querySelector('.cw1')
const inputBtn1 = document.querySelector('.input-btn1')

const code2TxtElem = document.querySelector('.code2-txt')
const code2Wrapperelem = document.querySelector('.code2-wrapper')
const answerCode2Input = document.querySelector('.answer-code2-input')
const answer2Btn = document.querySelector('.answer2-btn')
const answer2Elem = document.querySelector('.answer2')
const message2Elem = document.querySelector('.message2')
const cw2Elem = document.querySelector('.cw2')
const inputBtn2 = document.querySelector('.input-btn2')

const code3TxtElem = document.querySelector('.code3-txt')
const code3Wrapperelem = document.querySelector('.code3-wrapper')
const answerCode3Input = document.querySelector('.answer-code3-input')
const answer3Btn = document.querySelector('.answer3-btn')
const answer3Elem = document.querySelector('.answer3')
const message3Elem = document.querySelector('.message3')
const cw3Elem = document.querySelector('.cw3')
const inputBtn3 = document.querySelector('.input-btn3')

const code4TxtElem = document.querySelector('.code4-txt')
const code4Wrapperelem = document.querySelector('.code4-wrapper')
const answerCode4Input = document.querySelector('.answer-code4-input')
const answer4Btn = document.querySelector('.answer4-btn')
const answer4Elem = document.querySelector('.answer4')
const message4Elem = document.querySelector('.message4')
const cw4Elem = document.querySelector('.cw4')
const inputBtn4 = document.querySelector('.input-btn4')

const code5TxtElem = document.querySelector('.code5-txt')
const code5Wrapperelem = document.querySelector('.code5-wrapper')
const answerCode5Input = document.querySelector('.answer-code5-input')
const answer5Btn = document.querySelector('.answer5-btn')
const answer5Elem = document.querySelector('.answer5')
const message5Elem = document.querySelector('.message5')
const cw5Elem = document.querySelector('.cw5')
const inputBtn5 = document.querySelector('.input-btn5')

const guessMarderer = document.querySelector('.guess-marderer')

const mardererInput = document.querySelector('.marderer-input')
const mardererBtn = document.querySelector('.marderer-btn')

const callMessage = document.querySelector('.call-message')

profileOfVictimIconElem.addEventListener('click', function() {
  profileOfVictimElem.classList.toggle('display-show')
})

listOfParticipantsIconElem.addEventListener('click', function() {
  listOfParticipantsElem.classList.toggle('display-show')
})

codesIconElem.addEventListener('click', function() {
  codesElem.classList.toggle('display-show')
})

participant1Elem.addEventListener('click', function() {
  participant1ProfileElem.classList.toggle('display-show')
})

participant2Elem.addEventListener('click', function() {
  participant2ProfileElem.classList.toggle('display-show')
})

participant3Elem.addEventListener('click', function() {
  participant3ProfileElem.classList.toggle('display-show')
})

participant4Elem.addEventListener('click', function() {
  participant4ProfileElem.classList.toggle('display-show')
})

participant5Elem.addEventListener('click', function() {
  participant5ProfileElem.classList.toggle('display-show')
})

participant6Elem.addEventListener('click', function() {
  participant6ProfileElem.classList.toggle('display-show')
})

participant7Elem.addEventListener('click', function() {
  participant7ProfileElem.classList.toggle('display-show')
})

code1TxtElem.addEventListener('click', function() {
  code1Wrapperelem.classList.toggle('display-show')
})

code2TxtElem.addEventListener('click', function() {
  code2Wrapperelem.classList.toggle('display-show')
})

code3TxtElem.addEventListener('click', function() {
  code3Wrapperelem.classList.toggle('display-show')
})

code4TxtElem.addEventListener('click', function() {
  code4Wrapperelem.classList.toggle('display-show')
})

code5TxtElem.addEventListener('click', function() {
  code5Wrapperelem.classList.toggle('display-show')
})

answer1Btn.addEventListener('click', function() {
  let answer1 = answerCode1Input.value
  answer1Elem.textContent = answer1
  if (answer1.toLowerCase() === answers[0]) {
    cw1Elem.textContent = cw[0]
    inputBtn1.classList.add('display-hide')
    states[0] = true
    if (states[0] === true && states[1] === true && states[2] === true && states[3] === true && states[4] === true) {
      guessMarderer.classList.remove('display-hide')
    }
  } else {
    cw1Elem.textContent = cw[1]
  }
  message1Elem.classList.remove('display-hide')
})

answer2Btn.addEventListener('click', function() {
  let answer2 = answerCode2Input.value
  answer2Elem.textContent = answer2
  if (answer2.toLowerCase() === answers[1]) {
    cw2Elem.textContent = cw[0]
    inputBtn2.classList.add('display-hide')
    states[1] = true
    if (states[0] === true && states[1] === true && states[2] === true && states[3] === true && states[4] === true) {
      guessMarderer.classList.remove('display-hide')
    }
  } else {
    cw2Elem.textContent = cw[1]
  }
  message2Elem.classList.remove('display-hide')
})

answer3Btn.addEventListener('click', function() {
  let answer3 = answerCode3Input.value
  answer3Elem.textContent = answer3
  if (answer3.toLowerCase() === answers[2]) {
    cw3Elem.textContent = cw[0]
    inputBtn3.classList.add('display-hide')
    states[2] = true
    if (states[0] === true && states[1] === true && states[2] === true && states[3] === true && states[4] === true) {
      guessMarderer.classList.remove('display-hide')
    }

  } else {
    cw3Elem.textContent = cw[1]
  }
  message3Elem.classList.remove('display-hide')
})

answer4Btn.addEventListener('click', function() {
  let answer4 = answerCode4Input.value
  answer4Elem.textContent = answer4
  if (answer4.toLowerCase() === answers[3]) {
    cw4Elem.textContent = cw[0]
    inputBtn4.classList.add('display-hide')
    states[3] = true
    if (states[0] === true && states[1] === true && states[2] === true && states[3] === true && states[4] === true) {
      guessMarderer.classList.remove('display-hide')
    }

  } else {
    cw4Elem.textContent = cw[1]
  }
  message4Elem.classList.remove('display-hide')
})

answer5Btn.addEventListener('click', function() {
  let answer5 = answerCode5Input.value
  answer5Elem.textContent = answer5
  if (answer5.toLowerCase() === answers[4]) {
    cw5Elem.textContent = cw[0]
    inputBtn5.classList.add('display-hide')
    states[4] = true
    if (states[0] === true && states[1] === true && states[2] === true && states[3] === true && states[4] === true) {
      guessMarderer.classList.remove('display-hide')
    }

  } else {
    cw5Elem.textContent = cw[1]
  }
  message5Elem.classList.remove('display-hide')
})

mardererInput.addEventListener('input', function() {
  callMessage.classList.remove('display-hide')
})