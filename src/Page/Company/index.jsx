import {Link, useParams} from 'react-router-dom'

function Company({data}){
    const {id} = useParams()
    const company = data.find(item => item.id === id)
    console.log(id, company)

    return(
        <div>
            <h1>Detalhes da Empresa</h1>
            <p>Nome da Empresa: {company && company.name}</p>
            <p>Tipo: {company && company.type}</p>
            <Link to="/">Voltar</Link>
        </div>



    )
}

export default Company