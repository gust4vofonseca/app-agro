import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Container, Input, Select } from './styles'
import { MultiSelect } from 'react-multi-select-component';

interface IProps {
    id: string;
    qtd: number;
}

interface IMultiselectProps {
    setSelecte: (data: Array<IProps>) => void;
  }


const Multiselect: React.FC<IMultiselectProps> = ({setSelecte}: IMultiselectProps) => {
    const [selected, setSelected] = useState<IProps>();

    const handleProdut = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setSelected({id: value, qtd: selected?.qtd ? selected?.qtd : 0})
    }, [selected?.qtd])

    const handleQtd = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setSelected({id: selected?.id ? selected?.id : '', qtd: Number(value)})
    }, [selected?.id])

    useEffect(() => {
        // setSelecte(selected);
        // console.log(selected)
      }, [setSelecte, selected]);

    return (
        <Container>
              <Select defaultValue="produtos" onChange={handleProdut}>
                <option value="produtos">Produtos</option>
                <option key={1} value={1}>1</option>
                <option key={2} value={2}>1</option>
                <option key={3} value={3}>1</option>
                <option key={4} value={4}>1</option>
              </Select>
                <Input type='number' onChange={handleQtd}/>
        </Container>
    );
  };

  export default Multiselect;