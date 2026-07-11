export default function Map() {
  return (
    <div className="w-full h-40 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10698.783516815656!2d-73.09714790940386!3d40.81398308081582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1783744210220!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{
          border: 0,
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
