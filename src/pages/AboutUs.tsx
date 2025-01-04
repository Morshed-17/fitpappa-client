import Container from "@/components/shared/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <Container>
      <div className="py-12 space-y-12">
        {/* Company Overview */}

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            FitPappa is a leading provider of high-quality fitness equipment
            designed to meet the needs of fitness enthusiasts and professionals
            alike. With a mission to empower people to lead healthier lives, our
            vision is to become the most trusted brand in the fitness industry.
          </p>
          <img
            src="https://images.pexels.com/photos/669577/pexels-photo-669577.jpeg"
            alt="Company Overview"
            className="w-full h-64 object-cover mt-8 rounded-lg shadow-md"
          />
        </section>

        {/* Team Introduction */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Founder & CEO",
                img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
              },
              {
                name: "Jane Smith",
                role: "Head of Marketing",
                img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
              },
              {
                name: "Michael Brown",
                role: "Lead Developer",
                img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg",
              },
            ].map((member, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader className="flex items-center">
                  <Avatar>
                    <AvatarImage
                      src={member.img}
                      alt={member.name}
                      className="mr-4"
                    />
                  </Avatar>

                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    {member.role === "Founder & CEO"
                      ? "John is the visionary behind FitPappa, with over 15 years of experience in the fitness industry."
                      : member.role === "Head of Marketing"
                      ? "Jane leads our marketing efforts with a passion for fitness and innovative strategies."
                      : "Michael ensures our digital presence is top-notch with cutting-edge technology."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Customer Testimonials */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                testimonial:
                  "FitPappa's equipment is top-notch. I’ve been using their products for years, and they never disappoint!",
                customer: "Alex Johnson",
              },
              {
                testimonial:
                  "Excellent customer service and quality products. I recommend FitPappa to all my clients!",
                customer: "Samantha Lee",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-md">
                <CardContent>
                  <p className="text-gray-800 italic mb-4">
                    "{testimonial.testimonial}"
                  </p>
                  <p className="text-right font-bold text-gray-700">
                    - {testimonial.customer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We’d love to hear from you! Whether you have a question about our
            products, need support, or just want to chat about fitness, we’re
            here to help.
          </p>
          <div className="mt-8">
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:support@fitpappa.com"
                className="text-blue-600 underline"
              >
                support@fitpappa.com
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-blue-600 underline">
                +1 234 567 890
              </a>
            </p>
          </div>
          <Button variant="secondary" className="mt-6">
            Contact Us
          </Button>
        </section>
      </div>
    </Container>
  );
};

export default AboutUs;
