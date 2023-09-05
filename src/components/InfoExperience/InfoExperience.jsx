import PropTypes from "prop-types";

const InfoExperience = ({ content }) => {
  return (
    <div className="experience-container">
      <div className="contenedor-info-groups">
      <section className="info-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 55 55"
          fill="none"
        >
          <path
            d="M44.709 20.0008C44.709 31.4048 27.6031 44.7094 27.6031 44.7094C27.6031 44.7094 10.4971 31.4048 10.4971 20.0008C10.4971 10.6837 18.286 2.89478 27.6031 2.89478C36.9201 2.89478 44.709 10.6837 44.709 20.0008Z"
            stroke="white"
            strokeWidth="3.42857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.9832 27.0331C29.4955 27.0331 30.9458 26.4324 32.0152 25.3631C33.0845 24.2937 33.6852 22.8434 33.6852 21.3311C33.6852 19.8189 33.0845 18.3686 32.0152 17.2992C30.9458 16.2299 29.4955 15.6292 27.9832 15.6292C26.471 15.6292 25.0207 16.2299 23.9513 17.2992C22.882 18.3686 22.2812 19.8189 22.2812 21.3311C22.2812 22.8434 22.882 24.2937 23.9513 25.3631C25.0207 26.4324 26.471 27.0331 27.9832 27.0331Z"
            stroke="white"
            strokeWidth="3.42857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.1012 39.0074H46.6098L52.3118 52.3121H2.89453L8.59653 39.0074H12.1052"
            stroke="white"
            strokeWidth="3.42857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="info-group__text">
          <p>{content[0]}</p>
          <strong>{content[1]}</strong>
        </div>
      </section>
      <section className="info-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 55 55"
          fill="none"
        >
          <g clipPath="url(#clip0_95_2624)">
            <path
              d="M26.5 0C11.8629 0 0 11.8629 0 26.5C0 41.1371 11.8629 53 26.5 53C41.1371 53 53 41.1371 53 26.5C53 11.8629 41.1371 0 26.5 0ZM26.5 48.5799C14.3059 48.5799 4.42012 38.6941 4.42012 26.5C4.42012 14.3059 14.3059 4.42012 26.5 4.42012C38.6941 4.42012 48.5799 14.3059 48.5799 26.5C48.5799 38.6941 38.6941 48.5799 26.5 48.5799ZM28.7049 22.0799V8.82988H24.2848V33.125L37.5348 19.875L34.2223 16.5625L28.7049 22.0799Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_95_2624">
              <rect width="55" height="55" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="info-group__text">
          <p>{content[2]}</p>
          <strong>{content[3]}</strong>
        </div>
      </section>
      <section className="info-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 55 55"
          fill="none"
        >
          <path
            d="M27.4049 50.4684C33.5216 50.4684 39.3878 48.0385 43.713 43.7134C48.0382 39.3882 50.468 33.522 50.468 27.4053C50.468 21.2886 48.0382 15.4224 43.713 11.0972C39.3878 6.77202 33.5216 4.34216 27.4049 4.34216C21.2882 4.34216 15.422 6.77202 11.0968 11.0972C6.77165 15.4224 4.3418 21.2886 4.3418 27.4053C4.3418 33.522 6.77165 39.3882 11.0968 43.7134C15.422 48.0385 21.2882 50.4684 27.4049 50.4684Z"
            stroke="white"
            strokeWidth="3.42857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.3418 27.4053H50.468"
            stroke="white"
            strokeWidth="3.42857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.275 27.4053C35.8393 35.8392 32.7328 43.9162 27.4046 50.4684C22.0764 43.9162 18.9699 35.8392 18.5342 27.4053C18.9699 18.9713 22.0764 10.8944 27.4046 4.34216C32.7328 10.8944 35.8393 18.9713 36.275 27.4053Z"
            stroke="white"
            strokeWidth="3.42857"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="info-group__text">
          <p>{content[4]}</p>
          <strong>{content[5]}</strong>
        </div>
      </section>
      <section className="info-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 55 55"
          fill="none"
        >
          <path
            d="M6.84615 7.76917C5.82609 7.76917 4.84781 8.17438 4.12651 8.89568C3.40522 9.61697 3 10.5953 3 11.6153V48.1538C3 49.1738 3.40522 50.1521 4.12651 50.8734C4.84781 51.5947 5.82609 51.9999 6.84615 51.9999H49.1538C50.1739 51.9999 51.1522 51.5947 51.8735 50.8734C52.5948 50.1521 53 49.1738 53 48.1538V11.6153C53 10.5953 52.5948 9.61697 51.8735 8.89568C51.1522 8.17438 50.1739 7.76917 49.1538 7.76917H41.4615"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 21.2308H53"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5391 2V13.5385"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.4619 2V13.5385"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5391 7.76917H33.7698"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="info-group__text">
          <p>{content[6]}</p>
          <strong>{content[7]}</strong>
        </div>
      </section>
      </div>
    </div>
  );
};
InfoExperience.propTypes = {
  content: PropTypes.node.isRequired,
};

export default InfoExperience;
