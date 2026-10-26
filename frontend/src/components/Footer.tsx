import { Link } from 'react-router-dom';
import Routes from '../configuration/routes/RouteList';
import { useAuthStore } from '../stores/AuthDataStore';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { auth } = useAuthStore();
  const version = auth?.version;
  const taUpdate = auth?.ta_update;

  return (
    <div className="footer">
      <div className="boxed-content">
        <span>© 2021 - {currentYear} </span>
        <span>ChannelVault · Based on Tube Archivist </span>
        <span>{version} </span>
        {taUpdate?.version && (
          <>
            <span className="danger-zone">
              Upstream Tube Archivist {taUpdate.version} available
              {taUpdate.is_breaking && <span className="danger-zone">Breaking Changes!</span>}
            </span>{' '}
            <span>
              <a
                href={`https://github.com/tubearchivist/tubearchivist/releases/tag/${taUpdate.version}`}
                target="_blank"
              >
                Upstream Release
              </a>{' '}
              |{' '}
            </span>
          </>
        )}
        <span>
          <Link to={Routes.About}>About</Link> |{' '}
          <a href="https://github.com/tubearchivist/tubearchivist" target="_blank">
            Upstream GitHub
          </a>{' '}
          |{' '}
          <a href="https://hub.docker.com/r/bbilly1/tubearchivist" target="_blank">
            Upstream Docker Hub
          </a>{' '}
          |{' '}
          <a href="https://www.tubearchivist.com/discord" target="_blank">
            Upstream Discord
          </a>{' '}
          | <a href="https://www.reddit.com/r/TubeArchivist/">Upstream Reddit</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
