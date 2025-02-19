import React from "react";
import CommonMarkdown from "./_components/common-markdown";
import Breadcrumb from "./_components/breadcrumb";
import { APP } from "@/lib/config";

const content = `
# Introduction

**${APP.name}** is collection of handcrafted, ready-to-use email templates built with **react.email**.

## Why we built this?

Creating beautiful, professional emails using React.email can be challenging, especially when you're starting from scratch. While react.email provides a solid foundation, there are limited ready-made templates available. This often leaves developers stuck when designing common emails like authentication confirmations, marketing campaigns, or transactional updates.

That's where our collection comes in. We are curating a library of high-quality, hand-crafted email templates categorized by purpose and inspired by industry leaders.

## Who is this for?

Whether you’re a developer, startup founder, or marketer, this collection will help you quickly design professional emails without struggling with layout or styling. It’s ideal for:

- Developers building authentication flows or transactional emails.
- Marketers looking for effective email campaigns.
- SaaS businesses needing polished communication templates.

## What Makes Our Templates Special?
- **Manually Crafted**: Every template is hand-written, ensuring clean and efficient code.
- **Fully Responsive**: Works seamlessly across all email clients and devices.
- **Production-Ready**: Designed for real-world use, saving you time and effort.
- **Customizable & Extensible**: Easily adapt templates to match your brand’s identity.
`;

const page = () => {
  return (
    <>
      <Breadcrumb items={["Docs", "Introduction"]} />
      <CommonMarkdown>{content}</CommonMarkdown>
    </>
  );
};

export default page;
