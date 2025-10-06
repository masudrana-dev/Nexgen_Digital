import React from 'react'
import img1 from '../assets/Image-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'


const Service = () => {
  const services = [
    {
      text: "Unlock hidden patterns in your data to drive informed decision-making and uncover new revenue streams.",
    },
    {
      text: "Harness advanced analytics to optimize operations, reduce costs, and gain a competitive edge through data-driven strategies.",
    },
    {
      text: "Transform raw data into actionable intelligence that propels business growth and innovation.",
    },
  ];
  return (
    <div className="w-full min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#15203D] text-center mb-16">
          Our Services
        </h2>
        {/* Service Card */}
        <div className="bg-gray-50 rounded-3xl shadow-sm p-8 sm:p-12 lg:p-16 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h3 className="text-[40px] sm:text-4xl lg:text-5xl font-semibold text-[#121417]">
                Analytical Insights
              </h3>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={img1}
                  alt="Analytical Insights"
                  className="relative w-[385px] h-[461px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Service Card */}
        <div className="bg-gray-50 rounded-3xl shadow-sm p-8 sm:p-12 lg:p-16 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center grid-cols-reverse">
            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={img2}
                  alt="Analytical Insights"
                  className="relative w-[385px] h-[461px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Left Content */}
            <div className="space-y-8">
              <h3 className="text-[40px] sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                Artificial Intelligence
              </h3>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Service Card */}
        <div className="bg-gray-50 rounded-3xl shadow-sm p-8 sm:p-12 lg:p-16 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h3 className="text-[40px] sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                Data Management
                and Governance
              </h3>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br  rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={img3}
                  alt="Analytical Insights"
                  className="relative w-[385px] h-[461px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Service Card */}
        <div className="bg-gray-50 rounded-3xl shadow-sm p-8 sm:p-12 lg:p-16 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center grid-cols-reverse">
            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={img4}
                  alt="Analytical Insights"
                  className="relative object-contain drop-shadow-2xl "
                />
              </div>
            </div>

            {/* Left Content */}
            <div className="space-y-8">
              <h3 className="text-40xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                Enterprise Technology
              </h3>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Service
