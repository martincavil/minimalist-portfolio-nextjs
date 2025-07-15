import Image from "next/image";

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="container md:py-20 min-h-screen bg-black text-white flex items-center">
      <div>
        {/* Left side - Content */}
        <div className="space-y-8">
          {/* Profile image */}
          <div className="w-24 h-24 rounded-full bg-gray-800 overflow-hidden mb-8">
            <Image
              src=""
              alt="Martin Cavil"
              className="w-full h-full object-cover"
              width={96}
              height={96}
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-400 font-light leading-tight">
            Hi I'm <span className="text-white">Martin,</span> Développeur
            Freelance
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Je suis un développeur freelance et designer travaillant à distance
            dans le monde entier. Depuis 2020, je vis en France. Je crée des
            applications utiles pour le web. Dans mon temps libre, j&#39;aime
            cuisiner, lire et voyager.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200 group">
              <span className="text-lg font-light mr-2">Get in touch</span>
              <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-200">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
