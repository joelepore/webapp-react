import { useContext, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../contexts/GlobalContext";
import { useParams } from "react-router-dom";

const AddReviewForm = () => {
  const initialFormData = {
    name: '',
    text: '',
    vote: 5
  }
  const [formData, setFormData] = useState(initialFormData);
  const { fetchMovie } = useContext(GlobalContext);
  const { id } = useParams();

  const handleSubmit = (e) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    e.preventDefault();
    const insertNewReview = async () => {
      try {
        await axios.post(`${apiUrl}${id}/reviews`, formData, { headers: { 'Content-Type': 'application/json' } });
        setFormData(initialFormData);
        fetchMovie(id, () => { console.log('fetched') });
      } catch (err) {
        console.error(err.message);
      }
    }

    insertNewReview();
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold pt-6">Add a new review</h2>
      <div className="my-2">
        <label htmlFor="input-name" className="mb-2 inline-block">Name</label>
        <input
          type="text"
          id="input-name"
          name="name"
          className="bg-neutral-900 rounded-lg w-full p-2"
          placeholder="Type your name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="my-2">
        <label htmlFor="input-text" className="mb-2 inline-block">Text</label>
        <textarea
          name="text"
          id="input-text"
          className="bg-neutral-900 rounded-lg w-full p-2"
          placeholder="Type your review"
          value={formData.text}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="my-2">
        <label htmlFor="input-vote" className="mb-2 block">Vote (from 1 to 5)</label>
        <input
          type="number"
          name="vote"
          id="input-vote"
          className="bg-neutral-900 rounded-lg p-2 w-12"
          value={formData.vote}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-600 py-2 px-4 rounded-full cursor-pointer">Send</button>
      </div>
    </form>

  )
}

export default AddReviewForm