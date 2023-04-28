import React from 'react'
import { ButtonSendFile, Container, Logo, SendButtonContainer } from './styles'
import LogoTerraFort from '../../assets/images/logo-terrafort.png'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const {signOut} = useAuth();
    return (
        <Container>
            <Logo>
                <img src={LogoTerraFort} alt="Logo TerraFort" />
            </Logo>

            <SendButtonContainer>
            <ButtonSendFile type="button" onClick={signOut}>
              Sair
            </ButtonSendFile>
          </SendButtonContainer>
        </Container>
    )
}