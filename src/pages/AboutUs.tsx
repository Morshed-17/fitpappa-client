import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import morshedImg from "../assets/morshed.png"
const teamMembers = [
  {
    name: "Kazi Golam Morshed",
    role: "Founder & CEO",
    bio: "Former professional athlete with 15+ years in fitness equipment industry",
    image: "/assets/morshed.png",
  },
  {
    name: "Kazi Golam Morshed",
    role: "Equipment Specialist",
    bio: "Certified fitness trainer and equipment expert with 10+ years experience",
    image: "/api/placeholder/100/100",
  },
  {
    name: "Kazi Golam Morshed",
    role: "Customer Success Lead",
    bio: "Passionate about helping gyms and athletes find their perfect equipment",
    image: "/api/placeholder/100/100",
  },
];

const testimonials = [
  {
    name: "John Walker",
    company: "Elite Fitness Center",
    text: "FitPappa's commercial equipment line transformed our gym. The quality and durability are unmatched, and their after-sales service is exceptional.",
  },
  {
    name: "Sarah Chang",
    company: "Home Fitness Enthusiast",
    text: "The home gym setup I got from FitPappa was exactly what I needed. Their expertise in helping me choose the right equipment was invaluable.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="https://images.pexels.com/photos/4164762/pexels-photo-4164762.jpeg?auto=compress"
          alt="Gym Equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 via-orange-600/30 to-navy-900/50 z-20"></div>
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
              FitPappa
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 max-w-2xl mx-auto">
              Empowering Your Fitness Journey With Premium Equipment
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-30"></div>
      </div>

      {/* Company Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-700 rounded-full opacity-5 blur-3xl"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-8">Our Story</h2>
            <p className="text-orange-200 text-lg">
              Founded in 2020, FitPappa emerged from a simple vision: to provide
              premium quality gym equipment that makes fitness accessible and
              enjoyable for everyone. From humble beginnings as a local
              supplier, we've grown into a trusted name in fitness equipment
              nationwide.
            </p>
            <p className="text-gray-400 text-lg">
              Today, we pride ourselves on offering a comprehensive range of
              equipment, from professional-grade machines for commercial gyms to
              carefully curated home workout gear. Our commitment to quality,
              expertise, and customer satisfaction has made us the go-to
              destination for fitness enthusiasts and professional gyms alike.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-950 to-black p-8 rounded-2xl border border-orange-500/20 shadow-2xl shadow-orange-500/10 backdrop-blur-xl hover:border-orange-500/40 transition-all duration-500">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">
              The FitPappa Promise
            </h3>
            <ul className="space-y-4">
              {[
                "Premium Quality Equipment",
                "Expert Consultation",
                "Lifetime Support",
                "Best Price Guarantee",
              ].map((value) => (
                <li key={value} className="flex items-center text-lg group">
                  <ChevronRight className="text-orange-500 mr-3 group-hover:translate-x-2 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-orange-300 transition-colors duration-300">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4162591/pexels-photo-4162591.jpeg?auto=compress"
            alt="Gym Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-navy-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-navy-900/50 rounded-2xl p-8 border border-orange-500/10 backdrop-blur-xl hover:transform hover:-translate-y-2 transition-all duration-500">
                  <img
                    src={morshedImg}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-orange-500/20 group-hover:border-orange-500 transition-colors duration-500"
                  />
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-400 text-center mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-center group-hover:text-gray-200 transition-colors duration-500">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Our Equipment Range
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial",
                image:
                  "https://images.pexels.com/photos/4162435/pexels-photo-4162435.jpeg?auto=compress",
                description:
                  "Professional-grade equipment for gyms and fitness centers",
              },
              {
                title: "Home Fitness",
                image:
                  "https://images.pexels.com/photos/4162407/pexels-photo-4162407.jpeg?auto=compress",
                description:
                  "Premium home workout equipment for personal fitness goals",
              },
              {
                title: "Accessories",
                image:
                  "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress",
                description:
                  "Essential accessories to complement your workout routine",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-navy-900/50 to-black/50 p-8 rounded-2xl border border-orange-500/20 backdrop-blur-xl hover:border-orange-500/40 transition-all duration-500 group"
              >
                <p className="text-gray-300 mb-6 text-lg italic group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-orange-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Visit Our Showroom
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email", info: "sales@fitpappa.com" },
              { icon: Phone, title: "Phone", info: "+1 (555) 123-4567" },
              {
                icon: MapPin,
                title: "Location",
                info: "123 Fitness Avenue, Gym District",
              },
            ].map(({ icon: Icon, title, info }) => (
              <div key={title} className="group relative">
                <div className="absolute inset-0 bg-orange-500 opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-navy-900/30 border border-orange-500/20 p-8 rounded-2xl backdrop-blur-xl hover:border-orange-500/40 transition-all duration-500">
                  <Icon className="w-10 h-10 mx-auto mb-6 text-orange-500" />
                  <h3 className="text-xl font-bold text-white text-center mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-center group-hover:text-orange-200 transition-colors duration-300">
                    {info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
