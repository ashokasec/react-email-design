import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Tailwind,
} from "@react-email/components";

export default function EmailLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-white font-sans text-zinc-800">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 bg-white p-8 max-w-xl">
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
