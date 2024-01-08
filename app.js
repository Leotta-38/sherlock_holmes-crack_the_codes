const answers = ["nsw", "australia", "hospital", "useful", "male"]
const cw = ["correct", "wrong"]
let codesStatus = [false, false, false, false, false]
const pin = [37182813, 23101973]
const participants = ["james smith", "graeme connolly", "nahum turner", "aaron nelson", "amelia ramsay", "jessica mcdonald", "edith walle"]
let pinClear = [false, false]
const sherlockComments = ['Sherlock: "Who is that? The murderer should be one of the participants at the party."', 'Sherlock: "We have not got all the clues to identify the murderer yet. We should figure out the PIN first."', 'Sherlock: "No, I do not think he is the murderer because of the message we got when we entered the PIN."', 'Sherlock: "OK. I will let Lestrade know."', 'Sherlock: "There is no clue that implies this person is the murderer so far."']


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
const hint1Btn = document.querySelector('.hint1-btn')
const hint1Elem = document.querySelector('.hint1')
const hint11Btn = document.querySelector('.hint1-1-btn')
const hint11Elem = document.querySelector('.hint1-1')
const hint12Btn = document.querySelector('.hint1-2-btn')
const hint12Elem = document.querySelector('.hint1-2')
const hint13Btn = document.querySelector('.hint1-3-btn')
const hint13Elem = document.querySelector('.hint1-3')

const code2TxtElem = document.querySelector('.code2-txt')
const code2Wrapperelem = document.querySelector('.code2-wrapper')
const answerCode2Input = document.querySelector('.answer-code2-input')
const answer2Btn = document.querySelector('.answer2-btn')
const answer2Elem = document.querySelector('.answer2')
const message2Elem = document.querySelector('.message2')
const cw2Elem = document.querySelector('.cw2')
const inputBtn2 = document.querySelector('.input-btn2')
const hint2Btn = document.querySelector('.hint2-btn')
const hint2Elem = document.querySelector('.hint2')
const hint21Btn = document.querySelector('.hint2-1-btn')
const hint21Elem = document.querySelector('.hint2-1')
const hint22Btn = document.querySelector('.hint2-2-btn')
const hint22Elem = document.querySelector('.hint2-2')
const hint23Btn = document.querySelector('.hint2-3-btn')
const hint23Elem = document.querySelector('.hint2-3')
const hint24Btn = document.querySelector('.hint2-4-btn')
const hint24Elem = document.querySelector('.hint2-4')

const code3TxtElem = document.querySelector('.code3-txt')
const code3Wrapperelem = document.querySelector('.code3-wrapper')
const answerCode3Input = document.querySelector('.answer-code3-input')
const answer3Btn = document.querySelector('.answer3-btn')
const answer3Elem = document.querySelector('.answer3')
const message3Elem = document.querySelector('.message3')
const cw3Elem = document.querySelector('.cw3')
const inputBtn3 = document.querySelector('.input-btn3')
const hint3Btn = document.querySelector('.hint3-btn')
const hint3Elem = document.querySelector('.hint3')
const hint31Btn = document.querySelector('.hint3-1-btn')
const hint31Elem = document.querySelector('.hint3-1')
const hint32Btn = document.querySelector('.hint3-2-btn')
const hint32Elem = document.querySelector('.hint3-2')
const hint33Btn = document.querySelector('.hint3-3-btn')
const hint33Elem = document.querySelector('.hint3-3')

const code4TxtElem = document.querySelector('.code4-txt')
const code4Wrapperelem = document.querySelector('.code4-wrapper')
const answerCode4Input = document.querySelector('.answer-code4-input')
const answer4Btn = document.querySelector('.answer4-btn')
const answer4Elem = document.querySelector('.answer4')
const message4Elem = document.querySelector('.message4')
const cw4Elem = document.querySelector('.cw4')
const inputBtn4 = document.querySelector('.input-btn4')
const hint4Btn = document.querySelector('.hint4-btn')
const hint4Elem = document.querySelector('.hint4')
const hint41Btn = document.querySelector('.hint4-1-btn')
const hint41Elem = document.querySelector('.hint4-1')
const hint42Btn = document.querySelector('.hint4-2-btn')
const hint42Elem = document.querySelector('.hint4-2')
const hint43Btn = document.querySelector('.hint4-3-btn')
const hint43Elem = document.querySelector('.hint4-3')

const code5TxtElem = document.querySelector('.code5-txt')
const code5Wrapperelem = document.querySelector('.code5-wrapper')
const answerCode5Input = document.querySelector('.answer-code5-input')
const answer5Btn = document.querySelector('.answer5-btn')
const answer5Elem = document.querySelector('.answer5')
const message5Elem = document.querySelector('.message5')
const cw5Elem = document.querySelector('.cw5')
const inputBtn5 = document.querySelector('.input-btn5')
const hint5Btn = document.querySelector('.hint5-btn')
const hint5Elem = document.querySelector('.hint5')
const hint51Btn = document.querySelector('.hint5-1-btn')
const hint51Elem = document.querySelector('.hint5-1')
const hint52Btn = document.querySelector('.hint5-2-btn')
const hint52Elem = document.querySelector('.hint5-2')
const hint53Btn = document.querySelector('.hint5-3-btn')
const hint53Elem = document.querySelector('.hint5-3')
const hint54Btn = document.querySelector('.hint5-4-btn')
const hint54Elem = document.querySelector('.hint5-4')

const afterCrackCodesElem = document.querySelector('.after-crack-codes')
const guessMurdererElem = document.querySelector('.guess-murderer')

const MurdererInput = document.querySelector('.murderer-input')
const MurdererBtn = document.querySelector('.murderer-btn')

const callMessageElem = document.querySelector('.call-message')

const computerLockDocumentIconElem = document.querySelector('.computer_lock_document_icon')
const keySectionElem = document.querySelector('.key-section')

const inputPinElem = document.querySelector('.input-pin')
const answerPinInput = document.querySelector('.answer-pin-input')
const pinBtn = document.querySelector('.pin-btn')
const hintPinBtn = document.querySelector('.hint-pin-btn')
const hintPinElem = document.querySelector('.hint-pin')
const hintPinIBtnArrays = document.querySelectorAll('.hint-pin-i-btn')
const hintForMurdererElem = document.querySelector('.hint-for-murderer')

const hintMurdererBtn = document.querySelector('.hint-murderer-btn')
const hintMurdererElem = document.querySelector('.hint-murderer')
const hintMurdererIBtnArrays = document.querySelectorAll('.hint-murderer-i-btn')
const firstLettersElem = document.querySelector('.first-letters')
const lastLettersElem = document.querySelector('.last-letters')

const keyMessageElem = document.querySelector('.key-message')
const pinMessageElem = document.querySelector('.pin-message')
const errorMessageElem = document.querySelector('.error-message')
const finalMessageElem = document.querySelector('.final-message')

const errorElem =document.querySelector('.error')
const ending1Elem = document.querySelector('.ending-1')
const ending2Elem = document.querySelector('.ending-2')

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

hint1Btn.addEventListener('click', function() {
  hint1Elem.classList.toggle('display-show')
})

hint11Btn.addEventListener('click', function() {
  hint11Elem.classList.toggle('display-inline')
})

hint12Btn.addEventListener('click', function() {
  hint12Elem.classList.toggle('display-inline')
})

hint13Btn.addEventListener('click', function() {
  hint13Elem.classList.toggle('display-inline')
})

code2TxtElem.addEventListener('click', function() {
  code2Wrapperelem.classList.toggle('display-show')
})

hint2Btn.addEventListener('click', function() {
  hint2Elem.classList.toggle('display-show')
})

hint21Btn.addEventListener('click', function() {
  hint21Elem.classList.toggle('display-inline')
})

hint22Btn.addEventListener('click', function() {
  hint22Elem.classList.toggle('display-inline')
})

hint23Btn.addEventListener('click', function() {
  hint23Elem.classList.toggle('display-inline')
})

hint24Btn.addEventListener('click', function() {
  hint24Elem.classList.toggle('display-inline')
})

code3TxtElem.addEventListener('click', function() {
  code3Wrapperelem.classList.toggle('display-show')
})

hint3Btn.addEventListener('click', function() {
  hint3Elem.classList.toggle('display-show')
})

hint31Btn.addEventListener('click', function() {
  hint31Elem.classList.toggle('display-inline')
})

hint32Btn.addEventListener('click', function() {
  hint32Elem.classList.toggle('display-inline')
})

hint33Btn.addEventListener('click', function() {
  hint33Elem.classList.toggle('display-inline')
})

code4TxtElem.addEventListener('click', function() {
  code4Wrapperelem.classList.toggle('display-show')
})

hint4Btn.addEventListener('click', function() {
  hint4Elem.classList.toggle('display-show')
})

hint41Btn.addEventListener('click', function() {
  hint41Elem.classList.toggle('display-inline')
})

hint42Btn.addEventListener('click', function() {
  hint42Elem.classList.toggle('display-inline')
})

hint43Btn.addEventListener('click', function() {
  hint43Elem.classList.toggle('display-inline')
})

code5TxtElem.addEventListener('click', function() {
  code5Wrapperelem.classList.toggle('display-show')
})

hint5Btn.addEventListener('click', function() {
  hint5Elem.classList.toggle('display-show')
})

hint51Btn.addEventListener('click', function() {
  hint51Elem.classList.toggle('display-inline')
})

hint52Btn.addEventListener('click', function() {
  hint52Elem.classList.toggle('display-inline')
})

hint53Btn.addEventListener('click', function() {
  hint53Elem.classList.toggle('display-inline')
})

hint54Btn.addEventListener('click', function() {
  hint54Elem.classList.toggle('display-inline')
})

answer1Btn.addEventListener('click', function() {
  let answer1 = answerCode1Input.value
  answer1Elem.textContent = answer1
  if (answer1.toLowerCase() === answers[0]) {
    cw1Elem.textContent = cw[0]
    inputBtn1.classList.add('display-hide')
    codesStatus[0] = true
    if (codesStatus[0] === true && codesStatus[1] === true && codesStatus[2] === true && codesStatus[3] === true && codesStatus[4] === true) {
      afterCrackCodesElem.classList.remove('display-hide')
      guessMurdererElem.classList.remove('display-hide')
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
    codesStatus[1] = true
    if (codesStatus[0] === true && codesStatus[1] === true && codesStatus[2] === true && codesStatus[3] === true && codesStatus[4] === true) {
      afterCrackCodesElem.classList.remove('display-hide')
      guessMurdererElem.classList.remove('display-hide')
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
    codesStatus[2] = true
    if (codesStatus[0] === true && codesStatus[1] === true && codesStatus[2] === true && codesStatus[3] === true && codesStatus[4] === true) {
      afterCrackCodesElem.classList.remove('display-hide')
      guessMurdererElem.classList.remove('display-hide')
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
    codesStatus[3] = true
    if (codesStatus[0] === true && codesStatus[1] === true && codesStatus[2] === true && codesStatus[3] === true && codesStatus[4] === true) {
      afterCrackCodesElem.classList.remove('display-hide')
      guessMurdererElem.classList.remove('display-hide')
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
    codesStatus[4] = true
    if (codesStatus[0] === true && codesStatus[1] === true && codesStatus[2] === true && codesStatus[3] === true && codesStatus[4] === true) {
      afterCrackCodesElem.classList.remove('display-hide')
      guessMurdererElem.classList.remove('display-hide')
    }

  } else {
    cw5Elem.textContent = cw[1]
  }
  message5Elem.classList.remove('display-hide')
})

MurdererInput.addEventListener('input', function() {
  callMessageElem.classList.remove('display-hide')
})

computerLockDocumentIconElem.addEventListener('click', function() {
  keySectionElem.classList.toggle('display-show')
})

hintPinBtn.addEventListener('click', function() {
  hintPinElem.classList.toggle('display-show')
})

for (let eachHint of hintPinIBtnArrays) {
  eachHint.addEventListener('click', function() {
    eachHint.childNodes[1].classList.toggle('display-inline')
  })
}

pinBtn.addEventListener('click', function() {
  let userPin = Number(answerPinInput.value)
  if (userPin === pin[0]) {
    keyMessageElem.classList.remove('display-hide')
    inputPinElem.classList.add('display-hide')
    pinMessageElem.textContent = "Read the last letters of the words!"
    errorMessageElem.classList.add('display-hide')
    finalMessageElem.classList.remove('display-hide')
    hintForMurdererElem.classList.remove('display-hide')
    lastLettersElem.classList.add('display-show')
    firstLettersElem.classList.remove('display-show')
    pinClear[0] = true
    pinClear[1] = true
  } else if (userPin === pin[1]) {
    keyMessageElem.classList.remove('display-hide')
    pinMessageElem.textContent = "Read the first letters of the words!"
    errorMessageElem.classList.add('display-hide')
    finalMessageElem.classList.remove('display-hide')
    hintForMurdererElem.classList.remove('display-hide')
    lastLettersElem.classList.remove('display-show')
    firstLettersElem.classList.add('display-show')
    pinClear[0] = true
  } else {
    errorMessageElem.classList.remove('display-hide')
  }
})

hintMurdererBtn.addEventListener('click', function() {
  hintMurdererElem.classList.toggle('display-show')
})

for (let eachHint of hintMurdererIBtnArrays) {
  eachHint.addEventListener('click', function() {
    eachHint.childNodes[1].classList.toggle('display-inline')
  })
}

MurdererBtn.addEventListener('click', function() {
  let userMurderer = MurdererInput.value.toLowerCase()
  if (!participants.includes(userMurderer)) {
    errorElem.textContent = sherlockComments[0]
    ending1Elem.classList.remove('display-show')
  } else {
    if (!pinClear[0]) {
      errorElem.textContent = sherlockComments[1]
    } else {
      if (userMurderer === participants[0]) {
        errorElem.textContent = sherlockComments[2]
        ending1Elem.classList.remove('display-show')
      } else if (userMurderer === participants[2]) {
        errorElem.textContent = sherlockComments[3]
        ending1Elem.classList.add('display-show')
      } else if (userMurderer === participants[6] && pinClear[1]) {
        errorElem.textContent = sherlockComments[3]
        ending1Elem.classList.remove('display-show')
          ending2Elem.classList.remove('display-hide')
      } else {
        errorElem.textContent = sherlockComments[4]
        ending1Elem.classList.remove('display-show')
      }
    }
  }
})