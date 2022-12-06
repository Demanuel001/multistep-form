// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

// Hooks
import { useForm } from './hooks/useForm'

// Styles
import './App.css'

function App() {
  const formComponents = [ <UserForm/>, <ReviewForm/>, <Thanks/>]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div className="App">
      <div className="Header">
        <h1>Deixe sua avaliação.</h1>
        <p>Ultilize o formulário abaixo para avaliar sua experiência ao preencher seu curriculo.</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type='buttom' onClick={(e) => changeStep(currentStep - 1, e)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
            )}
            { !isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext/>
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend/>
            </button>
            ) }
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
