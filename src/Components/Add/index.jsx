import {Link, useHistory} from 'react-router-dom'
import { useForm} from "react-hook-form";
import { useState } from 'react';



function Add ({data, handleAdd}){
    const home = useHistory()

    const { register, handleSubmit} = useForm({

    })
   

    return(
        <div>
            <form onSubmit={handleSubmit(handleAdd)}>
                <input {...register('name')} placeholder='Nome:'></input>
                <select {...register('type')}>
                    <option value=''>Selecione</option>
                    <option value='pf'>PF</option>
                    <option value='pj'>PJ</option>
                </select>
                
                <button type='submit'>Cadastrar</button>

                
            </form>
            <button onClick={() => home.push('/')}>Voltar</button>
            

            
        </div>
    )
}

export default Add