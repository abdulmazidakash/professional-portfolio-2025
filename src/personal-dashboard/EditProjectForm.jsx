import {
	FaPlus,
	FaProjectDiagram,
	FaInfoCircle,
	FaTools,
	FaExternalLinkAlt,
	FaGithub,
	FaEdit,
  } from "react-icons/fa";
  import { useState } from "react";
  import { useParams, useNavigate } from "react-router";
  import axios from "axios";
  import { imageUpload, shortImageName } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
  
  const EditProjectForm = () => {
	const { id } = useParams();
	const navigate = useNavigate();
  
	// const [project, setProject] = useState(null);
	const [uploadImage, setUploadImage] = useState({ image: { name: 'upload button' } });
  
	const { data: project = [] } = useQuery({
		queryKey: ["project", id],
		queryFn: async () => {
		  const response = await axios.get(`http://localhost:3000/projects/${id}`);
		  return response.data;
		},
	  });
	  console.log(`all project---->`,project);

	  const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
	  
		const name = form.name.value;
		const description = form.description.value;
		const technologies = form.technologies.value;
		const liveLink = form.liveLink.value;
		const githubLink = form.githubLink.value;
		const date = form.date.value;
	  
		const challengesText = form.challenges.value.trim();
		const improvementsText = form.improvements.value.trim();
	  
		const challenges = challengesText
		  ? challengesText.split("\n").map((line) => line.trim()).filter(line => line)
		  : [];
	  
		const improvements = improvementsText
		  ? improvementsText.split("\n").map((line) => line.trim()).filter(line => line)
		  : [];
	  
		let imageUrl = project?.imageUrl;
		const image = form.image.files[0];
	  
		if (image) {
		  imageUrl = await imageUpload(image);
		}
	  
		if (!name || !description || !technologies || !liveLink || !githubLink || !date || !imageUrl) {
		  return Swal.fire({
			icon: 'warning',
			title: 'Missing Fields',
			text: 'Please fill all the fields before submitting.',
		  });
		}
	  
		const updatedProject = {
		  name,
		  description,
		  technologies,
		  liveLink,
		  githubLink,
		  date,
		  imageUrl,
		  challenges,
		  improvements,
		};
	  
		try {
		  const response = await axios.put(`http://localhost:3000/update-project/${id}`, updatedProject);
		  if (response.status === 200) {
			await Swal.fire({
			  icon: 'success',
			  title: 'Project Updated!',
			  text: 'Your project has been successfully updated.',
			  confirmButtonColor: '#317371',
			});
			navigate("/all-project");
		  }
		} catch (error) {
		  console.error(error);
		  Swal.fire({
			icon: 'error',
			title: 'Update Failed',
			text: 'There was an error updating the project. Please try again.',
		  });
		}
	  };
	  
  
	if (!project) {
	  return <p className="text-center text-gray-600">Loading project...</p>;
	}
  
	return (
	  <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-[#D9D9D9]">
		<h2 className="text-3xl font-bold mb-6 text-center text-[#317371] flex items-center justify-center gap-2">
		  <FaEdit className="text-primary" /> Edit Project
		</h2>
  
		<form onSubmit={handleSubmit} className="space-y-5">
		  {/* Image Upload */}
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
				{shortImageName(uploadImage?.image || { name: project?.imageUrl })}
			  </div>
			  <span className="text-xs text-gray-500">Click to change image</span>
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
  
		  {/* Name */}
		  <div className="form-control">
			<label className="label font-semibold text-sm">
			  <FaProjectDiagram className="mr-2 text-[#785F54]" />
			  Project Name
			</label>
			<input
			  type="text"
			  name="name"
			  defaultValue={project?.name}
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
			  defaultValue={project?.description}
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
			  defaultValue={project?.technologies}
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
			  defaultValue={project?.liveLink}
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
			  defaultValue={project?.githubLink}
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
			  defaultValue={project?.challenges?.join("\n")}
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
			  defaultValue={project?.improvements?.join("\n")}
			  className="textarea textarea-bordered w-full"
			  rows={3}
			/>
		  </div>
  
		  {/* Date */}
		  <div className="form-control">
			<label className="label font-semibold text-[#317371]">Project Date</label>
			<input
			  type="date"
			  name="date"
			  className="input input-bordered w-full"
			  defaultValue={project?.date?.split("T")[0]}
			/>
		  </div>
  
		  {/* Submit Button */}
		  <div className="pt-4">
			<button
			  type="submit"
			  className="btn bg-[#317371] hover:bg-[#285e5c] text-white w-full text-lg"
			>
			  <FaPlus className="mr-2" />
			  Update Project
			</button>
		  </div>
		</form>
	  </div>
	);
  };
  
  export default EditProjectForm;
  