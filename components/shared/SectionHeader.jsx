const SectionHeader = ({ title, highlightedText, description }) => {
  return (
    <div className="text-center">
      <h4 className="text-[32px] font-bold text-black mb-6">
        {title}
        <span className="text-primary">{highlightedText}</span>
      </h4>
      <p className="text-black text-sm font-medium max-w-[700px] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
