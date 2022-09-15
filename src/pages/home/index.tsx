import React, { FC, useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight, AiFillCaretUp, AiOutlinePoweroff } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../../styles/Buttons/Button.style";
import { ButtonLateral } from "../../styles/Buttons/ButtonLateral.style";
import { ButtonOff } from "../../styles/Buttons/ButtonOff.style";
import { DivButtons } from "../../styles/Buttons/DivButtons.style";
import { DivButtonsLaterais } from "../../styles/Buttons/DivButtonsLaterais.style";
import { GlobalStyles } from "../../styles/Global.style";
import { Title } from "../../styles/Title/Titile.style";

const Controll: FC = () => {

    const [theme, setTheme] = useState(true)

    return (
        <>
            <header>
                <Title>VTNT1</Title>
                <MdDarkMode onClick={() => setTheme(!theme)} />
            </header>

            <DivButtons>
                <Button
                    globalTheme={theme}
                >
                    <AiFillCaretUp />
                </Button>

                <DivButtonsLaterais>

                    <ButtonLateral
                        globalTheme={theme}
                    >
                        <AiFillCaretLeft />
                    </ButtonLateral>

                    <ButtonOff>
                        <AiOutlinePoweroff />
                    </ButtonOff>

                    <ButtonLateral
                        globalTheme={theme}
                    >
                        <AiFillCaretRight />
                    </ButtonLateral>

                </DivButtonsLaterais>

                <Button
                    globalTheme={theme}
                >
                    <AiFillCaretDown />
                </Button>
            </DivButtons>
            <Link to="/stats">Ver estatísticas</Link>
            <GlobalStyles globalTheme={theme} />
        </>
    )
}

export default React.memo(Controll)