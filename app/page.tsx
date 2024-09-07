import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[960px] max-w-[90%] mt-[60px] mx-auto">
      <section id="About">
        <h2 className="text-5xl mt-8 mb-8">Hello, I&apos;m Jason Snider</h2>
        <p>
          <Image
            className="rounded-full float-left pr-8"
            alt="Jason Snider's Avatar"
            src="/img/b449cfaa4cab48910ad8c0d9fdb812d0-128.jpg"
            width={128}
            height={128}
          />
          Jason Snider is a full stack web and hybrid mobile application
          developer, indie game dev, dev bootcamp instructor, systems architect,
          Linux aficionado, open source advocate, impromptu DBA, security and
          blockchain enthusiast with a sincere passion for building and
          advancing knowledge while resolving complex problems and business
          challenges through technical innovation.
        </p>
      </section>
      <section id="Projects">
        <h2 className="text-5xl mt-8 mb-8">Things and Stuff</h2>
        <p>A high level overview of the things I build and the stuff I do.</p>
        <h3 className="text-4xl mt-8 mb-8">Back Office</h3>
        <p>
          Extensive experience in designing and developing event, geo, and data
          driven CRM, CMS, ERP, BI, IO, and other miscellaneous back office
          systems.
        </p>
        <h3 className="text-4xl mt-8 mb-8">Frontend Development</h3>
        <p>
          Extensive experience with a number of front end technologies including
          but not limited to HTML5, CSS3, JavaScript, jQuery, Angular, Ionic,
          Rxjs, Gulp, webpack Less, Sass, Material Design, Bootstrap, Vanilla
          JS, Ajax, API consumption.
        </p>
        <h3 className="text-4xl mt-8 mb-8">Backend Development</h3>
        <p>
          Extensive experience with a number of front end technologies including
          but not limited to Linux, Apache, MySQL, MongoDB, Postgre, PHP,
          Python, BASH, NodeJS, Express, CakePHP, API development.
        </p>
        <h3 className="text-4xl mt-8 mb-8">
          Mobile and Indie Game Development
        </h3>
        <p>
          Experience building building progressive web and hybrid mobile
          applications that are inclusive of indie gamesand general data
          management. Experience publishing to Google Play and Apple App store.
        </p>
        <h3 className="text-4xl mt-8 mb-8">Portal Development</h3>
        <p>
          Experience in designing and developing portal driven monolithic
          systems. These systems provide a primary personal branding and career
          coaching platform that provides portals for students, instructors,
          administration, and white labeling for third party organizations.
        </p>
        <h3 className="text-4xl mt-8 mb-8">Social Media</h3>
        <p>
          Experience in designing and developing social media platforms as well
          as integrating social features into existing platforms for which
          social aspects are not the primary concern of the system.
        </p>
        <h3 className="text-4xl mt-8 mb-8">Systems Architect</h3>
        <p>
          Experience designing and implementing the overall technical
          architecture for a number of cloud based systems.
        </p>
        <h3 className="text-4xl mt-8 mb-8">Open Source</h3>
        <p>Has contributed to and released a number of open source projects.</p>
        <h3 className="text-4xl mt-8 mb-8">Security</h3>
        <p>
          Security enthusiast and hobbyist. In additional to concentrating my
          graduate work on InfoSec, I have listened to nearly every episode of
          Security Now and strive to design and build secure solutions.
        </p>
        <h3 className="text-4xl mt-8 mb-8">Instructor, Mentor and Leader</h3>
        <p>
          Experience designing and teaching development bootcamps, mentoring
          junior developers, and leading development teams and efforts.
        </p>
        <br />
        <br />
        <div className="text-center">
          <a className="btn" href="resume">
            Resume
          </a>
        </div>
      </section>
      <section id="SocialMedia">
        <a href="https://www.linkedin.com/in/jdsnider">
          <i className="fab fa-linkedin">
            <span className="sr-only">LinkedIn</span>
          </i>
        </a>
        <a href="https://github.com/jasonsnider">
          <i className="fab fa-github">
            <span className="sr-only">GitHub</span>
          </i>
        </a>
        <a href="https://twitter.com/jason_snider">
          <i className="fab fa-twitter">
            <span className="sr-only">Twitter</span>
          </i>
        </a>
      </section>
    </main>
  );
}
