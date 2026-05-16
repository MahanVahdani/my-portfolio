import { Mail } from "lucide-react";
import SectionBlock from "@ui/SectionBlock";
import ContactForm from "@components/forms/ContactForm";

const ContactSection = () => {
  return (
    <SectionBlock
      id="contact"
      icon={Mail}
      mutedTitle="Let's"
      accentTitle="Work Together"
      description="Based in Fethiye, Istanbul and open to international relocation. Available immediately for Senior Frontend Developer roles and interesting projects."
    >
      <ContactForm />
    </SectionBlock>
  );
};

export default ContactSection;
