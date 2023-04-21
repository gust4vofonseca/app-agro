import React from 'react'
import { ButtonSendFile, Container, Logo, SendButtonContainer } from './styles'
import LogoTerraFort from '../../assets/images/logo-terrafort.png'

export function Header() {
    return (
        <Container>
            <Logo>
                <img src={LogoTerraFort} alt="Logo TerraFort" />
            </Logo>

            <SendButtonContainer>
            <ButtonSendFile type="button">
              ADM
            </ButtonSendFile>
          </SendButtonContainer>
        </Container>
    )
}