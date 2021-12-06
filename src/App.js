import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Forms from './components/form/form';
import Message from './components/message/Message';
import Result from './components/result/Result';
import Spinner from './components/spinner/Spinner';

const App = () => {
  const [mount, saveMount] = useState(0)
  const [methodMount, saveMethodMount] = useState('');
  const [total, totalPay] = useState(0);
  const [load, loadSpinner] = useState(false)

  // Load components
  let component;
  if (load) {
    component = <Spinner />
  } else if (total === 0) {
      component = <Message />
  } else {
    component = <Result mount={mount}
                        methodMount={methodMount}
                        total={total}
                />
  }

  return (
    <div className="container p-2 App">
      <Header title="Cotizador de Prestamos" />
      <section className="bg-white p-2 d-flex flex-column justify-content-center align-items-center">
        <Forms
          mount= {mount}
          saveMount={saveMount}
          methodMount={methodMount}
          saveMethodMount={saveMethodMount}
          // total={total}
          totalPay={totalPay}
          loadSpinner = {loadSpinner}
        />
      </section>
      <section className="bg-white p-2 d-flex flex-column justify-content-center align-items-center">
        {component}
      </section>
    </div>
  );
}
export default App;
