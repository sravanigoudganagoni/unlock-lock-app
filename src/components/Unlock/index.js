// Write your code here
import {useState} from 'react'

import {MainCon, LockImg, LockText, LockBut} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState('True')
  const onChangeLock = () => {
    setLock(prevstat => !prevstat)
  }
  const text = isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const buttonText = isLock ? 'Unlock' : 'Lock'
  const image = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLock ? 'lock' : 'unlock'

  return (
    <MainCon>
      <LockImg src={image} alt={altText} />
      <LockText>{text}</LockText>
      <LockBut type="button" onClick={onChangeLock}>
        {buttonText}
      </LockBut>
    </MainCon>
  )
}

export default Unlock
