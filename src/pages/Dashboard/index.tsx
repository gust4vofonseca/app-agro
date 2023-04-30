import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Button, Container, DivTitle } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { Link, useHistory } from 'react-router-dom';
import { Header } from '../../components/Header'

const Dashboard: React.FC = () => {
    const { user } = useAuth();
    const history = useHistory();


    useEffect(() => {
        if (!user.isAdmin) {
            history.push('/venda');
        }
    }, [history, user.isAdmin])

    return (
        <>
            <Header/>
            <Container>
                <DivTitle>
                    <h1>ADM</h1>
                </DivTitle>
                <Link to="/venda" className='Link'><Button>Historico de vendas</Button></Link>
                <Link to="/venda" className='Link'><Button>Area do vendedor</Button></Link>
                <Link to="/usuario" className='Link'><Button>Usuarios</Button></Link>
                <Link to="/produtos" className='Link'><Button>Produtos</Button></Link>
                <Link to="/veiculos" className='Link'><Button>Veiculos</Button></Link>
            </Container>
        
        </>
    )
}

export default Dashboard