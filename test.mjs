// index.ts
import UseBlogger  from "use-blogger";

async function myJsonBlogger() {
    const blogUrl = "http://papers.raannakasturi.eu.org/"
  
    const wb = new UseBlogger({ blogUrl });
    console.log(wb.categories());
  }
  
  myJsonBlogger();
  