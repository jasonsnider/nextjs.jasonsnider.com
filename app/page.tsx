import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="About">
        <h2 className="text-5xl mt-8 mb-8">Hello, I&apos;m Jason Snider</h2>
        <p>
          <Image
            className="border rounded-full border-0 float-left mr-6"
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
      {/* https://tw-elements.com/docs/standard/components/social-buttons/ */}
      <section id="SocialMedia" className="flex justify-around w-full mt-24">
        <a
          href="https://www.linkedin.com/in/jdsnider"
          className="flex items-center"
        >
          <span className="[&>svg]:h-24 [&>svg]:w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              {`<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->`}
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </span>
        </a>
        <a href="https://github.com/jasonsnider" className="flex items-center">
          <span className="[&>svg]:h-24 [&>svg]:w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              {`<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->`}
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <span className="sr-only">GitHub</span>
          </span>
        </a>
        <a href="https://x.com/jason_snider" className="flex items-center">
          <span className="[&>svg]:h-24 [&>svg]:w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              {`<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->`}
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
            <span className="sr-only">X</span>
          </span>
        </a>
      </section>
    </>
  );
}
