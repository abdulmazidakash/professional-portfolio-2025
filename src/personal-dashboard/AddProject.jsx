
import {
  FaPlus,
  FaProjectDiagram,
  FaInfoCircle,
  FaTools,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const AddProjectForm = () => {
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const technologies = form.technologies.value;
    const liveLink = form.liveLink.value;
    const githubLink = form.githubLink.value;
    const date = form.date.value;

    const projectData = {
      name,
      description,
      technologies,
      liveLink,
      githubLink,
      date,
    }
    console.log("project data", projectData);

  }


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-[#D9D9D9]">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#317371] flex items-center justify-center gap-2">
        <FaPlus className="text-primary" /> Add New Project
      </h2>

      {/* File Upload Section */}
      {/* <div className="form-control mb-4">
        <label className="label font-semibold text-sm">
          <FaPlus className="mr-2 text-[#785F54]" />
          Project Image
        </label>

        <label
          htmlFor="image"
          className="flex items-center justify-between gap-3 border-2 border-dashed rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <FaPlus className="text-[#317371]" />
            {shortImageName(uploadImage?.image)}
          </div>
          <span className="text-xs text-gray-500">Click to upload</span>
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            setUploadImage({
              image: e.target.files[0],
              url: URL.createObjectURL(e.target.files[0]),
            })
          }
        />
      </div> */}

      {/* {uploadImage?.image && (
        <div className="flex items-center gap-4 mb-4 border p-2 rounded-md">
          <img
            src={uploadImage?.url}
            alt="Preview"
            className="w-16 h-16 object-cover rounded border"
          />
          <div className="text-sm text-gray-600">
            <p>{uploadImage?.image?.name}</p>
            <p>{(uploadImage?.image?.size / 1024).toFixed(1)} KB</p>
          </div>
        </div>
      )} */}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Project Name */}
        <div className="form-control">
          <label className="label font-semibold text-sm">
            <FaProjectDiagram className="mr-2 text-[#785F54]" />
            Project Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter project name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label font-semibold text-sm">
            <FaInfoCircle className="mr-2 text-[#785F54]" />
            Description
          </label>
          <textarea
            name="description"
            placeholder="Write a short description"
            className="textarea textarea-bordered w-full"
            rows={3}
          />
        </div>

        {/* Technologies */}
        <div className="form-control">
          <label className="label font-semibold text-sm">
            <FaTools className="mr-2 text-[#785F54]" />
            Technologies
          </label>
          <input
            type="text"
            name="technologies"
            placeholder="e.g. React, Tailwind, MongoDB"
            className="input input-bordered w-full"
          />
        </div>

        {/* Live Link */}
        <div className="form-control">
          <label className="label font-semibold text-sm">
            <FaExternalLinkAlt className="mr-2 text-[#785F54]" />
            Live Link
          </label>
          <input
            type="text"
            name="liveLink"
            placeholder="https://yourproject.netlify.app"
            className="input input-bordered w-full"
          />
        </div>

        {/* GitHub Link */}
        <div className="form-control">
          <label className="label font-semibold text-sm">
            <FaGithub className="mr-2 text-[#785F54]" />
            GitHub Link
          </label>
          <input
            type="text"
            name="githubLink"
            placeholder="https://github.com/yourrepo"
            className="input input-bordered w-full"
          />
        </div>

        {/* Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-[#317371]">Project Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            defaultValue={new Date().toISOString().split("T")[0]} // Set default date to today
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="btn bg-[#317371] hover:bg-[#285e5c] text-white w-full text-lg"
          >
            <FaPlus className="mr-2" />
            Submit Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
