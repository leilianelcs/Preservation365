import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar/Sidebar';
import './editarPlanta.css';

const EditarPlanta = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        const plants = JSON.parse(localStorage.getItem('plants')) || [];
        const plantToEdit = plants.find(plant => plant.id === id);
        if (plantToEdit) {
            setPlant(plantToEdit);
            setValue('planta', plantToEdit.planta);
            setValue('habitat', plantToEdit.habitat);
            setValue('descricao', plantToEdit.descricao);
        }
    }, [id, setValue]);

    const onSubmit = (data) => {
        const plants = JSON.parse(localStorage.getItem('plants')) || [];
        const updatedPlants = plants.map(plant => plant.id === id ? { ...plant, ...data } : plant);
        localStorage.setItem('plants', JSON.stringify(updatedPlants));
        alert('Planta atualizada com sucesso!');
        navigate(`/planta/${id}`);
    };

    if (!plant) {
        return <div>Planta não encontrada</div>;
    }

    return (
        <div>
            <Sidebar />
            <h2>Editar Planta</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="planta">Nome da Planta:</label>
                    <input
                        id="planta"
                        {...register('planta', {
                            required: 'Nome da planta é obrigatório',
                            maxLength: {
                                value: 100,
                                message: 'Nome da planta não deve ultrapassar 100 caracteres'
                            }
                        })}
                    />
                    {errors.planta && <span role="alert">{errors.planta.message}</span>}
                </div>
                <div>
                    <label htmlFor="habitat">Habitat:</label>
                    <select id="habitat" {...register('habitat', { required: 'Habitat é obrigatório' })}>
                        <option value="">Selecione o habitat</option>
                        <option value="floresta">Floresta</option>
                        <option value="cerrado">Cerrado</option>
                        <option value="pantano">Pântano</option>
                        <option value="deserto">Deserto</option>
                    </select>
                    {errors.habitat && <span role="alert">{errors.habitat.message}</span>}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição da Planta:</label>
                    <textarea
                        id="descricao"
                        {...register('descricao', {
                            maxLength: {
                                value: 500,
                                message: 'Descrição não deve ultrapassar 500 caracteres'
                            }
                        })}
                    />
                    {errors.descricao && <span role="alert">{errors.descricao.message}</span>}
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default EditarPlanta;
