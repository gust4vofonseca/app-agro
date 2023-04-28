import React, { useState } from 'react'
import { Container, DivTitle } from './styles'
import { Header } from '../../../components/Header'
import Multiselect from '../../../components/Multiselect';

interface IProps {
    id: string;
    qtd: number;
}

const SalesPage: React.FC = () => {
    const optionsSearch: [] = []
    const [selected, setSelected] = useState<IProps[]>([]);

    return (
        <>
            <Header/>
            <Container>
                <DivTitle>
                    <h1>Area do vendedor</h1>
                </DivTitle>
                <Multiselect setSelecte={setSelected}/>
            </Container>
        </>
    );
  };

  export default SalesPage;