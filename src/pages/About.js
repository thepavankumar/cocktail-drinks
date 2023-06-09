import React from 'react'
import cocktailImage from "../assets/cocktail.jpg"

function About() {
  return (
    <div className="bg-white flex flex-wrap container mx-auto  ">
    <div className="w-full sm:w-3/5 md:w-3/5 lg:w-3/5">
      <div className="p-8">
        <h1 className="text-black text-3xl font-bold mb-4">About Us</h1>
        <h2 className="text-gray-500 text-xl font-medium mb-4">Learn more about our company</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat velit non augue placerat, vitae
          facilisis nisi suscipit. Nulla facilisi. Quisque posuere arcu in augue ultrices, ac pulvinar urna consequat.
          Etiam ullamcorper, lectus vitae hendrerit laoreet, sem turpis suscipit urna, vitae commodo risus tellus vitae
          tellus. Mauris eu fringilla est. Nam a turpis vitae elit iaculis laoreet. Nullam a est arcu. Nam dictum urna
          dolor, in sagittis risus posuere sed. Duis sit amet consectetur tellus.
          {/* Continue with more dummy text until you reach 100 words */}
        </p>
      </div>
    </div>
    <div className="w-full sm:w-2/5 md:w-2/5 lg:w-2/5">
      <div className="p-8 flex items-center justify-center">
        <img src={cocktailImage} alt={cocktailImage}/>
      </div>
    </div>
  </div>
  )
}

export default About