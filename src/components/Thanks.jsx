import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

import "./css/Thanks.css"

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        Obrigado por nos avaliar! <br />
        Gostariamos de aproveitar este momento para agradecer por ter dedicado um pouco do seu tempo para nos ajudar. <br />
        Por causa de seu comentário, pudemos melhorar nossos serviços, desejamos boa sorte!.
      </p>
      <p>
        Para concluir sua avaliação clique no botão de Enviar abaixo.
      </p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <div className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </div>
      <div className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </div>
    </div>
  )
}

export default Thanks