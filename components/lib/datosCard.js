export const getBackgroundColor = nombre => {
  let backgroundColor = ''
  if (nombre === 'lalito') {
    backgroundColor = 'bg-yellow-50'
  } else if (nombre === 'fer') {
    backgroundColor = 'bg-blue-200'
  }

  return backgroundColor
}

export const getImageSource = nombre => {
  let imageSource = ''
  if (nombre === 'lalito') {
    imageSource =
      'https://firebasestorage.googleapis.com/v0/b/fort-b6990.appspot.com/o/WhatsApp%20Image%202023-01-07%20at%206.19.10%20AM.jpeg?alt=media&token=79f53b9f-e5eb-480c-ae73-4a305ab80824'
  } else if (nombre === 'fer') {
    imageSource =
      'https://firebasestorage.googleapis.com/v0/b/fort-b6990.appspot.com/o/jinx%20fortnite.png?alt=media&token=a0febf07-63b7-48ed-bb09-f0c10ffd0ccd'
  } else {
    imageSource =
      'https://firebasestorage.googleapis.com/v0/b/fort-b6990.appspot.com/o/fortnite-fishstick-outfit.webp?alt=media&token=952a5194-b997-4c99-be54-ff66ccfac856'
  }

  return imageSource
}
