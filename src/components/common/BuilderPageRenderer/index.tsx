"use client";

import { BuilderComponent, useIsPreviewing, Builder } from "@builder.io/react";
import { notFound } from "next/navigation";
import '@/builder-registry';
import { ReactNode } from 'react';

/**
 * @file Common Client Page Component
 * @description Reusable client-side component for rendering Builder content with custom components before/after
 * or using a completely custom component instead of BuilderComponent
 */
const BuilderPageRenderer = ({
  locale,
  content,
  beforeContent,
  afterContent,
  customClientComponent,
  model = "page",
  options = { enrich: true },
}: {
  locale: string;
  content: any;
  beforeContent?: ReactNode;
  afterContent?: ReactNode;
  customClientComponent?: ReactNode;
  model?: string;
  options?: Record<string, any>;
}) => {
  const isPreviewing = useIsPreviewing(); // Check if in preview mode
  const isEditing = Builder.isEditing; // Check if in editing mode

  // If content exists or in preview/editing mode, render the content
  if (content || isPreviewing || isEditing) {
    return (
      <>
        {beforeContent}
        {customClientComponent ? (
          customClientComponent
        ) : (
          <BuilderComponent
            content={content}
            model={model}
            locale={locale}
            options={options}
          />
        )}
        {afterContent}
      </>
    );
  }

  // If no content found, return 404
  return notFound();
};

export default BuilderPageRenderer;