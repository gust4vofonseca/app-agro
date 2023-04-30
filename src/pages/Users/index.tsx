
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header';
import { Button, ButtonVisible, Container, DivInput, DivTitle, Input, Select } from './styles';
import { ReactComponent as PasswordIcon } from '../../assets/icons/password.svg';
import { ReactComponent as VisibleIcon } from '../../assets/icons/visibility.svg';
import { Form } from '@unform/web';

const Users: React.FC = () => {
    const [isPasswordShadow, setIsPasswordShadow] = useState(false);

    const HandleUser = useCallback(()=>{}, [])

    const tooglePasswordVisible = useCallback(() => {
        setIsPasswordShadow(!isPasswordShadow);
      }, [isPasswordShadow]);


    useEffect(() => {

    }, [])

    return (
        <>
            <Header/>
            <Container>
                <DivTitle>
                    <h1>Usuarios</h1>
                </DivTitle>

                <Select className='select-users'>
                    <option value="">Criar novo usuario</option>
                </Select>

                <Form className='form-user' action="" onSubmit={HandleUser}>
                    <DivInput>
                        <Input type="text" id='name' name='name' placeholder='Nome'/>
                    </DivInput>

                    <DivInput>
                        <Input type="text" id='email' name='email' placeholder='Email'/>
                    </DivInput>

                    <DivInput>
                        <Input
                            name={'password'}
                            type={!isPasswordShadow ? 'password' : 'text'}
                            placeholder='Senha'
                            id='password' 
                        />
                        <ButtonVisible type="button" onClick={tooglePasswordVisible}>
                            <VisibleIcon />
                        </ButtonVisible>
                    </DivInput>

                    <DivInput>
                        <Select id='adm' name='adm'>
                            <option value="">ADM</option>
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </Select>
                    </DivInput>

                    <Button>
                        Salvar
                    </Button>

                </Form>
            </Container>
        </>
    )
}

export default Users;