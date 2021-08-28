import PropTypes from "prop-types";
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from "./Profile.styled";

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
