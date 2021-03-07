import {useState} from 'react';

function Home(){
    return (
        <div>
            <h2>Home</h2>
            <Contador />
        </div>
    )
}

const [Contador,setContador] = useState(1);
function Contador() {

    function adicionaContador() {
        setContador(Contador + 1);
    }
    return (
        <div>
            <div>{Contador}</div>
            <button onClick={adicionaContador}>Adicionar</button>
        </div>
    )
}

export default Home