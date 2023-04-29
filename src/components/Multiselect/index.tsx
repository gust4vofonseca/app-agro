import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Container, Input, Select } from './styles'
// import Select, { SingleValue } from 'react-select'
interface IProps {
    id: string;
    qtd: number;
    index:number;
    name: string;
}

interface IOptions {
  value: string;
  label:string;
}

interface IMultiselectProps {
    salved: (data: IProps) => void;
    productSelected: IProps;
    options: IOptions[];
  }


const Multiselect: React.FC<IMultiselectProps> = ({salved, productSelected, options}: IMultiselectProps) => {
    const [selected, setSelected] = useState<IProps>({} as IProps);

    const handleProdut = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const {value} = event.target;

        if(value) {
          const [name] = options.filter(opt => opt.value === value);
  
          setSelected({id: value, name: name.label, qtd: selected?.qtd ? selected?.qtd : 0, index: productSelected.index})
        } else {
          setSelected({id: '', name: '', qtd: selected?.qtd ? selected?.qtd : 0, index: productSelected.index})
        }

    }, [options, productSelected.index, selected?.qtd])

    const handleQtd = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setSelected({id: selected?.id ? selected?.id : '', name: selected?.name ? selected?.name : '', qtd: Number(value), index: productSelected.index})
    }, [productSelected.index, selected])

    useEffect(() => {
        salved(selected)
      }, [selected, salved]);

    return (
        <Container>
              <Select onChange={handleProdut}>
                <option value="">Selecione uma opção</option>
                 {
                  options.map( opt => (
                    opt.value === productSelected.id ?
                      <option key={opt.value} value={opt.value} selected>{opt.label}</option> :
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                  )
                  )
                 }
              </Select>
              <Input type='number' onChange={handleQtd} defaultValue={productSelected.qtd}/>
        </Container>
    );
  };

  export default Multiselect;