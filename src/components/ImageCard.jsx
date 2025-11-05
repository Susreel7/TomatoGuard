import Webcam from 'react-webcam';

export const ImageCard = ({
  handleInput,
  imgPreview,
  handleClick,
  progressState,
  useWebcam,
  handleWebcam,
  webcamRef,
  canvasRef,
  loadWebcam,
}) => {
  const videoConstraints = {
    width: 640,
    height: 480,
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="card w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
        {useWebcam ? (
          <>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-6">
              <Webcam
                ref={webcamRef}
                muted={true}
                className="w-full h-auto rounded-2xl shadow-lg"
                videoConstraints={videoConstraints}
              />
              <canvas
                ref={canvasRef}
                className="absolute inset-6 rounded-2xl pointer-events-none"
              />
            </div>
          </>
        ) : (
          <>
            <figure className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 min-h-[400px] flex items-center justify-center">
              {!imgPreview ? (
                <div className="text-center">
                  <svg
                    viewBox="0 0 576 512"
                    className="w-32 h-32 mx-auto mb-4 text-purple-500 opacity-50"
                  >
                    <path
                      fill="currentColor"
                      d="M512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64H512c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 320c0 8.822-7.178 16-16 16h-16l-109.3-160.9C383.7 170.7 378.7 168 373.3 168c-5.352 0-10.35 2.672-13.31 7.125l-62.74 94.11L274.9 238.6C271.9 234.4 267.1 232 262 232c-5.109 0-9.914 2.441-12.93 6.574L176 336H160c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16H512c8.822 0 16 7.178 16 16V320zM224 112c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.68 0 32-14.33 32-32S241.7 112 224 112zM456 480H120C53.83 480 0 426.2 0 360v-240C0 106.8 10.75 96 24 96S48 106.8 48 120v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24S469.3 480 456 480z"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold text-gray-700 mb-2">
                    Upload Your Image
                  </h2>
                  <p className="text-gray-500">Select a tomato leaf image to analyze</p>
                </div>
              ) : (
                <div className="relative w-full flex justify-center items-center">
                  <img
                    id="img"
                    src={imgPreview}
                    alt="Uploaded tomato leaf"
                    className="max-w-full max-h-[400px] rounded-xl shadow-lg object-contain"
                    onLoad={() => console.log('Image loaded successfully')}
                    onError={(e) => {
                      console.error('Image load error:', e);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </figure>
          </>
        )}
        <div className="card-body p-8 space-y-6">
          {!useWebcam && (
            <>
              <div className="text-center">
                <label className="block mb-4">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleInput}
                    accept="image/*"
                  />
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl cursor-pointer hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    Choose Image
                  </div>
                </label>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  OR
                </span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
            </>
          )}
          <div className="text-center space-y-4">
            {useWebcam && loadWebcam && (
              <div className="flex items-center justify-center gap-3 text-purple-600">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                <span className="font-medium">Loading Model...</span>
              </div>
            )}
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Use Camera
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={handleWebcam}
                  checked={useWebcam}
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-indigo-600"></div>
              </label>
            </div>
          </div>
          {!useWebcam && imgPreview && (
            <div className="flex justify-center">
              <button
                className={`px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all transform hover:scale-105 ${
                  progressState === 'process'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
                }`}
                onClick={handleClick}
                disabled={progressState === 'process'}
              >
                {progressState === 'process' ? (
                  <span className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Analyzing...
                  </span>
                ) : (
                  'Analyze Disease'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
