
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Header } from '../../components/Header';
import { Button, ButtonRemove, Container, DivInput, DivTitle, Input, Select } from './styles';
import { Form } from '@unform/web';
import api from '../../services/api';

interface IProducts {
    id?: string;
    name: string;
    weight: number;
    cost_value: number;
    sale_value: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<IProducts[]>();
    const [select, setSelect] = useState<IProducts>({} as IProducts);
    


    const HandleSelected = useCallback((event: ChangeEvent<HTMLSelectElement>)=>{
        const {value} = event.target;

        if (value !== '-1' && products) {
            const produ = products.find(pro => pro.id === value);
            if (produ) {
                setSelect(produ);
            }
        } else {
            setSelect({} as IProducts)
        }
    }, [products]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSelect((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };


    const HandleSave = useCallback(async ()=>{
        try {
            if (select.id) {
                await api.post(`/products/update`, {
                    id: select.id,
                    name: select.name,
                    weight: select.weight,
                    cost_value: select.cost_value,
                    sale_value: select.sale_value,
                })
            } else {
                await api.post(`/products/create`, {
                    name: select.name,
                    weight: select.weight,
                    cost_value: select.cost_value,
                    sale_value: select.sale_value,
                })
            }

            loadData()
        } catch (error) {
            console.log({error})
        }
    }, [select]);


    const handleDelete = useCallback((id: string) => {
        try {
            if (id) {
                api.post(`/products/delete/${id}`)
                setSelect({} as IProducts)
                loadData()
            }
        } catch (error) {
            console.log(error)
        }
    }, []);


    const loadData = () => {
        api.get('/products').then(response => setProducts(response.data))
    }


    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Header/>
            <Container>
                <DivTitle>
                    <h1>Produtos</h1>
                </DivTitle>

                <Select className='select-users' onChange={HandleSelected}>
                    <option value="-1">Criar novo produto</option>
                    {
                        products?.map(product => 
                            <option key={product.id} value={product.id}>{product.name}</option>    
                        )
                    }
                </Select>

 
                    <Form className='form-user' action="" onSubmit={HandleSave}>
                        <DivInput>
                            <Input type="text" id='name' name='name' placeholder='Nome' value={select?.name ? select?.name : ''} onChange={handleChange}/>
                        </DivInput>

                        <DivInput>
                            <Input type="float" id='cost_value' name='cost_value' placeholder='Valor de custo' value={select?.cost_value ? select?.cost_value : ''} onChange={handleChange}/>
                        </DivInput>

                        <DivInput>
                            <Input type="float" id='sale_value' name='sale_value' placeholder='Valor de venda' value={select?.sale_value ? select?.sale_value : ''} onChange={handleChange}/>
                        </DivInput>

                        <DivInput>
                            <Input type="float" id='weight' name='weight' placeholder='Peso' value={select?.weight ? select?.weight : ''} onChange={handleChange}/>
                        </DivInput>
                        {
                            select.id ? <ButtonRemove onClick={() => {handleDelete(select.id ? select.id : '')}}>Deletar</ButtonRemove> : ''
                        }

                        <Button type='submit'>
                            Salvar
                        </Button>

                    </Form> 
                
            </Container>
        </>
    )
}

export default Products;