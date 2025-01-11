const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
      {title}
    </h3>
  );
};

export default SectionTitle;
