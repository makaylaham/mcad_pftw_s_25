import { useForm } from "react-hook-form";
import "./cdForm.css";

export function NewAlbumForm(props) {
    const {addAlbumFn} = props;
    const { register, handleSubmit, formState:{errors}, reset } = useForm();
    function handleSubmitJob(data) {
        addAlbumFn(data);
        reset();
    }
    
    
    return (
        <div className="form-wrapper">
          <h4>Add Your CD To The Collection!</h4>
          
          <form onSubmit={handleSubmit(handleSubmitJob)}>

            <div className="form-group">
              <label>Album Name</label>
              <input id="albumName" {...register("albumName", {required:true})} />
            </div>
            <div className="form-group">
              <label>Album Artist</label>
              <input id="albumArtist" {...register("albumArtist", {required:true})} />
            </div>
            <div className="form-group">
              <label>Release Year</label>
              <input id="releaseYear" {...register("releaseYear", {required:true})} />
            </div>
            <div className="form-group">
              <label htmlFor="cdImage">Image</label>
              <input {...register("image", {required:true})} />
              {errors.image && (<p className="error">***IMAGE IS REQUIRED***</p>)}
            </div>
            <div className="form-group">
              <label>Number of Tracks</label>
              <input id="numberOfTracks" {...register("numberOfTracks", {required:true})} />
            </div>
            <div className="form-group">
              <label>Label Company</label>
              <input id="labelCompany" {...register("labelCompany", {required:true})} />
            </div>

            <button type="submit">Add New CD To Collection</button>
          </form>
        </div>
    )
}