import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7222301357083!2d106.63474481431095!3d-6.300183163412452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb535f152305%3A0x34406ed8b098f478!2sIndonesia+Convention+Exhibition!5e0!3m2!1sen!2sid!4v1548737609952"
        width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
      <div className="location_tag">Location</div>
    </div>
  );
};

export default Location;