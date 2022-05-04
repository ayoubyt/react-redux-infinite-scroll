import React from "react";

import * as Styled from "./styled-components";
import { formatIso } from "../../utils/date";

interface UserProfileCardProps {
  user: any;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <Styled.Container>
      <Styled.ImgSection>
        <img src={user.picture} alt="user" />
      </Styled.ImgSection>
      <Styled.UserInfoSection>
        <span>
          <b>{`${user.title}. ${user.firstName} ${user.lastName}`}</b>
        </span>
        <span>
          <b>Date of birth: </b> {formatIso(user.dateOfBirth)}
        </span>
        <span>
          <b>Register Date: </b> {formatIso(user.registerDate)}
        </span>
        <br />
        <br />
        <span>
          <b>Email: </b> {user.email}
        </span>
        <span>
          <b>Pone: </b> {user.phone}
        </span>
      </Styled.UserInfoSection>
      <Styled.LocationInfoSection>
        <span>
          <b>Address</b>
        </span>
        <span>
          <b>State: </b> {user.location.state}
        </span>
        <span>
          <b>Street: </b> {user.location.street}
        </span>
        <span>
          <b>City: </b> {user.location.city}
        </span>
        <span>
          <b>Country: </b> {user.location.country}
        </span>
        <span>
          <b>Timezone: </b> {user.location.timezone}
        </span>
      </Styled.LocationInfoSection>
    </Styled.Container>
  );
};

export default UserProfileCard;
