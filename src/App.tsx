import { Button } from './styles/Buttons/Button.style'
import { ButtonLateral } from './styles/Buttons/ButtonLateral.style'
import { ButtonOff } from './styles/Buttons/ButtonOff.style'
import { DivButtons } from './styles/Buttons/DivButtons.style'
import { DivButtonsLaterais } from './styles/Buttons/DivButtonsLaterais.style'
import { GlobalStyles } from './styles/Global.style'
import { Title } from './styles/Title/Titile.style'
import { AiFillCaretUp, AiFillCaretRight, AiFillCaretDown, AiFillCaretLeft, AiOutlinePoweroff } from "react-icons/ai"

function App() {


  return (
    <>
      

      <Title>VTNT1</Title>

      <DivButtons>
        <Button><AiFillCaretUp /></Button>

        <DivButtonsLaterais>

          <ButtonLateral> 
            <AiFillCaretLeft /> 
          </ButtonLateral>

          <ButtonOff> 
            <AiOutlinePoweroff /> 
          </ButtonOff>

          <ButtonLateral> 
            <AiFillCaretRight /> 
          </ButtonLateral>

        </DivButtonsLaterais>

        <Button>
          <AiFillCaretDown />
        </Button>
      </DivButtons>



      <GlobalStyles />
    </>
  )
}

export default App
