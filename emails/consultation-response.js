import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const ConsultationResponseEmail = ({ name, email }) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks {name}, for Contacting Provider</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://www.providerconcerns.com/images/favicon.png`}
                width="100"
                height="80"
                alt="Provider Concerns Solutions"
                className="my-0 mx-auto"
              />
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Dear <strong>{name}</strong>,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              I trust this message finds you well.           </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              In response to your recent inquiry about our RCM services.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Provider Concerns Solutions boasts over a decade of expertise in
              the RCM space, successfully aiding Labs, Surgery Centers,
              Practices, Hospitals, and various specialties across all states.
              With a focus on optimizing reimbursements and collections, we
              maintain an impressive success rate exceeding 95%. Our proficiency
              lies in efficiently managing A/R, particularly for denied,
              rejected, and outstanding claims in the 60-365+ days aging
              bracket.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              As a results-oriented company, we pride ourselves on delivering
              value without imposing long-term contracts. There are no upfront
              implementation costs or early termination fees, underscoring our
              dedication to ensuring client satisfaction.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We would be delighted to schedule a brief 15 minute Zoom/Teams
              call to delve deeper into the specifics and explore how our
              services align with your unique requirements. Kindly share your
              availability for a meeting, and we'll coordinate accordingly.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thank you for considering Provider Concerns Solutions. I eagerly
              anticipate the prospect of collaboration.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Regards,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              John Howard | Director of Business Development
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Wyoming, USA
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <Link
                href="tel:+18882852880"
                className="text-blue-600 no-underline"
              >
                +1 (888) 285-2880
              </Link>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <Link
                href="www.providerconcerns.com"
                className="text-blue-600 no-underline"
              >
                www.providerconcerns.com
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ConsultationResponseEmail.PreviewProps = {
  name: "John Doe",
  email: "johndoe@gmail.com",
};

export default ConsultationResponseEmail;
