import React, {
  useCallback, useRef, useEffect, useState,
} from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Table, Space } from 'antd';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { Container, AddContact, ListContact } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErros from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { toogleLoading } from '../../store/modules/loading/actions';

function Dashboard() {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const dispatch = useDispatch();

  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api
      .get('/contacts')
      .then((response) => setContacts(response.data));
  }, []);

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      try {
        dispatch(toogleLoading());
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          phone: Yup.string().required(),
          email: Yup.string().email().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = selected ? await api.put(`/contacts/${selected}`, {
          name: data.name,
          phone: data.phone,
          email: data.email,
        }) : await api.post('/contacts', {
          name: data.name,
          phone: data.phone,
          email: data.email,
        });

        if (response.data) {
          if (selected) {
            const newContacts = contacts.map((contact) => {
              if (selected === contact.id) {
                return {
                  id: contact.id,
                  name: data.name,
                  phone: data.phone,
                  email: data.email,
                };
              }

              return {
                ...contact,
              };
            });

            setContacts([...newContacts]);
            setSelected(null);
          } else {
            setContacts([response.data, ...contacts]);
          }

          reset();

          dispatch(toogleLoading());

          addToast({
            type: 'success',
            title: 'Success',
            description:
              'Contact saved',
          });
        }
      } catch (err) {
        dispatch(toogleLoading());

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error',
          description:
            'An error was fond during save, please try it again.',
        });
      }
    },
    [addToast, contacts, setContacts, selected, setSelected, dispatch],
  );

  async function handleEdit(id) {
    dispatch(toogleLoading());

    const response = await api.get(`/contacts/${id}`);
    const { name, phone, email } = response.data;

    setSelected(id);

    formRef.current.setData({ name, email, phone });
    dispatch(toogleLoading());
  }

  async function handleDelete(id) {
    try {
      dispatch(toogleLoading());
      await api.delete(`/contacts/${id}`);

      const newContacts = contacts.filter((contact) => contact.id !== id);

      setContacts([...newContacts]);

      addToast({
        type: 'success',
        title: 'Success',
        description:
          'Contact deleted',
      });
      dispatch(toogleLoading());
    } catch (err) {
      dispatch(toogleLoading());

      addToast({
        type: 'error',
        title: 'Error',
        description:
          'An error was fond during delete, please try it again.',
      });
    }
  }

  const columns = [
    {
      title: 'Action',
      key: 'name',
      render: (record) => (
        <Space size="middle">
          <button type="button" onClick={() => handleEdit(record.id)}>
            <FiEdit2 size={20} />
          </button>
          <button type="button" onClick={() => handleDelete(record.id)}><FiTrash2 size={20} /></button>
        </Space>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef} autoComplete="false">
        <h1>Contacts</h1>
        <AddContact>
          <Input name="name" type="text" placeholder="Name" />
          <Input name="phone" type="text" placeholder="Phone number" />
          <Input name="email" type="email" placeholder="E-mail" />

          <Button type="submit">Save</Button>
        </AddContact>
        <ListContact>
          <Table columns={columns} dataSource={contacts} rowKey="id" />
        </ListContact>
      </Form>

    </Container>
  );
}

export default Dashboard;
