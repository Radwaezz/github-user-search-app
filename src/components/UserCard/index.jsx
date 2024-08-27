


import PropTypes from 'prop-types';
import locationIcon from '../../../public/images/icon-location.svg';
import linkIcon from '../../../public/images/icon-website.svg';
import twitterIcon from '../../../public/images/icon-twitter.svg';
import companyIcon from '../../../public/images/icon-company.svg';
import formatDate from '../../helper/date';

import './index.css';

function UserCard({
  user: {
    avatar_url,
    name,
    html_url,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  },
}) {
  function setDeadClass(data) {
    return !data ? 'unavailable' : null;
  }

  return (
    <div className="user-card">
      <div className="primary-info">
        <div className="avatar">
          <img src={avatar_url} alt="user profile photo" />
        </div>
        <div className="names-and-date">
          <div className="name">
            <h1>{name}</h1>
            <p><a href={html_url} target="_blank" rel="noopener noreferrer">@{name}</a></p>
          </div>
          <p className="date">Joined {formatDate(created_at)}</p>
        </div>
      </div>
      <div className="detailed-info">
        <p className="bio">{bio || 'This profile has no bio'}</p>
        <div className="highlight">
          <div className="repos">
            <span className="label">Repos</span>
            <p>{public_repos}</p>
          </div>
          <div className="followers">
            <span className="label">Followers</span>
            <p>{followers}</p>
          </div>
          <div className="following">
            <span className="label">Following</span>
            <p>{following}</p>
          </div>
        </div>
        <div className="detailed-links">
          <ul>
            <li className={setDeadClass(location)}>
              <img src={locationIcon} alt="Location Icon" /> {location || 'Not Available'}
            </li>
            <li className={setDeadClass(blog)}>
              <img src={linkIcon} alt="Link Icon" /> {blog ? <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a> : 'Not Available'}
            </li>
          </ul>
          <ul>
            <li className={setDeadClass(twitter_username)}>
              <img src={twitterIcon} alt="Twitter Icon" /> {twitter_username || 'Not Available'}
            </li>
            <li className={setDeadClass(company)}>
              <img src={companyIcon} alt="Company Icon" /> {company || 'Not Available'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    bio: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
    company: PropTypes.string,
  }).isRequired,
};

export default UserCard;


