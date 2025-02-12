import { useState } from "react"
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

const AddMovieForm = () => {
  const initialFormData = {
    title: '',
    abstract: '',
    director: '',
    genre: '',
    year: '',
  }
  const [formData, setFormData] = useState(initialFormData);
  const { storeMovie } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name !== 'image') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, image: e.target.files[0] }));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const movieData = new FormData();

    for (let key in formData) {
      movieData.append(key, formData[key]);
    }

    storeMovie(movieData, () => navigate('/'));
  }
  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <div className="my-2 space-y-2">
        <label
          htmlFor="input-title"
          className="block"
        >Titolo</label>
        <input
          type="text"
          id="input-title"
          name="title"
          placeholder="Inserisci il titolo"
          className="p-2 bg-neutral-900 w-full rounded-lg"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-2 space-y-2">
        <label
          htmlFor="input-abstract"
          className="block"
        >Abstract</label>
        <textarea
          id="input-abstract"
          name="abstract"
          placeholder="Inserisci l'abstract"
          className="p-2 bg-neutral-900 w-full rounded-lg"
          value={formData.abstract}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="my-2 space-y-2">
        <label
          htmlFor="input-director"
          className="block"
        >Regista</label>
        <input
          id="input-director"
          type="text"
          name="director"
          placeholder="Inserisci il regista"
          className="p-2 bg-neutral-900 w-full rounded-lg"
          value={formData.director}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-2 space-y-2">
        <label
          htmlFor="input-genre"
          className="block"
        >Genere</label>
        <input
          id="input-genre"
          type="text"
          name="genre"
          placeholder="Inserisci il genere"
          className="p-2 bg-neutral-900 w-full rounded-lg"
          value={formData.genre}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-2 space-y-2">
        <label
          htmlFor="input-year"
          className="block"
        >Anno</label>
        <input
          id="input-year"
          type="number"
          name="year"
          placeholder="Inserisci l'anno"
          className="p-2 bg-neutral-900 w-full rounded-lg"
          value={formData.year}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-2 space-y-2">
        <label
          htmlFor="input-image"
          className="block"
        >Immagine</label>
        <input
          id="input-image"
          type="file"
          name="image"
          placeholder="Inserisci l'immagine"
          className="p-2 bg-neutral-900 w-full rounded-lg"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button className="bg-blue-600 px-4 py-2 rounded-lg w-full cursor-pointer">Aggiungi</button>
      </div>
    </form>
  )
}

export default AddMovieForm