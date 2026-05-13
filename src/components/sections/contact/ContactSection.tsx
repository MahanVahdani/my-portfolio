import { Mail } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import ContactForm from "@components/forms/ContactForm";

const ContactSection = () => {
  return (
    <SectionBlock
      id="contact"
      icon={Mail}
      mutedTitle="contact"
      accentTitle=""
      description=""
    >
      <ContactForm />
    </SectionBlock>
  );
};

export default ContactSection;
