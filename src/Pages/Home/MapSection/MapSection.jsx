import React from "react";

const MapSection = () => {
  return (
    <div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.435443262899!2d90.3747378753376!3d23.80311007863445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c734abfd3d45%3A0xac95848af23e2ec8!2sSaic%20Institute%20of%20Management%20and%20Technology!5e0!3m2!1sen!2sbd!4v1697806327442!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
