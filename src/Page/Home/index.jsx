 import {Link, useHistory} from 'react-router-dom'


function Home ({data}){
    const add = useHistory()



    return(
        <div className='all'>
            <ul>
                {data.map((item) => item.type === 'pj'? 
                (<li key={item.id}><Link to={`/company/${item.id}`}>{item.name}</Link></li>):
                (<li key={item.id}><Link to={`/customer/${item.id}`}>{item.name}</Link></li>))}
            </ul>
            <button onClick={() => add.push('/add')}>Cadastrar</button>

        </div>


    )

}

export default Home