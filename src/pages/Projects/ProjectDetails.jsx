import { Link, useParams } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useEffect, useState } from "react";
const ProjectDetails = () => {
  const params = useParams();
  const [projectDetails, setProjectDetails] = useState([]);

  useEffect(() => {
    fetch("/projectdetails.json")
      .then((res) => res.json())
      .then((data) => setProjectDetails(data))
      .catch((err) => console.error(err));
  }, []);
  const projectItemDetailsData = projectDetails.find(
    (ProjectItmDetails) => ProjectItmDetails?.projectId == params?.id
  );
  const linksObj = projectItemDetailsData?.Links?.reduce((acc, item) => ({ ...acc, ...item }), {});
  return (
    <div className="container">
      <div className="lg:pt-40  pt-32  lg:pb-20 md:pb-14 pb-10">
          <div key={projectItemDetailsData?.id} className="max-w-5xl mx-auto">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-4xl text-center mb-10 font-semibold text-white"
            >
              {projectItemDetailsData?.projectName}
            </h1>
            <h3 className="text-3xl font-semibold mb-2 text-white">Links</h3>
            <div className="mb-2">
              <a
                rel=""
                target="_blank"
                className="btn-2 !text-white !ml-0"
                href={linksObj?.client}
              >
                Client
              </a>
              <a
                rel=""
                target="_blank"
                className="btn-2 !text-white"
                href={linksObj?.server}
              >
                Server
              </a>
              <a
                rel=""
                target="_blank"
                className="btn-2 !text-white"
                href={linksObj?.liveLink}
              >
                Live Site
              </a>
            </div>
            <div className="mb-8">{<p>{projectItemDetailsData?.summary}</p>}</div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="mb-8"
            >
              <h3 className="text-3xl font-semibold mb-2 text-white">
                Features
              </h3>
              <ul className="lg:ml-14 md:ml-10 ml-6">
                {projectItemDetailsData?.applicationFetures?.map((feauture, index) => (
                  <li key={index}>{feauture.Feature}</li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className="mb-8">
              <h3 className="text-3xl font-semibold mb-2 text-white">
                Technologies
              </h3>
              <ul className="ml-14">
                {projectItemDetailsData?.technologiesyUsed?.map((technology, index) => (
                  <li key={index}>{technology?.tecnology}</li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-8 text-white">
                Photo Gallery
              </h3>
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="grid detailsGrid grid-cols-3 gap-5"
              >
                {projectItemDetailsData?.imgUrl?.map((img, index) => (
                  <div
                    key={index}
                    className="border h-52 overflow-hidden border-[#bbbbbb]"
                  >
                    <PhotoProvider maskOpacity={0.9}>
                      <PhotoView src={img?.imgScreenUrl}>
                        <img
                          className="cursor-pointer w-full"
                          src={img?.imgScreenUrl}
                          alt=""
                          srcset=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                ))}
              </div>
            </div>
            <div className="bnr-btn-1 bg-primary rounded-xl inline-block">
              <Link
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                className="btn-1 rounded-none! text-white  p-2 inline-block"
                to="/"
              >
                Back To Home
              </Link>
            </div>
   
          </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
