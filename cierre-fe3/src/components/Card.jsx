import { Link } from 'react-router-dom'
import { useContextGlobal } from "../components/utils/global.context"


const Card = ({ dentist }) => {
  const { themeState, favDispatch, favState } = useContextGlobal()

  const addFav = () => {
    if (favState.find(fav => fav.id === dentist.id)) {
      alert('⚠️ Este elemento ya está incluido en tus destacados.')
    } else {
      favDispatch({ type: 'ADD_FAV', payload: dentist })
      alert('✅ El dentista ha sido añadido a tus destacados.')
    }
  }

  return (
    <div className={themeState.theme ? 'card' : 'card'}>
      <div>
        <Link to={`/dentist/${dentist.id}`}>
          <img src="/src/assets/doctor.jpg" alt="imagen del medico" width={200} />
          <h3>{dentist.name}</h3>
          <h3>{dentist.username}</h3>
          <h4>{dentist.id}</h4>
        </Link>
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </div>
    </div>
  );
};

export default Card