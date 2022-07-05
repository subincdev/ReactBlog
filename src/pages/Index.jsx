import Banner from "../components/banner/Banner";
import Main from "../components/main/Main";

export default function Index({ isLoaded, applicationData }) {
  if (isLoaded) {
    return (
      <>
        <Banner data={applicationData.blog} />
        <Main user={applicationData.users} posts={applicationData.posts} />
      </>
    );
  } else {
    return <div>로딩중입니다...</div>;
  }
}
