
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header';
import { Button, ButtonRemove, Container, DivInput, DivTitle, Input, Select } from './styles';
import { Form } from '@unform/web';
import api from '../../services/api';

interface IVehicles {
    id?: string;
    name: string;
    price_per_km: number;
    minimum_km: number;
    maximum_km: number;
    minimum_weight: number;
    maximum_weight: number;
}

const Vehicles: React.FC = () => {
    const [products, setProducts] = useState<IVehicles[]>();
    const [select, setSelect] = useState<IVehicles>({} as IVehicles);

    const HandleSelected = useCallback((event: ChangeEvent<HTMLSelectElement>)=>{
        const {value} = event.target;

        if (value !== '-1' && products) {
            const produ = products.find(pro => pro.id === value);
            if (produ) {
                setSelect(produ);
            }
        } else {
            setSelect({} as IVehicles)
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
                await api.post(`/vehicle/update`, {
                    id: select.id,
                    name: select.name,
                    price_per_km: select.price_per_km,
                    minimum_km: select.minimum_km,
                    maximum_km: select.maximum_km,
                    minimum_weight: select.minimum_weight,
                    maximum_weight: select.maximum_weight
                })
            } else {
                await api.post(`/vehicle/create`, {
                    name: select.name,
                    price_per_km: select.price_per_km,
                    minimum_km: select.minimum_km,
                    maximum_km: select.maximum_km,
                    minimum_weight: select.minimum_weight,
                    maximum_weight: select.maximum_weight
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
                api.post(`/vehicle/delete/${id}`)
                setSelect({} as IVehicles)
                loadData()
            }
        } catch (error) {
            console.log(error)
        }
    }, []);


    const loadData = () => {
        api.get('/vehicle').then(response => setProducts(response.data))
    }


    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Header/>
            <Container>
                <DivTitle>
                    <h1>Veiculos</h1>
                </DivTitle>

                <Select className='select-users' onChange={HandleSelected}>
                    <option value="-1">Criar novo veiculo</option>
                    {
                        products?.map(product => 
                            <option key={product.id} value={product.id}>{product.name}</option>    
                        )
                    }
                </Select>

                <Form className='form-user' action="" onSubmit={HandleSave}>
                    <DivInput>
                        <Input type="text" id='name' name='name' placeholder='Nome' value={select?.name ? select?.name : ''}  onChange={handleChange}/>
                    </DivInput>

                    <DivInput>
                        <Input type="float" id='price_per_km' name='price_per_km' placeholder='Preço por KM' value={select?.price_per_km ? select?.price_per_km : ''}  onChange={handleChange}/>
                    </DivInput>

                    <DivInput>
                        <Input type="number" id='minimum_km' name='minimum_km' placeholder='Km minimo' value={select?.minimum_km ? select?.minimum_km : ''}  onChange={handleChange}/>
                    </DivInput>

                    <DivInput>
                        <Input type="number" id='maximum_km' name='maximum_km' placeholder='Km maximo' value={select?.maximum_km ? select?.maximum_km : ''}  onChange={handleChange}/>
                    </DivInput>

                    <DivInput>
                        <Input type="number" id='minimum_weight' name='minimum_weight' placeholder='Peso minimo' value={select?.minimum_weight ? select?.minimum_weight : ''}  onChange={handleChange}/>
                    </DivInput>

                    <DivInput>
                        <Input type="number" id='maximum_weight' name='maximum_weight' placeholder='Peso maximo' value={select?.maximum_weight ? select?.maximum_weight : ''}  onChange={handleChange}/>
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

export default Vehicles;