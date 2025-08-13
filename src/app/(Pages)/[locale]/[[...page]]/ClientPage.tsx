"use client";

import { BuilderComponent, useIsPreviewing, Builder } from "@builder.io/react";
import { notFound } from "next/navigation";
import '@/builder-registry';

const ClientPage = ({
  locale,
  content,
  isValidLocale, // We keep this prop but it's handled server-side now
}: {
  locale: string;
  content: any;
  isValidLocale: boolean;
}) => {
  const isPreviewing = useIsPreviewing();
  const isEditing = Builder.isEditing;
  
  // Using locale directly from props
  // No client-side state management needed

  // Handle missing content or invalid locale
  if (content || isPreviewing || isEditing) {
    return (
      <BuilderComponent
        content={content}
        model="page"
        locale={locale}
        options={{
          enrich: true,
        }}
      />
    );
  }

  // Handle page not found
  return notFound();
};

export default ClientPage;
