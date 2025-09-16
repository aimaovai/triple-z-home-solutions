import React, { useState } from "react";
import Image from "next/image";

/**
 * Typescript definition of a single project returned by the backend.
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  /**
   * A list of absolute URLs for images belonging to this project.  These
   * correspond to objects stored in your AWS S3 bucket.  The Java
   * backend will assemble these URLs using the AWS SDK and return them
   * to the client.
   */
  images: string[];
}

/*
 * When using local images stored in the ``public`` folder of a Next.js
 * project, you can reference them via absolute URLs beginning with
 * ``/``.  In this component we build an array of projects where
 * ``images`` contains the relative paths to pictures inside
 * ``public/images/services/<service>/``.  Update the paths and
 * metadata below to match your folder structure and file names.
 */
const localProjects: Project[] = [
  {
    id: 1,
    title: "Home Theater",
    description:
      "A custom home theater experience featuring a large screen and surround sound.We transformed an empty room into a fully functional home theater space designed for the ultimate viewing experience.\n\nServices included:\n- Room preparation and organization\n- Equipment assembly and mounting\n- Professional screen installation\n- Audio-visual integration\n- Final touches for a clean, professional look\n\nResult:\nA modern, fully equipped home theater room that brings the big-screen experience into the comfort of home.",
    images: [
      "/images/services/Theater/20231007_182802.jpg",
      "/images/services/Theater/20231007_182834.jpg",
      "/images/services/Theater/20231007_182926.mp4",
      "/images/services/Theater/20230930_165157.jpg",
      "/images/services/Theater/20230930_165202.jpg",
      "/images/services/Theater/20230930_115909.jpg",
      "/images/services/Theater/20230920_184812.jpg",
    ],
  },
  {
    id: 2,
    title: "Speaker Install",
    description:
      "A custom in-wall speaker installation designed to enhance the home theater experience.\n\nWe installed premium in-wall speakers with precise alignment and secure mounting, ensuring both performance and a clean, professional finish.\n\nServices included:\n- Careful wall preparation and cutouts for seamless integration\n- Installation of left and right in-wall speakers\n- Alignment and leveling for balanced sound\n- Secure wiring and connections for reliable performance\n- Clean finish that blends with the room’s design\n\nResult:\nA professional-grade surround sound setup with hidden speakers that deliver immersive audio while maintaining a sleek and uncluttered look.",
    images: [
      "/images/services/speaker-install/20240121_190126.jpg",
      "/images/services/speaker-install/20240121_193529.jpg",
      "/images/services/speaker-install/20240121_190136.jpg",
      "/images/services/speaker-install/20240121_175707.jpg",
      "/images/services/speaker-install/20240121_181008.jpg",
    ],
  },
  {
    id: 3,
    title: "TV Hanging",
    description:
      "A professional outdoor TV mounting service designed to create the perfect entertainment space.\n\nWe securely installed a ceiling-mounted bracket above the fireplace, ensuring stability and proper alignment for safe use in an outdoor setting.\n\nServices included:\n- Careful preparation and placement of the ceiling mount\n- Secure installation of the TV with reinforced support\n- Cable management for a neat and organized appearance\n- Functional positioning for optimal viewing from multiple seating areas\n\nResult:\nAn elevated outdoor living space featuring a stylish, securely mounted TV that blends convenience with comfort, perfect for enjoying movies and shows in an open-air environment.",
    images: [
      "/images/services/tv-hanging/20231107_202523.jpg",
      "/images/services/tv-hanging/20231108_180938.mp4",
      "/images/services/tv-hanging/20231105_171909.jpg",
      "/images/services/tv-hanging/20231105_164901.jpg",
    ],
  },
  {
    id: 4,
    title: "Wall Decor",
    description:
      "A custom in-wall speaker installation designed to enhance the home theater experience.\n\nWe installed premium in-wall speakers with precise alignment and secure mounting, ensuring both performance and a clean, professional finish.\n\nServices included:\n- Careful wall preparation and cutouts for seamless integration\n- Installation of left and right in-wall speakers\n- Alignment and leveling for balanced sound\n- Secure wiring and connections for reliable performance\n- Clean finish that blends with the room’s design\n\nResult:\nA professional-grade surround sound setup with hidden speakers that deliver immersive audio while maintaining a sleek and uncluttered look.",
    images: [
      "/images/services/wall-art-2/20230927_194917.jpg",
      "/images/services/wall-art-2/20230927_194931.mp4",
      "/images/services/wall-art-2/20230927_195012.jpg",
      "/images/services/wall-art-2/20231002_221205.jpg",
      "/images/services/wall-art-2/20231002_221206.jpg",
      "/images/services/wall-art-2/20231002_221207.jpg",
      "/images/services/wall-art-2/20230927_194413.jpg",
      "/images/services/wall-art-2/20230927_184322.jpg",
      "/images/services/wall-art-2/20230927_182809.jpg",
    ],
  },
  {
    id: 5,
    title: "Wall Decor",
    description:
      "A decorative wall installation designed to enhance the high ceiling living area with a modern artistic touch.\n\nWe mounted a large circular mirror cluster arrangement high above the main wall, creating a bold focal point that draws the eye upward and complements the open space.\n\nServices included:\n- Safe ladder setup and precision measurement for high placement\n- Secure mounting of a heavy multi-piece mirror décor arrangement\n- Careful alignment for symmetry and visual balance\n- Professional finish that highlights the scale and height of the room\n\nResult:\nA stunning wall accent that transforms a tall blank wall into an elegant centerpiece, adding depth, light reflection, and modern style to the living space.",
    images: [
      "/images/services/wall-art-1/20230923_193503.jpg",
      "/images/services/wall-art-1/20230923_193505.jpg",
      "/images/services/wall-art-1/20230923_193506.jpg",
      "/images/services/wall-art-1/20230923_180839.jpg",
    ],
  },
];

/**
 * A responsive component that displays the “Latest Projects” section.  Each
 * project has its own collection of images and metadata.  Visitors can
 * cycle through images of the current project using the left/right
 * overlay arrows, and they can switch between projects using the
 * buttons below the gallery.  The component fetches its data from
 * ``/api/projects`` on mount and gracefully handles loading and empty
 * states.
 */
const LatestProjects: React.FC = () => {
  // Initialise the projects state with the local definitions.  You may
  // modify ``localProjects`` above to add or remove projects and
  // images.
  const [projects] = useState<Project[]>(localProjects);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Loading and error states are unused when reading from local data,
  // but kept here for API compatibility if you later switch back to
  // asynchronous fetching.
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  /**
   * Move to the previous image within the current project.  If the
   * beginning of the array is reached, wrap around to the last image.
   */
  const handlePrevImage = () => {
    const currentProject = projects[currentProjectIndex];
    if (!currentProject) return;
    const numImages = currentProject.images.length;
    setCurrentImageIndex((prev) => (prev - 1 + numImages) % numImages);
  };

  /**
   * Advance to the next image within the current project.  Wrap
   * around to the first image when reaching the end.
   */
  const handleNextImage = () => {
    const currentProject = projects[currentProjectIndex];
    if (!currentProject) return;
    const numImages = currentProject.images.length;
    setCurrentImageIndex((prev) => (prev + 1) % numImages);
  };

  /**
   * Move to the previous project in the list.  Resets the image
   * index to zero.  Wraps around to the last project when
   * at the beginning.
   */
  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) => {
      const newIndex = (prev - 1 + projects.length) % projects.length;
      setCurrentImageIndex(0);
      return newIndex;
    });
  };

  /**
   * Advance to the next project in the list.  Resets the image
   * index to zero.  Wraps around to the first project when
   * at the end.
   */
  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => {
      const newIndex = (prev + 1) % projects.length;
      setCurrentImageIndex(0);
      return newIndex;
    });
  };

  // Compute the currently selected project for convenience.
  const currentProject = projects[currentProjectIndex];

  const currentMedia = currentProject
    ? currentProject.images[currentImageIndex]
    : "";

  const isVideo = currentMedia.toLowerCase().endsWith(".mp4");

  return (
    <section className="w-full py-12 md:py-10 px-4 md:px-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
        Latest Projects
      </h2>
      {loading && (
        <p className="text-center text-gray-500">Loading projects…</p>
      )}
      {error && <p className="text-center text-red-600">Error: {error}</p>}
      {!loading && !error && currentProject && (
        <div className="md:flex md:space-x-6 items-start">
          {/* Image and overlay controls */}
          <div className="relative w-full md:w-2/3 mb-6 md:mb-0 aspect-[5/4]">
            {/* Next.js Image will automatically optimise images with lazy loading. */}
            {isVideo ? (
              <video
                src={currentMedia}
                controls
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full rounded-md object-cover"
              />
            ) : (
              <Image
                src={currentMedia}
                alt={currentProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="rounded-md object-cover"
                priority
              />
            )}
            {/* Left overlay for previous image */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full focus:outline-none"
              aria-label="Previous image"
            >
              &#8592;
            </button>
            {/* Right overlay for next image */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full focus:outline-none"
              aria-label="Next image"
            >
              &#8594;
            </button>
          </div>
          {/* Project details */}
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              {currentProject.title}
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm md:text-base lg:text-lg">
              {currentProject.description}
            </p>
          </div>
        </div>
      )}
      {/* Bottom navigation for switching between projects */}
      {!loading && !error && projects.length > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrevProject}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full focus:outline-none"
            aria-label="Previous project"
          >
            &#8592;
          </button>
          <button
            onClick={handleNextProject}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-3 rounded-full focus:outline-none"
            aria-label="Next project"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default LatestProjects;
