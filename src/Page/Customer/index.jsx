import {useParams, Link} from 'react-router-dom'


function Customer({data}){
    const {id} = useParams()
    const member = data.find(item => item.id === id )
    console.log(data)
    

    return(
        <div>
            <h1>Detalhes do Cliente</h1>
            <p>Nome: {member && member.name}</p>
            <p>Tipo: {member && member.type}</p>
            <Link to='/'>Voltar </Link>
            



            
        </div>


    )
}

export default Customer