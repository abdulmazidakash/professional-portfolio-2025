import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { FaExternalLinkAlt, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const AllProject = () => {
  const navigate = useNavigate();

  const { data: projects = [], refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/all-project`);
      return response.data;
    },
  });

  // 🧹 Delete Handler with Swal
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this project deletion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#317371",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/projects/${id}`);
        await refetch();
        Swal.fire("Deleted!", "The project has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error", "Something went wrong.", error);
      }
    }
  };

  // 🔍 View Handler (optional Swal dialog)
  const handleView = (id) => {
    Swal.fire({
      title: "Go to Project Details?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#317371",
      confirmButtonText: "View",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/projects/${id}`);
      }
    });
  };

  // ✏️ Edit Handler (optional Swal dialog)
  const handleEdit = (id) => {
    Swal.fire({
      title: "Go to Edit Page?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#317371",
      confirmButtonText: "Edit",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/update-project/${id}`);
      }
    });
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-center text-3xl font-bold mb-6 text-[#317371]">All Projects: {projects.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-[#A2B9A7] text-white">
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Live link</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project, index) => (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={project?.imageUrl} alt={project?.name} />
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{project?.name}</td>
                <td>
                  <a
							  href={project?.liveLink}
							  target="_blank"
							  rel="noopener noreferrer"
							  className="btn btn-sm btn-outline gap-2"
							>
							  Live <FaExternalLinkAlt />
							</a>
                </td>
                <td className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => handleView(project._id)}
                    className="btn btn-xs btn-outline text-[#317371] flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> View
                  </button>
                  <Link
                  to={`/update-project/${project._id}`}
                    onClick={() => handleEdit(project._id)}
                    className="btn btn-xs btn-outline text-blue-500 flex items-center gap-1"
                  >
                    <FaEdit /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="btn btn-xs btn-outline text-red-500 flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProject;
