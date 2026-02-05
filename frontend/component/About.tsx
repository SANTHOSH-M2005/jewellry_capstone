"use client";
import { Check } from "lucide-react";
export default function   About() {
  return (
    <div className="px-6 py-6 bg-[#faf9f7] ">
      <div className="bg-[#faf9f7] ">
        <h1 className="text-3xl font-bold pt-7">About Jewelry AI</h1>
        <div className="mt-4  bg-[#ffffff] p-5 px-7 rounded-3xl">
            <h1 className="font-semibold text-lg mt-4 text-[#d4af37] mb-2">
            Our Mission
          </h1>
          <p >
          Jewelry AI is a cutting-edge web application designed to revolutionize
          the way you discover and shop for jewelry. Leveraging the power of
          artificial intelligence, our platform offers personalized
          recommendations, stunning visualizations, and an intuitive shopping
          experience. Whether you're looking for the perfect engagement ring, a
          unique necklace, or a custom-designed piece, Jewelry AI is here to
          help you find exactly what you desire. Our mission is to make jewelry
          shopping effortless, enjoyable, and tailored to your individual style.
        </p>    
        </div>
        <div className="mt-4  bg-[#ffffff] p-5 px-7 rounded-3xl">
          <h1 className="font-semibold text-lg mb-4 text-[#d4af37] mb-2">
            Why Choose Us?
          </h1>
          <ul className="list-none mt-2 mb-4 text-gray-700">
            <li className="flex items-center mb-2">
              <Check className="text-green-600 mr-2" />
              <span>
                <span className="font-semibold">
                  AI-Powered Recommendations:
                </span>{" "}
                Find jewelry that matches your style and preferences
              </span>
            </li>
            <li className="flex items-center mb-2">
              <Check className="text-green-600 mr-2" />
              <span>
                <span className="font-semibold">
                  Personalized Recommendations:
                </span>{" "}
                Tailored jewelry suggestions based on your preferences
              </span>
            </li>
            <li className="flex items-start mb-2">
              <Check className="text-green-600 mr-2 mt-1" />
              <span>
                <span className="font-semibold">Lifetime Support:</span> Expert
                guidance and warranties
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-4 py-4 px-10 rounded-3xl bg-[#eef0be]">
          <h1 className="font-semibold text-lg mb-4 text-[#d4af37] mb-2">
            Get in Touch
          </h1>
          <ul className="list-none mt-2 mb-4 text-gray-700">
            <li className="flex items-center mb-2">
              <span>
                <span className="font-semibold">Email:</span>{" "}
                hello@jewelryai.com
              </span>
            </li>
            <span>
              <li className="flex items-center mb-2">
                <span>
                  <span className="font-semibold">Phone:</span> +91 (555)
                  123-4567
                </span>
              </li>
              <li className="flex items-center mb-2">
                <span>
                  <span className="font-semibold">Address:</span> 123 Jewelry
                  St, Gem City, Country
                </span>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
