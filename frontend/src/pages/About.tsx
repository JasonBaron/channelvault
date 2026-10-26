const About = () => {
  return (
    <>
      <title>ChannelVault | About</title>
      <div className="boxed-content">
        <div className="title-bar">
          <h1>About ChannelVault</h1>
        </div>
        <div className="about-section">
          <h2>A self-hosted media harvester and library</h2>
          <p>
            An independent fork maintained by Jason Baron, focused on usability, clearer
            configuration, and Plex workflows. YouTube is currently the supported source. Additional
            media sources are a future direction.
          </p>
        </div>
        <div className="about-section">
          <h2>Built on Tube Archivist</h2>
          <p>
            ChannelVault builds on the work of the{' '}
            <a
              href="https://github.com/tubearchivist/tubearchivist"
              target="_blank"
              rel="noreferrer"
            >
              Tube Archivist contributors
            </a>
            . Original copyright notices and the GPLv3 license are retained.
          </p>
          <p>
            This fork is independently maintained and is not affiliated with or supported by the
            upstream project. Please do not report ChannelVault issues to Tube Archivist.
          </p>
          <p>
            The{' '}
            <a href="https://docs.tubearchivist.com" target="_blank" rel="noreferrer">
              upstream user guide
            </a>{' '}
            describes inherited functionality; ChannelVault changes may differ.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
