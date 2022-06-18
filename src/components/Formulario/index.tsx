import React, { Dispatch, SetStateAction, useState } from 'react';
import { ITarefa } from '../../types/ITarefa';
import Button from '../Button';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';
interface IForm{
    tarefa: string
    tempo: string
}

function Formulario ({setTarefas} : {setTarefas : Dispatch<SetStateAction<ITarefa[]>>}) {
    const [formState, setFormState] = useState<IForm>({
        tarefa:'',
        tempo: '00:00:00'
    });

    function adicionarTarefa(e:React.FormEvent) {
        e.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {...formState, 
                    selecionado: false, 
                    completado:false, 
                    id: uuidv4()
                }
            ]
        );
        setFormState({
            tarefa: "",
            tempo: "00:00:00"
        });
    };

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    placeholder="O que você quer estudar" 
                    required 
                    value={formState?.tarefa}
                    onChange={e => setFormState({...formState, tarefa: e.target?.value || ""})}/>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input 
                    type="time" 
                    step="1" 
                    name="tempo" 
                    id="tempo" 
                    min="00:00:00" 
                    max="01:30:00" 
                    required
                    value={formState.tempo}
                    onChange={e => setFormState({...formState, tempo: e.target?.value || "00:00:00"})}/>
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Formulario;