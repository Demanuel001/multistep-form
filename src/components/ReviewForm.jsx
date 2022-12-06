import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

import "./css/ReviewForm.css"

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required />
          <BsFillEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiSmileFill/>
          <p>satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very-satisfied" name="review" required />
          <BsFillEmojiHeartEyesFill/>
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder="Deixe um comentário sobre sua experiência ao preencher seu curriculo..." required></textarea>
      </div>
    </div>
  )
}

export default ReviewForm