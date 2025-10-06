import { Award, Globe, Lightbulb } from "lucide-react";
// import img1 from '../assets/Frame-1.svg'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Unmatched Expertise",
      description:
        "Our team of AI, analytics, and cloud specialists brings decades of experience to deliver tailored solutions.",
    },
    {
      icon: Lightbulb,
      title: "Pioneering Innovation",
      description:
        "We push boundaries with cutting-edge technology to drive transformative business outcomes.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Partnering with clients worldwide, we deliver scalable solutions for sustainable growth.",
    },
  ];

  return (
    <div className="w-full bg-[#15203D] py-20 px-4 sm:px-6 lg:px-8 border-t-4 ">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[56px] sm:text-5xl lg:text-6xl font-semibold text-white text-center mb-20">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-left space-y-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex ">
                  <div className="w-16 h-16 flex items-center justify-center bg-yellow-500/20 rounded-full group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <IconComponent
                      className="w-8 h-8 text-yellow-500"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <h3 className="text-[20px] sm:text-2xl font-semibold text-yellow-500">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-[16px] font-regular sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}