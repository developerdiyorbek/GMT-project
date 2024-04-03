import {
  AboutCompany,
  Brends,
  Cabinet,
  Category,
  Hero,
  News,
  Options,
  Partners,
  SendQuestion,
  Subscribe,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Cabinet />
      <Options />
      <Partners />
      <Brends />
      <AboutCompany />
      <News />
      <SendQuestion />
      <Subscribe />
    </div>
  );
};

export default Home;
