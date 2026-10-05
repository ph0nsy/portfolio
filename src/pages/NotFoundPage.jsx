import { Link } from 'react-router';
import PageLayout from '../layout/PageLayout';
import "../styles/tokens.css";
import "../styles/notfound.css";

function NotFoundPage() {
  return (
    <PageLayout title="Page not found" className='not-found__page'>
      <div className='not-found__body'>
          <img src="https://tenor.com/en-GB/view/ehe-anime-gif-anime-girl-teehee-gif-27178660.gif"></img>  
          <h1>
            PAGE NOT FOUND 
          </h1>
          <h2>
            The link may be old or mistyped. 
          </h2>
      </div>
    </PageLayout>
  );
}

export default NotFoundPage;