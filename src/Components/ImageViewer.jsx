import { useState } from "react";

const ImageCollection = [
  "https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=600",
  "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=600",
  "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
  "https://images.unsplash.com/photo-1771596704435-3e8ba5f67204?w=600",
  "https://images.unsplash.com/photo-1771149437810-56fec4035757?w=600",
  "https://images.unsplash.com/photo-1770347271178-97a4f8ffb183?w=600"
];

const ImageView = () => {
  const [currIdx, setCurrIdx] = useState(0);

  const nextImage = () => {
    setCurrIdx(prev =>
      prev < ImageCollection.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrIdx(prev =>
      prev === 0 ? ImageCollection.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6">

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Image Viewer
      </h1>

      <div className="relative mb-6 w-full flex max-w-4xl mx-auto">

        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-l hover:bg-gray-700"
        >
          ❮
        </button>

        <img
          src={ImageCollection[currIdx]}
          alt="Selected"
          className="w-full max-w-4xl h-64 sm:h-80 md:h-[60vh] object-cover rounded-xl shadow-lg"
        />

        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-r hover:bg-gray-700"
        >
          ❯
        </button>

      </div>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 w-full justify-start sm:justify-center">

        {ImageCollection.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setCurrIdx(idx)}
            className={`cursor-pointer border-4 rounded-lg ${
              currIdx === idx ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={item}
              alt="thumbnail"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-cover rounded-lg hover:scale-105 transition"
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default ImageView;