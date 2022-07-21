import './MoviesCard.css';
import movieImage from '../../images/movie-image.jpg';

const handleLikeCard = () => {
  const likeButtons = document.querySelectorAll('.movies-card__like');
  likeButtons.forEach(button => {
    button.classList.toggle('movies-card__like_active');
  });
};

function MoviesCard({ saved }) {
  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__name'>33 слова о дизайне</h2>
        <p className='movies-card__duration'>1ч 47м</p>
        <button className={ 
        saved ? 
       'movies-card__dislike':
       'movies-card__like'} 
        type='button'
        onClick={handleLikeCard}>
      </button>
      </div>
      <img className='movies-card__image' src={movieImage} alt='movie'/>
    </li>
  );
}

export default MoviesCard;