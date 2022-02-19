import { Route, Switch } from "react-router-dom";
import Add from "../Components/Add";
import Company from "../Page/Company";
import Customer from "../Page/Customer";
import Home from "../Page/Home";

function Routes ({data, handleAdd}){
        console.log(data)
        

      return(
        <Switch>
        {/* rota home */}
        <Route exact path='/'>
        <Home data={data}/>
        </Route>

        {/* rota Cliente */}
        <Route path='/customer/:id'>
        <Customer data={data}/>
        </Route>

        {/* Rota Empresa */}
        <Route path='/company/:id'>
        <Company data={data}/>
        </Route>

        {/* Rota Adicionar */}
        <Route path='/add'>
        <Add data={data} handleAdd={handleAdd}/>
        </Route>
        </Switch>
      )
}

export default Routes