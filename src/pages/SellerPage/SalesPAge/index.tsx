import React, { useCallback, useEffect, useState } from 'react'
import { ButtonAdd, Container, DivTitle, DevSelect, ButtonRemove} from './styles'
import { Header } from '../../../components/Header'
import Multiselect from '../../../components/Multiselect';
import api from '../../../services/api';

interface IProps {
    id: string;
    qtd: number;
    index: number;
    name: string;
}

interface IProducts {
    id: string;
    name: string;
    weight: string;
    sale_value: string;
}

interface IProductsFormated {
    value: string;
    label: string;
}

const SalesPage: React.FC = () => {
    const [products, setProducts] = useState<IProducts[]>([]);
    const [productsFormated, setProductsFormated] = useState<IProductsFormated[]>([]);
    const [selected, setSelected] = useState<IProps[]>([]);
    const [indexProducts, setIndexProducts] = useState(1);

    const handleAddMoreSelectOnScreen = useCallback(() => {
        setIndexProducts(indexProducts + 1);
        setSelected([...selected, {id: '', qtd: 0, index: indexProducts, name: 'Produtos'}])

        console.log({selected})
    }, [indexProducts, selected]);

    const handleRemoveMoreSelectOnScreen = useCallback((index: number) => {
        const dataSelected = selected.filter( sele => sele.index !== index);
        setSelected(dataSelected)
    }, [selected]);


    const handleSaved = useCallback((product: IProps) => {
        console.log({product})
        selected.forEach(select => {
            if (select.index === product.index) {
                console.log('aqui')
                select.id = product.id;
                select.name = product.name;
                select.qtd = product.qtd;
            }
        })
    }, [selected])

    useEffect(()=> {
        api.get('/products').then(response => setProducts(response.data));
    }, []);

    useEffect(()=> {
        setProductsFormated(products.map(product => {return {value: product.id, label: product.name}}));
    }, [products])

    return (
        <>
            <Header/>
            <Container>
                <DivTitle>
                    <h1>Area do vendedor</h1>
                </DivTitle>
                {
                    selected.map((qtdIndex) => (
                        <DevSelect>
                            <Multiselect key={qtdIndex.index} salved={handleSaved} productSelected={qtdIndex} options={productsFormated}/> 
                            <ButtonRemove onClick={() => { handleRemoveMoreSelectOnScreen(qtdIndex.index)}}>-</ButtonRemove>
                        </DevSelect>
                        )
                    )
                }
                <ButtonAdd onClick={handleAddMoreSelectOnScreen}>+</ButtonAdd>
            </Container>
        </>
    );
  };

  export default SalesPage;