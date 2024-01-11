const participants = ["james smith", "graeme connolly", "nahum turner", "aaron nelson", "amelia ramsay", "jessica mcdonald", "edith walle"]
const answers = ["nsw", "australia", "hospital", "useful", "male"]
const pin = [37182813, 23101973]
const pinMessages = ["last", "first"]
const cw = ["correct", "wrong"]
let codesStatus = [false, false, false, false, false]
let pinClear = [false, false]
let errorStatusArr = [false, false, false, false, false]
let ending1Status = false

const envelopPaperIconElem = document.querySelector('.envelop_paper_icon')
const documentListIconElem = document.querySelector('.document_list_icon')
const computerFolderIconElem = document.querySelector('.computer_folder_icon')
const profileOfVictimElem = document.querySelector('.profile_of_victim')
const listOfParticipantsElem = document.querySelector('.list_of_participants')
const codesElem = document.querySelector('.codes')

const participantElemAll = document.querySelectorAll('.participant')

const codeTitleElemAll = document.querySelectorAll('.code-title')
const hintBlockElemAll = document.querySelectorAll('.hint-block')
const hintLineElemAll = document.querySelectorAll('.hint-line')
const codeElemAll = document.querySelectorAll('.code')

const afterCrackCodesElem = document.querySelector('.after-crack-codes')
const guessMurdererElem = document.querySelector('.guess-murderer')
const callMessageElem = document.querySelector('.call-message')

const computerLockDocumentIconElem = document.querySelector('.computer_lock_document_icon')
const guessPinElem = document.querySelector('.guess-pin')

const correctPinMessageElem = document.querySelector('.correct-pin-message')
const wrongPinMessageElem = document.querySelector('.wrong-pin-message')

const hintForMurdererElem = document.querySelector('.hint-for-murderer')

const error1Elem = document.querySelector('.error1')
const error2Elem = document.querySelector('.error2')
const error3Elem = document.querySelector('.error3')
const error4Elem = document.querySelector('.error4')
const validElem = document.querySelector('.valid')
const errorsElem = [error1Elem, error2Elem, error3Elem, error4Elem, validElem]

const ending1Elem = document.querySelector('.ending-1')
const ending2Elem = document.querySelector('.ending-2')

envelopPaperIconElem.addEventListener('click', () => {
  profileOfVictimElem.classList.toggle('display-hide')
})

documentListIconElem.addEventListener('click', () => {
  listOfParticipantsElem.classList.toggle('display-hide')
})

computerFolderIconElem.addEventListener('click', () => {
  codesElem.classList.toggle('display-hide')
})

for (let participantElem of participantElemAll) {
  participantElem.addEventListener('click', () => {
    participantElem.nextElementSibling.classList.toggle('display-hide')
  })
}

for (let codeElem of codeTitleElemAll) {
  codeElem.addEventListener('click', () => {
    codeElem.nextElementSibling.nextElementSibling.classList.toggle('display-hide')
  })
}

for (let hintBlockElem of hintBlockElemAll) {
  hintBlockElem.addEventListener('click', () => {
    hintBlockElem.nextElementSibling.classList.toggle('display-hide')
  })
}

for (let hintLineElem of hintLineElemAll) {
  hintLineElem.addEventListener('click', () => {
    hintLineElem.childNodes[1].classList.toggle('display-hide')
  })
}

const checkCodesStatus = () => {
  if (!codesStatus.includes(false)) {
    afterCrackCodesElem.classList.remove('display-hide')
    guessMurdererElem.classList.remove('display-hide')
  }
}

for (let i = 0; i < codeElemAll.length; i++) {
  let codeElem = codeElemAll[i]
  let bigDiv = codeElem.childNodes[3]
  let smallDiv = codeElem.childNodes[5]
  bigDiv.childNodes[3].addEventListener('click', () => {
    let userAnswer = bigDiv.childNodes[1].value
    let modifiedUserAnswer = userAnswer.replaceAll(' ', '').toLowerCase()

    smallDiv.childNodes[1].childNodes[1].textContent = userAnswer
    smallDiv.classList.remove('display-hide')

    if (modifiedUserAnswer === answers[i]) {
      smallDiv.childNodes[3].childNodes[1].textContent = cw[0]
      bigDiv.classList.add('display-hide')
      codesStatus[i] = true
    } else {
      smallDiv.childNodes[3].childNodes[1].textContent = cw[1]
    }
    checkCodesStatus()
  })
}

guessMurdererElem.childNodes[5].addEventListener('input', () => {
  callMessageElem.classList.remove('display-hide')
})

computerLockDocumentIconElem.addEventListener('click', () => {
  guessPinElem.classList.toggle('display-hide')
})

guessPinElem.childNodes[3].childNodes[3].addEventListener('click', () => {
  let userPin = Number(guessPinElem.childNodes[3].childNodes[1].value)
  let hin2ForMurdererElem = hintForMurdererElem.childNodes[3].childNodes[4].childNodes[1]
  if (userPin === pin[0] || userPin === pin[1]) {
    correctPinMessageElem.classList.remove('display-hide')
    wrongPinMessageElem.classList.add('display-hide')
    hintForMurdererElem.classList.remove('display-hide')
    pinClear[0] = true
    if (userPin === pin[1]) {
      correctPinMessageElem.childNodes[3].childNodes[1].textContent = pinMessages[1]
      hin2ForMurdererElem.childNodes[1].textContent = pinMessages[1]
      hin2ForMurdererElem.childNodes[3].textContent = "N"
    } else if (userPin === pin[0]) {
      guessPinElem.childNodes[3].classList.add('display-hide')
      correctPinMessageElem.childNodes[3].childNodes[1].textContent = pinMessages[0]
      hin2ForMurdererElem.childNodes[1].textContent = pinMessages[0]
      hin2ForMurdererElem.childNodes[3].textContent = "W"
      pinClear[1] = true
    }
  } else {
    wrongPinMessageElem.classList.remove('display-hide')
  }
})

let MurdererBtn = guessMurdererElem.childNodes[7]
let MurdererInput = guessMurdererElem.childNodes[5]
MurdererBtn.addEventListener('click', () => {
  for (let i = 0; i < errorStatusArr.length; i++) {
    if (errorStatusArr[i]) {
      let hiddenElem = errorsElem[i]
      hiddenElem.classList.add('display-hide')
      errorStatusArr[i] = false
    }
  }
  if (ending1Status) {
    ending1Status = false
    ending1Elem.classList.add('display-hide')
  }
  let userMurderer = MurdererInput.value.toLowerCase()
  if (!pinClear[0]) {
    errorStatusArr[0] =  true
  } else if (!participants.includes(userMurderer)) {
    errorStatusArr[1] =  true
  } else if (userMurderer === participants[0]) {
    errorStatusArr[2] =  true
  } else if (userMurderer === participants[2]) {
    errorStatusArr[4] =  true
    ending1Elem.classList.remove('display-hide')
    ending1Status = true
  } else if (userMurderer === participants[6] && pinClear[1]) {
    errorStatusArr[4] =  true
    ending2Elem.classList.remove('display-hide')
  } else {
    errorStatusArr[3] =  true
  }
  for (let i = 0; i < errorStatusArr.length; i++) {
    if (errorStatusArr[i]) {
      let hiddenElem = errorsElem[i]
      hiddenElem.classList.remove('display-hide')
    }
  }
})
