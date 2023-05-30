import React from 'react'
import ArticlesMobile from "@/components/ArticlesMobile/articlesMobile";
import Articles from "@/components/Articles/articles";
import { useMediaQuery } from "react-responsive";
export default function SelectArticle() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
    <>
    {isMobile ? <ArticlesMobile /> : <Articles />}
    </>
  )
}
