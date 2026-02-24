import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaArrowRight } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const ProjectItem = ({ project }) => {
  console.log('project', project);
  return (
    <>
      <div className="project-item-view rounded-xl relative border border-gray-400 group relative bg-slate-800/50 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1 border border-slate-700/50 backdrop-blur-sm overflow-hidden hover:border-yellow-700 transition-all duration-300 hover:-translate-y-1">
    
        <div className="flex justify-end mt-2 rounded-xl mr-2 custom-link absolute inset-0 z-50">
          <Link
            className="flex rounded-[3px] justify-center items-center btn btn-primary bg-[#f57820] mr-3 border-0  text-xs h-6 min-h-6 px-2"
            target="_blank"
            to={project.liveLink}
          >
            <span className="flex items-center">
              Live Site <FaArrowRight className="ml-1 -rotate-33" />
            </span>
          </Link>
          <Link
            to={`projects/${project.id}`}
            className="flex rounded-[3px] justify-center items-center bg-[#f57820] border-0 text-xs h-6 min-h-6 px-2"
          >
            <span className="flex items-center">
              Details <FaArrowRight className="ml-1 -rotate-33" />
            </span>
          </Link>
        </div>
        <div className="h-52 overflow-hidden rounded-t-xl  transition-transform duration-700 group-hover:scale-110">
          <PhotoProvider maskOpacity={0.9}>
            <PhotoView src={project.img}>
              <img
                className="cursor-pointer"
                src={project.img}
                alt=""
                srcset=""
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="mt-5 text-left p-4 pb-7">
          <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
          <p className="text-gray-400 text-sm line-clamp-2 ">{project.description}</p>
        </div>
      </div>

     
    </>
  );
};

export default ProjectItem;
