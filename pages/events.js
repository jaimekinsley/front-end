import classNames from 'classnames';
import TrackVisibility from 'react-on-screen';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import LinkButton from 'components/_common_/LinkButton/LinkButton';
import Heading from 'components/_common_/Heading/Heading';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import Carousel from 'nuka-carousel';
import BuildingIcon from 'static/images/icons/FontAwesome/building_icon.svg';
import UserIcon from 'static/images/icons/FontAwesome/user-solid.svg';
import DiversityIcon from 'static/images/icons/FontAwesome/users-solid.svg';
import { s3 } from 'common/constants/urls';
import styles from './styles/events.css';

const VISIBILITY_OFFSET = 400;

const sponsorItems = [
  {
    icon: <BuildingIcon />,
    label: 'Education Materials',
  },
  {
    icon: <BuildingIcon />,
    label: 'Workspaces for Meetups',
  },
  {
    icon: <BuildingIcon />,
    label: 'Food for Longer Meetups',
  },
];

const hostEventItems = [
  {
    icon: <UserIcon />,
    label: 'Raise Awareness',
  },
  {
    icon: <DiversityIcon />,
    label: 'Add Diversity to Conventions',
  },
  {
    icon: <UserIcon />,
    label: 'Get Our Voices out There',
  },
];

const carouselItems = [
  {
    label: 'OpCode North Carolina: Durham',
    date: '10/06/2018',
  },
  {
    label: 'Hacktober',
    date: '10/01/2018',
  },
  {
    label: 'OpCode Boston',
  },
  {
    label: 'OpCode North Carolina: Durham',
    date: '10/06/2018',
  },
  {
    label: 'Hacktober',
    date: '10/01/2018',
  },
  {
    label: 'OpCode Boston',
  },
  {
    label: 'OpCode North Carolina: Durham',
    date: '10/06/2018',
  },
];

export default () => {
  const pageTitle = 'Events';

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner
        title={pageTitle}
        backgroundImageSource={`${s3}redesign/heroBanners/events.jpg`}
        className={styles.heroBannerMobilePositioning}
      >
        <>
          <p>
            Need more Operation Code in your life? From conventions to tech meetups, we are where
            you are! There are 4,000+ members across more than 20 states!
          </p>

          <LinkButton href="/locations">See Locations</LinkButton>
        </>
      </HeroBanner>

      <Content
        title="Upcoming Events:"
        theme="gray"
        columns={[
          <p className={styles.eventsLeadText}>
            Be sure to check back often or join your local meetup for a more up to date list of
            meetups or engagements
          </p>,
        ]}
      />

      <div className={styles.eventsCarousel}>
        <Carousel
          cellSpacing={35}
          slideWidth="325px"
          renderCenterLeftControls={({ previousSlide }) => (
            <button type="button" className={styles.carouselControlLeft} onClick={previousSlide}>
              &lt;
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button type="button" className={styles.carouselControlRight} onClick={nextSlide}>
              &gt;
            </button>
          )}
          renderBottomCenterControls={null}
          frameOverflow="hidden"
        >
          {carouselItems.map(item => (
            <div className={styles.eventsCarouselItem}>
              {item.label}
              {item.date && <div className={styles.eventsCarouselItemDate}>{item.date}</div>}
            </div>
          ))}
        </Carousel>
      </div>

      {/* Three cards section here (use flat cards component) */}

      <Content
        title="Want to Become a Sponsor?"
        theme="gray"
        columns={[
          <p>Sponsoring a meetup ensures we have access to:</p>,
          <div className={styles.badgeGroupings}>
            {sponsorItems.map(item => (
              <Badge
                key={item.label}
                icon={item.icon}
                label={item.label}
                className={styles.badge}
              />
            ))}
          </div>,
        ]}
      />

      <Content
        columns={[
          <TrackVisibility offset={VISIBILITY_OFFSET}>
            {({ isVisible }) => (
              <div className={classNames(styles.image, { [styles.showImage]: isVisible })}>
                <img src={`${s3}redesign/images/woman.jpg`} alt="Woman smiling at computer" />
              </div>
            )}
          </TrackVisibility>,
          <div>
            <Heading hasHeadingLines={false} theme="white">
              Sponsor a Meetup
            </Heading>

            <p>
              From classes, to hackathons, to contributions to our open source projects. Our meetups
              are just one way we engage with our veterans and our community. Wanna help out? Find
              out how you can sponsor us, from food, to educational materials, and a space for us to
              meet.
            </p>

            <div className={styles.centeredText}>
              <LinkButton href="/mentor">Become A Mentor</LinkButton>
            </div>
          </div>,
        ]}
      />

      <Content
        title="Ways You Can Support Operation Code"
        theme="gray"
        columns={[
          <p>Sponsoring a meetup ensures we have access to:</p>,
          <div className={styles.badgeGroupings}>
            {hostEventItems.map(item => (
              <Badge
                key={item.label}
                icon={item.icon}
                label={item.label}
                className={styles.badge}
              />
            ))}
          </div>,
        ]}
      />

      <Content
        columns={[
          <div>
            <Heading hasHeadingLines={false} theme="white">
              Host Us at an Event
            </Heading>

            <p>
              Not only are we working to get veterans into tech, we are also working to raise
              awareness of vets in the job market. From technical knowledge to diversity,
              we&rsquo;re not only a community of veterans, we also house a group of content experts
              in our chosen field.
            </p>

            <div className={styles.centeredText}>
              <LinkButton href="/mentor">Become A Mentor</LinkButton>
            </div>
          </div>,
          <TrackVisibility offset={VISIBILITY_OFFSET}>
            {({ isVisible }) => (
              <div className={classNames(styles.image, { [styles.showImage]: isVisible })}>
                <img src={`${s3}redesign/images/woman.jpg`} alt="Woman smiling at computer" />
              </div>
            )}
          </TrackVisibility>,
        ]}
      />

      <JoinSection />
    </>
  );
};
