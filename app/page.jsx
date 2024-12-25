import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Generated Music Samples</span>
    </h1>
    <p className='desc text-center'>
    GrooveLab is an innovative platform where you can discover, create, and share AI-powered prompts to generate unique music samples. Explore the power of creativity with cutting-edge technology!
    </p>

    <Feed />
  </section>
);

export default Home;
