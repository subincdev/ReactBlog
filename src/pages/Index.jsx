import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Main from "../components/main/Main";

export default function Index() {
  const [applicationData, setApplicationData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(applicationData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setApplicationData(data);
        setIsLoaded(true);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (isLoaded) {
    return (
      <>
        <Header />
        <Banner data={applicationData.blog} />
        <Main user={applicationData.users} posts={applicationData.posts} />
      </>
    );
  }
}
