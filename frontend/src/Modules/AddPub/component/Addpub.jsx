import './Addpub.css';
import { useForm } from 'react-hook-form';
import Urls from './../Api/urls/urls';
import { useMutation } from 'react-query'
import axios from 'axios'

function Addpub() {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const addpub = Urls.baseUrl

    //creer le mutation pour poster
    const addPubMutation = useMutation({
        mutationFn: (newPub) => {
            return axios.post(addpub, newPub)
        },
    })


    const onSubmitHandler = data => {
        addPubMutation.mutate(data)
        alert('Donnez bien stocker')
        
    }

    return (
        <div className="form-container">
            <h2>Ajouter une carte</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="form-group">
                    <label htmlFor="title">Titre :</label>
                    <input
                        type="text"
                        id="title"
                        {...register("title", { required: true })}
                    />
                    {(errors) && <span>Veifier  le titre</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Lien de l&apos;image :</label>
                    <input
                        type="text"
                        id="image"
                        {...register("image", { required: true })}
                    />
                    {(errors) && <span>Veifier  le titre</span>}
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default Addpub
