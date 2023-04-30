import React from 'react'
import { ButtonSendFile, Container, Logo, SendButtonContainer } from './styles'
import LogoTerraFort from '../../assets/images/logo-terrafort.png'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom';

export function Header() {
  const {signOut} = useAuth();
    return (
        <Container>
          <Link to="/dashboard">
            <Logo>
                <img src={LogoTerraFort} alt="Logo TerraFort" />
            </Logo>
          </Link>

            <SendButtonContainer>
            <ButtonSendFile type="button" onClick={signOut}>
              Sair
            </ButtonSendFile>
          </SendButtonContainer>
        </Container>
    )
}