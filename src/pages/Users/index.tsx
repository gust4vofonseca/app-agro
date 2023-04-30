
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header';
import { Button, ButtonRemove, ButtonVisible, Container, DivInput, DivTitle, Input, Select } from './styles';
import { ReactComponent as PasswordIcon } from '../../assets/icons/password.svg';
import { ReactComponent as VisibleIcon } from '../../assets/icons/visibility.svg';
import { Form } from '@unform/web';
import api from '../../services/api';

interface IProducts {
    id?: string;
    name: string;
    isAdmin: boolean;
    email: string;
    password: string;
}

const Users: React.FC = () => {
    const [isPasswordShadow, setIsPasswordShadow] = useState(false);
    const [products, setProducts] = useState<IProducts[]>();
    const [select, setSelect] = useState<IProducts>({} as IProducts);

    const tooglePasswordVisible = useCallback(() => {
        setIsPasswordShadow(!isPasswordShadow);
      }, [isPasswordShadow]);

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
                await api.post(`/user/update`, {
                    id: select.id,
                    name: select.name,
                    email: select.email,
                    password: select.password,
                    isAdmin: select.isAdmin,
                })
            } else {
                await api.post(`/user/create`, {
                    name: select.name,
                    email: select.email,
                    password: select.password,
                    isAdmin: select.isAdmin,
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
                api.post(`/user/delete/${id}`)
                setSelect({} as IProducts)
                loadData()
            }
        } catch (error) {
            console.log(error)
        }
    }, []);
  
  
      const loadData = () => {
          api.get('/user').then(response => setProducts(response.data))
      }
  
  
      useEffect(() => {
          loadData()
      }, [])


    return (
        <>
            <Header/>
            <Container>
                <DivTitle>
                    <h1>Usuarios</h1>
                </DivTitle>

                <Select className='select-users' onChange={HandleSelected}>
                    <option value="-1">Criar novo usuario</option>
                    {
                        products?.map(product => 
                            <option key={product.id} value={product.id}>{product.name}</option>    
                        )
                    }
                </Select>

                <Form className='form-user' action="" onSubmit={HandleSave}>
                    <DivInput>
                        <Input type="text" id='name' name='name' placeholder='Nome' onChange={handleChange} value={select?.name ? select?.name : ''}/>
                    </DivInput>

                    <DivInput>
                        <Input type="text" id='email' name='email' placeholder='Email' onChange={handleChange} value={select?.email ? select?.email : ''}/>
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
                        {
                            select.isAdmin ? 
                            <Select id='adm' name='adm'>
                                <option value="">ADM</option>
                                <option value="true" selected>Sim</option>
                                <option value="false">Não</option>
                            </Select> 
                            :
                            <Select id='adm' name='adm'>
                                <option value="">Permisão de Administrador?</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </Select>
                        }

                    </DivInput>

                    {
                        select.id ? <ButtonRemove onClick={() => {handleDelete(select.id ? select.id : '')}}>Deletar</ButtonRemove> : ''
                    }


                    <Button>
                        Salvar
                    </Button>

                </Form>
            </Container>
        </>
    )
}

export default Users;