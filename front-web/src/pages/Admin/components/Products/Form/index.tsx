import { makeRequest } from "core/utils/request";
import React, { useState } from "react";
import BaseForm from "../../BaseForm";
import "./styles.scss";

type FormState = {
  name: string;
  price: string;
  category: string;
  description: string;
};

type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    price: "",
    category: "1",
    description: "",
  });

  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
      imgUrl:
        "https://imagens.canaltech.com.br/produto/1553634225-6587-principal-m.png",
      categories: [{ id: formData.category }],
    };

    makeRequest({ url: "/products", method: "POST", data: payload });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <BaseForm title='CADASTRAR UM PRODUTO'>
          <div className='row'>
            <div className='col-6'>
              <input
                value={formData.name}
                type='text'
                className='form-control mb-5'
                name='name'
                onChange={handleOnChange}
                placeholder='Nome do Produto'
              />
              <select
                value={formData.category}
                name='category'
                className='form-control mb-5'
                onChange={handleOnChange}
              >
                <option value='1'>Livros</option>
                <option value='3'>Computadores</option>
                <option value='2'>Eletronicos</option>
              </select>
              <input
                value={formData.price}
                type='text'
                className='form-control'
                name='price'
                onChange={handleOnChange}
                placeholder='Preço'
              />
            </div>
            <div className='col-6'>
              <textarea
                name='description'
                value={formData.description}
                onChange={handleOnChange}
                className='form-control'
                cols={30}
                rows={10}
              />
            </div>
          </div>
        </BaseForm>
      </form>
    </div>
  );
};

export default Form;
