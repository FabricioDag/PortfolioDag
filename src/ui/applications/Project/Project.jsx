import './Project.css';
// import figma from './F.png';

const Project = () => {

  const tags = [
    { label: "React JS", color: "#38B2AC" },
    { label: "CSS", color: "#2B6CB0" },
    { label: "HTML", color: "#DD9400" },
    { label: "Git", color: "#C53030" },
    // { label: "Node JS", color: "#22543D" },
    // { label: "Express", color: "Black" },
    // { label: "MongoDB", color: "#3EB74A" },
  ];

  return (
    <div className="Project application">
      <h1>Business Days Countdown</h1>

      <div className="projectImage"></div>

      <div className="tag-container">
      <h4>TAGS</h4>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag" style={{ backgroundColor: tag.color }}>
            {tag.label}
          </span>
        ))}
      </div>
    </div>

      <p>
        O Business Days Countdown é um aplicativo desenvolvido para calcular o número exato de dias úteis restantes até uma data específica,
         ignorando fins de semana e feriados nacionais. 
         Ideal para pessoas que gostam de acompanhar prazos, gerenciar projetos ou planejar entregas com precisão.
      </p>

      <div className="linksWrapper">
        {/* corrigir ordem button - a */}
        <button className="websiteButton"> <a href="https://weekday-countdown-5omi77gfq.vercel.app/" target="_blank">Website</a></button>
        <a href='https://github.com/FabricioDag/WeekdayCountdown' target="_blank" className="githubButton">
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="icon"
                  >
                    <path
                      fill="currentcolor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
        </a>
        <button className="figmaButton">
        <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 7C0 3.41015 2.91015 0.5 6.5 0.5H13V13.5H6.5C2.91015 13.5 0 10.5899 0 7Z" fill="#F44E1E"/>
<path d="M0 20C0 16.4101 2.91015 13.5 6.5 13.5H13V26.5H6.5C2.91015 26.5 0 23.5899 0 20Z" fill="#A35AFF"/>
<path d="M0 33C0 29.4101 2.91015 26.5 6.5 26.5H13V33C13 36.5899 10.0899 39.5 6.5 39.5C2.91015 39.5 0 36.5899 0 33Z" fill="#0ACE82"/>
<path d="M13 0.5H19.5C23.0899 0.5 26 3.41015 26 7C26 10.5899 23.0899 13.5 19.5 13.5H13V0.5Z" fill="#FF7261"/>
<rect x="13" y="13.5" width="13" height="13" rx="6.5" fill="#19BCFF"/>
        </svg>
        </button>
      </div>
    </div>
  );
};

export { Project };
