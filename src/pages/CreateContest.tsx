import React from "react";

const CreateContest: React.FC = () => {
  return (
    <div className="page">
      <h1>Create Contest</h1>
      <form className="create-contest-form">
        <div className="form-group">
          <label htmlFor="title">Contest Title</label>
          <input type="text" id="title" placeholder="Enter contest title" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter contest description"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prize">Prize</label>
          <input type="text" id="prize" placeholder="Enter prize amount" />
        </div>

        <button type="submit" className="btn-primary">
          Create Contest
        </button>
      </form>
    </div>
  );
};

export default CreateContest;
