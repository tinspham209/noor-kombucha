import React, { useEffect } from "react";
import BlogContainer from "../../containers/Blog/Blog";
const Blog = () => {
  useEffect(() => {
    document.title = "Blog - NOOR. Kombucha - Trà Lên Men Chất Lượng Cao";
  }, []);

  return (
    <div>
      <BlogContainer />
    </div>
  );
};

export default Blog;
