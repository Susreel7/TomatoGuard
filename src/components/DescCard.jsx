import { diseases } from '../data/diseases';

export const DescCard = ({ progressState, result }) => {
  return (
    <div className="w-full max-w-4xl">
      <div className="card w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
        <figure className="bg-gradient-to-br from-purple-50 to-indigo-50 p-12 min-h-[200px] flex items-center justify-center">
          {progressState === 'idle' ? (
            <div className="text-center">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 mx-auto mb-4 text-purple-400"
              >
                <path
                  fill="currentColor"
                  d="M4.38 5h1V4h1V3h-1V2h-1v1h-1v1h1v1zm8 4h-1v1h-1v1h1v1h1v-1h1v-1h-1V9zM14 2V1h-1v1h-1v1h1v1h1V3h1V2h-1zm-2.947 2.442a1.49 1.49 0 0 0-2.12 0l-7.49 7.49a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l7.49-7.49c.58-.58.58-1.53 0-2.12zm-8.2 8.9c-.2.2-.51.2-.71 0-.2-.2-.2-.51 0-.71l6.46-6.46.71.71-6.46 6.46zm7.49-7.49l-.32.32-.71-.71.32-.32c.2-.2.51-.2.71 0 .19.2.19.52 0 .71z"
                />
              </svg>
              <p className="text-gray-500 text-lg font-medium">Your prediction will appear here</p>
            </div>
          ) : progressState === 'process' ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg font-medium">Analyzing image...</p>
            </div>
          ) : progressState === 'error' ? (
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-24 h-24 mx-auto mb-4 text-red-500"
              >
                <path
                  fill="currentColor"
                  d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"
                />
              </svg>
              <p className="text-red-600 text-lg font-medium">Error analyzing image. Please try again.</p>
            </div>
          ) : (
            ''
          )}
        </figure>
        <div className="card-body p-8 space-y-6">
          <h2 className="card-title text-3xl font-bold text-gray-800 justify-center text-center">
            {progressState === 'idle'
              ? 'Your prediction goes here'
              : progressState === 'process'
              ? 'Predicting Image'
              : progressState === 'error'
              ? 'Error to Predict, please try again or check your file'
              : result && result.length > 0 && result[0] !== undefined && diseases[result[0]]
              ? diseases[result[0]].name
              : 'Unknown Disease'}
            {progressState === 'finish' && result && result.length > 0 && result[1] !== undefined && (
              <span
                className={`text-sm font-normal ml-3 ${
                  result[1] > 70 ? 'text-green-600' : 'text-orange-600'
                }`}
              >
                ({result[1]}% confidence)
              </span>
            )}
          </h2>
          {progressState === 'finish' && result && result.length > 0 && result[0] !== undefined && diseases[result[0]] && (
            <>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span>🦠</span> Cause
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {diseases[result[0]].cause}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span>⁉</span> Symptoms
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {diseases[result[0]].symptoms}
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span>🛡</span> Prevention
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {diseases[result[0]].prevention.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span>💊</span> Treatment
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {diseases[result[0]].treatment.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {diseases[result[0]].ref && diseases[result[0]].ref[0] && diseases[result[0]].ref[0].name_ref && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span>📄</span> References
                    </h3>
                    <ul className="space-y-2">
                      {diseases[result[0]].ref.map((ref, i) => (
                        <li key={i}>
                          <a
                            href={ref.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 underline font-medium"
                          >
                            {ref.name_ref}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
