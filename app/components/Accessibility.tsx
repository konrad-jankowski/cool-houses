import { IconType } from "react-icons";

interface AccessibilityProps {
  icon: IconType;
  name: string;
}

const Accessibility: React.FC<AccessibilityProps> = ({ icon: Icon, name }) => {
  return (
    <div className="w-8 h-8 border border-primary flex justify-center items-center">
      <Icon className="fill-primary" size={16} />
    </div>
  );
};

export default Accessibility;
