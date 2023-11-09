import SectionWelcome from '../modules/HomePage/SectionWelcome';
import SectionFeature from '../modules/HomePage/SectionFeature';
import SectionNewPost from '../modules/HomePage/SectionNewPost';
import SectionDisease from '../modules/HomePage/SectionDisease';
import SectionCare from '../modules/HomePage/SectionCare';

export const metadata = {
  title: 'Trang Chủ | Ông Bà Tôi',
};

export default async function HomePage() {
  return (
    <>
      <section>
        <SectionWelcome />
      </section>
      <section>
        <SectionFeature />
      </section>
      <section>
        <SectionDisease />
      </section>
      <section>
        <SectionCare />
      </section>
      <section>
        <SectionNewPost />
      </section>
    </>
  );
}
