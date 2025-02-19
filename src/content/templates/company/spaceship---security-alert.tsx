import {
  Container,
  Font,
  Head,
  Section,
  Tailwind,
  Img,
  Heading,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function SampleEmail() {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#394eff",
            },
          },
        },
      }}
    >
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/mulish/v13/1Ptvg83HX_SGhgqk3wot.woff2",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>
      <Section
        className="max-w-xl bg-blue"
        style={{ border: "1px solid #c4c5ca" }}
      >
        <Container className="bg-brand px-10 py-8 flex items-start">
          <Img
            alt="Spaceship Logo"
            height={24}
            src="/content/emails/company/spaceship-logo.webp"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        </Container>
        <Container className="px-10 py-12 flex items-start">
          <Heading as="h1" className="text-[38px] mb-12 font-semibold">
            Login attempted from new device or new location
          </Heading>
          <Text className="mb-2 text-lg text-[#1D1D20] font-semibold">
            Hi Shivam,
          </Text>
          <div className="text-[#575860]">
            <Text className="text-base">
              Please confirm the login request is from you to protect your
              Spaceship account against unauthorized access.
            </Text>
            <Text className="mt-6 text-base">
              Simply copy and paste the temporary authentication code into the
              verification form on the Spaceship website.
            </Text>
            <Text className="mt-8 mb-4 text-2xl text-brand font-semibold tracking-wider">
              721c5e
            </Text>
            <Text className="text-sm">
              The code will expire thirty minutes after the request was made.
            </Text>
          </div>
        </Container>
      </Section>
    </Tailwind>
  );
}
