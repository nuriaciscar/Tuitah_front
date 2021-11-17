import { useEffect, useState } from "react";
import axios from "axios";

const FormCreate = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const initialData = {
    text: "",
  };
  const [postData, setPostData] = useState(initialData);

  const changeData = (event) => {
    setPostData({
      ...postData,
      [event.target.id]: event.target.value,
    });
  };
  const resetForm = () => {
    setPostData(initialData);
  };
  useEffect(() => {
    setButtonDisabled(postData.text === "");
  }, [postData]);

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("https://tuits.herokuapp.com/tuits", postData);
    resetForm();
  };

  return (
    <>
      <div className="creation-formulary">
        <h2>Create a new Tuit</h2>
        <form onSubmit={onSubmit} autoComplete="off" noValidate>
          <div className="form-group">
            <textarea
              placeholder="Write something please"
              type="text"
              value={postData.text}
              className="form-control"
              id="text"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-info"
              disabled={buttonDisabled}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCreate;
