import { Dumbbell, Zap, Target, Users } from "lucide-react";
import Container from "../shared/Container";


interface Props {
  icon: any;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: Props) => (
  <div className="flex flex-col items-center p-6 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transition-colors duration-300">
    <Icon size={48} className="text-orange-500 mb-4" />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-center">{description}</p>
  </div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Dumbbell,
      title: "Premium Quality",
      description:
        "Built to last with high-grade materials for serious athletes and fitness enthusiasts.",
    },
    {
      icon: Zap,
      title: "Efficient Workouts",
      description:
        "Maximize your gains with equipment designed for intense, effective training sessions.",
    },
    {
      icon: Target,
      title: "Versatile Training",
      description:
        "Adaptable gear for a wide range of exercises to target every muscle group.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Join a community of dedicated fitness lovers pushing their limits every day.",
    },
  ];

  return (
    <section className="py-16 bg-gray-950 mt-12">
      <Container>
        <div className="">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose <span className="text-orange-500">FitPappa</span>{" "}
            Equipment?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
