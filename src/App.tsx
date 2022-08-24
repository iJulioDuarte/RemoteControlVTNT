import { Button } from './styles/Buttons/Button.style'
import { ButtonLateral } from './styles/Buttons/ButtonLateral.style'
import { ButtonOff } from './styles/Buttons/ButtonOff.style'
import { DivButtons } from './styles/Buttons/DivButtons.style'
import { DivButtonsLaterais } from './styles/Buttons/DivButtonsLaterais.style'
import { GlobalStyles } from './styles/Global.style'
import { Title } from './styles/Title/Titile.style'
import { AiFillCaretUp, AiFillCaretRight, AiFillCaretDown, AiFillCaretLeft, AiOutlinePoweroff } from "react-icons/ai"
import { MdDarkMode } from "react-icons/md"
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState(true)



  return (
    <>
      <header>
        <Title>VTNT1</Title>
        <MdDarkMode onClick={() => setTheme(!theme)}/>
      </header>

      <DivButtons>
        <Button globalTheme={theme}><AiFillCaretUp /></Button>

        <DivButtonsLaterais> 

          <ButtonLateral globalTheme={theme}> 
            <AiFillCaretLeft /> 
          </ButtonLateral>

          <ButtonOff> 
            <AiOutlinePoweroff /> 
          </ButtonOff>

          <ButtonLateral globalTheme={theme}> 
            <AiFillCaretRight /> 
          </ButtonLateral>

        </DivButtonsLaterais>

        <Button globalTheme={theme}>
          <AiFillCaretDown />
        </Button>
      </DivButtons>



      <GlobalStyles globalTheme={theme}/>
    </>
  )
}

export default App
