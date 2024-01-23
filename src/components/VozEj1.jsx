import Dashboard from './Dashboard'
import EjVoz from   './voz/EjVoz'


function VozEj1() {
    return (
         <>
        <Dashboard/>
        <div>
          <h3>Ejemplo 1 de voz: se transcribe lo que hablas</h3>
             
        </div>
        <EjVoz />
        </>
    );
  }
  
  export default VozEj1;