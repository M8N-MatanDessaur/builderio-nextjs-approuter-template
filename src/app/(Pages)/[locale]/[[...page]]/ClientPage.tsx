"use client";

import { BuilderComponent, useIsPreviewing, Builder } from "@builder.io/react";
import { notFound } from "next/navigation";
import '@/builder-registry';

/**
 * @file Client Page Component
 * @description Client-side component for rendering dynamic pages
 */
const ClientPage = ({
  locale,
  content,
}: {
  locale: string;
  content: any;
}) => {
  const isPreviewing = useIsPreviewing(); // Check if in preview mode
  const isEditing = Builder.isEditing; // Check if in editing mode
  
  // If content exists or in preview/editing mode, render the page
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

  // If no content found, return 404
  return notFound();
};

export default ClientPage;
