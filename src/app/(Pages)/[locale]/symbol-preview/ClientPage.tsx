"use client";

import React from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import '@/builder-registry';

const ClientPage = ({
  locale,
  content,
  isValidLocale
}: {
  locale: string;
  content: any;
  isValidLocale: boolean;
}) => {
  const isPreviewing = useIsPreviewing();
  
  // Handle invalid locale
  if (!isValidLocale) {
    return null;
  }

  if (content || isPreviewing) {
    return (
      <BuilderComponent content={content} model="symbol" locale={locale} />
    );
  }

  // Handle missing content or invalid locale
  return null;
};

export default ClientPage;
