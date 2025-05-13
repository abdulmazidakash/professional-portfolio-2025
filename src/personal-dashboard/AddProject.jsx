
import {
  FaPlus,
  FaProjectDiagram,
  FaInfoCircle,
  FaTools,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { imageUpload, shortImageName } from "../utils/utils";

import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";

const AddProjectForm = () => {

  const [uploadImage, setUploadImage] = useState({ image: { name: 'upload button' } });
  const navigate = useNavigate();
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const technologies = form.technologies.value;
    const liveLink = form.liveLink.value;
    const githubLink = form.githubLink.value;
    const date = form.date.value;

    //
    const image = form.image.files[0];
    const imageUrl = await imageUpload(image);

    const challengesText = form.challenges.value.trim();
const improvementsText = form.improvements.value.trim();

const challenges = challengesText
  ? challengesText.split("\n").map(line => line.trim()).filter(line => line)
  : [];

const improvements = improvementsText
  ? improvementsText.split("\n").map(line => line.trim()).filter(line => line)
  : [];


    const projectData = {
      name,
      description,
      technologies,
      liveLink,
      githubLink,
      date,
      imageUrl,
      challenges,
      improvements
    }
    console.table("project data", projectData);

    //
    if (
      !name ||
      !description ||
      !technologies ||
      !liveLink ||
      !githubLink ||
      !imageUrl ||
      !date
    ) {
      return toast.error("Please fill all the fields");
    }

    try {
      const response = await axios.post(`http://localhost:3000/add-project`, projectData);
      console.log(response.data);

      if (response.status === 200 || response.status === 201) {
        toast.success('projectData added successfully!');
        form.reset();
        navigate(`/all-project`);
      } else {
        toast.error('Failed to add projectData!');
      }
    } catch (error) {
      console.error('Error adding projectData:', error);
      toast.error('Error adding projectData!');
    } 

  }


  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-[#D9D9D9]">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#317371] flex items-center justify-center gap-2">
        <FaPlus className="text-primary" /> Add New Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* //image upload input  */}
        <div className="form-control mb-4">
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
            name="image"
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
        </div>
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
        {/* Challenges */}
          <div className="form-control">
            <label className="label font-semibold text-sm">
              <FaTools className="mr-2 text-[#785F54]" />
              Challenges (one per line)
            </label>
            <textarea
              name="challenges"
              placeholder="Write each challenge in a new line"
              className="textarea textarea-bordered w-full"
              rows={3}
            />
          </div>

          {/* Improvements */}
          <div className="form-control">
            <label className="label font-semibold text-sm">
              <FaTools className="mr-2 text-[#785F54]" />
              Improvements (one per line)
            </label>
            <textarea
              name="improvements"
              placeholder="Write each improvement in a new line"
              className="textarea textarea-bordered w-full"
              rows={3}
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
